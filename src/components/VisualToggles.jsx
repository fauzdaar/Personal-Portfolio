import { useState, useEffect } from "react";
import { Settings, Sun, Moon } from "lucide-react";

export default function VisualToggles({
  isSingle,
  setIsSingle,
  showBug,
  setShowBug,
  showBubbles,
  setShowBubbles,
  showLightning,
  setShowLightning,
  handleModeSwitch,
}) {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light" ? false : true;
  });

  // Apply dark or light theme (overriding system preference)
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // Override browser preference (for testing)
    root.style.colorScheme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="fixed top-[4.25rem] left-4 z-40">
      {/* Gear Icon */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center shadow hover:bg-gray-700 transition"
        title="Visual Toggles"
      >
        <Settings size={20} />
      </button>

      {/* Animated Toggle Menu */}
      <div
        className={`transform transition-all origin-top-left duration-300 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        } mt-2 p-4 w-60 bg-white dark:text-white dark:bg-gray-900 text-black shadow-lg rounded-xl border dark:border-gray-700 space-y-3`}
      >
        {/* Theme Toggle */}
        <div className="flex justify-between items-center">
          <span className="text-sm">Dark Mode</span>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="text-yellow-400 hover:text-yellow-500 transition"
            title="Toggle Dark/Light Mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <ToggleSwitch
          label="Single Page Mode"
          isOn={isSingle}
          color="bg-green-500"
          onToggle={handleModeSwitch}
        />
        <ToggleSwitch
          label="Bug Follower"
          isOn={showBug}
          color="bg-red-500"
          onToggle={() => setShowBug((prev) => !prev)}
        />
        <ToggleSwitch
          label="Bubbles"
          isOn={showBubbles}
          color="bg-cyan-500"
          onToggle={() => setShowBubbles((prev) => !prev)}
        />
        <ToggleSwitch
          label="Lightning"
          isOn={showLightning}
          color="bg-yellow-400"
          onToggle={() => setShowLightning((prev) => !prev)}
        />
      </div>
    </div>
  );
}

function ToggleSwitch({ label, isOn, onToggle, color }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm">{label}</span>
      <button
        onClick={onToggle}
        className={`w-12 h-6 flex items-center rounded-full p-1 shadow-inner transition-colors duration-300 ${
          isOn ? color : "bg-gray-600"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-300 ${
            isOn ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
