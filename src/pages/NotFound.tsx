
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <h1 className="text-9xl font-bold text-gradient mb-6">404</h1>
        
        <div className="glass-card p-8 rounded-2xl mb-8">
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          
          <p className="text-muted-foreground mb-6">
            The page you are looking for might have been removed, had its name 
            changed, or is temporarily unavailable.
          </p>
          
          <Button asChild size="lg">
            <Link to="/" className="inline-flex items-center gap-2">
              <Home size={18} /> Return to Homepage
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;