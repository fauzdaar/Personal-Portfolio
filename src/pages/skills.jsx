export default function Skills() {
  const skillCategories = {
    "Programming": ["C", "C++", "Python"],
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "Backend": ["Node.js", "Flask"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Netlify", "Vercel"],
    "Other": ["REST APIs", "Responsive Design", "SEO Basics", "Problem Solving"]
  };

  const skillLogos = {
    "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Tailwind CSS": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    "Netlify": "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    "Vercel": "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
    "REST APIs": "https://img.icons8.com/ios-filled/100/api.png",
    "Responsive Design": "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
    "SEO Basics": "https://cdn-icons-png.flaticon.com/512/3843/3843474.png",
    "Problem Solving": "https://img.icons8.com/ios-filled/100/brain.png",
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white px-6 py-16 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-500 dark:text-cyan-400 drop-shadow">
          🛠 My Skillset
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="bg-white dark:bg-white/10 dark:backdrop-blur-md dark:border dark:border-white/10 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-300 mb-4 border-b border-cyan-300 dark:border-cyan-800 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 mt-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex flex-col items-center text-center hover:scale-110 transition transform duration-300 group"
                  >
                    <div className="bg-white/40 dark:bg-white/10 dark:backdrop-blur-md rounded-lg p-3 border border-gray-300 dark:border-white/10 shadow-inner group-hover:shadow-cyan-400/40">
                      <img
                        src={skillLogos[skill]}
                        alt={skill}
                        className="w-10 h-10 object-contain"
                        title={skill}
                      />
                    </div>
                    <span className="mt-2 text-sm text-gray-700 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
