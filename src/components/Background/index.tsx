import { motion } from "framer-motion";

const backgroundVariants = {
  initial: { scale: 1.1 },
  loading: { scale: 1.05 },
  done: { scale: 1 },
};

function Background({
  loaderState,
  backgroundImage,
  objectPosition,
}: {
  loaderState: "initial" | "loading" | "done";
  backgroundImage?: string | null;
  objectPosition?: string | number;
}) {
  return (
    <div
      className={`absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-white`}
    >
      {backgroundImage ? (
        <motion.img
          className={`absolute h-full w-full object-cover`}
          src={backgroundImage}
          style={{ objectPosition: objectPosition ?? "center" }}
          alt="Background image"
          variants={backgroundVariants}
          initial="initial"
          animate={loaderState}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ) : null}
      <div
        className="absolute bottom-0 top-0 h-full w-full"
        style={{
          background: `linear-gradient(180deg, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)`,
        }}
      ></div>
      <motion.div
        className="absolute bottom-0 top-0 h-full w-full"
        style={{
          background: `linear-gradient(180deg, rgba(11, 11, 11, 0) 0%, #0B0B0B 100%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: loaderState === "done" ? 1 : 0,
          transition: { duration: 1.5, delay: 0.7 },
        }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute bottom-0 top-0 h-full w-full bg-[#0B0B0B]"
      ></motion.div>
    </div>
  );
}

export default Background;
