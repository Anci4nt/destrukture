// src/app/api/posts/[id]/route.ts
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const postId = parseInt(params.id)

  if (isNaN(postId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
  }

  try {
    await prisma.post.delete({ where: { id: postId } })
    return NextResponse.json({ message: 'Post deleted' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }
}
