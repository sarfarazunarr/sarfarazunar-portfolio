"use client";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

// Placeholder data since we don't have a blogs TS file yet
const blogs = [
  { id: 1, title: "Building Autonomous Agents with Next.js", date: "Mar 2026", link: "#", tags: ["AI", "Next.js", "React"] },
  { id: 2, title: "MCP Servers: The Future of Tool Calling", date: "Feb 2026", link: "#", tags: ["MCP", "Backend", "AI"] },
  { id: 3, title: "Optimizing Vector Databases for RAG", date: "Jan 2026", link: "#", tags: ["Database", "Python", "ML"] },
];

export default function BlogsSection() {
  return (
    <section id="blogs" className="w-full py-24 px-4 md:px-10 relative z-10 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 border-b border-white/10 pb-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 flex items-center gap-4">
              <BookOpen className="w-10 h-10 text-cyber-cyan" /> Knowledge <span className="text-gray-500">Base</span>
            </h2>
            <p className="text-gray-400 font-sans text-lg">
              Insights, tutorials, and deep dives into AI engineering and full-stack development.
            </p>
          </div>
          <a href="#" className="font-display text-cyber-cyan hover:text-white transition-colors flex items-center gap-2">
            View All Publications &rarr;
          </a>
        </motion.div>

        <div className="flex flex-col gap-6">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex gap-2 mb-3">
                  {blog.tags.map(tag => (
                    <span key={tag} className="text-xs font-display font-bold uppercase tracking-wider text-gray-400 bg-white/5 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">{blog.title}</h3>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-6">
                <span className="text-gray-500 font-sans">{blog.date}</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-cyber-cyan group-hover:border-cyber-cyan group-hover:text-black transition-all">
                  &rarr;
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
