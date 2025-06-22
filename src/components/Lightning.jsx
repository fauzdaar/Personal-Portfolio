import { useEffect, useState } from "react";
import "./Lightning.css";

export default function Lightning() {
  const [bolts, setBolts] = useState([]);
  const [drops, setDrops] = useState([]);
  const [clouds, setClouds] = useState([]);

  // Lightning Effect
  useEffect(() => {
    let active = true;

    const createBolt = () => {
      if (!active) return;

      const id = Date.now();
      const bolt = generateLightningPath();
      setBolts((prev) => [...prev, { id, path: bolt }]);

      setTimeout(() => {
        setBolts((prev) => prev.filter((b) => b.id !== id));
      }, 400);

      const nextFlashIn = Math.random() * 7000 + 2000;
      setTimeout(createBolt, nextFlashIn);
    };

    createBolt();

    return () => {
      active = false;
    };
  }, []);

  // Rainfall Effect
  useEffect(() => {
    const generateRaindrops = () => {
      const drops = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        length: Math.random() * 15 + 10,
        delay: Math.random() * 2,
        duration: Math.random() * 1.5 + 1,
      }));
      setDrops(drops);
    };

    generateRaindrops();
    const interval = setInterval(generateRaindrops, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cloud Generation
  useEffect(() => {
    const generated = Array.from({ length: 6 }).map(() => ({
      id: crypto.randomUUID(),
      y: Math.random() * window.innerHeight * 0.3,
      size: 60 + Math.random() * 100,
      duration: 30 + Math.random() * 20,
    }));
    setClouds(generated);
  }, []);

  return (
    <>
      <svg
        className="lightning-svg"
        width={window.innerWidth}
        height={window.innerHeight}
        viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
      >
        {/* Lightning */}
        {bolts.map(({ id, path }) => (
          <path
            key={id}
            d={path}
            className="lightning-bolt"
            strokeWidth="2"
            fill="none"
          />
        ))}

        {/* Rain */}
        {drops.map((drop, idx) => (
          <line
            key={idx}
            x1={drop.x}
            y1={drop.y}
            x2={drop.x}
            y2={drop.y + drop.length}
            className="raindrop"
            style={{
              animationDelay: `${drop.delay}s`,
              animationDuration: `${drop.duration}s`,
            }}
          />
        ))}
      </svg>

      {/* Floating Clouds */}
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud"
          style={{
            top: cloud.y,
            width: cloud.size,
            height: cloud.size * 0.6,
            animationDuration: `${cloud.duration}s`,
          }}
        />
      ))}
    </>
  );
}

function generateLightningPath() {
  const startX = Math.random() * window.innerWidth;
  const startY = 0;
  const segments = 10;
  const stepY = window.innerHeight / segments;

  let path = `M${startX},${startY}`;
  let x = startX;
  let y = startY;

  for (let i = 0; i < segments; i++) {
    x += (Math.random() - 0.5) * 100;
    y += stepY;
    path += ` L${x},${y}`;
  }

  return path;
}
