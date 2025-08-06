import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/peeps-avatar-alpha (1).png";
import ProfilePhoto from "./ProfilePhoto";
import '../components/Hero.css'

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
      <div className="relative z-10 px-4 max-w-6xl mx-auto mt-14 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo - show first on mobile, second on desktop */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <ProfilePhoto
              src={profileImage}
              alt="Harija A - Full Stack Developer"
              size="responsive"
              showBadges={true}
            />
          </motion.div>

          {/* Text Content - show after image on mobile, first on desktop */}
          <motion.div
            className="text-center lg:text-left space-y-7 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold lobster-two-regular-italic bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent py-3">
              Harija A
            </h1>
            <p className="text-xl sub-title md:text-3xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Full-Stack Developer & UI/UX Designer crafting digital experiences with modern technologies
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 pt-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="icon" variant="outline" className="hover:shadow-glow transition-all duration-300 bg-gray-500">
                  <Github className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="icon" variant="outline" className="hover:shadow-glow transition-all duration-300 bg-gray-500">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button size="icon" variant="outline" className="hover:shadow-glow transition-all duration-300 bg-gray-500">
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex  flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary hidden md:block to-primary-glow hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:shadow-glow transition-all hidden md:block duration-300 w-full sm:w-auto text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary rounded-full hover:bg-purple-800 transition-colors animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;