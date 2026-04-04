"use client";
import { motion } from "framer-motion";
import projects from "../data/projects";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 px-4 md:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-12 h-px bg-cyber-cyan"></span>
              <span className="text-cyber-cyan font-sans uppercase tracking-[0.2em] text-sm">Deployments</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Featured <span className="text-gray-500">Systems</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-cyber-cyan/30 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-cyber-cyan/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                />
              </div>
              
              <div className="p-8 relative z-20 bg-gradient-to-t from-background via-background to-transparent md:bg-none">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyber-cyan transition-colors">{project.title}</h3>
                  <div className="flex gap-3">
                    {project.github && (
                       <Link href={project.github} target="_blank" className="p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all">
                         <Github className="w-5 h-5" />
                       </Link>
                    )}
                    {project.video && (
                       <Link href={project.video} target="_blank" className="p-2 rounded-full bg-cyber-cyan text-black hover:bg-white transition-all">
                         <ExternalLink className="w-5 h-5" />
                       </Link>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-400 font-sans line-clamp-3 mb-6">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
