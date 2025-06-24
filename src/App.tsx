import { useState } from "react";
import { Card } from "./Card";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

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
                <div className="absolute left-[320px] top-[35%] right-[40px] text-white text-xl md:left-[500px] md:text-2xl">
                  <p>
                    The Fool is the first card of the Major Arcana (numbered 0)
                    and represents new beginnings, innocence, and spontaneity.
                    The image shows a young person stepping off a cliff,
                    reminding us to trust our instincts and take bold leaps of
                    faith.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </div>
  );
}

export default App;
