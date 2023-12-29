import { useCallback, useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

import type { AnimationPlaybackControls, MotionValue } from "framer-motion";

type Props = {
  active: boolean;
  from?: number;
  to?: number;
  duration?: number;
  delay?: number;
  className?: string;
};

function ProgressCounter({
  active,
  from = 0,
  to = 100,
  duration = 2.8,
  delay = 0.1,
  className,
}: Props) {
  const [start, animatedProgress] = useAnimatedNumber({
    from,
    to,
    duration,
    delay,
  });

  useEffect(() => {
    let controls: AnimationPlaybackControls | undefined;

    if (active && typeof start === "function") {
      controls = start();
    }

    return () => {
      if (typeof controls?.stop === "function") {
        controls.stop();
      }
    };
  }, [active, start]);

  return (
      <div className={className}>
        {animatedProgress}%
      </div>
  );
}

export function useAnimatedNumber({
    from,
    to,
    duration,
    delay,
  }: {
    from: number;
    to: number;
    duration: number;
    delay: number;
  }): [() => AnimationPlaybackControls, number] {
    const progress: MotionValue = useMotionValue(from);
    const [animatedProgress, setAnimatedProgress] = useState<number>(from);
  
    useEffect(() => {
      const unsubscribeProgress = progress.on("change", () => {
        setAnimatedProgress(Math.round(progress.get()));
      });
  
      return () => {
        unsubscribeProgress();
      };
    }, [progress]);
  
    const start = useCallback<() => AnimationPlaybackControls>(() => {
      const controls = animate(progress, to, {
        duration,
        delay,
      });
  
      return controls;
    }, [delay, duration, progress, to]);
  
    return [start, animatedProgress];
  }

export default ProgressCounter;
