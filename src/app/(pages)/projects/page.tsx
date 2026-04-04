import React from "react";
import projects from "../../data/projects";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen pt-24 pb-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-12 h-px bg-cyber-cyan"></span>
            <span className="text-cyber-cyan font-sans uppercase tracking-[0.2em] text-sm">All Deployments</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Archive</span>
          </h1>
          <p className="text-gray-400 font-sans text-lg max-w-2xl">
            A comprehensive list of every system, application, and AI agent I have built and deployed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-cyber-cyan/30 transition-all duration-500 h-full flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-cyber-cyan/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              
              <div className="p-6 relative z-20 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyber-cyan transition-colors">{project.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    {project.github && (
                       <Link href={project.github} target="_blank" className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all">
                         <Github className="w-4 h-4" />
                       </Link>
                    )}
                    {project.video && (
                       <Link href={project.video} target="_blank" className="p-2 rounded-full bg-cyber-cyan text-black hover:bg-white transition-all">
                         <ExternalLink className="w-4 h-4" />
                       </Link>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-400 font-sans text-sm mb-4 flex-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
