"use client";
import { motion } from "framer-motion";
import { Code, Server, Network, BrainCircuit, Cpu, Terminal, Sparkles, ArrowRight } from "lucide-react";

const services = [
  { id: 1, title: "Web Development", icon: <Code className="w-8 h-8" />, desc: "High-performance, responsive frontends and complete full-stack web solutions." },
  { id: 2, title: "Backend Development", icon: <Server className="w-8 h-8" />, desc: "Scalable APIs, secure databases, and robust microservices architecture." },
  { id: 3, title: "MCP Server Development", icon: <Network className="w-8 h-8" />, desc: "Model Context Protocol servers for empowering AI agents with specialized capabilities." },
  { id: 4, title: "AI Integration", icon: <BrainCircuit className="w-8 h-8" />, desc: "Integrating LLMs and external AI services directly into your core product." },
  { id: 5, title: "Machine Learning", icon: <Cpu className="w-8 h-8" />, desc: "Custom predictive models, data analysis, and advanced algorithmic processing." },
  { id: 6, title: "Python Development", icon: <Terminal className="w-8 h-8" />, desc: "Automation scripts, data pipelines, and fast backend services in Python." },
  { id: 7, title: "AI Driven Development", icon: <Sparkles className="w-8 h-8" />, desc: "Building software at the speed of thought using Agentic AI workflows." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-24 px-4 md:px-10 relative z-10 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
             <span className="text-cyber-cyan">Core</span> Capabilities
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-sans text-lg">
             Providing full-spectrum engineering services from responsive pixels to complex neural pathways.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-8 hover:border-cyber-purple/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-cyber-cyan mb-6 p-4 bg-cyber-cyan/10 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold font-display text-white mb-4 group-hover:text-cyber-purple transition-colors">{service.title}</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Marketing CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-1 rounded-2xl bg-gradient-to-r from-cyber-cyan to-cyber-purple"
        >
          <div className="bg-background rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 py-10">
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-2">Ready to scale your intelligence?</h3>
              <p className="text-gray-400">Assign your next cutting-edge project to an Agentic AI Engineer.</p>
            </div>
            <a href="#contact" className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-bold font-display rounded-lg hover:bg-gray-200 transition-all">
              Assign Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
