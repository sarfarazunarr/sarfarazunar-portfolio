import React from 'react'
import { CgMore } from 'react-icons/cg'
import { FaCss3, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact, FaWordpress } from 'react-icons/fa6'
import { SiCanva, SiCplusplus, SiDjango, SiExpress, SiFastapi, SiLangchain, SiMicrosoft, SiMongodb, SiMysql, SiNextdotjs, SiOpenai, SiQt, SiReact, SiTailwindcss } from 'react-icons/si'

const Stack = () => {

    const data = [
        {
            icon: <FaHtml5 size={40} className='text-white' />,
            title: "HTML5",
            description: "Structuring Web with HTML5",
        },
        {
            icon: <FaCss3 size={40} className='text-white' />,
            title: "CSS3",
            description: "Styling Web with CSS3",
        },
        {
            icon: <FaJs size={40} className='text-white' />,
            title: "JavaScript",
            description: "Managing Web with JavaScript",
        },
        {
            icon: <FaPython size={40} className='text-white' />,
            title: "Python",
            description: "Powering Tech with Python",
        },
        {
            icon: <SiCplusplus size={40} className='text-white' />,
            title: "C++",
            description: "Creating Powerful Apps with C++",
        },
        {
            icon: <FaJava size={40} className='text-white' />,
            title: "Java",
            description: "Creating Powerful Systems with Java",
        },
        {
            icon: <FaPhp size={40} className='text-white' />,
            title: "PHP",
            description: "Making Old powerful php servers!",
        },
        {
            icon: <FaWordpress size={40} className='text-white' />,
            title: "WordPress",
            description: "Developing full stack websites with WP!",
        },
        {
            icon: <SiMysql  size={40} className='text-white' />,
            title: "MySQL",
            description: "Storing Data with MySQL",
        },
        {
            icon: <SiMongodb  size={40} className='text-white' />,
            title: "MongoDB",
            description: "Storing Data in irrelational database",
        },
        {
            icon: <FaNodeJs  size={40} className='text-white' />,
            title: "NodeJS",
            description: "Interacting with JavaScript Runtime!",
        },
        {
            icon: <FaReact  size={40} className='text-white' />,
            title: "ReactJS",
            description: "Making Dynamic Web Apps with ReactJS",
        },
        {
            icon: <SiExpress  size={40} className='text-white' />,
            title: "ExpressJS",
            description: "Managing APIs with ExpressJS",
        },
        {
            icon: <SiFastapi  size={40} className='text-white' />,
            title: "FastAPI",
            description: "Managing powerful APIs with FastAPI",
        },
        {
            icon: <SiNextdotjs  size={40} className='text-white' />,
            title: "NextJS",
            description: "Managing powerful APIs with FastAPI",
        },
        {
            icon: <SiTailwindcss  size={40} className='text-white' />,
            title: "TailwindCSS",
            description: "Creating Quick Styling with Tailwindcss",
        },
        {
            icon: <SiDjango  size={40} className='text-white' />,
            title: "Django (Learning)",
            description: "Creating Powerful Web Apps with Django",
        },
        {
            icon: <SiQt  size={40} className='text-white' />,
            title: "Qt Creator",
            description: "Creating Powerful c++ desktop apps",
        },
        {
            icon: <SiMicrosoft  size={40} className='text-white' />,
            title: "Ms Office",
            description: "Create powerful docs, sheets, presentations with Ms office!",
        },
        {
            icon: <SiCanva  size={40} className='text-white' />,
            title: "Canva",
            description: "Making illustrations with Canva",
        },
        {
            icon: <SiLangchain  size={40} className='text-white' />,
            title: "Langchain (Learning)",
            description: "Creating powerful apps with Langchain",
        },
        {
            icon: <SiReact  size={40} className='text-white' />,
            title: "ReactNative (Learning)",
            description: "Creating powerful apps with RN (Expo)",
        },
        {
            icon: <SiOpenai  size={40} className='text-white' />,
            title: "ChatGPT",
            description: "Solving problems and content generation with ChatGPT",
        },
        {
            icon: <CgMore  size={40} className='text-white' />,
            title: "Other",
            description: "Learning & Exploring Everyday!",
        },
    ]



  return (
    <main className='w-full pt-10' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
      <h3 className='text-4xl pt-5 text-white' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">My Tech Toolbox</h3>
      <p className='text-gray-300 pt-3 pb-10' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">Here is all programming languages, frameworks, and tools I can use.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="900">
        {data.map((stack: {icon: JSX.Element, title: string, description: string}, index: number) => {
            return (
                <div className='flex flex-col items-center justify-center p-4 bg-gray-900 rounded-md border-2 border-transparent hover:border-blue-500 transition-colors duration-300 ease-linear' key={index} data-aos="fade-up" data-aos-duration="500" data-aos-delay={500 + (index * 10)}>
                    {stack.icon}
                    <h3 className='text-center mt-4 mb-2 text-white font-semibold'>{stack.title}</h3>
                    <p className='text-sm text-center text-gray-300'>{stack.description}</p>
                </div>
            )
        })}
      </div>
    </main>
  )
}

export default Stack
