'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Trash2 } from 'lucide-react'

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
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">📰 Articles</h1>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No articles posted yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div className="flex-grow">
                <Link href={`/articles/${article.id}`}>
                  <h2 className="text-2xl font-semibold text-blue-700 hover:underline mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-700 text-sm line-clamp-3">{article.content}</p>
                </Link>
              </div>

              <button
                onClick={() => handleDelete(article.id)}
                className="flex items-center text-red-500 mt-4 text-sm hover:text-red-600"
              >
                <Trash2 size={16} className="mr-1" />
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
