"use client";
import { motion } from "framer-motion";
import featuredTools from "../data/tools";
import Link from "next/link";
import { ArrowUpRight, Bot, TerminalSquare, Code, Globe, FileText, Database, Calculator, ShoppingCart } from "lucide-react";

export default function ToolsSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Bot': return <Bot className="w-8 h-8 text-cyber-cyan" />;
      case 'TerminalSquare': return <TerminalSquare className="w-8 h-8 text-cyber-cyan" />;
      case 'Code': return <Code className="w-8 h-8 text-cyber-cyan" />;
      case 'Globe': return <Globe className="w-8 h-8 text-cyber-cyan" />;
      case 'FileText': return <FileText className="w-8 h-8 text-cyber-cyan" />;
      case 'Database': return <Database className="w-8 h-8 text-cyber-cyan" />;
      case 'Calculator': return <Calculator className="w-8 h-8 text-cyber-cyan" />;
      case 'ShoppingCart': return <ShoppingCart className="w-8 h-8 text-cyber-cyan" />;
      default: return <Bot className="w-8 h-8 text-cyber-cyan" />;
    }
  }

  return (
    <section id="tools" className="w-full py-24 px-4 md:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-l-4 border-cyber-pink pl-6"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Intelligence <span className="text-cyber-pink">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-sans text-lg">
            Mini Products By Me!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="group relative overflow-hidden rounded-2xl border border-[#1a1a2e] bg-[#0b0b1a]/80 backdrop-blur-sm p-8 hover:border-cyber-cyan/50 transition-all duration-300 transform-gpu perspective-[1000px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyber-cyan/20 group-hover:border-cyber-cyan/50 transition-all duration-300">
                  {getIcon(tool.icon)}
                </div>
                <Link href={tool.link} target="_blank" className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-black hover:bg-cyber-cyan transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="relative z-10 w-full mt-auto">
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">{tool.title}</h3>
                <p className="text-gray-400 font-sans leading-relaxed">{tool.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
