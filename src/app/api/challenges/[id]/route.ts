import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import type { NextApiRequest } from 'next' // optional, if using with fallback routes

export async function DELETE(
  req: NextRequest,
  { params }: any
) {
  const id = parseInt(params.id)

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 })
  }

  try {
    await prisma.challenge.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Challenge not found' }, { status: 404 })
  }
}
