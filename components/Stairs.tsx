import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reversedIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};
const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reversedIndex(index) * 0.06,
            }}
            className="h-full w-full bg-slate-200 relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
