import profileImg from "../assets/profile.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white px-4 transition-colors duration-500"
    >
      <div className="max-w-4xl w-full text-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full border-4 border-blue-500 shadow-lg mb-6"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Abhishek Kumar
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light mb-8">
          Full Stack Developer | React · Python · Flask · Tailwind CSS | UI/UX Enthusiast
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md shadow transition-all duration-300"
          >
            🚀 View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="border border-gray-400 dark:border-gray-300 hover:bg-gray-200 dark:hover:bg-white hover:text-black dark:hover:text-black text-gray-800 dark:text-white font-medium px-6 py-3 rounded-md transition-all duration-300"
          >
            📄 Download Resume
          </a>
        </div>

        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/fauzdaar/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-7 h-7 dark:invert"
            />
          </a>
          <a
            href="http://linkedin.com/in/abhishek-kumar-06774a149/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-7 h-7 dark:invert"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
