import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const idParam = context.params.id
  const postId = parseInt(idParam)

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
