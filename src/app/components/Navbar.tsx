"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { BiMailSend, BiUser } from 'react-icons/bi';
import { BsStack, BsStarFill } from 'react-icons/bs';
import { HiHome } from "react-icons/hi";
import { FaBars, FaXmark } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const pathName = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { link: "/#hero", name: "Init", icon: <HiHome size={20} /> },
        { link: "/#services", name: "Capabilities", icon: <BiUser size={20} /> },
        { link: "/#tools", name: "Arsenal", icon: <BsStack size={20} /> },
        { link: "/projects", name: "Deployments", icon: <BsStarFill size={20} /> },
        { link: "/blogs", name: "Knowledge", icon: <BiUser size={20} /> },
        { link: "/contact", name: "Comms", icon: <BiMailSend size={20} /> },
    ];
    
    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-[#1a1a2e] shadow-[0_4px_24px_rgba(0,240,255,0.05)]' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold font-display text-white tracking-wider uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                            S. Unar
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {links.map((data) => {
                                const isActive = pathName === data.link || (pathName === '/' && data.link.includes('#')); // Simplified active check for one-page
                                return (
                                    <Link 
                                        key={data.link}
                                        href={data.link}
                                        className={`flex items-center gap-2 group rounded-lg px-4 py-2 transition-all duration-300 ease-out border ${isActive ? "bg-[#0b0b1a] border-cyber-cyan/50 shadow-[0_0_10px_rgba(0,240,255,0.15)] text-white" : "border-transparent text-gray-400 hover:text-white hover:bg-[#0b0b1a]"}`}
                                    >
                                        <div className={`${isActive ? "text-cyber-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" : "group-hover:text-cyber-cyan transition-colors"}`}>
                                            {data.icon}
                                        </div>
                                        <span className="font-display text-sm uppercase tracking-wide">{data.name}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-gray-400 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            {mobileOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-md border-b border-[#1a1a2e]"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((data) => (
                                <Link 
                                    key={data.link}
                                    href={data.link}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-[#0b0b1a] px-3 py-4 rounded-md text-base font-medium border border-transparent hover:border-cyber-cyan/30"
                                >
                                    <div className="text-cyber-cyan">{data.icon}</div>
                                    <span className="font-display">{data.name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;
