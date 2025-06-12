import { motion } from "framer-motion";
import { 
  Cloud, 
  Layout, 
  Server, 
  Database, 
  GitBranch, 
  Terminal, 
  Workflow 
} from "lucide-react";
import { SkillCard, SkillProps } from "@/components/SkillCard";
import SectionTitle from "@/components/SectionTitle";

// Tech Wall Data
const expertiseData = [
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  {name: "SpringBoot", logo:"https://img.icons8.com/?size=100&id=90519&format=png&color=000000"},
  { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Android Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" },
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Node Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Cloudflare", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Next Js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Netlify", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Sass", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "StackOverflow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stackoverflow/stackoverflow-original.svg" },
  { name: "JSON", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
  { name: "IntelliJ", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg" },
  { name: "Canva", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "Eclipse", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TailwindCSS", logo: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Flask", logo: "https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000" },
  { name: "Ruby", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
  { name: "Rails", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Apache", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  { name: "Vim", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" },
  { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "AWS", logo: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000" },
  { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "GitLab", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
];



const skillCategories: SkillProps[] = [
  {
    title: "Frontend Development",
    description: "Creating responsive, accessible, and performant user interfaces with React, TypeScript, and modern CSS.",
    icon: <Layout className="h-6 w-6 text-primary" />,
    color: "bg-primary/10",
  },
  {
    title: "Backend Development",
    description: "Building robust APIs and server-side applications with Node.js, Express, and various databases.",
    icon: <Server className="h-6 w-6 text-accent" />,
    color: "bg-accent/10",
  },
  {
    title: "Database Design",
    description: "Designing efficient database schemas, writing optimized queries, and managing data relationships.",
    icon: <Database className="h-6 w-6 text-emerald-500" />,
    color: "bg-emerald-500/10",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive interfaces with a focus on usability, accessibility, and user experience.",
    icon: <Layout className="h-6 w-6 text-amber-500" />,
    color: "bg-amber-500/10",
  },
  {
    title: "Cloud Services",
    description: "Deploying and scaling applications on AWS, GCP, and other cloud platforms.",
    icon: <Cloud className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-500/10",
  },
  {
    title: "DevOps",
    description: "Setting up CI/CD pipelines, containerization with Docker, and infrastructure as code with Terraform.",
    icon: <Workflow className="h-6 w-6 text-fuchsia-500" />,
    color: "bg-fuchsia-500/10",
  },
  {
    title: "Version Control",
    description: "Managing code with Git, GitHub workflows, code reviews, and collaborative development.",
    icon: <GitBranch className="h-6 w-6 text-rose-500" />,
    color: "bg-rose-500/10",
  },
  {
    title: "Command Line",
    description: "Proficient with Unix/Linux command line, shell scripting, and automation.",
    icon: <Terminal className="h-6 w-6 text-gray-500" />,
    color: "bg-gray-500/10",
  },
];

const TechWall = () => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Technologies & Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-11 gap-8">
          {expertiseData.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex justify-center items-center p-4 bg-white shadow-lg rounded-xl"
            >
              <img src={tech.logo} alt={tech.name} className="h-12 w-12 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="Expertise"
            title="Technical Skills & Capabilities"
            description="An overview of my technical skills, expertise areas, and technologies I work with."
          />

          <div className="flex flex-wrap gap-8 justify-center">
            {expertiseData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-16 h-16 mb-2"
                />
                <span className="text-xs text-muted-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-16 bg-secondary/20 backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="Areas of Expertise"
            title="What I Bring to the Table"
            description="My skill set spans across different areas of software development."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
