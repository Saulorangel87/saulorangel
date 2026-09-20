import { useEffect, useRef } from 'react';

export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const elementRef = useRef(null);
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      element.classList.add('is-visible');
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { element.classList.add('is-visible'); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <Tag ref={elementRef} className={`reveal ${className}`} {...props}>{children}</Tag>;
}
