import projects from "@/data/projects.json"
import { VIDEO_IDS } from "@/lib/constants"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return VIDEO_IDS.map((id) => ({
    id,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.videoId === id)

  if (!project) {
    notFound()
  }

  return (
    <div className='max-w-7xl mx-auto px-6'>
      <section className='py-20'>
        <h1 className='text-4xl md:text-5xl font-light mb-6'>
          {project.title}
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl'>
          {project.description}
        </p>

        <div className='relative aspect-video w-full bg-gray-900 mb-12'>
          <iframe
            src={`https://player.vimeo.com/video/${id}?h=00000000&title=0&byline=0&portrait=0&controls=1&dnt=1&autoplay=0`}
            className='absolute inset-0 w-full h-full'
            allow='fullscreen; picture-in-picture'
            allowFullScreen
            title={`${project.title} video`}
          />
        </div>

        <div className='flex justify-between items-center'>
          <Link
            href='/'
            className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors inline-flex items-center group'
          >
            <span className='mr-2 opacity-60 group-hover:opacity-100 transition-opacity rotate-180'>
              →
            </span>
            <span className='transition-transform duration-300 group-hover:-translate-x-2'>
              Back to projects
            </span>
          </Link>
          <a
            href={project.videoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors inline-flex items-center group'
          >
            <span className='transition-transform duration-300 group-hover:translate-x-2'>
              View on Vimeo
            </span>
            <span className='ml-2 opacity-60 group-hover:opacity-100 transition-opacity'>
              →
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}
