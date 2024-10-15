import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import ProjectCard from './Card'
import projects from '../data/projects'
import Link from 'next/link'

const Projects = ({title, limit, btnText, btnLink}: {title: string, limit?:number, btnText: string, btnLink: string}) => {
    const projectsToShow = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="my-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        {title == 'no' ? null : <div className="flex items-center my-4 justify-between" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <h3 className="text-2xl py-3 font-semibold text-gray-300">{title}</h3>
          <Link href={btnLink} className="px-3 bg-gray-700 text-white hover:text-green-500 inline-flex items-center justify-center gap-3 py-2 rounded-md group transition-all duration-300 ease-linear" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">{btnText} <BsArrowRight size={20} className="transition-all duration-300 ease-linear group-hover:translate-x-1 group-hover:scale-110" /></Link>
        </div>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
          {projectsToShow.map((project: {img: string; title: string; description: string; github: string; video: string;}, index: number) => {
            return (
                <ProjectCard key={index} img={project.img} title={project.title} description={project.description} github={project.github} video={project.video}  />
            )
          })}
          <p className='text-xs text-center text-gray-400'>You can view more projects on <Link className='text-green-400 underline' href={"https://github.com/sarfarazunarr"}>Github</Link> and on <Link className='text-green-400 underline' href={"https://www.linkedin.com/in/sarfarazunar/"}>Linkedin</Link></p>
        </div>
      </div>
  )
}

export default Projects
