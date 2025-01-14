import { CTAButton } from "@/components/CTAButton"
import projects from "@/data/projects.json"
import { toUrlPath } from "@/lib/utils"
import { Project } from "@/types/project"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-6'>
      <section className='py-20 space-y-12'>
        <h1 className='sr-only'>Drop Motion - Creative video agency</h1>
        <p className='text-4xl md:text-5xl font-light mb-4 md:leading-tight [text-wrap:balance]'>
          We are the <span className='font-normal'>drop</span>,<br />
          setting in <span className='font-normal'>motion</span> a ripple
          through
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

      <section className='py-20' aria-labelledby='projects-heading'>
        <h2 id='projects-heading' className='sr-only'>
          Our projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project: Project) => (
            <Link
              key={project.id}
              href={`/project/${toUrlPath(project.title)}`}
              className='group relative aspect-video bg-gray-900 overflow-hidden'
              aria-labelledby={`project-${project.id}-title`}
            >
              <Image
                src={project.thumbnail}
                alt=''
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
                aria-hidden='true'
              />
              <div
                className='absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors'
                aria-hidden='true'
              />
              <div className='absolute inset-0 p-8 flex flex-col justify-end text-white'>
                <h3
                  id={`project-${project.id}-title`}
                  className='text-2xl font-light'
                >
                  {project.title}
                </h3>
                {project.description && (
                  <p className='text-sm opacity-80 line-clamp-2'>
                    {project.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className='py-20 text-center' aria-labelledby='cta-heading'>
        <h2
          id='cta-heading'
          className='text-3xl font-light mb-6 [text-wrap:balance]'
        >
          Ready to tell your story?
        </h2>
        <CTAButton href='/contact'>Book a strategy session</CTAButton>
      </section>
    </div>
  )
}
