import {
  motion,
  type MotionStyle,
  type TargetAndTransition,
} from "motion/react";

type CardProps = {
  start?: TargetAndTransition;
  end?: TargetAndTransition;
  delay?: number;
  image: string;
  index: number;
  currentCardIndex?: number;
  style?: MotionStyle;
  onHover?: (index: number | undefined) => void;
  onClick?: (cardName: string) => void;
};

export const Card = ({
  start,
  end,
  delay,
  image,
  index,
  style,
  currentCardIndex,
  onHover,
  onClick,
}: CardProps) => {
  const isOnTopOfHoveredCard =
    currentCardIndex !== undefined && currentCardIndex < index;
  return (
    <motion.div
      className="bg-white absolute translate-y-[-50%] py-2 px-1 rounded cursor-pointer"
      initial={start}
      animate={{
        ...end,
        y: isOnTopOfHoveredCard ? start?.y : 0,
      }}
      transition={{ duration: 0.4, delay }}
      whileHover={{
        scale: 1.05,
        rotateZ: "0deg",
        transition: { duration: 0.2 },
      }}
      style={{ ...style, marginTop: `${index * -20}px` }}
      onMouseEnter={() => onHover?.(index)}
      onMouseLeave={() => onHover?.(undefined)}
      onClick={() => onClick?.(image)}
      layoutId={image}
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
