import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { FaDev, FaEye, FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
const Contact = () => {
    const socialLinks = [
        {
          name: "Linkedin",
          link: "https://linkedin.com/in/sarfarazunar",
          icon: <FaLinkedin size={20} />,
        },
        {
          name: "Github",
          link: "https://github.com/sarfarazunarr",
          icon: <FaGithub size={20} />,
        },
        {
          name: "YouTube",
          link: "https://youtube.com/@sarfarazunarr",
          icon: <FaYoutube size={20} />,
        },
        {
          name: "Facebook",
          link: "https://facebook.com/sarfarazunarr",
          icon: <FaFacebook size={20} />,
        },
        {
          name: "Dev.to",
          link: "https://dev.to/sarfarazunarr",
          icon: <FaDev size={20} />,
        }
      ]

    return (
        <main className='w-full pt-10' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
            <h3 className='text-4xl pt-5 text-white' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">Connect With Me!</h3>
            <p className='text-gray-300 pt-3 pb-10' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">If you need any web development or Backend Development Services, feel free to contact me.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-[90%]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
                <form className='flex flex-col gap-2 col-span-2'>
                    <div className='grid grid-cols-2 md:grid-cols-6 items-center gap-3' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                        <label htmlFor="firstName" className='text-white text-left md:text-right font-semibold mr-0 md:mr-2'>First Name</label>
                        <input type='text' id='firstName' name='firstName' placeholder='John' className='bg-gray-700 border-2 outline-none border-gray-500 focus:border-green-500 rounded-md px-3 py-2 col-span-2 text-white' />

                        <label htmlFor="lastName" className='text-white text-left md:text-right font-semibold mr-0 md:mr-2'>Last Name</label>
                        <input type='text' id='lastName' name='lastName' placeholder='Doe' className='bg-gray-700 border-2 outline-none border-gray-500 focus:border-green-500 rounded-md px-3 py-2 col-span-2 text-white' />
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-6 items-center gap-3' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
                        <label htmlFor="email" className='text-white text-left md:text-right font-semibold mr-0 md:mr-2'>Email</label>
                        <input type='email' id='email' name='email' placeholder='abc@xyz.com' className='bg-gray-700 border-2 outline-none border-gray-500 focus:border-green-500 rounded-md px-3 py-2 col-span-2 text-white' />

                        <label htmlFor="phone" className='text-white text-left md:text-right font-semibold mr-0 md:mr-2'>Phone</label>
                        <input type='text' id='phone' name='phone' placeholder='Doe' className='bg-gray-700 border-2 outline-none border-gray-500 focus:border-green-500 rounded-md px-3 py-2 col-span-2 text-white' />
                    </div>
                    <label htmlFor="message" className='text-white mt-5 text-left font-semibold md:mr-2 md:ml-24'>Message</label>
                    <textarea id='message' name='message' placeholder='Enter Message...' className='bg-gray-700 border-2 outline-none border-gray-500 focus:border-green-500 rounded-md px-3 py-2 md:ml-24 text-white' />
                    <button className=' bg-green-800 text-white px-3 py-2 rounded-md w-full md:w-[85%] md:ml-24' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">Send Message</button>
                </form>
                <div className='bg-gray-800 p-4 px-9 rounded-md' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1300">
                    <h3 className='text-center font-semibold text-2xl text-white py-2'>Connect and Follow</h3>
                    <p className='text-gray-300 pb-3'>Email: sarfarazunarr@gmail.com</p>
                    <div className='flex flex-col items-start justify-start'>
                        {socialLinks.map((sl: {name: string, link:string, icon: JSX.Element}, index: number) => {
                            return (
                                <Link key={index} className='text-white font-semibold flex items-center justify-start gap-4 my-1 hover:text-green-400 transition-colors duration-300' href={sl.link} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={1400 + (index * 100)}>{sl.icon} {sl.name}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact
