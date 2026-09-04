import React, { useState, useEffect, useRef } from 'react';

const LazySection: React.FC<{ children: React.ReactNode, minHeight?: string }> = ({ children, minHeight = '500px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '-50px' });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : minHeight }}>
      {isVisible && children}
    </div>
  );
};

export default LazySection;
