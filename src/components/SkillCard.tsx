
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface SkillProps {
  title: string;
  description: string;
  icon: JSX.Element;
  color?: string;
}

export function SkillCard({ skill }: { skill: SkillProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 20 
      }}
      className="glass-card p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:border-primary/50 backdrop-saturate-[180%]" // Added backdrop-saturate for Apple-like glass effect
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
        skill.color || "bg-primary/10"
      )}>
        {skill.icon}
      </div>
      
      <h3 className="text-lg font-semibold mb-2 font-display">{skill.title}</h3>
      
      <p className="text-sm text-muted-foreground">
        {skill.description}
      </p>
    </motion.div>
  );
}