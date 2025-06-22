import { useNavigate } from "react-router-dom";

export default function Games({ isSingle }) {
  const navigate = useNavigate();

  const handleClick = (idOrRoute) => {
    if (isSingle) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(idOrRoute);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(`/${idOrRoute}`);
    }
  };

  const games = [
    {
      title: "Tic Tac Toe",
      description: "Play classic X & O in the browser.",
      bg: "from-pink-500 to-red-500",
      textColor: "text-white",
      buttonColor: "bg-white text-pink-700 hover:bg-gray-100",
      route: "tic-tac-toe",
      emoji: "🎮",
    },
    {
      title: "Flappy Ball",
      description: "Fly the ball through gaps for high scores!",
      bg: "from-yellow-300 to-orange-400",
      textColor: "text-black",
      buttonColor: "bg-black text-yellow-300 hover:bg-gray-900",
      route: "flappy-ball",
      emoji: "🕹️",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      id="games"
      className="min-h-screen bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-900 dark:text-white px-6 py-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in text-cyan-600 dark:text-cyan-400">
          🧩 Mini Games Hub
        </h2>

        <div className="grid md:grid-cols-2 gap-10 justify-center">
          {games.map((game, i) => (
            <div
              key={i}
              className={`rounded-3xl p-6 shadow-xl transform hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br ${game.bg} ${game.textColor}`}
            >
              <div className="text-3xl mb-4">{game.emoji}</div>
              <h3 className="text-2xl font-bold mb-2">{game.title}</h3>
              <p className="mb-6 text-md opacity-90">{game.description}</p>
              <button
                onClick={() => handleClick(game.route)}
                className={`px-5 py-2 rounded-full font-semibold transition duration-300 ${game.buttonColor}`}
              >
                {game.emoji} Play Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
