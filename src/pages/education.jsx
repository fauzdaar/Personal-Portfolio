export default function Education() {
  const courses = [
    {
      course: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science & Engineering",
      school: "Rajasthan Technical University (RTU), 2017 - 2021",
    },
    {
      course: "Senior Secondary (Class 12)",
      branch: "Science Stream (PCM)",
      school: "Sony Tower Sr. Sec. School, 2016-2017",
    },
    {
      course: "Secondary (Class 10)",
      branch: "General Curriculum",
      school: "Sony Tower Sr. Sec. School, 2013-2014",
    },
  ];
  return (
    <section className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white py-12 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">🎓 Education</h2>

        <div className="space-y-8">
          {courses.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow transition"
            >
              <h3 className="text-2xl font-semibold mb-1">{item.course}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.branch}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.school}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
