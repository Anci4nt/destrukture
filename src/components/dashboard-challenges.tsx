'use client'

import { useEffect, useState } from 'react'

type Challenge = {
  id: number
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
}

export default function DashboardChallenges() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [link, setLink] = useState('')
  const [challenges, setChallenges] = useState<Challenge[]>([])

  useEffect(() => {
    fetchChallenges()
  }, [])

  const fetchChallenges = async () => {
    const res = await fetch('/api/challenges')
    const data = await res.json()
    setChallenges(data)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !description || !tags || !imageUrl) return

    const res = await fetch('/api/challenges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        tags: tags.split(',').map((tag) => tag.trim()),
        imageUrl,
        link,
      }),
    })

    if (res.ok) {
      setTitle('')
      setDescription('')
      setTags('')
      setImageUrl('')
      setLink('')
      fetchChallenges()
    } else {
      alert('Failed to post challenge')
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this challenge?')) return

    const res = await fetch(`/api/challenges/${id}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      setChallenges((prev) => prev.filter((c) => c.id !== id))
    } else {
      alert('Failed to delete')
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Create New Challenge</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-3 border rounded-lg text-black"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full p-3 h-28 border rounded-lg text-black"
        />
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma-separated)"
          className="w-full p-3 border rounded-lg text-black"
        />
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          className="w-full p-3 border rounded-lg text-black"
        />
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Optional Link"
          className="w-full p-3 border rounded-lg text-black"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Post Challenge
        </button>
      </form>

      <h3 className="text-2xl font-bold mb-4">Existing Challenges</h3>
      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <div>
              <h4 className="text-xl font-semibold">{challenge.title}</h4>
              <p className="text-sm text-gray-300">{challenge.description}</p>
              <div className="text-sm text-blue-400 mt-1">
                Tags: {challenge.tags.join(', ')}
              </div>
            </div>
            <button
              onClick={() => handleDelete(challenge.id)}
              className="text-red-500 hover:text-red-600 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
