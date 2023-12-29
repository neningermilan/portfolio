import ProgressCounter from "../ProgressCounter";
import TimedContent from "../TimedContent";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { clipPathVariant } from "@/utils";
import Background from "../Background";

type LoaderProps = {
  image?: string;
  duration: number;
  heading?: string | null;
  text?: string | null;
  shouldWait?: boolean;
  onExitComplete?: () => void;
  onTimerDone?: () => void;
  loaded?: boolean;
};

function Loader({
  heading = "Loading...",
  text,
  duration,
  shouldWait = false,
  onExitComplete,
  onTimerDone,
  image,
}: LoaderProps) {
  useEffect(() => {
    // Prevent scrolling on mount
    document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, []); // Empty array ensures effect is only run on mount and unmount

  return (
    <TimedContent
      duration={duration}
      onExitComplete={onExitComplete}
      onTimerDone={onTimerDone}
      shouldWait={shouldWait}
    >
      <motion.div
        className="fixed bottom-0 left-0 right-0 top-0 z-9998 grid grid-rows-[1fr_1fr]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* <SonicareLogo /> */}
        {/* Logo helye */}
        <Background
          loaderState="loading"
          objectPosition="60%"
          backgroundImage={image}
        />
        <div className="relative row-[2]">
          <div className="mb-10 text-center">
            {heading ? (
              <motion.div
                variants={clipPathVariant}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
              >
                <h1 className="text-[1.275rem] leading-tightest">
                  <div dangerouslySetInnerHTML={{ __html: heading }}></div>
                </h1>
              </motion.div>
            ) : null}
            {text ? (
              <motion.div
                variants={clipPathVariant}
                initial="initial"
                animate="animate"
                className="w-full"
                transition={{ duration: 0.5, delay: 0.7, ease: "easeInOut" }}
              >
                <div dangerouslySetInnerHTML={{ __html: text }}></div>
              </motion.div>
            ) : null}
          </div>
          <motion.div
            variants={clipPathVariant}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.7 }}
            className="m-auto flex flex-row items-center justify-center w-[50px] rounded-full  px-5 py-3"
          >
            <ProgressCounter
              className="align-middle text-base opacity-50"
              active
              duration={duration}
            />
          </motion.div>
        </div>
      </motion.div>
    </TimedContent>
  );
}

export default Loader;
