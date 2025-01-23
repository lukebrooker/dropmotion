"use client"

import { startViewTransition } from "@/lib/utils"
import { Project } from "@/types/project"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

type ProjectLinkProps = {
  project: Project
  href: string
}

export function ProjectLink({ project, href }: ProjectLinkProps) {
  const router = useRouter()

  const handleNavigate = (e: React.MouseEvent) => {
    e.preventDefault()
    startViewTransition(() => {
      router.push(href)
    })
  }

  return (
    <Link
      href={href}
      onClick={handleNavigate}
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
        <h3 id={`project-${project.id}-title`} className='text-2xl font-light'>
          {project.title}
        </h3>
        {project.description && (
          <p className='text-sm opacity-80 line-clamp-2'>
            {project.description}
          </p>
        )}
      </div>
    </Link>
  )
}
