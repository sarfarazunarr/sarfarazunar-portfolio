"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BiMailSend, BiUser } from 'react-icons/bi';
import { BsStack, BsStarFill } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa6';
import { HiHome } from "react-icons/hi";

const Sidebar = ({ visible = true, setVisible }: { visible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const pathName = usePathname();
    const [animationClass, setAnimationClass] = useState("");
    useEffect(() => {
        if (visible) {
            setAnimationClass("fade-in-left");
        } else {
            setAnimationClass("fade-out-left");
        }
    }, [visible]);

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
        <div 
            className={`fixed top-0 left-0 ${visible || animationClass === "fade-out-left" ? "flex flex-col" : "hidden"} md:w-[20%] w-full h-full p-5 py-10 items-center justify-start gap-y-4 border-r border-gray-800 bg-[#050505] z-50 ${animationClass}`}
        >
            <div className='h-4  w-full flex  justify-end items-center'>
                <button onClick={() => setVisible(false)}>
                    <FaArrowLeft className='size-5 md:hidden rounded-md text-white hover:text-blue-400 animate-bounce' />
                </button>
            </div>
            <div className='flex flex-col justify-center mb-4 items-center gap-2'>
                <Image 
                    src="/profile.jpg" 
                    alt="profile" 
                    width={200} 
                    height={200} 
                    className='rounded-md select-none shadow-none hover:shadow-lg hover:shadow-green-400 hover:cursor-pointer transition-all duration-300' 
                />
            </div>
            {/* Menu */}
            <div className='flex flex-col gap-2 w-[90%]'>
                {links.map((data) => (
                    <Link 
                        key={data.link}
                        href={data.link}
                        className={`flex items-center gap-3 hover:text-primary-400 ${pathName === data.link ? "bg-gradient-to-r from-green-600 to-transparent border-green-300" : "border-transparent bg-[#1A1A1A]"} group rounded-md p-3 transition-all duration-200 ease-linear justify-start hover:border-green-500 border`}
                    >
                        {data.icon}
                        <span className='text-white font-normal group-hover:text-green-400 transition-colors duration-300 cursor-pointer select-none'>{data.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
