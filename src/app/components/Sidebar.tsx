"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BiMailSend, BiUser } from 'react-icons/bi';
import { BsStack, BsStarFill } from 'react-icons/bs';
import { HiHome } from "react-icons/hi";

const Sidebar = () => {
    const pathName = usePathname();
    const links = [
        {
            link: "/",
            name: "Home",
            icon: <HiHome size={25} className={"text-white group-hover:text-green-400"} />
        },
        {
            link: "/about",
            name: "About",
            icon: <BiUser size={25} className={"text-white group-hover:text-green-400"} />
        },
        {
            link: "/stack",
            name: "Tech Stack",
            icon: <BsStack size={25} className={"text-white group-hover:text-green-400"} />
        },
        {
            link: "/projects",
            name: "Projects",
            icon: <BsStarFill size={25} className={"text-white group-hover:text-green-400"} />
        },
        {
            link: "/contact",
            name: "Contact",
            icon: <BiMailSend size={25} className={"text-white group-hover:text-green-400"} />
        },
    ];
    return (
        <div className='fixed top-0 left-0 md:w-[20%] h-full p-5 py-10 flex flex-col items-center justify-center gap-y-4 border-r border-gray-800 bg-[#050505] z-10' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <div className='flex flex-col justify-center mb-4 items-center gap-2' data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
                <Image src={"/profile.jpg"} alt="profile" width={200} height={200} className='rounded-md filter grayscale hover:grayscale-0 transition-all duration-200 ease-linear select-none' />
            </div>
            {/* Menu */}
            <div className='flex flex-col gap-2 w-[90%]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                {links.map((data: { link: string, name: string, icon: JSX.Element }) => {
                    return (
                        <Link 
                            href={data.link}
                            className={`flex items-center gap-3 hover:text-primary-400 ${pathName === data.link ? "bg-gradient-to-r from-green-800 to-transparent border-green-600" : "border-transparent bg-[#1A1A1A]"} group rounded-md p-3 transition-all duration-200 ease-linear justify-start hover:border-green-500 border-2`}
                        >
                            {data.icon}
                            <span className='text-white font-semibold group-hover:text-green-400 transition-colors duration-300 cursor-pointer select-none'>{data.name}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Sidebar;
