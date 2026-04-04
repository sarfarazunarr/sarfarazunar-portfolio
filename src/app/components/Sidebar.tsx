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
            link: "#hero",
            name: "Initialization",
            icon: <HiHome size={25} className={"text-gray-400 group-hover:text-cyber-cyan transition-colors"} />
        },
        {
            link: "#services",
            name: "Core Capabilities",
            icon: <BiUser size={25} className={"text-gray-400 group-hover:text-cyber-cyan transition-colors"} />
        },
        {
            link: "#tools",
            name: "Intelligence Arsenal",
            icon: <BsStack size={25} className={"text-gray-400 group-hover:text-cyber-cyan transition-colors"} />
        },
        {
            link: "#projects",
            name: "Deployments",
            icon: <BsStarFill size={25} className={"text-gray-400 group-hover:text-cyber-cyan transition-colors"} />
        },
        {
            link: "#blogs",
            name: "Knowledge Base",
            icon: <BiUser size={25} className={"text-gray-400 group-hover:text-cyber-cyan transition-colors"} />
        },
        {
            link: "#contact",
            name: "Secure Comms",
            icon: <BiMailSend size={25} className={"text-gray-400 group-hover:text-cyber-cyan transition-colors"} />
        },
    ];
    
    return (
        <div 
            className={`fixed top-0 left-0 ${visible || animationClass === "fade-out-left" ? "flex flex-col" : "hidden"} md:w-[20%] w-full h-full p-5 py-10 items-center justify-start gap-y-6 border-r border-[#1a1a2e] bg-background/80 backdrop-blur-md z-50 shadow-[4px_0_24px_rgba(0,240,255,0.05)] ${animationClass}`}
        >
            <div className='h-4 w-full flex justify-end items-center'>
                <button onClick={() => setVisible(false)}>
                    <FaArrowLeft className='size-5 md:hidden rounded-md text-gray-400 hover:text-cyber-cyan transition-colors' />
                </button>
            </div>
            <div className='flex flex-col justify-center mb-6 items-center gap-4 relative group'>
                <div className="absolute inset-0 bg-cyber-cyan opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full"></div>
                <Image 
                    src="/profile.jpg" 
                    alt="Agent Profile" 
                    width={180} 
                    height={180} 
                    className='rounded-full select-none border-2 border-[#1a1a2e] group-hover:border-cyber-cyan transition-all duration-500 object-cover z-10' 
                />
                <div className="text-center z-10 mt-2">
                    <h2 className="text-lg font-bold text-white tracking-wider uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Sarfaraz Unar</h2>
                    <p className="text-xs text-cyber-cyan tracking-[0.2em] uppercase mt-1">Agentic Developer</p>
                </div>
            </div>
            {/* Menu */}
            <div className='flex flex-col gap-3 w-full px-2'>
                {links.map((data) => {
                    const isActive = pathName === data.link;
                    return (
                        <Link 
                            key={data.link}
                            href={data.link}
                            className={`flex items-center gap-4 ${isActive ? "bg-[#0b0b1a] border-cyber-cyan/50 shadow-[0_0_15px_rgba(0,240,255,0.15)]" : "border-transparent bg-transparent hover:bg-[#0b0b1a]"} group rounded-xl p-3 px-4 transition-all duration-300 ease-out justify-start border`}
                        >
                            <div className={`${isActive ? "text-cyber-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" : ""}`}>
                                {data.icon}
                            </div>
                            <span className={`font-medium transition-all duration-300 cursor-pointer select-none ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}>{data.name}</span>
                        </Link>
                    )
                })}
            </div>
            
            <div className="mt-auto w-full pt-8 flex items-center justify-center border-t border-[#1a1a2e]">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
                    System Online
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
