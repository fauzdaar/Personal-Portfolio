import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-white font-semibold text-xl'
      : 'text-gray-300 hover:text-white text-xl transition';

  return (
    <header className="sticky top-0 bg-gray-800 shadow z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-white">
          <a href="/">Abhishek Kumar</a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/education" className={navLinkClass}>Education</NavLink></li>
          <li><NavLink to="/skills" className={navLinkClass}>Skills</NavLink></li>

          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-gray-300 text-xl hover:text-white focus:outline-none"
            >
              More ▾
            </button>
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-gray-700 border rounded shadow">
                <li><NavLink to="/" className="block px-4 py-2 text-white hover:bg-gray-600">Resume</NavLink></li>
                <li><NavLink to="/contact" className="block px-4 py-2 text-white hover:bg-gray-600">Contact</NavLink></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 text-white relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out my-1 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              menuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu with Shutter Animation */}
      <div
        className={`md:hidden overflow-hidden bg-gray-800 text-white transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div
          className={`transform transition-all duration-500 ease-in-out ${
            menuOpen ? 'translate-y-0 opacity-100 pt-4 px-4' : '-translate-y-5 opacity-0 px-4'
          } space-y-2`}
        >
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink><br />
          <NavLink to="/projects" className={navLinkClass} onClick={() => setMenuOpen(false)}>Projects</NavLink><br />
          <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink><br />
          <NavLink to="/education" className={navLinkClass} onClick={() => setMenuOpen(false)}>Education</NavLink><br />
          <NavLink to="/skills" className={navLinkClass} onClick={() => setMenuOpen(false)}>Skills</NavLink><br />

          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-gray-300 text-xl hover:text-white"
          >
            More ▾
          </button>

          {dropdownOpen && (
            <div className="ml-4 space-y-2">
              <a href="#" className="text-xl block text-white">Resume</a>
              <NavLink to="/contact" className="text-xl block text-white">Contact</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
