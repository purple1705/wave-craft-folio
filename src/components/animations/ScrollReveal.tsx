import { useEffect, useRef, ReactNode, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = ''
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out opacity-0';
    const visibleClasses = 'opacity-100 translate-x-0 translate-y-0 scale-100 rotate-0';
    
    const directionClasses = {
      up: 'translate-y-12',
      down: '-translate-y-12',
      left: 'translate-x-12',
      right: '-translate-x-12',
      scale: 'scale-75',
      rotate: 'rotate-180 scale-75'
    };

    const durationClass = `duration-[${duration}ms]`;
    const delayClass = delay > 0 ? `delay-[${delay}ms]` : '';

    if (isVisible) {
      return `${baseClasses} ${visibleClasses} ${durationClass} ${delayClass}`;
    }

    return `${baseClasses} ${directionClasses[direction]} ${durationClass} ${delayClass}`;
  };

  return (
    <div ref={elementRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;