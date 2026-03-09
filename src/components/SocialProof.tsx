"use client";

import React from 'react';
import { motion } from 'framer-motion';

const universities = [
    'HARVARD', 'STANFORD', 'MIT', 'OXFORD', 'CAMBRIDGE', 'BERKELEY'
];

const SocialProof = () => {
    return (
        <section className="py-20 bg-background border-y border-slate-100 dark:border-slate-800/50">
            <div className="container mx-auto px-6">
                <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-12 uppercase tracking-[0.2em]">
                    Trusted by industry leaders and educators worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 dark:opacity-30 grayscale contrast-125">
                    {universities.map((uni) => (
                        <motion.span
                            key={uni}
                            whileHover={{ opacity: 1, scale: 1.05 }}
                            className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900 dark:text-white"
                        >
                            {uni}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
