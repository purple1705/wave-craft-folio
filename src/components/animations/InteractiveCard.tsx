import { useRef, useEffect, ReactNode } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  animationType?: 'tilt' | 'scale' | 'float' | 'rotate' | 'glow';
  intensity?: number;
}

const InteractiveCard = ({
  children,
  className = '',
  animationType = 'tilt',
  intensity = 1
}: InteractiveCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -10 * intensity;
      const rotateY = (x - centerX) / centerX * 10 * intensity;

      // Use CSS transforms directly for better performance and compatibility
      switch (animationType) {
        case 'tilt':
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
          break;
        case 'scale':
          card.style.transform = `scale(${1 + (intensity * 0.05)})`;
          break;
        case 'float':
          card.style.transform = `translateY(${-5 * intensity}px) scale(1.02)`;
          break;
        case 'rotate':
          card.style.transform = `rotate(${rotateY * 0.5}deg) scale(1.02)`;
          break;
        case 'glow':
          card.style.transform = 'scale(1.02)';
          card.style.boxShadow = `0 0 ${20 * intensity}px hsl(var(--primary-glow) / 0.4)`;
          break;
      }
    };

    const handleMouseLeave = () => {
      if (!card) return;
      
      card.style.transform = '';
      if (animationType === 'glow') {
        card.style.boxShadow = '';
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [animationType, intensity]);

  // CSS-based hover effects as fallback and enhancement
  const getCSSAnimationClasses = () => {
    const baseClasses = 'transition-all duration-300 ease-out cursor-pointer';
    
    switch (animationType) {
      case 'tilt':
        return `${baseClasses} transform-gpu perspective-1000`;
      case 'scale':
        return `${baseClasses} hover:scale-105`;
      case 'float':
        return `${baseClasses} hover:-translate-y-2 hover:scale-102`;
      case 'rotate':
        return `${baseClasses} hover:rotate-1 hover:scale-102`;
      case 'glow':
        return `${baseClasses} hover:scale-102 hover:shadow-glow`;
      default:
        return baseClasses;
    }
  };

  return (
    <div 
      ref={cardRef} 
      className={`${getCSSAnimationClasses()} ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;