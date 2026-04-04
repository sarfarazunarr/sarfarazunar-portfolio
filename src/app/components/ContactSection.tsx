"use client";
import { motion } from "framer-motion";
import { Copy, CheckCircle2, Terminal, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText("sarfarazunarr@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "7432e28b-d341-4428-bf02-375ed7ad2922"); // Replace this!

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        setFormStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-24 px-4 md:px-10 relative z-10 bg-black">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">

        {/* Left Col: Terminal & Socials */}
        <div className="flex-1 border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(112,0,255,0.1)] h-fit">
          <div className="bg-white/5 flex items-center px-4 py-3 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-gray-500 text-sm font-sans flex items-center gap-2">
              <Terminal className="w-4 h-4" /> sarfaraz_unar@secure_comms
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Establish <span className="text-cyber-purple">Connection</span>
            </h2>
            <p className="text-gray-400 font-sans leading-relaxed mb-8">
              Ready to deploy next-generation web applications and intelligent agents? Open a secure line to discuss your technical architecture.
            </p>

            <button
              onClick={copyEmail}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyber-cyan transition-all group mb-8"
            >
              <span className="font-sans text-gray-300 group-hover:text-white">sarfarazunarr@gmail.com</span>
              {copied ? <CheckCircle2 className="w-5 h-5 text-matrix-green" /> : <Copy className="w-5 h-5 text-gray-400" />}
            </button>

            <div className="flex gap-4">
              <a href="https://github.com/sarfarazunarr" target="_blank" className="p-4 rounded-xl bg-white/5 hover:bg-cyber-purple hover:text-white border border-white/10 transition-all text-gray-400 flex-1 flex justify-center">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/sarfarazunar" target="_blank" className="p-4 rounded-xl bg-white/5 hover:bg-cyber-cyan hover:text-black border border-white/10 transition-all text-gray-400 flex-1 flex justify-center">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Col: Web3Forms */}
        <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-display font-bold text-white mb-6">Send Transmission</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-sans text-gray-400 mb-2">Identifier (Name)</label>
              <input type="text" name="name" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-sans text-gray-400 mb-2">Return Address (Email)</label>
              <input type="email" name="email" required className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm font-sans text-gray-400 mb-2">Payload (Message)</label>
              <textarea name="message" required rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors resize-none" placeholder="Describe your project requirements..."></textarea>
            </div>

            <button type="submit" disabled={formStatus === "submitting"} className="w-full flex items-center justify-center gap-2 py-4 mt-2 bg-white text-black font-bold font-display rounded-lg hover:bg-cyber-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all disabled:opacity-50">
              {formStatus === "submitting" ? "Transmitting..." : "Initiate Transfer"} <Send className="w-5 h-5" />
            </button>

            {formStatus === "success" && <p className="text-matrix-green text-sm text-center font-sans mt-2">Transmission received successfully.</p>}
            {formStatus === "error" && <p className="text-red-500 text-sm text-center font-sans mt-2">Transmission failed. Please check connection.</p>}
          </form>
        </div>

      </div>
    </section>
  );
}
