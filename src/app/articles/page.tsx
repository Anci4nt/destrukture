'use client'

// import Link from 'next/link'
// import { useArticleContext } from '@/context/ArticleContext'
import Articles from '@/components/articles'; 


export default function ArticleDetail() {
  // const { articles } = useArticleContext()

  return (
<main>

        <div className="absolute inset-0 bg-[radial-gradient(#2d3748_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <Articles />

          {/* <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Team Articles</h1>
      <Link href="/" className="text-blue-500 underline">Back to Dashboard</Link>
      {articles.length === 0 ? (
        <p className="mt-4">No articles yet.</p>
      ) : (
        <div className="space-y-4 mt-6">
          {articles.map((article, idx) => (
            <div key={idx} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="mt-2">{article.content}</p>
            </div>
          ))}
        </div>
      )}
    </div> */}
    </main>
  )
}
