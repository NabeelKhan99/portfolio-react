import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// 🧠 Replace these with your actual EmailJS credentials
const SERVICE_ID = "service_ii97lft";
const TEMPLATE_ID = "template_y9xfvj6";
const PUBLIC_KEY = "mhLjDSmJbgvfwexfD";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  "bot-field": z.string().optional(), // Honeypot
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      "bot-field": "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // 🪤 Honeypot check
    console.log("trying to submit");
    console.log("🚀 SUBMIT TRIGGERED");
    toast("Form is being submitted..."); 
    if (data["bot-field"]) {
      console.warn("Spam bot detected.");
      return;
    }
  
    // 🕒 Cooldown check
    const now = Date.now();
    if (lastSubmitTime && now - lastSubmitTime < 15000) {
      toast.warning("Please wait a few seconds before sending another message.");
      return;
    }
    setLastSubmitTime(now);
  
    setIsSubmitting(true);
  
    const currentTime = new Date().toLocaleString(); // Add a timestamp
  
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: data.name,
        email: data.email,
        message: data.message,
        time: currentTime, // Include time in the data
      }, PUBLIC_KEY);
  
      toast.success("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* 🪤 Hidden honeypot */}
        <input
          type="text"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
          {...form.register("bot-field")}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Your name"
                  {...field}
                  className="glass-card border-border/40 focus:border-primary"
                />
              </FormControl>
              <FormMessage children={undefined} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="your.email@example.com"
                  type="email"
                  {...field}
                  className="glass-card border-border/40 focus:border-primary"
                />
              </FormControl>
              <FormMessage children={undefined} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  {...field}
                  className="min-h-[150px] glass-card border-border/40 focus:border-primary"
                />
              </FormControl>
              <FormMessage children={undefined} />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" /> Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
