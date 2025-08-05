import { useEffect, useRef, ReactNode } from 'react';

interface TimelineAnimationProps {
  children: ReactNode[];
  direction?: 'horizontal' | 'vertical';
  stagger?: number;
  className?: string;
}

const TimelineAnimation = ({
  children,
  direction = 'vertical',
  stagger = 100,
  className = ''
}: TimelineAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateTimeline();
        }
      },
      { threshold: 0.1 }
    );

    const animateTimeline = () => {
      const items = container.querySelectorAll('.timeline-item');
      
      items.forEach((item, index) => {
        const htmlItem = item as HTMLElement;
        
        // Set initial state
        htmlItem.style.opacity = '0';
        htmlItem.style.transform = direction === 'vertical' 
          ? 'translateY(50px)' 
          : 'translateX(50px)';
        
        // Animate with stagger
        setTimeout(() => {
          htmlItem.style.transition = 'all 0.8s cubic-bezier(0.25, 0.25, 0, 1)';
          htmlItem.style.opacity = '1';
          htmlItem.style.transform = 'translate(0, 0)';
        }, index * stagger);
      });
    };

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [direction, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div key={index} className="timeline-item">
          {child}
        </div>
      ))}
    </div>
  );
};

export default TimelineAnimation;