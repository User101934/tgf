"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SuccessStory = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left side text */}
                    <div>
                        {/* Fake Logo */}
                        <div className="flex items-center gap-2 mb-12">
                            <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold">R</div>
                            <span className="font-bold text-xl tracking-tighter">RAYCAST</span>
                        </div>

                        <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-[clamp(28px,4vw,40px)] leading-[1.2] mb-12 text-[#111110]"
                        >
                            &quot;TeachGrid transformed how we onboard developers. What used to take weeks of manual documentation and training is now a seamless, AI-driven experience that gets our team shipping code on day one.&quot;
                        </motion.blockquote>

                        <div>
                            <p className="font-bold text-[#111110]">Thomas Paul</p>
                            <p className="text-sm font-medium text-slate-500 mb-6">Head of Engineering, Raycast</p>

                            <a href="#" className="font-semibold text-sm border-b border-black pb-0.5 hover:text-indigo-600 hover:border-indigo-600 transition-colors">
                                Read the success story
                            </a>
                        </div>
                    </div>

                    {/* Right side image with diagonal cut - Cohere style */}
                    <div className="relative h-[600px] w-full lg:w-[120%] lg:-ml-10 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Diagonal clip path overlay to give that sharp edge look */}
                        <div className="absolute inset-0 bg-blue-50" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
                                alt="Team collaborating"
                                className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SuccessStory;
