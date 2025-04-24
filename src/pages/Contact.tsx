
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";

const Contact = () => {
  return (
    <>
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <SectionTitle
            subtitle="Get in Touch"
            title="Let's Work"
            description="Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="glass-card p-6 rounded-xl mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a href="mailto:example@example.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        example@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Phone</h4>
                      <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Location</h4>
                      <p className="text-muted-foreground">
                        San Francisco, California, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
                
                <div className="flex gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary/60 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary/60 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary/60 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors duration-300"
                    aria-label="Twitter Profile"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-4">Available For</h3>
                
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Freelance Projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Full-time Positions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Consultation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Speaking Engagements</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;