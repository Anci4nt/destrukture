import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const postId = parseInt(params.id)

  if (isNaN(postId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
  }

  try {
    await prisma.post.delete({ where: { id: postId } })
    return NextResponse.json({ message: 'Post deleted' }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }
}
