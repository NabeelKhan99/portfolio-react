
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const TypingAnimation = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 1500
}: TypingAnimationProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        // Deleting phase
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        // Typing phase
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }

      // Handle the transitions between typing/deleting phases
      if (!isDeleting && currentText === currentWord) {
        // Finished typing a word - wait then start deleting
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          setIsDeleting(true);
        }, delayBetweenWords);
      } else if (isDeleting && currentText === "") {
        // Finished deleting a word - move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    words,
    currentWordIndex,
    currentText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords
  ]);

  return (
    <span className="inline-flex items-center">
      <motion.span
        className="text-gradient"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
      >
        {currentText}
      </motion.span>
      <motion.span
        className="ml-1 h-7 w-1.5 bg-primary"
        animate={{ opacity: isBlinking ? [1, 0, 1] : 1 }}
        transition={{ duration: 0.8, repeat: isBlinking ? Infinity : 0 }}
      />
    </span>
  );
};

export default TypingAnimation;