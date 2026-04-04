import React from "react";
import blogs from "../../data/blogs"

export default function BlogsPage() {
  return (
    <div className="w-full min-h-screen pt-24 pb-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-12 h-px bg-cyber-cyan"></span>
            <span className="text-cyber-cyan font-sans uppercase tracking-[0.2em] text-sm">Publications</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Knowledge <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Base</span>
          </h1>
          <p className="text-gray-400 font-sans text-lg max-w-2xl">
            My complete archive of articles, tutorials, and deep-dives detailing my journey in building the tools of the future.
          </p>
        </div>

        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-cyber-cyan/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex-1">
                <div className="flex gap-2 mb-3">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="text-xs font-display font-bold uppercase tracking-wider text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/20 px-3 py-1 rounded-full">{tag}</span>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
