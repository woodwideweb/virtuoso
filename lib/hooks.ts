import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(
  options: IntersectionObserverInit,
  stick?: boolean,
): {
  intersected: boolean;
  ref: React.MutableRefObject<null>;
} {
  const ref = useRef(null);
  const [intersected, setIntersected] = useState(false);
  let hasIntersected = false;
  const { root, rootMargin, threshold } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const coords = entry.target.getBoundingClientRect();
          console.log(stick);
          if (stick && hasIntersected) {
            console.log('in here!! sticky!!');
            return;
          }
          if (entry.isIntersecting || coords.y < 0) {
            setIntersected(true);
            hasIntersected = true;
          } else {
            setIntersected(false);
          }
        });
      },
      { root, rootMargin, threshold },
    );

    if (ref.current) observer.observe(ref.current);

    const cur = ref.current;

    return () => {
      if (cur) observer.unobserve(cur);
    };
  }, [ref, root, rootMargin, threshold]);

  return { intersected, ref };
}

export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return scrollY;
}
