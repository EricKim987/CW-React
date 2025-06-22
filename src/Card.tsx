import { motion, type TargetAndTransition } from "motion/react";

type CardProps = {
  end: TargetAndTransition;
  delay: number;
  image: string;
  index: number;
  currentCardIndex: number | null;
  onHover: (index: number | null) => void;
};

const yStart = -1000;

export const Card = ({
  end,
  delay,
  image,
  index,
  currentCardIndex,
  onHover,
}: CardProps) => {
  return (
    <motion.div
      className="bg-white absolute left-[100px] top-[50%] translate-y-[-50%] py-2 px-1 rounded cursor-pointer"
      initial={{ y: yStart }}
      animate={{
        ...end,
        y:
          currentCardIndex !== null && currentCardIndex < index
            ? yStart
            : end.y,
      }}
      transition={{ duration: 0.4, delay }}
      whileHover={{
        scale: 1.05,
        rotateZ: "0deg",
        transition: { duration: 0.2 },
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={`${image}-380_640.webp`}
        alt="the fool card"
        srcSet={`${image}-380_640.webp, ${image}-1141_1920.webp 2x`}
        className="h-[160px] w-[85px] md:h-[320px] md:w-[190px]"
      />
    </motion.div>
  );
};
