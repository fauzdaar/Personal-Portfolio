import React from "react";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (Computer Science)",
      institution: "Rajasthan Technical University, Kota, Rajasthan",
      year: "2019 - 2023",
      description:
        "Focused on software engineering, data structures, algorithms, and full-stack web development. Participated in coding contests and hackathons.",
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "Soni Tower School, Bharatpur, Rajasthan",
      year: "2016 - 2017",
      description:
        "Studied Physics, Chemistry, and Mathematics. Secured top 5% in the board examination.",
    },
    {
      degree: "Secondary School (Class X)",
      institution: "Soni Tower School, Bharatpur, Rajasthan",
      year: "2013 - 2014",
      description:
        "Achieved distinction with a strong foundation in science and mathematics.",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      id="education"
      className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 text-black dark:text-white py-16 px-6 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">🎓 Education</h2>

        <div className="relative border-l-4 border-cyan-500 pl-6">
          {educationData.map((item, index) => (
            <div key={index} className="mb-10 relative">
              <div className="absolute left-[-1.25rem] top-2 w-4 h-4 rounded-full bg-cyan-500 border-2 border-white dark:border-gray-900 shadow" />

              <h3 className="text-2xl font-semibold">{item.degree}</h3>
              <p className="text-cyan-600 dark:text-cyan-400 font-medium">{item.institution}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.year}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
