import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaEye, FaGithub } from 'react-icons/fa6'

const ProjectCard = ({img, title, description, github, video}: {img: string; title: string; description: string; github: string; video: string;}) => {
  return (
    <div className="border border-gray-600 rounded-md">
      <Image width={500} height={500} src={img} alt={title} className="rounded-md object-cover w-[500px]" />
      <div className="p-4">
        <h4 className="text-xl pt-3 font-semibold text-gray-300">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex justify-center items-center gap-3 my-4">
          <Link href={github} className="px-3 py-1 gap-3 flex items-center justify-center rounded-full bg-gray-900 text-white"><FaGithub />Github</Link>
          <Link href={video} className="px-3 py-1 gap-3 flex items-center justify-center rounded-full bg-gray-300 text-black"><FaEye />Demo Video</Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
