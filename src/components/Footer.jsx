import { FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white py-8 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: Branding */}
        <div className="text-lg font-semibold text-center md:text-left">
          © {new Date().getFullYear()} Abhishek Fauzdar
        </div>

        {/* Center: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/fauzdaar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="http://linkedin.com/in/abhishek-kumar-06774a149/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://instagram.com/fauzdaar_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:jat.abhishek.99@gmail.com"
            className="text-2xl hover:text-green-500 dark:hover:text-green-300 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Right Side: Links */}
        <div className="flex space-x-4 text-sm">
          <a href="/privacy" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition">
            Privacy
          </a>
          <a href="/terms" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
