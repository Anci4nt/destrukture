
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const challenges = await prisma.challenge.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(challenges)
}

export async function POST(req: Request) {
  const body = await req.json()

  const { title, description, tags, imageUrl, link } = body

  if (!title || !description || !tags || !imageUrl) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const challenge = await prisma.challenge.create({
    data: {
      title,
      description,
      tags,
      imageUrl,
      link,
    },
  })

  return NextResponse.json(challenge, { status: 201 })
}