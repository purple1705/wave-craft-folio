import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ReactNode } from 'react';

interface ProjectCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

const ProjectCard = ({ children, className = '', delay = 0, index = 0 }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 50, 
        scale: 0.95,
      }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        delay: delay + (index * 0.1),
        ease: [0.25, 0.25, 0, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Magnetic effect container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
          style={{
            transform: "translateZ(-10px)",
          }}
        />
        
        {/* Content */}
        <motion.div
          className="relative w-full h-full"
          style={{
            transform: "translateZ(10px)",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard; 