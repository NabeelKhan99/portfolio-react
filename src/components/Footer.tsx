
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full py-8 border-t border-border/40 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <Link to="/" className="text-xl font-display font-bold text-gradient">
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              &copy; {year} - All rights reserved
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
           
            <a 
              href="mailto:example@example.com" 
              className="hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>Designed with precision and built with modern technologies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;