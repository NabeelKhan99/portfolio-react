
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="group glass-card overflow-hidden rounded-xl flex flex-col h-full transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
    >
      <div className="overflow-hidden h-48 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-medium text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        
        <p className="text-muted-foreground text-sm mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                <Github size={16} />
                <span>Code</span>
              </a>
            </Button>
          )}
          
          {project.liveUrl && (
            <Button size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}