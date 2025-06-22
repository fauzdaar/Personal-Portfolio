import { useEffect, useRef, useState } from "react";

export default function BugFollower() {
  const SEGMENT_COUNT = 10;       // More segments = smoother trail
  const SPEED = 0.05;             // Lower speed = slower movement

  const [positions, setPositions] = useState(
    Array.from({ length: SEGMENT_COUNT }, () => ({ x: 0, y: 0 }))
  );
  const targetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      setPositions((prev) => {
        const newPositions = [...prev];

        // Move the head towards the cursor
        newPositions[0] = {
          x: newPositions[0].x + (targetRef.current.x - newPositions[0].x) * SPEED,
          y: newPositions[0].y + (targetRef.current.y - newPositions[0].y) * SPEED,
        };

        // Each segment follows the previous one
        for (let i = 1; i < SEGMENT_COUNT; i++) {
          newPositions[i] = {
            x: newPositions[i].x + (newPositions[i - 1].x - newPositions[i].x) * SPEED,
            y: newPositions[i].y + (newPositions[i - 1].y - newPositions[i].y) * SPEED,
          };
        }

        return newPositions;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {positions.map((pos, i) => (
        <div
          key={i}
          className="pointer-events-none fixed z-[9999] transition-transform ease-out"
          style={{
            top: pos.y,
            left: pos.x,
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 1 - i * 0.05,
          }}
        >
          <div
            className="w-4 h-4 rounded-full border border-black shadow-md"
            style={{
              backgroundColor: i === 0 ? "#dc2626" : "#fca5a5", // red head, lighter body
            }}
          />
        </div>
      ))}
    </>
  );
}
