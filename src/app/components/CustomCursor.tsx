"use client";
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use framer-motion's motion values to bypass React state re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for buttery tracking without freezing the main thread
  const springX = useSpring(mouseX, { stiffness: 400, damping: 28, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28, mass: 0.5 });
  
  // Faster, more direct spring for the central dot
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 40, mass: 0.1 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 40, mass: 0.1 });

  useEffect(() => {
    // Only show on desktop/pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      // Update motion values directly = high performance 60fps
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    // Hide default cursor across the body when active
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        * { cursor: none !important; }
      `}} />
      
      {/* Primary Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-matrix-green rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_10px_rgba(0,255,65,0.8)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "#00f0ff" : "#00ff41",
          boxShadow: isHovering 
            ? "0 0 20px rgba(0, 240, 255, 0.8)" 
            : "0 0 10px rgba(0, 255, 65, 0.8)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Outer Tracking Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-cyber-purple/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(0, 240, 255, 0.8)" : "rgba(112, 0, 255, 0.5)",
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.2 }}
      />
    </>
  );
}
