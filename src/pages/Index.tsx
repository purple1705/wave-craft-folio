import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark overflow-x-hidden pb-20 md:pb-24">
      <Navigation />
      
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      
      <ScrollAnimation direction="up" delay={0.2}>
        <About />
      </ScrollAnimation>
      
      <ScrollAnimation direction="up" delay={0.3}>
        <Projects />
      </ScrollAnimation>
      
      <ScrollAnimation direction="up" delay={0.4}>
        <Resume />
      </ScrollAnimation>
      
      <ScrollAnimation direction="up" delay={0.5}>
        <Contact />
      </ScrollAnimation>
      
      <Footer />
    </div>
  );
};

export default Index;
