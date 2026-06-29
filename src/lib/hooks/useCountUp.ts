import { useEffect, useState } from "react";

export function useCountUp(target: number, duration: number = 1.5, startOnView: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOnView) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // easeOutQuad function: f(t) = t * (2 - t)
      const easeProgress = progress * (2 - progress);

      setCount(easeProgress * target);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration, startOnView]);

  return count;
}
