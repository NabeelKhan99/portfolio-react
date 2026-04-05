
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProjectCard, ProjectProps } from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// @ts-expect-error Missing type declarations for swiper CSS imports
import "swiper/css";
// @ts-expect-error Missing type declarations for swiper CSS imports
import "swiper/css/pagination";
import { allProjects } from "@/components/project";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  
  
  {allProjects.map((project, index) => (
  <ProjectCard
    key={index}
    project={{ ...project, id: `project-${index + 1}` }} // ID generated dynamically
  />
))}  
   
   
 {/*const projects = allProjects;*/}

 {/*  const categories = ["All", "React", "TypeScript", "Node.js", "JavaScript", "APIs", "PHP","Java","SpringBoot"];*/}
 // Flatten all project tags into one array
const allTags = allProjects.flatMap(project => project.tags);

// Remove duplicates and sort
const uniqueTags = Array.from(new Set(allTags)).sort();

// Add "All" at the beginning
const categories = ["All", ...uniqueTags];
  
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

  
    
    const matchesFilter = activeFilter === "All" || project.tags.includes(activeFilter);
    
    return matchesSearch && matchesFilter;
  });

  
 const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  return (
    <>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="My Work"
            title="My Projects, Showcasing My Skills."
            description="Browse through my latest projects that are ongoing or completed. Each project is handled with care and attention to detail.
            I learn new things with every project and love to take on challenges that push me to grow as a Software Engineer."
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
          
         {/* \{filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            */}

             {filteredProjects.length > 0 ? (
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true ,
                renderBullet: (index, className) => {
      return `<span class="${className} custom-bullet"></span>`;}


              }}
              spaceBetween={24}
              slidesPerView={1}
              className="!pb-12"
            >
              {chunkArray(filteredProjects, 6).map((chunk, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chunk.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>


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
      
       {/* Open Source Section 
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
      </section> */}
    </>
  );
};

export default Projects;
