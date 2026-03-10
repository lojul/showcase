import { NextResponse } from 'next/server'
import path from 'path'
import { readdir } from 'fs/promises'

const ALLOWED_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg'])

function isSafeFolderName(folder: string) {
  // Only allow a single path segment: no slashes, no traversal.
  return /^[a-zA-Z0-9._-]+$/.test(folder)
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const folder = url.searchParams.get('folder') || ''

  if (!folder || !isSafeFolderName(folder)) {
    return NextResponse.json(
      { images: [], error: 'Invalid folder' },
      { status: 400 },
    )
  }

  const absDir = path.join(process.cwd(), 'public', 'featured', folder)

  try {
    const entries = await readdir(absDir, { withFileTypes: true })
    const images = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => ALLOWED_EXT.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name) => `/featured/${folder}/${name}`)

    return NextResponse.json({ images })
  } catch {
    return NextResponse.json(
      { images: [], error: 'Folder not found' },
      { status: 404 },
    )
  }
}

