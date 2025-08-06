import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink,
  Calendar,
  MapPin,
  Phone,
  Globe,
  FileText,
  Award,
  Code,
  Palette,
  Database,
  Smartphone
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ContactCard from "@/components/animations/ContactCard";

const Resume = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      url: "https://github.com/harija9080",
      color: "hover:bg-gray-800 hover:text-white"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/harija9080",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      url: "mailto:harija9080@gmail.com",
      color: "hover:bg-red-600 hover:text-white"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      label: "Portfolio",
      url: "#",
      color: "hover:bg-purple-600 hover:text-white"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB"] },
    { category: "Mobile", items: ["React Native", "Flutter", "Firebase"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Postman"] }
  ];

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2023 - Present",
      location: "San Francisco, CA",
      description: "Developed scalable web applications using React, Node.js, and PostgreSQL. Led a team of 3 developers and improved application performance by 40%."
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency",
      period: "2022 - 2023",
      location: "Remote",
      description: "Built responsive user interfaces and implemented modern design systems. Collaborated with designers to create seamless user experiences."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2019 - 2023",
      location: "Chennai, India"
    }
  ];

  const handleDownloadResume = () => {
    // Add your resume download logic here
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Add your resume file path
    link.download = 'Harija_A_Resume.pdf';
    link.click();
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="resume" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Resume & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my resume and explore my professional journey, skills, and experience.
          </p>
        </ScrollReveal>

        {/* Download Resume & Social Links */}
        <ScrollReveal direction="up" delay={200} className="mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300"
                onClick={handleDownloadResume}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <ContactCard key={social.label} delay={index * 0.1}>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="icon"
                      variant="outline"
                      className={`hover:shadow-glow transition-all duration-300 ${social.color}`}
                      onClick={() => handleSocialClick(social.url)}
                    >
                      {social.icon}
                    </Button>
                  </motion.div>
                </ContactCard>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skills Section */}
          <ScrollReveal direction="left" delay={300} className="lg:col-span-1">
            <ContactCard>
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl glass h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Code className="h-5 w-5 text-primary" />
                    Skills & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <div key={skillGroup.category} className="space-y-3">
                      <h4 className="font-semibold text-primary">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <motion.div
                            key={skill}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Badge 
                              variant="outline" 
                              className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </ContactCard>
          </ScrollReveal>

          {/* Experience & Education */}
          <ScrollReveal direction="right" delay={400} className="lg:col-span-2">
            <div className="space-y-8">
              {/* Experience */}
              <ContactCard>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Award className="h-5 w-5 text-primary" />
                      Professional Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-l-2 border-primary/30 pl-6 relative"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                        <div className="space-y-2">
                          <h4 className="font-bold text-lg">{exp.title}</h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </ContactCard>

              {/* Education */}
              <ContactCard>
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl glass">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Award className="h-5 w-5 text-primary" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-l-2 border-primary/30 pl-6 relative"
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                        <div className="space-y-2">
                          <h4 className="font-bold text-lg">{edu.degree}</h4>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              {edu.institution}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {edu.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {edu.location}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </ContactCard>
            </div>
          </ScrollReveal>
        </div>

        {/* Additional Info */}
        {/* <ScrollReveal direction="up" delay={500} className="mt-12">
          <ContactCard>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm rounded-2xl glass">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Contact</h4>
                    <p className="text-sm text-muted-foreground">+91 9080773897</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-sm text-muted-foreground">harija9080@gmail.com</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm text-muted-foreground">San Francisco, Tiruppur</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ContactCard>
        </ScrollReveal> */}
      </div>
    </section>
  );
};

export default Resume; 