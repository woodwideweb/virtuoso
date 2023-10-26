import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver(
  options: IntersectionObserverInit,
  stick?: boolean,
): {
  intersected: boolean;
  ref: React.MutableRefObject<null>;
} {
  const ref = useRef(null);
  const [intersected, setIntersected] = useState(false);
  const hasIntersected = useRef(false);
  const { root, rootMargin, threshold } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const coords = entry.target.getBoundingClientRect();
          if (stick && hasIntersected.current) {
            return;
          }
          if (entry.isIntersecting || coords.y < 0) {
            setIntersected(true);
            hasIntersected.current = true;
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
  }, [ref, root, rootMargin, threshold, stick]);

  return { intersected, ref };
}

export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };
    window.addEventListener(`scroll`, handleScroll);
    return () => window.removeEventListener(`scroll`, handleScroll);
  }, [scrollY]);

  return scrollY;
}

export function useWindowDimensions(): { width: number; height: number } {
  // TODO: somehow initialize width and height correctly...
  const [dimensions, setDimensions] = useState({
    width: 4000,
    height: 0,
  });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const debouncedHandler = debounce(
      () =>
        setDimensions({ width: window.innerWidth, height: window.innerHeight }),
      250,
    );
    window.addEventListener(`resize`, debouncedHandler);
    return () => window.removeEventListener(`resize`, debouncedHandler);
  }, []);

  return dimensions;
}

function debounce(fn: () => unknown, ms: number): () => void {
  let timer: ReturnType<typeof setTimeout> | undefined = undefined;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = undefined;
      fn();
    }, ms);
  };
}
