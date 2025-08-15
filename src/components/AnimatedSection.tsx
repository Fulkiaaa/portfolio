import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'fadeIn' | 'scaleIn';
  delay?: number;
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'slideUp',
  delay = 0,
  duration = 600
}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-${duration}`;
    
    if (!isIntersecting) {
      switch (animation) {
        case 'slideUp':
          return `${baseClasses} ${durationClass} transform translate-y-8 opacity-0`;
        case 'slideDown':
          return `${baseClasses} ${durationClass} transform -translate-y-8 opacity-0`;
        case 'slideLeft':
          return `${baseClasses} ${durationClass} transform translate-x-8 opacity-0`;
        case 'slideRight':
          return `${baseClasses} ${durationClass} transform -translate-x-8 opacity-0`;
        case 'fadeIn':
          return `${baseClasses} ${durationClass} opacity-0`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} transform scale-95 opacity-0`;
        default:
          return `${baseClasses} ${durationClass} transform translate-y-8 opacity-0`;
      }
    } else {
      return `${baseClasses} ${durationClass} transform translate-y-0 translate-x-0 scale-100 opacity-100`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
};