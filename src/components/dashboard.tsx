'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !content) return

    await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    })

    setTitle('')
    setContent('')
    router.push('/articles')
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Create a New Article</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your content here..."
          rows={6}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Publish Article
        </button>
      </form>
    </div>
  )
}
