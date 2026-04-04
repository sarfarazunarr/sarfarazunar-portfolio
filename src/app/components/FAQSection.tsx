"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Do you build full-stack web applications?",
    answer: "Yes, I specialize in full-stack development using Next.js for the frontend and Express/Python for backend services, complete with scalable database architectures."
  },
  {
    question: "What is an Agentic AI workflow?",
    answer: "Unlike traditional AI that just chats, Agentic AI can take actions, use tools (like MCP servers), access files, and automate multi-step tasks across integrations without human hand-holding."
  },
  {
    question: "Can you integrate AI into my existing product?",
    answer: "Absolutely. I can connect your application to LLM pipelines, build custom RAG (Retrieval-Augmented Generation) setups, and implement vector databases to give your app a brain."
  },
  {
    question: "How do you handle project management?",
    answer: "I employ agile methodologies, regular syncs, and detailed documentation. For complex tasks, I utilize automated AI workflows to speed up development and ensure high code quality."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full py-24 px-4 md:px-10 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            System <span className="text-gray-500">Queries</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-cyber-cyan bg-cyber-cyan/5' : 'border-white/10 bg-white/5'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-xl font-display font-medium ${isOpen ? 'text-cyber-cyan' : 'text-white'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-cyber-cyan text-background' : 'bg-white/10 text-white'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-400 font-sans leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
