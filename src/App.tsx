import { motion } from "motion/react";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="max-w-[1000px] h-screen border mx-auto relative">
        <motion.img
          src="the-fool-380_640.webp"
          alt="the fool card"
          srcSet="the-fool-380_640.webp, the-fool-1141_1920.webp 2x"
          className="bg-white absolute left-[50px] top-[50%] translate-y-[-50%] h-[320px] w-[180px] md:h-[480px] md:w-[270px]"
        />
      </div>
    </div>
  );
}

export default App;
