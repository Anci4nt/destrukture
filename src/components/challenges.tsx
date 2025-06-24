'use client'

import { useEffect, useState } from 'react'

type Challenge = {
  id: number
  title: string
  tags: string[]
  description: string
  imageUrl: string
  link?: string
}

export default function Challenges() {
  const [challenges, setChallenges] = useState<Challenge[]>([])

  useEffect(() => {
    const fetchChallenges = async () => {
      const res = await fetch('/api/challenges')
      const data = await res.json()
      setChallenges(data)
    }

    fetchChallenges()
  }, [])

  return (
    
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <nav className="flex justify-center py-10 relative z-10 animate-fadeInUp">
  <ul className="flex gap-10 px-10 py-4 rounded-full bg-gray-700/50 backdrop-blur-md shadow-lg">
    <li>
      <a href="/home" className="transition duration-300 hover:text-red-400 hover:scale-110">
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
      <section className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={challenge.imageUrl} alt={challenge.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{challenge.title}</h2>
              <div className="flex gap-2 flex-wrap mb-2">
                {challenge.tags.map((tag, idx) => (
                  <span key={idx} className="text-sm text-blue-400 font-semibold">{tag}</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4">{challenge.description}</p>
              {challenge.link && (
                <a href={challenge.link} target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white">
                    Get Started
                  </button>
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
