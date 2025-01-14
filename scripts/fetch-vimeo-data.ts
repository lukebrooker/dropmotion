import { config } from "dotenv"
import { writeFileSync } from "fs"
import { join } from "path"
import { VIDEO_IDS } from "../src/lib/constants"
import { Project } from "../src/types/project"

// Load environment variables from .env file
config()

const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN

async function getVimeoVideoData(videoId: string): Promise<Partial<Project>> {
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
    thumbnail: data.pictures.sizes[3].link,
  }
}

async function main() {
  try {
    console.log("Fetching Vimeo data...")
    const projects = await Promise.all(
      VIDEO_IDS.map(async (videoId, index) => ({
        id: index + 1,
        ...(await getVimeoVideoData(videoId)),
      }))
    )

    // Write to src/data directory
    const dataDir = join(process.cwd(), "src", "data")
    writeFileSync(
      join(dataDir, "projects.json"),
      JSON.stringify(projects, null, 2)
    )

    console.log(`Successfully fetched data for ${projects.length} projects`)
  } catch (error) {
    console.error("Failed to fetch project data:", error)
    process.exit(1)
  }
}

main()
