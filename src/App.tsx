import { useState } from "react";
import { Card } from "./Card";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { Text } from "./Text";

const cards = [
  "the-fool",
  "temperance",
  "hierophant",
  "hermit",
  "empress",
  "chariot",
].map((name, index) => ({
  image: name,
  start: { y: -1000 },
  delay: 0.05 * index,
}));

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState<number | undefined>(
    undefined
  );
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <>
      <title>Tarot Card Animation Demo | Framer Motion React</title>
      <meta
        name="description"
        content="Explore interactive tarot cards with smooth animations built using React and Framer Motion. Click to reveal card meanings and enjoy a visually engaging experience."
      />
      <meta property="og:title" content="Tarot Card Animation Demo" />
      <meta
        property="og:description"
        content="Explore interactive tarot cards with smooth animations built using React and Framer Motion."
      />

      <div className="h-screen bg-black">
        <div className="max-w-[1000px] h-screen mx-auto relative">
          <LayoutGroup>
            <AnimatePresence>
              {cards.map((card, index) => (
                <Card
                  key={card.image}
                  {...card}
                  currentCardIndex={currentCardIndex}
                  index={index}
                  style={{
                    left: "100px",
                    top: "50%",
                  }}
                  onHover={(hoveredCardIndex) =>
                    setCurrentCardIndex(hoveredCardIndex)
                  }
                  onClick={(cardName) => setSelectedCard(cardName)}
                />
              ))}

              {selectedCard !== null && (
                <motion.div
                  className="absolute inset-[0px] bg-black shadow-[0_0_30px_hsla(0,0%,100%,.4),0_0_50px_hsla(0,0%,100%,.3)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.2 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 1, ease: "easeInOut" },
                  }}
                >
                  <Card
                    index={1}
                    image={selectedCard}
                    start={{ y: 0 }}
                    end={{ y: 0 }}
                    style={{
                      left: "200px",
                      top: "50%",
                      marginTop: "0px",
                    }}
                  />
                  <div
                    className="absolute top-[10px] right-[20px] white cursor-pointer"
                    onClick={() => setSelectedCard(null)}
                    onKeyUp={() => setSelectedCard(null)}
                  >
                    &#x2716;
                  </div>

                  <Text />
                </motion.div>
              )}
            </AnimatePresence>
          </LayoutGroup>
        </div>
      </div>
    </>
  );
}

export default App;
