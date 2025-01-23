import { config } from "dotenv"
import { writeFileSync } from "fs"
import { join } from "path"
import { VIDEO_IDS } from "../src/lib/constants"
import { Project } from "../src/types/project"

// Load environment variables from .env file
config()

const VIMEO_ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN

async function getVimeoVideoData(
  videoId: string
): Promise<Partial<Project> | null> {
  if (!VIMEO_ACCESS_TOKEN) {
    throw new Error("Vimeo access token is required")
  }

  try {
    const response = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
      headers: {
        Authorization: `bearer ${VIMEO_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    })

    if (!response.ok) {
      const error = await response.json()
      console.error(`Error fetching video ${videoId}:`, error)
      return null
    }

    const data = await response.json()

    return {
      videoId,
      title: data.name,
      description: data.description,
      videoUrl: `https://vimeo.com/${videoId}`,
      thumbnail: data.pictures.sizes[3].link,
    }
  } catch (error) {
    console.error(`Failed to fetch data for video ${videoId}:`, error)
    return null
  }
}

async function main() {
  try {
    console.log("Fetching Vimeo data...")
    let currentId = 1

    const projects = (
      await Promise.all(
        VIDEO_IDS.map(async (videoId) => {
          const data = await getVimeoVideoData(videoId)
          if (!data) return null
          return {
            id: currentId++,
            ...data,
          }
        })
      )
    ).filter((project): project is Project => project !== null)

    // Write to src/data directory
    const dataDir = join(process.cwd(), "src", "data")
    writeFileSync(
      join(dataDir, "projects.json"),
      JSON.stringify(projects, null, 2)
    )

    console.log(`Successfully fetched data for ${projects.length} projects`)
    if (projects.length < VIDEO_IDS.length) {
      console.log(
        `Warning: ${
          VIDEO_IDS.length - projects.length
        } videos were skipped due to errors`
      )
    }
  } catch (error) {
    console.error("Failed to fetch project data:", error)
    process.exit(1)
  }
}

main()
