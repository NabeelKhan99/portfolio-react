
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProjectCard, ProjectProps } from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
// @ts-expect-error Missing type declarations for swiper CSS imports
import "swiper/css";
// @ts-expect-error Missing type declarations for swiper CSS imports
import "swiper/css/pagination";
// @ts-expect-error Missing type declarations for swiper CSS imports
import "swiper/css/navigation";
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
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true ,
                renderBullet: (index, className) => {
      return `<span class="${className} custom-bullet"></span>`;}



              }}
              navigation={{
        nextEl: ".custom-swiper-next",
        prevEl: ".custom-swiper-prev",
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

                     {/* Custom arrows */}
    <button className="custom-swiper-prev absolute top-1/2 left-2 -translate-y-1/2 z-10 glass-card p-2 rounded-full hover:bg-primary/20 transition-colors">
      ❮
    </button>
    <button className="custom-swiper-next absolute top-1/2 right-2 -translate-y-1/2 z-10 glass-card p-2 rounded-full hover:bg-primary/20 transition-colors">
      ❯
    </button>
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
      
       
    </>
  );
};

export default Projects;
