import EducationCard from '@/app/components/EducationCard'
import React from 'react'
import { FaComputer } from 'react-icons/fa6'
import { WiDegrees } from 'react-icons/wi'

const Education = () => {
  return (
    <div className='w-[70%] p-5'>
      <h3 className='text-gray-200 text-4xl py-10 hover:text-green-500 transition-colors duration-200 ease-linear'>Know About Me!</h3>
      <p className='py-5 text-gray-500'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure est impedit recusandae minima, ut pariatur nobis. Ipsa, fugiat aspernatur fuga ipsum corporis illo ullam voluptate quisquam repellat quasi dolorem esse nihil molestiae praesentium perspiciatis autem maiores quod voluptatibus cum consectetur nesciunt. Pariatur, id. Iste, assumenda architecto odio nemo excepturi sunt.
      </p>

      <h3 className='text-gray-200 text-3xl py-10 hover:text-green-500 transition-colors duration-200 ease-linear'>Education</h3>
      <div className='grid grid-cols-2 gap-3'>

        <EducationCard title="BS Computer Science" content="Learning programming languages, Databases, Algorithms, Data Structures, AI and much more intersting!" duration="2023 - 2027 (Estimated)" />
        <EducationCard title="GIAIC Course" content="Learning Advance Web Development, Metaverse, Cloud Native & Generative AI at Governor House" duration="2023 - Continue" />
      </div>


      <h3 className='text-gray-200 text-3xl py-10 hover:text-green-500 transition-colors duration-200 ease-linear'>Experience</h3>
      <div className='grid grid-cols-2 gap-2'>

        <EducationCard title="Full Stack Developer" content="Working as Full Stack Web Developer as a part time!" duration="Aug-2024 - Present  Infotech Solutions" />

        <EducationCard title="PHP Web Developer Intern" content="Worked as PHP Developer intern and created amazing real world projects!" duration="Jun-2024 - Aug-2024 Internee.pk" />

        <EducationCard title="Python Developer Intern" content="Worked as Python Developer intern and created various projects!" duration="May-2024 - Jun-2024 GrowIntern" />

        <EducationCard title="Full Stack Developer Intern" content="Worked as Full Stack Developer intern and created two full websites!" duration="Dec-2023 - Jan-2024 GrowIntern" />

        <EducationCard title="Python Developer Intern" content="Worked as Python Developer intern and done various python tasks!" duration="Dec-2023 - Jan-2024 Codsoft" />

        <EducationCard title="Frontend Developer Intern" content="Worked as Frontend Developer intern explored html, css, javascript, php and Wordpress!" duration="Nov-2023 - Dec-2023 Interns.pk" />











      </div>
    </div>
  )
}

export default Education
