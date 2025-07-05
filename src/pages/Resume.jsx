// src/pages/Resume.jsx
export default function Resume() {
  return (
    <section data-aos="fade-up" id="resume" className="min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Abhishek Kumar</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Full Stack Developer • React · Node.js · Python
          </p>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            📍 New Delhi, Delhi • ✉️ <a href="mailto:jat.abhishek.99@gmail.com" className="underline">jat.abhishek.99@gmail.com</a>
          </p>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">B.Tech in Computer Science</h3>
              <p className="italic">Rajasthan Technical University, Kota (2017–2021)</p>
              <p className="text-gray-600 dark:text-gray-400">Focus: Data Structures, Algorithms, Full‑Stack Development.</p>
            </div>
            <div>
              <h3 className="font-semibold">Senior Secondary (Class XII)</h3>
              <p className="italic">Soni Tower School, Bharatpur (2016–2017)</p>
              <p className="text-gray-600 dark:text-gray-400">Top 5% in board exams.</p>
            </div>
          </div>
        </div>

        {/* Experience
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Full Stack Intern @ Stacknity Technologies</h3>
              <p className="italic">Aug 2023 – Dec 2023</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Built UI components for a travel platform using React.js.</li>
                <li>Collaborated to enhance UX and performance.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Embedded Developer Intern @ Microchip Technology</h3>
              <p className="italic">Sep 2023 – Nov 2023</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                <li>Developed BLE firmware using MPLAB X and XC32.</li>
              </ul>
            </div>
          </div>
        </div> */}

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Projects</h2>
          <ul className="space-y-4 text-gray-600 dark:text-gray-400">
            <li>
              <strong>Portfolio Website</strong>: Built with React, Tailwind CSS, deployed on Vercel. <a href="https://abhishek-kumar-pp.vercel.app/" target="_blank" className="underline">Live</a> • <a href="https://github.com/fauzdaar/Personal-Portfolio" target="_blank" className="underline">GitHub</a>.
            </li>
            <li>
              <strong>Chat App</strong>: Python-based app with realtime features. <a href="https://github.com/fauzdaar/chat-app" target="_blank" className="underline">GitHub</a>.
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React", "Node.js", "Python", "JavaScript",
              "Tailwind CSS", "Flask", "Git", "REST APIs"
            ].map((skill) => (
              <span
                key={skill}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">
            📧 <a href="mailto:jat.abhishek.99@gmail.com" className="underline">jat.abhishek.99@gmail.com</a> | 🌐 <a href="https://abhishek-kumar-pp.vercel.app/" target="_blank" className="underline">Portfolio Site</a>
          </p>
        </div>
      </div>
    </section>
  );
}
