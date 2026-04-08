import { ProjectProps } from "@/components/ProjectCard";
export const allProjects: ProjectProps[] = [

  {
  "title": "Manitoba Health Geographic ETL Pipeline",
  "description": "This project builds a production-style ETL pipeline using Python, PostgreSQL, SQLAlchemy, and Pandas to process Manitoba health region data. It extracts data through ArcGIS REST API calls to the Manitoba Health FeatureServer, handling JSON parsing and pagination. The pipeline cleans and standardizes the data, while also creating useful metrics like water area. With secure credential management and GitHub Actions automating weekly runs, it delivers a reliable, scalable, and maintainable solution for integrating and storing structured geographic data in PostgreSQL.",
  "image": "/res1/etl-pipe.png",
  "tags": ["Python", "PostgreSQL", "SQLAlchemy", "Pandas", "ETL Pipeline", "ArcGIS API", "CI/CD"],
  "githubUrl": "https://github.com/NabeelKhan99/ETLpipe"
},  
  
  {
    title: "Manitoba Broadband Competitive Gap Analysis",
  description: "A geospatial reconstruction and analysis effort that finds gaps in 50/10 Mbps internet availability throughout Manitoba. I found and integrated National Broadband Data (NBD) GeoPackages using spatial centroid joins to get around a crucial ID mismatch between legacy 1km hexagon maps and contemporary broadband speed information. In order to support local telecommunications cooperatives' strategic infrastructure expansion, the final research offers detailed community-level data that highlight specific underserved locations like Ethelbert (17.4% coverage) and Grandview (33.3%).",
  image: "/res1/broadband.png", 
  tags: ["QGIS", "GIS", "Spatial Data Engineering", "Data Reconstruction", "GeoPackage", "Manitoba Census Data"],
    githubUrl: "https://github.com/NabeelKhan99/QGIS-W"},
    
     {
      
      title: "Automotive NLP Toolkit",
      description: "Developed an Automotive NLP Python CLI toolkit for analyzing customer automotive feedback using NLP. It clusters complaints by issues or car make/model, detects recurring faults, performs sentiment analysis, and suggests dynamic pricing. Cloud deployment support is coming soon for scalable use.",
      image: "/res1/mycli.png",
      tags: ["Python", "Typer", "SQLAlchemy", "SQLite", "Pandas", "Scikit-learn", "SciPy", "spaCy"],
      //liveUrl: "https://work-in-progress-nab.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99/Automotive-NLP",
    }, 

    {
      
      title: "Smart FAQ Chatbot",
      description: "Developed Smart FAQ which is an AI-powered chatbot with a React, Vite, and TypeScript frontend and a FastAPI backend powered by Hugging Face’s google/flan-t5-small. It provides context-aware answers through a floating widget and clean conversation UI. Currently, it responds with helpful answers and fallback jokes when uncertain. An upcoming feature will extract knowledge from site pages, ensuring responses are always grounded in real content.",
      image: "/res1/img3chatbot.png",
      tags: ["FastAPI", "React", "Prisma", "PostgreSQL"],
     // liveUrl: "https://nabeel-saeed.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99/ChatBot-Backend",
    },
    
    {
      
      title: "Emushtashfaa: Modular Healthcare Management System",
      description: "Developed Emushtashfaa which is a modular healthcare management system built with Java Spring Boot, featuring separate Patient, Billing, and Kafka-based notification services. Docker and AWS CLI were used for efficient containerization and deployment. Real-time patient event processing was enabled via Apache Kafka. The system achieved over 85% test coverage, improving reliability and reducing production issues by 25%.",
      image: "/res1/stat1.PNG",
      tags: ["Java", "SpringBoot", "Docker", "AWS CLI"],
     // liveUrl: "https://work-in-progress-nab.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99/emustashfaa-javaspringboot",
    },
    
    {
      
      title: "A multi-platform IT solutions ",
      description: "Developed a multi-platform IT solutions hub with professional training, government consultancy, and seamless data analytics integration. Leveraged PHP, HTML, CSS, and JavaScript to optimize performance, reducing load times by 45% and improving responsiveness. Integrated real-time data dashboards to drive insights and decision-making. Enhanced scalability, supporting over 1,000 active users with a 20% increase in uptime stability.",
      image: "https://raw.githubusercontent.com/NabeelKhan99/Nabeelk99.github.io/refs/heads/cibed/images/service-inner.jpg",
      tags: ["PHP", "HTML", "CSS", "JavaScript"],
     // liveUrl: "https://nabeelkhan99.github.io/Nabeelk99.github.io/",
      githubUrl: "https://github.com/NabeelKhan99/Nabeelk99.github.io/tree/cbed",
    },

    {
      
      title: "Portfolio Website",
      description: "A personal portfolio website built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1170&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Tailwind", "Framer Motion","Node.js"],
      liveUrl: "https://nabeel-saeed.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99/portfolio-react",
    },

     {
      
      title: "Weather Dashboard",
      description: "Developed a real-time weather forecasting dashboard using JavaScript, RESTful APIs, and Chart.js, featuring interactive maps and location-based services. The platform delivers dynamic, visual weather updates with fast, responsive performance, enhancing user engagement and improving data accessibility. API optimization and efficient front-end design resulted in 40% faster load times and a smoother user experience.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1065&auto=format&fit=crop",
      tags: ["JavaScript", "APIs", "Chart.js", "CSS"],
      liveUrl: "https://weatherdasher.netlify.app/",
      githubUrl: "https://github.com/NabeelKhan99/weather-dashboard-API/tree/master",
    },
    ];