import { Link } from "react-router-dom";

export default function Projects({ isSingle }) {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React, Tailwind CSS, and Vite.",
      link: "https://abhishek-kumar-pp.vercel.app/",
      github: "https://github.com/fauzdaar/Personal-Portfolio",
    },
    {
      title: "Chatting and Gaming",
      description: "A firebase + react project for chatting and multiplayer gaming.",
      link: "https://firebase-minigames.vercel.app/",
      github: "https://github.com/fauzdaar/firebase-minigames",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      id="projects"
      className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-16 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          🚀 My Projects
        </h2>

        <div className="w-full flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="max-w-sm w-full bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-col gap-2 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md text-center transition"
                >
                  🌐 View Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium px-4 py-2 rounded-md text-center transition"
                >
                  💻 GitHub Repo
                </a>
              </div>
            </div>
          ))}

          {!isSingle && (
            <>
              <div className="max-w-sm w-full bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Tic Tac Toe</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Small timepass game to play when feeling stressed.
                  </p>
                </div>
                <Link
                  to="/tic-tac-toe"
                  className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-2 rounded-md text-center transition mt-auto"
                >
                  🎮 Play Game
                </Link>
              </div>

              <div className="max-w-sm w-full bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Flappy Ball</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    A flappy bird-style game built for fun breaks.
                  </p>
                </div>
                <Link
                  to="/flappy-ball"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-md text-center transition mt-auto"
                >
                  🕹️ Play Game
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
