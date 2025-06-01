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

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    const res = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      setArticles((prev) => prev.filter((a) => a.id !== id))
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Latest Articles</h1>
      {articles.length === 0 ? (
        <p className="text-gray-500 text-center">No articles posted yet.</p>
      ) : (
        <ul className="space-y-6">
          {articles.map((article) => (
            <li
              key={article.id}
              className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <div className="flex items-start justify-between">
                <Link href={`/articles/${article.id}`} className="flex-1">
                  <h2 className="text-xl font-semibold text-blue-700 hover:underline">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 mt-2 line-clamp-2">{article.content}</p>
                </Link>
                <button
                  onClick={() => handleDelete(article.id)}
                  className="text-red-500 text-sm ml-4 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
