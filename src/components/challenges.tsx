export default function Challenges() {
  const challenges = [
    {
      title: "Portfolio",
      tags: ["Framer", "idk"],
      description:
        "First Idk.",
      imageUrl: "/images/project1.png",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#2d3748_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
<nav className="flex justify-center py-10 relative z-10 animate-fadeInUp">
  <ul className="flex gap-10 px-10 py-4 rounded-full bg-gray-700/50 backdrop-blur-md shadow-lg">
    <li>
      <a href="#" className="transition duration-300 hover:text-red-400 hover:scale-110">
        Home
      </a>
    </li>
    <li>
      <a href="/challenges" className="transition duration-300 hover:text-blue-400 hover:scale-110">
        Challenges
      </a>
    </li>
    <li>
      <a href="/team" className="transition duration-300 hover:text-green-400 hover:scale-110">
        Team
      </a>
    </li>
    <li>
      <a href="#" className="transition duration-300 hover:text-orange-400 hover:scale-110">
        Articles
      </a>
    </li>
  </ul>
</nav>

      <section className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src={challenge.imageUrl}
              alt={challenge.title}
              className="w-full h-50 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{challenge.title}</h2>
              <div className="flex gap-4 mb-4">
                {challenge.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-sm font-bold ${tag === "Framer" ? "text-blue-400" : "text-red-400"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">{challenge.description}</p>
              <a href="https://sociable-position-761303.framer.app">
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white">
                Get Started
              </button>
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
