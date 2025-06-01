import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import type { NextApiRequest } from 'next'

type Context = {
  params: {
    id: string
  }
}

export async function DELETE(request: NextRequest, { params }: Context) {
  const id = parseInt(params.id)

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
  }

  try {
    await prisma.post.delete({ where: { id } })
    return NextResponse.json({ message: 'Post deleted' }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  }
}
