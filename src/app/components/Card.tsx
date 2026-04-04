"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEye, FaGithub } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const ProjectCard = ({ img, title, description, github, video }: { img: string; title: string; description: string; github: string; video: string; }) => {
  return (
      <motion.div 
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-xl border border-[#1a1a2e] bg-[#0b0b1a]/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-cyber-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60 z-10 pointer-events-none"></div>
        <Image width={500} height={500} src={img} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
        
        <div className="relative p-5 z-20">
          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-cyan transition-colors duration-300">{title}</h4>
          <p className="text-sm text-gray-400 showlines-3 leading-relaxed mb-6">{description}</p>
          
          <div className="flex justify-start items-center gap-3 mt-auto" >
            <Link href={github} target="_blank" className="px-4 py-2 flex items-center justify-center gap-2 rounded-lg bg-[#050505] border border-[#1a1a2e] text-white hover:text-cyber-cyan hover:border-cyber-cyan transition-all duration-300 text-sm font-medium">
              <FaGithub /> Source
            </Link>
            <Link href={video} target="_blank" className="px-4 py-2 flex items-center justify-center gap-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan hover:text-[#050505] transition-all duration-300 text-sm font-bold tracking-wide">
              <FaEye /> Demo
            </Link>
          </div>
        </div>
      </motion.div>
  );
};

export default ProjectCard;