"use client";
import { motion } from "framer-motion";
import { FaLocationPin } from "react-icons/fa6";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full min-h-screen flex flex-col justify-center relative px-4 md:px-10 pt-20">
      {/* Background ambient light */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-cyan/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-purple/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan text-sm font-display tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-cyber-cyan inline-block mr-3 animate-pulse"></span>
            Agentic AI Engineer
          </div>
          
          <h1 className="text-white text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            <span className="block text-gray-400 text-3xl md:text-4xl mb-4 font-sans font-light">Hello, I'm</span>
            Sarfaraz <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Unar</span>
          </h1>

          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 font-sans mb-8 max-w-2xl leading-relaxed"
          >
            Building intelligent, full-stack web solutions powered by <span className="text-cyber-cyan font-bold">Agentic AI</span>. <br />
            Bridging the gap between neural networks and human interfaces.
          </motion.h3>

          <div className="flex w-full my-8 items-center justify-start gap-6">
            <a href="#projects" className="px-8 py-4 bg-cyber-cyan text-background font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-shadow duration-300 font-display">
              View Deployments
            </a>
            <a href="#contact" className="px-8 py-4 border border-cyber-purple/50 text-white font-bold rounded-lg hover:bg-cyber-purple/10 transition-colors duration-300 font-display">
              Initiate Contact
            </a>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 mt-4 w-max rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
            <FaLocationPin className="w-5 text-cyber-pink animate-bounce" />
            <p className="text-gray-300 font-medium">Hala Sindh, PK</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-cyber-cyan/30 p-2 overflow-hidden animate-glow">
            {/* The user specifically wanted to use their original image. We assume there's one in public/images/me.jpg or similar, let's use a generic image component. The old design might not have had an image, but we will add an image placeholder styling here just in case they have one, or simply use a highly stylized block. Wait, the user said "use my original one", so I'll include an Image tag. */}
             <div className="w-full h-full rounded-full bg-cyber-purple/20 flex items-center justify-center border border-cyber-cyan/50 overflow-hidden relative">
                {/* Fallback pattern or Image */}
                <Image src="/profile.jpg" alt="Sarfaraz Unar" width={400} height={400} className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent mix-blend-multiply"></div>
             </div>
          </div>
          {/* Orbital rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-cyber-cyan/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-cyber-purple/10 text-transparent rounded-full animate-[spin_15s_linear_reverse_infinite]"></div>
        </motion.div>
      </div>
    </section>
  );
}
