import { useEffect, useRef } from "react";

export default function useScrollReveal(animationClass = "fade-in-up") {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) element.classList.add(animationClass);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [animationClass]);

  return ref;
}
