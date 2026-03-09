"use client";

import React from 'react';
import { motion } from 'framer-motion';

const industries = [
    {
        title: 'Higher Education',
        image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop',
        color: 'from-blue-500/20'
    },
    {
        title: 'K-12 Schools',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop',
        color: 'from-green-500/20'
    },
    {
        title: 'Corporate Training',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
        color: 'from-purple-500/20'
    },
    {
        title: 'Professional Certs',
        image: 'https://images.unsplash.com/photo-1454165833767-1316b0215b3f?q=80&w=2070&auto=format&fit=crop',
        color: 'from-orange-500/20'
    }
];

const IndustryCarousel = () => {
    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Powering progress across industries
                </h2>
                <div className="flex gap-4 mb-2">
                    <button className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        ←
                    </button>
                    <button className="p-3 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        →
                    </button>
                </div>
            </div>

            <div className="flex gap-6 px-6 overflow-x-auto no-scrollbar pb-12">
                {industries.map((ind, i) => (
                    <motion.div
                        key={ind.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-shrink-0 w-[350px] md:w-[450px] aspect-[4/5] relative rounded-[2.5rem] overflow-hidden group border border-slate-200/10"
                    >
                        <img
                            src={ind.image}
                            alt={ind.title}
                            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-linear-to-t ${ind.color} to-transparent opacity-60`} />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                        <div className="absolute top-8 left-8">
                            <h3 className="text-2xl font-bold text-white tracking-tight">{ind.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="container mx-auto px-6">
                <div className="h-1 bg-slate-100 dark:bg-slate-800/50 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: '40%' }}
                        className="h-full bg-linear-to-r from-blue-500 to-indigo-600"
                    />
                </div>
            </div>
        </section>
    );
};

export default IndustryCarousel;
