import React from 'react'
import Projects from '@/app/components/Projects'

const ProjectsPage = () => {
    return (
        <main className='w-full pt-10'>
            <h3 className='text-4xl pt-5 text-white'>Some Cool Projects</h3>
            <p className='text-gray-300 pt-3 pb-10'>Here are some projects you can find more on my github profile!</p>
            <Projects title='no' btnLink='/contact' btnText='Get In Touch' />
        </main>
    )
}

export default ProjectsPage
