// main.tsx
"use client";
import React from 'react';
import Animation from './Animation';
import Navbar from './Navbar';
import Starfield from './Background';
import SplashScreen from './SplashScreen';
import Chatbot from './Chatbot';

const Main = ({
    children, isMobile
}: Readonly<{
    children: React.ReactNode;
    isMobile: boolean
}>) => {
    return (
        <section className="min-h-screen flex flex-col">
            <Chatbot />
            <SplashScreen />
            <Animation />
            <Navbar />
            <main className="w-full flex-1 pt-20 relative">
                <div className="absolute inset-0 z-0">
                    <Starfield
                        starCount={2000}
                        starColor={[255, 255, 255]}
                        speedFactor={0.1}
                        backgroundColor="black"
                    />
                </div>
                <div className="relative z-10 w-full">
                    {children}
                </div>
            </main>
        </section>
    );
}

export default Main;
