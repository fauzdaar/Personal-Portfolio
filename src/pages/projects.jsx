export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with React, Tailwind CSS, and Vite.',
      link: 'https://abhishek-kumar-pp.vercel.app/',
      github: 'https://github.com/fauzdaar/Personal-Portfolio',
    },
    {
      title: 'Chat App',
      description: 'A Python-based chat app hosted locally with public access.',
      link: 'https://your-chat-app-link.com',
      github: 'xyz',
    },
  ];

  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 hover:border-gray-800 border shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
              >
              View Project →
            </a>
              </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              GitHub Repo →
            </a>
          </div>
        ))}
        <div className="bg-gray-800 border hover:border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">Tic Tac Toe</h2>
          <p className="text-gray-300 mb-4">Small timepass game to play when feeling stressed</p>
          <a 
            href="/tic-tac-toe"
            className="bg-blue-700 hover:bg-blue-800 py-2 px-6 rounded-2xl"
          >
            Play Game
          </a>
        </div>
        <div className="bg-gray-800 border hover:border-gray-800 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">Flappy Ball</h2>
          <p className="text-gray-300 mb-4">Small timepass game to play when feeling stressed</p>
          <a 
            href="/flappy-ball"
            className="bg-blue-700 hover:bg-blue-800 py-2 px-6 rounded-2xl"
          >
            Play Game
          </a>
        </div>
      </div>
    </section>
  );
}
