'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Article = {
  title: string
  content: string
}

type ArticleContextType = {
  articles: Article[]
  addArticle: (article: Article) => void
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined)

export const useArticleContext = () => {
  const context = useContext(ArticleContext)
  if (!context) {
    throw new Error('useArticleContext must be used inside ArticleProvider')
  }
  return context
}

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([])

  const addArticle = (article: Article) => {
    setArticles((prev) => [article, ...prev])
  }

  return (
    <ArticleContext.Provider value={{ articles, addArticle }}>
      {children}
    </ArticleContext.Provider>
  )
}
