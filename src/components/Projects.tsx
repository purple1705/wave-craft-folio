import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Eye } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ProjectCard from "@/components/animations/ProjectCard";
import ProjectTimeline from "@/components/animations/ProjectTimeline";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with advanced filtering, payment integration, and real-time inventory management.",
      image: project1,
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, transaction tracking, and budget management.",
      image: project2,
      technologies: ["React Native", "Firebase", "TypeScript", "Redux"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization, reporting tools, and customizable widgets.",
      image: project3,
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience in web development.
          </p>
        </ScrollReveal>

        <ProjectTimeline staggerDelay={0.2} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              delay={index * 0.1}
              index={index}
            >
              <Card className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm h-full rounded-2xl glass shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.6, ease: "easeOut" }
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-3">
                      <Button size="sm" variant="secondary" className="shadow-lg backdrop-blur-sm">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="bg-primary hover:bg-primary-glow shadow-lg backdrop-blur-sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </motion.div>
                </div>
                
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-bold mb-2 group-hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full hover:shadow-glow transition-all duration-300"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div className="flex-1" whileHover={{ scale: 1.02 }}>
                      <Button 
                        size="sm" 
                        className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </ProjectCard>
          ))}
        </ProjectTimeline>

        <ScrollReveal direction="scale" delay={400} className="text-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="transition-all duration-300 hover:shadow-glow text-white"
            >
              View All Projects
            </Button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;