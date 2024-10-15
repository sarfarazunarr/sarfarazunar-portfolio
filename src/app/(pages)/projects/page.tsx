import React from 'react'
import Projects from '@/app/components/Projects'

const ProjectsPage = () => {
    return (
        <main className='w-full pt-10' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
            <h3 className='text-4xl pt-5 text-white' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Some Cool Projects</h3>
            <p className='text-gray-300 pt-3 pb-10' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">Here are some projects you can find more on my github profile!</p>
            <Projects title='no' btnLink='/contact' btnText='Get In Touch' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" />
            <p className='text-xs text-center text-gray-400'>You can view more projects on <Link className='text-green-400 underline' href={"https://github.com/sarfarazunarr"}>Github</Link> and on <Link className='text-green-400 underline' href={"https://www.linkedin.com/in/sarfarazunar/"}>Linkedin</Link></p>
        </main>
    )
}

export default ProjectsPage
