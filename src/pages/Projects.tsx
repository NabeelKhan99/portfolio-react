
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProjectCard, ProjectProps } from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  
  const projects: ProjectProps[] = [
    {
      id: "1",
      title: "A multi-platform IT solutions ",
      description: "A multi-platform IT solutions hub with professional training, government consultancy, and data analytics integration.",
      image: "https://raw.githubusercontent.com/NabeelKhan99/Nabeelk99.github.io/refs/heads/cibed/images/service-inner.jpg",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://nabeelkhan99.github.io/Nabeelk99.github.io/",
      githubUrl: "https://github.com/NabeelKhan99/Nabeelk99.github.io/tree/cbed",
    },
    {
      id: "2",
      title: "🏘 Scalable Real Estate Rental App",
      description: "Developed a full-featured, enterprise-grade rental apartment application using Next.js, Node.js, and AWS. The app includes secure user authentication via AWS Cognito, with backend services running on API Gateway, RDS, S3, and EC2. CI/CD is handled through Amplify. The frontend, built with Redux Toolkit, Tailwind CSS, Shadcn, TypeScript, and Framer Motion, delivers a smooth and responsive user experience. React Hook Form and Zod ensure robust form handling and validation. This project demonstrates my ability to build production-ready, scalable cloud applications.",
      image: "/res1/stat1.jpg",
      tags: ["Next.js", "Node.js", "AWS", "Tailwind"],
      liveUrl: "https://work-in-progress-nab.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99/real-estate-prod",
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application with interactive maps and location-based services.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1065&auto=format&fit=crop",
      tags: ["JavaScript", "APIs", "Chart.js", "CSS"],
      liveUrl: "https://weatherdasher.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99/weather-dashboard-API/tree/master",
    },
    {
      id: "4",
      title: "Portfolio Website",
      description: "A personal portfolio website built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1170&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
      liveUrl: "https://nabeel-saeed.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99/portfolio-react",
    },
    {
      id: "5",
      title: "Blog Platform",
      description: "A content management system for publishing and managing blog posts.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop",
      tags: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
      liveUrl: "https://work-in-progress-nab.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99",
    },
    {
      id: "6",
      title: "Real-time Chat App",
      description: "A real-time messaging application with features like typing indicators and read receipts.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1074&auto=format&fit=crop",
      tags: ["Socket.io", "React", "Express", "MongoDB"],
      liveUrl: "https://work-in-progress-nab.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99",
    },
  ];

  const categories = ["All", "React", "TypeScript", "Node.js", "JavaScript", "APIs", "PHP"];
  
  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = activeFilter === "All" || project.tags.includes(activeFilter);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="My Work"
            title="Projects & Case Studies"
            description="Browse through my latest projects and discover the technologies I've used to bring ideas to life."
          />
          
          <div className="flex flex-col sm:flex-row justify-between gap-6 mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-10 glass-card"
                value={searchQuery}
                onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(category)}
                  className={`transition-all duration-300 ${
                    activeFilter === category 
                      ? ""
                      : "hover:border-primary/50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-12 rounded-xl text-center"
            >
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Open Source Section */}
      <section className="py-16 bg-secondary/20 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="Open Source"
            title="Contributing to the Community"
            description="Some of my contributions to open source projects and the developer community."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "React Component Library",
                description: "A collection of reusable React components with TypeScript support and accessibility features.",
                contributions: "Created 15+ components and improved documentation.",
                link: "https://github.com/NabeelKhan99",
              },
              {
                title: "JavaScript Utility Functions",
                description: "A library of utility functions for common JavaScript tasks.",
                contributions: "Added new functions and wrote unit tests.",
                link: "https://github.com/NabeelKhan99",
              },
              {
                title: "Tailwind CSS Plugin",
                description: "A plugin for Tailwind CSS that adds custom utilities and components.",
                contributions: "Fixed bugs and added new features.",
                link: "https://github.com/NabeelKhan99",
              },
              {
                title: "Developer Blog",
                description: "Technical articles and tutorials on web development topics.",
                contributions: "Published 10+ articles on JavaScript, React, and CSS.",
                link: "https://work-in-progress-nab.netlify.app/",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 rounded-xl h-full"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                
                <p className="text-sm mb-4">
                  <span className="font-semibold text-primary">My contributions:</span> {item.contributions}
                </p>
                
                <div className="mt-auto pt-2">
                  <Button variant="outline" asChild size="sm" className="hover:border-primary/50">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5">
                      View Project
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
