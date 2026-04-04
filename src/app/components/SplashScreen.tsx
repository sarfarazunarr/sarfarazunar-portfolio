"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 2000; // 2 seconds
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 300); // slight delay before fade out
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#030014] flex flex-col items-center justify-center p-4"
        >
          <div className="w-full max-w-md space-y-8">
            <div className="flex flex-col items-center space-y-4">
              {/* Spinning / Glowing Loader */}
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-t-2 border-cyber-cyan animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-r-2 border-cyber-purple animate-[spin_1.5s_linear_reverse_infinite]"></div>
                <div className="absolute inset-4 rounded-full border-b-2 border-matrix-green animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                </div>
              </div>

              <div className="text-center mt-8">
                <h1 className="text-2xl font-display font-bold text-white tracking-widest uppercase shadow-cyber-cyan drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
                  System Boot
                </h1>
                <p className="text-cyber-cyan font-sans animate-pulse mt-2">
                  Initializing Neural Pathways...
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-cyber-cyan to-cyber-purple h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(0,240,255,0.5)]"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-right text-xs font-mono text-gray-500">
              {Math.floor(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
