import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "#", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 bg-card/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo and tagline */}
          {/* <div>
            <h3 
              className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent cursor-pointer"
              onClick={scrollToTop}
            >
              John Developer
            </h3>
            <p className="text-muted-foreground mt-2">
              Crafting digital experiences with passion and precision
            </p>
          </div> */}

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button 
                key={link.label}
                size="icon" 
                variant="outline" 
                className="hover:shadow-glow transition-all duration-300 hover:scale-110"
                asChild
              >
                <a href={link.href} aria-label={link.label}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          {/* <div className="pt-6 border-t border-border/50">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Made with 
              <Heart className="h-4 w-4 text-red-500 animate-pulse" /> 
              by John Developer
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;