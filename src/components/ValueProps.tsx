"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layout, Settings } from 'lucide-react';

const props = [
    {
        title: 'Security',
        desc: 'Ensure privacy and compliance with multi-layered protection, access controls, and industry-certified security standards.',
        icon: <div className="w-16 h-16 border-2 border-slate-200 dark:border-slate-800 rotate-45 flex items-center justify-center mb-8">
            <div className="w-8 h-8 border border-slate-400 dark:border-slate-600" />
        </div>
    },
    {
        title: 'Deployment',
        desc: 'Secure your institution by deploying within your virtual private cloud (VPC) environment, on-premises, or dedicated managed vault.',
        icon: <div className="w-16 h-16 flex items-center justify-center mb-8">
            <div className="w-14 h-14 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-slate-400 dark:border-slate-600" />
                </div>
            </div>
        </div>
    },
    {
        title: 'Customization',
        desc: 'Train our models on your proprietary data and partner with us to create unique AI solutions that fit your specific pedagogical needs.',
        icon: <div className="w-16 h-16 grid grid-cols-5 grid-rows-5 gap-1 mb-8">
            {[...Array(25)].map((_, i) => (
                <div key={i} className="bg-slate-200 dark:bg-slate-800 w-full h-full" />
            ))}
        </div>
    }
];

const ValueProps = () => {
    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-20 text-center">
                    Safe. Flexible. Built for learning.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {props.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {p.icon}
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{p.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                {p.desc}
                            </p>
                            <button className="text-slate-900 dark:text-white font-bold flex items-center gap-2 group">
                                Learn more
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProps;
