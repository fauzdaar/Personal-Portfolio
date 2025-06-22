import { useEffect, useRef, useState } from "react";

export default function BubbleDrop() {
  const [bubbles, setBubbles] = useState([]);
  const idRef = useRef(0);

  useEffect(() => {
    const spawnBubble = () => {
      const newBubble = {
        id: idRef.current++,
        x: Math.random() * window.innerWidth,
        size: 10 + Math.random() * 20,
        duration: 4000 + Math.random() * 2000,
      };

      setBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
      }, newBubble.duration);
    };

    const interval = setInterval(spawnBubble, 300); // Every 300ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="fixed bottom-0 rounded-full bg-cyan-300 opacity-70 pointer-events-none z-[9998]"
          style={{
            left: bubble.x,
            width: bubble.size,
            height: bubble.size,
            animation: `bubbleUp ${bubble.duration}ms ease-out`,
          }}
        ></div>
      ))}

      {/* Animation Styles */}
      <style>{`
        @keyframes bubbleUp {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
