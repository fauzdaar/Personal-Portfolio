import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: Branding or Name */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Abhishek Fauzdar
        </div>

        {/* Center: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/fauzdaar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-2xl hover:text-blue-400">
              <FaGithub />
            </i>
          </a>
          <a
            href="http://linkedin.com/in/abhishek-kumar-06774a149/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-2xl hover:text-blue-400">
              <FaLinkedinIn />
            </i>
          </a>
          <a
            href="https://instagram.com/fauzdaar_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="text-2xl hover:text-blue-400">
              <FaInstagram />
            </i>
          </a>

          <a href="mailto:jat.abhishek.99@gmail.com">
            <i className="fas fa-envelope text-2xl hover:text-blue-400"><FaEnvelope /></i>
          </a>
        </div>

        {/* Right Side: Links */}
        <div className="flex space-x-4">
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/terms" className="hover:underline">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
