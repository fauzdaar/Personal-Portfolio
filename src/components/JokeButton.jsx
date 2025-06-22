// src/components/JokeButton.jsx
import { useEffect, useState } from "react";

export default function JokeButton() {
  const [joke, setJoke] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
      const data = await res.json();
      setJoke(data?.joke || "Couldn't fetch joke.");
      setVisible(true);
      setTimeout(() => setVisible(false), 20000); // Auto-hide after 5s
    } catch {
      setJoke("Failed to load a joke. 😅");
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Fixed Button */}
      <button
        onClick={fetchJoke}
        className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full shadow-lg z-50 transition"
      >
        {loading ? "Loading..." : "😂 Tell me a joke"}
      </button>

      {/* Toast Popup */}
      {visible && (
        <div className="fixed bottom-20 right-6 max-w-sm p-4 bg-gray-900 text-white rounded-lg shadow-lg z-50 animate-fade-in">
          {joke}
        </div>
      )}
    </>
  );
}
