import { Project } from "@/types/project"

const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN

export async function getVimeoVideoData(
  videoId: string
): Promise<Partial<Project>> {
  if (!VIMEO_ACCESS_TOKEN) {
    throw new Error("Vimeo access token is required")
  }

  const response = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
    headers: {
      Authorization: `bearer ${VIMEO_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch Vimeo data: ${response.statusText}`)
  }

  const data = await response.json()

  return {
    videoId,
    title: data.name,
    description: data.description,
    videoUrl: `https://vimeo.com/${videoId}`,
    thumbnail: data.pictures.sizes[3].link, // Using a larger thumbnail size
  }
}
