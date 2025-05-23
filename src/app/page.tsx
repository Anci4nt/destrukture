

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#2d3748_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <nav className="flex justify-center py-10 relative z-10">
        <ul className="flex gap-10 px-10 py-4 rounded-full bg-gray-700/50 backdrop-blur-md shadow-lg">
          <li><a href="#" className="hover:text-blue-400">Home</a></li>
          <li><a href="/challenges" className="hover:text-blue-400">Challenges</a></li>
          <li><a href="#" className="hover:text-blue-400">Team</a></li>
          <li><a href="#" className="hover:text-blue-400">Articles</a></li>
        </ul>
      </nav>

      <section className="flex flex-col items-center px-4 py-20 text-center relative z-10">
        <button className="flex items-center gap-2 px-6 py-3 mb-8 text-white bg-gray-700 rounded-full shadow-md hover:bg-gray-600">
          Destrukture
        </button>

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Build & Discover Various UI Designs
        </h1>
        <p className="max-w-3xl text-lg text-gray-300 mb-10">
          Find and solve new design and user interface challenges that can help you to improve your overall frontend development skills. Our designs are easy, modern and minimalistic which are easier to make. We have challenges sorted by difficulties.
        </p>
        <p className="max-w-3xl text-lg text-gray-300 mb-10">
          We're here to help you build a community and connect with like-minded people.
        </p>

        <button className="flex items-center gap-2 px-6 py-3 text-white bg-gray-700 rounded-full shadow-md hover:bg-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          View Challenges
        </button>
      </section>
    </main>
  );
}
