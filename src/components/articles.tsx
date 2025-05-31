'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Article = {
  id: number
  title: string
  content: string
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch('/api/posts')
      if (!res.ok) return
      const data = await res.json()
      setArticles(data)
    }

    fetchArticles()
  }, [])

  const handleDelete = async (e: React.MouseEvent, id: number) => {
    e.stopPropagation()
    e.preventDefault()
    await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    setArticles((prev) => prev.filter((a) => a.id !== id))
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Latest Articles</h1>
      {articles.length === 0 ? (
        <p className="text-gray-500">No articles posted yet.</p>
      ) : (
        <ul className="space-y-6">
          {articles.map((article) => (
            <li key={article.id} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition relative">
              <Link href={`/articles/${article.id}`}>
                <h2 className="text-2xl font-semibold text-blue-600 hover:underline">{article.title}</h2>
                <p className="text-gray-700 mt-3 line-clamp-3">{article.content}</p>
              </Link>
              <button
                onClick={(e) => handleDelete(e, article.id)}
                className="absolute top-4 right-4 text-sm text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
