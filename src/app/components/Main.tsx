// main.tsx
"use client";
import React, { useState } from 'react';
import Animation from './Animation';
import { FaBars } from 'react-icons/fa6';
import Sidebar from './Sidebar';
import Starfield from './Background';

const Main = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [visible, setVisible] = useState(true); // Ensure initial state is false

    return (
        <section>
            <Animation />
            <nav className="w-full md:hidden flex items-center p-5 justify-start">
                <button onClick={() => setVisible(true)} aria-label="Open Sidebar">
                    <FaBars color='white' size={20} className='z-50' /> 
                </button>
            </nav>
            {/* Optional Backdrop */}
            {visible && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" 
                    onClick={() => setVisible(false)}
                ></div>
            )}
            <main className="flex">
                <Sidebar visible={visible} setVisible={setVisible} />
                <div className="md:ml-[20%] w-full md:w-[80%] p-5">
                    <Starfield
                        starCount={2000}
                        starColor={[255, 255, 255]}
                        speedFactor={0.1}
                        backgroundColor="black"
                    />
                    {children}
                </div>
            </main>
        </section>
    );
}

export default Main;
