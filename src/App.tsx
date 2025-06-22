import { useState } from "react";
import { Card } from "./Card";

const cards = [
  "the-fool",
  "temperance",
  "hierophant",
  "hermit",
  "empress",
  "chariot",
].map((name, index) => ({
  image: name,
  end: { y: index * -20 },
  delay: 0.1 * index,
}));

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState<number | null>(null);
  return (
    <div className="h-screen bg-black">
      <div className="max-w-[1000px] h-screen border mx-auto relative">
        {cards.map((card, index) => (
          <Card
            key={card.image}
            {...card}
            currentCardIndex={currentCardIndex}
            index={index}
            onHover={(hoveredCardIndex) =>
              setCurrentCardIndex(hoveredCardIndex)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default App;
