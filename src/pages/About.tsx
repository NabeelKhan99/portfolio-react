import { motion } from "framer-motion";
import profilePic from "@/res/resolve101.png";
import { useState, useEffect } from "react";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen py-10 flex flex-col items-center justify-center bg-black text-white">
      <div className="relative z-10 border border-white/10 p-1 rounded-2xl glass-card overflow-hidden shadow-2xl">
        {/* Light Reflection */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent z-10 pointer-events-none rounded-2xl"
          style={{
            backgroundPosition: `${mousePosition.x / 20}px ${mousePosition.y / 20}px`,
          }}
        />

        {/* 🔥 Flame Effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={`flame-${i}`}
              className="absolute rounded-full mix-blend-screen pointer-events-none"
              style={{
                width: `${1 + Math.random() * 2}rem`,
                height: `${1 + Math.random() * 2}rem`,
                top: `${30 + i * 5}%`,
                left: `${10 + i * 8}%`,
                backgroundColor: "orange",
              }}
              animate={{
                y: [0, -50 - Math.random() * 40, 0],
                scale: [1, 1.4, 1],
                backgroundColor: [
                  "hsl(20, 100%, 50%)",
                  "hsl(45, 100%, 50%)",
                  "hsl(0, 100%, 50%)",
                  "hsl(20, 100%, 50%)",
                ],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ✨ Sparks */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={`spark-${i}`}
              className="absolute bg-yellow-300 rounded-full mix-blend-screen pointer-events-none"
              style={{
                width: "0.4rem",
                height: "0.4rem",
                top: `${50 + Math.random() * 30}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, -50],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Profile Image with hover parallax */}
        <motion.div
          className="relative overflow-hidden rounded-xl aspect-square max-w-md"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={profilePic}
            alt="My pic"
            className="w-full h-full object-cover"
            animate={{ scale: 1.05 }}
            whileHover={{
              scale: 1.12,
              filter: "brightness(1.1)",
            }}
            transition={{
              duration: 0.5,
              scale: { type: "spring", stiffness: 200, damping: 25 },
            }}
            style={{
              transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) / 50}deg) rotateY(${-(mousePosition.x - window.innerWidth / 2) / 50}deg)`,
            }}
          />
        </motion.div>
      </div>

      {/* Description Section */}
      <div className="mt-10 max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-4">Hey there V-Sauce Nabeel here!!!</h2>
        <p className="text-lg leading-7">
        "Do you know the Moon is breaking away slowly from Earth's gravity. So anyways, I am a dedicated Full Stack Developer with a deep passion for building modern, dynamic web applications. 
         I thrive on crafting seamless UI/UX experiences, developing powerful backend systems, and exploring cutting-edge technologies. 
         Every project is an opportunity to innovate, learn, and push the boundaries of what's possible. 
         I’m always eager to grow, refine my skills, and create impactful digital experiences that make a difference." 🚀🔥
        </p>
      </div>
    </section>
  );
};

export default About;
