import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState, type RefObject } from "react";

const lines = [
  "The Fool is the first card of the Major Arcana (numbered 0) ",
  "and represents new beginnings, innocence, and spontaneity.",
  "The image shows a young person stepping off a cliff,",
  "reminding us to trust our instincts and take bold leaps of faith.",
  "Even though you don’t know exactly where you are going,",
  "you are being called to commit yourself and follow your heart,",
  "no matter how crazy this leap of faith might seem to you. ",
  "Now is a time when you need to trust where the Universe is taking you.",
];

export const Text = () => {
  const [containerRendered, setContainerRendered] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  // Not a bug, but this seems like the only way to ensure the container is rendered
  // before the lines are displayed. This is necessary for the scroll effect to work properly.
  // https://github.com/motiondivision/motion/issues/1853#issuecomment-2274187180
  useEffect(() => {
    setContainerRendered(true);
  }, []);

  return (
    <div
      ref={container}
      className="absolute left-[320px] top-[60px] right-[40px] text-white text-xl md:left-[500px] md:text-2xl h-[80vh] overflow-y-auto py-[280px]"
    >
      {containerRendered &&
        lines.map((line) => (
          <Line key={line} container={container} text={line} />
        ))}
    </div>
  );
};

const Line = ({
  container,
  text,
}: {
  container: RefObject<HTMLDivElement | null>;
  text: string;
}) => {
  const paragraph = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    offset: ["start 50%", "end 45%"],
    target: paragraph,
    container: container,
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const linearGradient = useMotionTemplate`linear-gradient(90deg, white 0 ${scrollY}%, gray ${scrollY}% 100%)`;
  return (
    <motion.p
      className="text-transparent px-4 py-2 rounded-md mb-4 bg-clip-text"
      style={{
        backgroundImage: linearGradient,
      }}
      ref={paragraph}
    >
      {text}
    </motion.p>
  );
};
