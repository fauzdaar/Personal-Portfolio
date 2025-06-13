import { Link } from "react-router-dom";

export default function Home() {
  return (
      <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 transition-colors duration-300">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Abhishek
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">
            I'm a Web Developer and Programmer, passionate about building clean,
            user-friendly Websites and Applications.
          </p>
          <div className="space-x-4">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition"
            >
              View Projects
            </Link>
            <Link
              to="/about"
              className="border border-white hover:bg-white hover:text-black py-2 px-6 rounded-md transition"
            >
              About Me
            </Link>
          </div>
        </div>
      </section>
  );
}
