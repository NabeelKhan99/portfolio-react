import React, { useState, useEffect, useRef } from "react";

interface Message {
  role: "user" | "chatbot";
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState<string>("light");

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll whenever messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          page: window.location.pathname,
        }),
      });

      const data = await res.json();

      // Format bot response (split on newlines)
      const formattedText = data.reply
        ? data.reply
            .split("\n")
            .map((line: string) => line.trim())
            .filter((line: string) => line.length > 0)
            .join("\n\n")
        : "🤖 Sorry, I didn’t get that.";

      const botMessage: Message = {
        role: "chatbot",
        text: formattedText,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: "chatbot",
          text: "⚠️ We are trying to establish a connection to the server.",
        },
      ]);
    }

    setInput("");
  };

  const themeStyles: Record<string, string> = {
    light: "bg-white text-black border-gray-200",
    dark: "bg-[#1e1e1e] text-white border-gray-700",
    blue: "bg-[#1E3A8A] text-white border-blue-900",
    green: "bg-[#166534] text-white border-green-900",
    purple: "bg-[#581C87] text-white border-purple-900",
  };

  const buttonStyles: Record<string, string> = {
    light: "bg-white text-black hover:bg-gray-100",
    dark: "bg-gray-900 text-white hover:bg-gray-800",
    blue: "bg-blue-600 text-white hover:bg-blue-700",
    green: "bg-green-600 text-white hover:bg-green-700",
    purple: "bg-purple-600 text-white hover:bg-purple-700",
  };

  const bubbleStyles: Record<
    string,
    { user: string; bot: string; header: string; input: string; button: string }
  > = {
    light: {
      user: "bg-blue-100 text-black",
      bot: "bg-gray-100 text-black",
      header: "bg-blue-600 text-white",
      input: "border-gray-300 text-black",
      button: "bg-blue-600 text-white hover:bg-blue-700",
    },
    dark: {
      user: "bg-blue-800 text-white",
      bot: "bg-gray-700 text-white",
      header: "bg-gray-900 text-white",
      input: "border-gray-600 text-white bg-gray-800",
      button: "bg-gray-900 text-white hover:bg-gray-700",
    },
    blue: {
      user: "bg-blue-400 text-white",
      bot: "bg-blue-200 text-black",
      header: "bg-blue-800 text-white",
      input: "border-blue-300 text-black",
      button: "bg-blue-800 text-white hover:bg-blue-900",
    },
    green: {
      user: "bg-green-400 text-white",
      bot: "bg-green-200 text-black",
      header: "bg-green-800 text-white",
      input: "border-green-300 text-black",
      button: "bg-green-800 text-white hover:bg-green-900",
    },
    purple: {
      user: "bg-purple-400 text-white",
      bot: "bg-purple-200 text-black",
      header: "bg-purple-800 text-white",
      input: "border-purple-300 text-black",
      button: "bg-purple-800 text-white hover:bg-purple-900",
    },
  };

  useEffect(() => {
    const updateTheme = () => {
      const saved = localStorage.getItem("theme");
      if (saved && saved !== "system") setTheme(saved);
      else setTheme(document.documentElement.className || "light");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed z-[1030] bottom-24 right-6 sm:bottom-20 sm:right-4">
      {isOpen ? (
        <div
          className={`w-80 max-w-[90vw] shadow-lg rounded-lg flex flex-col border transition-all duration-300 ${
            themeStyles[theme] || themeStyles.light
          }`}
          style={{ maxHeight: "70vh" }}
        >
          {/* Header */}
          <div
            className={`p-3 rounded-t-lg flex justify-between items-center ${
              bubbleStyles[theme]?.header || "bg-blue-600 text-white"
            }`}
          >
            <span>Smart FAQ</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white font-bold"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg text-sm whitespace-pre-line ${
                  msg.role === "user"
                    ? `${
                        bubbleStyles[theme]?.user || "bg-blue-100 text-black"
                      } self-end text-right`
                    : `${
                        bubbleStyles[theme]?.bot || "bg-gray-100 text-black"
                      } self-start`
                }`}
              >
                {msg.text}
              </div>
            ))}
            {/* Invisible marker for auto-scroll */}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 flex space-x-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className={`flex-1 border rounded px-2 py-1 text-sm ${
                bubbleStyles[theme]?.input || "border-gray-300 text-black"
              }`}
            />
            <button
              onClick={handleSend}
              className={`px-3 py-1 rounded text-sm ${
                bubbleStyles[theme]?.button ||
                "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={`rounded-full p-4 shadow-lg fixed bottom-20 right-6 z-[1001] transition-colors duration-300 ${
            buttonStyles[theme] || buttonStyles.light
          }`}
        >
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;
