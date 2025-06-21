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
  rotateX: "25deg",
  rotateZ: `${-10 + Math.random() * 20}deg`,
  end: { y: index * -5 },
  delay: 0.1 * index,
}));

function App() {
  return (
    <div className="h-screen bg-black">
      <div className="max-w-[1000px] h-screen border mx-auto relative">
        {cards.map((card) => (
          <Card key={card.image} {...card} />
        ))}
      </div>
    </div>
  );
}

export default App;
