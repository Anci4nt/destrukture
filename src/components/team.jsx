export default function Team() {
  const team = [
    { name: "anci4nttt.", role: "Lead Developer", username: "@ancxx", image: "/images/1212.jpg" },
    // Add more members here if needed
  ];

  const isSingle = team.length === 1;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans relative overflow-hidden">
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
      <div className="absolute inset-0 bg-[radial-gradient(#2d3748_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

     

      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
      <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-12 text-center">
      Currently destrukture only have 1 team member
      </p>
      <div
        className={`grid gap-8 ${
          isSingle ? "place-items-center" : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        }`}
      >
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow w-72"
          >
<img
  src={member.image}
  alt={member.name}
  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-2 border-gray-600"
/>
            <h3 className="text-xl font-semibold text-center">{member.name}</h3>
            <p className="text-sm text-blue-400 text-center">{member.role}</p>
            <p className="text-xs text-gray-400 text-center">{member.username}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
