import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionTitleProps
 {
  subtitle?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  className
}: SectionTitleProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-2xl mb-12",
        alignClasses[align],
        className
      )}
    >
      {subtitle && (
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 bg-primary/10 text-primary">
          {subtitle}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      
      {description && (
        <p className="text-muted-foreground text-balance">
          {description}
        </p>
      )}
    </motion.div>
  );
}