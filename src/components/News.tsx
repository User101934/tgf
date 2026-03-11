"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const News = () => {
    const articles = [
        {
            date: "OCTOBER 14, 2024",
            category: "ANNOUNCEMENT",
            title: "Introducing TeachGrid Enterprise: Scalable Learning for Global Teams",
            link: "#"
        },
        {
            date: "SEPTEMBER 28, 2024",
            category: "PRODUCT",
            title: "New Feature: Multi-language AI Course Generation",
            link: "#"
        },
        {
            date: "AUGUST 15, 2024",
            category: "RESEARCH",
            title: "How AI is Reshaping Corporate Onboarding and Retention",
            link: "#"
        }
    ];

    return (
        <section className="py-32 bg-[#fdfdfd] border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-[clamp(40px,5vw,64px)] font-normal tracking-tight leading-[1.1] text-[#111110]"
                    >
                        Latest updates & <br /> research.
                    </motion.h2>
                    <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold border border-slate-200 rounded-full px-6 py-3 hover:bg-slate-50 transition-colors">
                        View all news <ArrowUpRight size={16} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="h-48 bg-slate-100 rounded-2xl mb-6 overflow-hidden relative border border-slate-200">
                                {/* Placeholder for news image */}
                                <div className="absolute inset-0 bg-linear-to-br from-indigo-50 to-slate-100 group-hover:scale-105 transition-transform duration-500" />
                            </div>

                            <div className="flex items-center gap-3 mb-4 text-[11px] font-bold tracking-widest uppercase">
                                <span className="text-slate-400">{article.date}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <span className="text-indigo-600">{article.category}</span>
                            </div>

                            <h3 className="text-xl font-serif text-[#111110] group-hover:text-indigo-600 transition-colors leading-snug">
                                {article.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default News;
