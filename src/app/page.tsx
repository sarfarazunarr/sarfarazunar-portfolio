"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ToolsSection from "./components/ToolsSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogsSection from "./components/BlogsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="w-full relative overflow-x-hidden pt-10 pb-20">
      {/* Background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid opacity-20"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 space-y-32">
        <HeroSection />
        <ServicesSection />
        <ToolsSection />
        <ProjectsSection />
        <BlogsSection />
        <FAQSection />
        <ContactSection />
      </div>
    </div>
  );
}
