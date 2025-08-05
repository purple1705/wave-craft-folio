import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Smartphone, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", icon: <Code className="h-5 w-5" />, items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"] },
    { category: "Backend", icon: <Database className="h-5 w-5" />, items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"] },
    { category: "Mobile", icon: <Smartphone className="h-5 w-5" />, items: ["React Native", "Flutter", "iOS", "Android", "Expo"] },
    { category: "Design", icon: <Palette className="h-5 w-5" />, items: ["Figma", "Adobe XD", "Sketch", "Photoshop", "UI/UX"] },
    { category: "DevOps", icon: <Globe className="h-5 w-5" />, items: ["Docker", "AWS", "Git", "CI/CD", "Linux"] },
    { category: "Tools", icon: <Zap className="h-5 w-5" />, items: ["VS Code", "Webpack", "Vite", "Jest", "Cypress"] }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating beautiful, functional, and user-centered digital experiences. 
            I love turning complex problems into simple, elegant solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <Card 
              key={skillGroup.category} 
              className="group hover:shadow-card-3d transition-all duration-300 transform hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;