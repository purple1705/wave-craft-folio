import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-primary rounded-full opacity-20 animate-float" />
      <div className="absolute bottom-32 right-32 w-16 h-16 bg-gradient-primary rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-primary-glow/30 rounded-full animate-glow" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            John Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Developer & UI/UX Designer crafting digital experiences with modern technologies
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-4">
            <Button size="icon" variant="outline" className="hover:shadow-glow transition-all duration-300 hover:scale-110">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="hover:shadow-glow transition-all duration-300 hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline" className="hover:shadow-glow transition-all duration-300 hover:scale-110">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-3d transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;