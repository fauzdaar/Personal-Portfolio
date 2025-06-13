export default function Skills() {
  const skillCategories = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "MongoDB"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Netlify", "Vercel"],
    "Other": ["REST APIs", "Responsive Design", "SEO Basics"]
  };

  return (
    <section className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white px-6 py-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">🛠 Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-600 pb-2">{category}</h3>
              <ul className="list-disc list-inside space-y-2">
                {skills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
