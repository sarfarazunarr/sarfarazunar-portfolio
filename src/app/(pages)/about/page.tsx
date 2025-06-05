import EducationCard from '@/app/components/EducationCard'
import React from 'react'

const Education = () => {
  return (
    <div className='w-full md:w-[70%] p-5' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
      <h3 className='text-gray-200 text-4xl py-10 hover:text-green-500 transition-colors duration-200 ease-linear' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Know About Me!</h3>
      <p className='py-5 text-gray-500' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
        Hi, I&apos;m a Full Stack Web & AI Developer with a passion for building smart, scalable, and modern digital systems. I specialize in creating end-to-end web applications using technologies like React, Next.js, Node.js, Express, FastAPI, and Python—combining clean frontend design with powerful backend logic.<br />
        I have hands-on experience with both SQL and NoSQL databases (MySQL, PostgreSQL, MongoDB), and I&apos;m skilled in developing robust APIs, integrating third-party services, and deploying secure, high-performance web platforms.<br />
        Recently, I&apos;ve been focused on integrating AI into web systems using OpenAI&apos;s latest Agents SDK (Response API)—designing custom AI agents that automate workflows, process data, and enhance user interactions in real time.<br />
        Outside of coding, you&apos;ll find me exploring new AI tools, reading about emerging tech trends, and always looking for ways to solve complex problems through intelligent design.<br />
        Let&apos;s build something innovative, useful, and future-ready.
      </p>

      <h3 className='text-gray-200 text-3xl py-10 hover:text-green-500 transition-colors duration-200 ease-linear' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">Education</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1100">

        <EducationCard title="BS Computer Science" content="Learning programming languages, Databases, Algorithms, Data Structures, AI and much more intersting!" duration="2023 - 2027 (Estimated)" />
        <EducationCard title="GIAIC Course" content="Learning Advance Web Development, Metaverse, Cloud Native & Generative AI at Governor House" duration="2023 - Continue" />

        <EducationCard title="AI Developer Course" content="Currently doing AI Developer Course at IBM Coursera" duration="Jan-2025 - Jun-2025" />
      </div>

      <h3 className='text-gray-200 text-3xl py-10 hover:text-green-500 transition-colors duration-200 ease-linear' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Experience</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="700">

        <EducationCard title="Full Stack Developer & Founder" content="Currently Building my startup and working on projects as full stack developer!" duration="Dec-2024 - Present Techryzer" />

        <EducationCard title="Full Stack Developer" content="Working as Full Stack Web Developer as a part time!" duration="Aug-2024 - Nov-2024 - Infotech" />

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
