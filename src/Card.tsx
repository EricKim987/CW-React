import { motion, type TargetAndTransition } from "motion/react";

type CardProps = {
  rotateX: string;
  rotateZ: string;
  end: TargetAndTransition;
  delay: number;
};

export const Card = ({ rotateX, rotateZ, end, delay }: CardProps) => {
  return (
    <motion.div
      className="bg-white absolute left-[100px] top-[50%] translate-y-[-50%] py-2 px-1 rounded"
      style={{ rotateX, rotateZ }}
      initial={{ y: -1000 }}
      animate={end}
      transition={{ duration: 0.7, delay }}
    >
      <img
        src="the-fool-380_640.webp"
        alt="the fool card"
        srcSet="the-fool-380_640.webp, the-fool-1141_1920.webp 2x"
        className="h-[160px] w-[85px] md:h-[320px] md:w-[190px]"
      />
    </motion.div>
  );
};
