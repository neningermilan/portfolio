import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

type TimedContentProps = {
  duration: number;
  children: JSX.Element | JSX.Element[];
  shouldWait?: boolean;
  onTimerDone?: () => void;
  onExitComplete?: () => void;
};

export default function TimedContent({
  duration,
  children,
  shouldWait = false,
  onTimerDone,
  onExitComplete,
}: TimedContentProps) {
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const timeout: NodeJS.Timeout = setTimeout(() => {
      setIsTimeUp(true);
    }, duration * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration]);

  useEffect(() => {
    if (typeof onTimerDone === "function" && isTimeUp && !shouldWait) {
      onTimerDone();
    }
  }, [isTimeUp, shouldWait, onTimerDone]);

  return (
    <AnimatePresence onExitComplete={onExitComplete}>
      {!isTimeUp || shouldWait ? <>{children}</> : null}
    </AnimatePresence>
  );
}
