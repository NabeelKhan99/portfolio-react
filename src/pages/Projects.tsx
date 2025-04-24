import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ProjectCard, ProjectProps } from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaPython, FaJava,
  FaDocker, FaAngular, FaVuejs, FaLinux, FaAws
} from "react-icons/fa";
import {
  SiTypescript, SiTailwindcss, SiDjango, SiMongodb, SiPostgresql,
  SiFirebase, SiGraphql, SiVite, SiRedux, SiJest, SiNextdotjs, SiNginx, SiWebpack
} from "react-icons/si";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: ProjectProps[] = [
    {
      id: "1",
      title: "A multi-platform IT solutions ",
      description: "A multi-platform IT solutions hub with professional training, government consultancy, and data analytics integration.",
      image: "https://raw.githubusercontent.com/NabeelKhan99/Nabeelk99.github.io/refs/heads/cbed/images/service-inner.jpg",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://github.com/NabeelKhan99/NabeelKhan99.github.io",
      githubUrl: "https://github.com/NabeelKhan99/NabeelKhan99.github.io",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A productive task management application with drag-and-drop functionality and team collaboration features.",
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=1170&auto=format&fit=crop",
      tags: ["TypeScript", "React", "Firebase", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    // -- Other projects...
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
      {/* -- Projects Section -- */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="My Work"
            title="Projects & Case Studies"
            description="Browse through my latest projects and discover the technologies I've used to bring ideas to life."
          />
          {/* -- Search Bar + Category Buttons -- */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-10 glass-card"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

      {/* -- Skills Wall Section -- */}
      <section className="py-16 bg-background">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="Tech Stack"
            title="Skills & Tools I Use"
            description="A broad set of technologies I’ve worked with to build, deploy, and maintain modern applications."
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 mt-10 text-center">
            {[
              { icon: FaHtml5, title: "HTML5" },
              { icon: FaCss3Alt, title: "CSS3" },
              { icon: FaJs, title: "JavaScript" },
              { icon: SiTypescript, title: "TypeScript" },
              { icon: FaReact, title: "React" },
              { icon: SiNextdotjs, title: "Next.js" },
              { icon: FaNodeJs, title: "Node.js" },
              { icon: SiDjango, title: "Django" },
              { icon: FaPython, title: "Python" },
              { icon: FaJava, title: "Java" },
              { icon: SiTailwindcss, title: "Tailwind CSS" },
              { icon: FaGitAlt, title: "Git" },
              { icon: FaGithub, title: "GitHub" },
              { icon: SiFirebase, title: "Firebase" },
              { icon: SiMongodb, title: "MongoDB" },
              { icon: SiPostgresql, title: "PostgreSQL" },
              { icon: SiGraphql, title: "GraphQL" },
              { icon: SiRedux, title: "Redux" },
              { icon: FaDocker, title: "Docker" },
              { icon: FaLinux, title: "Linux" },
              { icon: SiVite, title: "Vite" },
              { icon: FaAws, title: "AWS" },
              { icon: SiJest, title: "Jest" },
              { icon: FaAngular, title: "Angular" },
              { icon: FaVuejs, title: "Vue.js" },
              { icon: SiNginx, title: "Nginx" },
              { icon: SiWebpack, title: "Webpack" },
            ].map(({ icon: Icon, title }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.4 }}
                className="flex flex-col items-center group"
              >
                <div title={title} className="text-4xl text-muted-foreground group-hover:text-primary transition-all">
                  <Icon />
                </div>
                <span className="text-xs mt-2 text-muted-foreground group-hover:text-primary transition-all">{title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
