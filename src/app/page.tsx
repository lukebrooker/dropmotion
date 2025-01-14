import { CTAButton } from "@/components/CTAButton"
import projects from "@/data/projects.json"
import { Project } from "@/types/project"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-6'>
      <section className='py-20 space-y-12'>
        <p className='text-4xl md:text-5xl font-light mb-4 md:leading-tight [text-wrap:balance]'>
          We are the <span className='font-semibold'>drop</span>,<br />
          setting in <span className='font-semibold'>motion</span> a ripple
          <br />
          visual storytelling.
        </p>
        <p className='text-4xl md:text-5xl font-bold mb-4 [text-wrap:balance]'>
          Drop Motion
        </p>
        <p className='text-xl text-gray-500 max-w-2xl [text-wrap:balance]'>
          We transform your business vision into compelling visual stories that
          drive real results.
        </p>
      </section>

      <section className='py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project: Project) => (
            <Link
              key={project.id}
              href={`/project/${project.videoId}`}
              className='group relative aspect-video bg-gray-900 overflow-hidden'
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors' />
              <div className='absolute inset-0 p-8 flex flex-col justify-end text-white'>
                <h3 className='text-2xl font-light'>{project.title}</h3>
                <p className='text-sm opacity-80 line-clamp-2'>
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className='py-20 text-center'>
        <h2 className='text-3xl font-light mb-6'>Ready to tell your story?</h2>
        <CTAButton href='/contact'>Book a strategy session</CTAButton>
      </section>
    </div>
  )
}
