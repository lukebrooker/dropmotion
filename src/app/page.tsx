import { CTAButton } from "@/components/CTAButton"
import { ProjectLink } from "@/components/ProjectLink"
import projects from "@/data/projects.json"
import { toUrlPath } from "@/lib/utils"
import { Project } from "@/types/project"

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto px-6'>
      <section className='py-10 md:py:20 space-y-8 md:space-y-12'>
        <h1 className='sr-only'>Drop Motion - Creative video agency</h1>
        <p className='text-4xl md:text-5xl font-light mb-4 md:leading-tight [text-wrap:balance] max-w-2xl'>
          We are the <span className='font-medium'>drop</span>, setting in{" "}
          <span className='font-medium'>motion</span> a ripple through visual
          storytelling.
        </p>
        <p className='text-4xl md:text-5xl font-bold mb-4 [text-wrap:balance]'>
          Drop Motion
        </p>
        <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl [text-wrap:balance]'>
          We transform your business vision into compelling visual stories that
          drive real results.
        </p>
      </section>

      <section className='py-20' aria-labelledby='projects-heading'>
        <h2 id='projects-heading' className='sr-only'>
          Our projects
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects
            .filter((project) => project.status !== "draft")
            .map((project: Project) => (
              <ProjectLink
                key={project.id}
                project={project}
                href={`/project/${toUrlPath(project.title)}`}
              />
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
