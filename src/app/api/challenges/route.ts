let challenges: any[] = []

export async function GET() {
  return new Response(JSON.stringify(challenges), { status: 200 })
}

export async function POST(req: Request) {
  const { title, description, tags, imageUrl, link } = await req.json()
  const newChallenge = {
    id: Date.now(),
    title,
    description,
    tags,
    imageUrl,
    link,
  }
  challenges.push(newChallenge)
  return new Response(JSON.stringify(newChallenge), { status: 201 })
}
