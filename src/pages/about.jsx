export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-16 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center mb-6">👨‍💻 About Me</h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Hi! I'm Abhishek Kumar, a Full Stack Developer who loves crafting web experiences with modern tools like React, Flask, and Tailwind CSS. I enjoy solving real-world problems with clean, scalable code and beautiful design.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">🧠 Lifelong Learner</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I’m always exploring new tech, reading docs, and sharpening my problem-solving skills.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">⚙️ Tech Stack</h3>
            <p className="text-gray-700 dark:text-gray-300">
              React, Flask, Python, Tailwind CSS, PostgreSQL, Git, Vercel & more. I build full-stack solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">🎯 UI/UX Focus</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I believe in pixel-perfect design and making interfaces that feel intuitive and delightful.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-2">🚀 Career Goals</h3>
            <p className="text-gray-700 dark:text-gray-300">
              I aim to join a team that builds impactful tech and pushes boundaries with innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
