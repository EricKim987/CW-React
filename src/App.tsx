import { motion } from "motion/react";

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="max-w-[1000px] h-screen border mx-auto relative">
        <motion.div
          className="bg-white absolute left-[100px] top-[50%] translate-y-[-50%] py-2 px-1 rounded"
          initial={{ y: "-100%" }}
          animate={{ y: "0%", rotateX: "45deg", rotateZ: "10deg" }}
        >
          <img
            src="the-fool-380_640.webp"
            alt="the fool card"
            srcSet="the-fool-380_640.webp, the-fool-1141_1920.webp 2x"
            className="h-[160px] w-[85px] md:h-[320px] md:w-[190px]"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
