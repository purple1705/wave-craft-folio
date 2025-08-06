import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ProjectTimelineProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

const ProjectTimeline = ({ 
  children, 
  className = '', 
  staggerDelay = 0.2
}: ProjectTimelineProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 80,
      scale: 0.9,
      rotateX: 15,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="project-item"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectTimeline; 