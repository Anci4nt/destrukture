'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardChallenges() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [link, setLink] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !description || !tags || !imageUrl) return

    await fetch('/api/challenges', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        tags: tags.split(',').map(tag => tag.trim()),
        imageUrl,
        link,
      }),
    })

    setTitle('')
    setDescription('')
    setTags('')
    setImageUrl('')
    setLink('')
    router.push('/challenges')
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Create New Challenge</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full p-3 border rounded-lg" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full p-3 h-28 border rounded-lg" />
        <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma-separated)" className="w-full p-3 border rounded-lg" />
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" className="w-full p-3 border rounded-lg" />
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} placeholder="Optional Link" className="w-full p-3 border rounded-lg" />
        <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700">Post Challenge</button>
      </form>
    </div>
  )
}
