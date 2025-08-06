import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import '../components/Hero.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav 
      className="fixed bottom-3 left-2 right-2 md:left-4 md:right-4 z-50 w-4/6 container mx-auto bg-purple-400 backdrop-blur-md border border-border/20 shadow-2xl rounded-2xl md:rounded-2xl mb-2 md:mb-3"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 rounded-t-2xl md:rounded-none transition-all duration-300">
          {/* Logo */}
          <div 
            className="text-2xl logo -ml-6 md:-ml-0 font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-white  cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
          HM
          </div>

          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between w-4/6">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </div>
              <Button 
                className="bg-white/60  hover:bg-white text-white hover:text-black transition-all duration-300 transform hover:scale-105 ml-8"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </Button>
            </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden  h-10 w-10  -mr-8"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex absolute bottom-16 left-0 right-0 bg-white/70 backdrop-blur-xl border border-border/20 shadow-2xl rounded-xl mx-2 w-full max-w-xs h-[70vh]">
            <div className="px-4 py-6 space-y-4 w-full h-full flex flex-col justify-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-center text-black text-xl py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;