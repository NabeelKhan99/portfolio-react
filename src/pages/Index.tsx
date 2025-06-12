
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, Code, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard, ProjectProps } from "@/components/ProjectCard";
import { SkillCard, SkillProps } from "@/components/SkillCard";
import SectionTitle from "@/components/SectionTitle";
import TypingAnimation from "@/components/typinganimation";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = event;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    const heroSection = heroRef.current;
    
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (heroSection) {
        heroSection.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const featuredProjects: ProjectProps[] = [
    
      {
      id: "1",
      title: "Emushtashfaa: Modular Healthcare Management System",
      description: "Emushtashfaa is a modular healthcare management system built with Java Spring Boot, featuring separate Patient, Billing, and Kafka-based notification services. Docker and AWS CLI were used for efficient containerization and deployment. Real-time patient event processing was enabled via Apache Kafka. The system achieved over 85% test coverage, improving reliability and reducing production issues by 25%.",
      image: "/res1/stat1.PNG",
      tags: ["Java", "SpringBoot", "Docker", "AWS CLI"],
      liveUrl: "https://work-in-progress-nab.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99/emustashfaa-javaspringboot",
    },
     { id: "2",
      title: "A multi-platform IT solutions ",
      description: "Developed a multi-platform IT solutions hub with professional training, government consultancy, and seamless data analytics integration. Leveraged PHP, HTML, CSS, and JavaScript to optimize performance, reducing load times by 45% and improving responsiveness. Integrated real-time data dashboards to drive insights and decision-making. Enhanced scalability, supporting over 1,000 active users with a 20% increase in uptime stability.",
      image: "https://raw.githubusercontent.com/NabeelKhan99/NabeelKhan99.github.io/refs/heads/cibed/images/service-inner.jpg",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://github.com/NabeelKhan99/NabeelKhan99.github.io",
      githubUrl: "https://github.com/NabeelKhan99/NabeelKhan99.github.io",
    },
    
    {
      id: "3",
      title: "Weather Dashboard",
      description: "Developed a real-time weather forecasting dashboard using JavaScript, RESTful APIs, and Chart.js, featuring interactive maps and location-based services. The platform delivers dynamic, visual weather updates with fast, responsive performance, enhancing user engagement and improving data accessibility. API optimization and efficient front-end design resulted in 40% faster load times and a smoother user experience.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1065&auto=format&fit=crop",
      tags: ["JavaScript", "APIs", "Chart.js", "CSS"],
      liveUrl: "https://weatherdasher.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99/weather-dashboard-API/tree/master",
    },
  ];

  const skills: SkillProps[] = [
    {
      title: "Front-end Development",
      description: "Creating responsive, accessible, and performant user interfaces with modern frameworks.",
      icon: <Code className="h-6 w-6 text-primary" />,
      color: "bg-primary/10",
    },
    {
      title: "Back-end Development",
      description: "Building robust and scalable server-side applications and APIs.",
      icon: <Code className="h-6 w-6 text-accent" />,
      color: "bg-accent/10",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with a focus on usability and accessibility.",
      icon: <Code className="h-6 w-6 text-amber-500" />,
      color: "bg-amber-500/10",
    },
    {
      title: "Cloud Services",
      description: "Deploying and managing applications on cloud platforms with CI/CD pipelines.",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-500/10",
    },
  ];

  const roles = [
    "Web Developer",
    "Software Developer", 
    "Database Architect",
    "UI/UX Designer", 
    "Full-Stack Engineer"
  ];



  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
        
        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-6 bg-primary/10 text-primary">
                Software Developer
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Crafting Digital <span className="text-gradient">Experiences</span> & Solutions
              </h1>
              
              <p className="text-lg text-muted-foreground mb-4 text-balance">
                I'm a <TypingAnimation words={roles} /> specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products.
              </p>
              
              
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Get In Touch</Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">View Projects</Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a 
                   href="/res1/resume.pdf" 
                  download 
                   className="inline-flex items-center gap-2"
                   >
                  Resume <ArrowDown size={16} />
               </a>
             </Button>
</div>

              
              <div className="flex items-center gap-4 mt-10">
                <a 
                  href="https://github.com/NabeelKhan99" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="bg-secondary/60 hover:bg-secondary/80 p-2.5 rounded-full transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/nabeel-saeed-979a281b4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="bg-secondary/60 hover:bg-secondary/80 p-2.5 rounded-full transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:nabeelkhan9990001@gmail.com"
                  aria-label="Email Me"
                  className="bg-secondary/60 hover:bg-secondary/80 p-2.5 rounded-full transition-colors duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center items-center"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/40 rounded-full blur-[100px] opacity-30"></div>
                <div className="glass-card relative h-full rounded-3xl p-6 border overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl -z-10"></div>
                  <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1508830524289-0adcbe822b40?q=80&w=1025&auto=format&fit=crop')] bg-cover bg-center rounded-2xl"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => {
              document.getElementById("featured-projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-20">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="My Work"
            title="Featured Projects"
            description="Here are a few projects I've worked on recently. Want to see more? Email me."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/projects" className="inline-flex items-center gap-2">
                View All Projects <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-secondary/20 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="What I Do"
            title="My Expertise"
            description="I've spent several years honing my skills. Here's a quick overview of my main technical skill sets and technologies I use."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/skills" className="inline-flex items-center gap-2">
                View All Skills <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="glass-card p-8 sm:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 -z-10"></div>
            
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
                
                <p className="text-muted-foreground mb-8 text-balance">
                  Interested in working together? Let's have a chat! I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                
                <Button asChild size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;