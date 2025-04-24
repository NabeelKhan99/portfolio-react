
import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "spring", // Changed from tween to spring for more iOS-like animations
  stiffness: 100,
  damping: 20,
  duration: 0.4,
};

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen pt-24 pb-16 overscroll-none" // Added overscroll-none to prevent bounce effect
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;