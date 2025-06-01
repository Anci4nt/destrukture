import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, content } = body

    if (!title || !content) {
      return NextResponse.json({ error: 'Missing title or content' }, { status: 400 })
    }

    const newPost = await prisma.post.create({
      data: { title, content },
    })

    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error('[POST /api/posts] Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
