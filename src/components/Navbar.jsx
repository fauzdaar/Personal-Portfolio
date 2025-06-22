import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar({ isSingle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const navLinkClass =
    "text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white text-lg px-2 py-1 rounded transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-700";
  const activeClass =
    "text-black dark:text-white font-semibold text-lg px-2 py-1 rounded bg-gray-200 dark:bg-gray-700";

  const handleCloseMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const renderLink = (to, label, forceHash = false) => {
    if (isSingle || forceHash) {
      return (
        <button
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              const el = document.getElementById(to);
              el?.scrollIntoView({ behavior: "smooth" });
            }, 100);
            handleCloseMenus();
          }}
          className={navLinkClass}
        >
          {label}
        </button>
      );
    } else {
      return (
        <NavLink
          to={`/${to === "home" ? "" : to}`}
          className={({ isActive }) => (isActive ? activeClass : navLinkClass)}
          onClick={handleCloseMenus}
        >
          {label}
        </NavLink>
      );
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 shadow-lg transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold text-black dark:text-white tracking-wide cursor-pointer hover:text-blue-500 dark:hover:text-cyan-400 transition">
          <button
            onClick={() => {
              isSingle
                ? window.scrollTo({ top: 0, behavior: "smooth" })
                : navigate("/");
            }}
            className="focus:outline-none"
          >
            Abhishek Kumar
          </button>
        </div>

        <ul className="hidden md:flex items-center space-x-4">
          <li>{renderLink("home", "Home")}</li>
          <li>{renderLink("projects", "Projects")}</li>
          <li>{renderLink("about", "About")}</li>
          <li>{renderLink("education", "Education")}</li>
          <li>{renderLink("skills", "Skills")}</li>
          <li>{renderLink("games", "Games")}</li>
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-800 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-white transition"
            >
              More ▾
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded shadow-lg z-50 p-2 space-y-2">
                <li className="hover:bg-gray-100 dark:hover:bg-gray-600 rounded px-2">
                  {renderLink("resume", "Resume")}
                </li>
                <li className="hover:bg-gray-100 dark:hover:bg-gray-600 rounded px-2">
                  {renderLink("contact", "Contact")}
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-black dark:text-white relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out my-1 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen py-4 px-6" : "max-h-0"
        } bg-white dark:bg-gray-800`}
      >
        <div className="flex flex-col space-y-3">
          {renderLink("home", "Home")}
          {renderLink("projects", "Projects")}
          {renderLink("about", "About")}
          {renderLink("education", "Education")}
          {renderLink("skills", "Skills")}
          {renderLink("games", "Games")}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-gray-800 dark:text-gray-300 text-lg hover:text-blue-600 dark:hover:text-white"
          >
            More ▾
          </button>
          {dropdownOpen && (
            <div className="pl-2 space-y-3">
              {renderLink("resume", "Resume")}
              {renderLink("contact", "Contact")}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
