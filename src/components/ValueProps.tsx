"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ValueProps = () => {
    const props = [
        {
            title: "For Organizations",
            description: "Deliver scalable, AI-powered training programs tailored to your organization's goals with zero friction setup.",
            svg: (
                <svg viewBox="0 0 72 72" fill="none" stroke="#111110" strokeWidth="1.3" className="w-16 h-16 mb-8">
                    <path d="M36 8 L64 36 L36 64 L8 36 Z" />
                    <path d="M36 18 L54 36 L36 54 L18 36 Z" />
                    <path d="M36 28 L44 36 L36 44 L28 36 Z" />
                </svg>
            )
        },
        {
            title: "For Colleges & Universities",
            description: "Empower educators and students with AI-driven content creation, delivery, and assessment tools built for academia.",
            svg: (
                <svg viewBox="0 0 72 72" fill="none" stroke="#111110" strokeWidth="1.3" className="w-16 h-16 mb-8">
                    <circle cx="36" cy="36" r="28" />
                    <path d="M18 36 H54" />
                    <path d="M36 18 V54" />
                </svg>
            )
        },
        {
            title: "For Institutes & Academies",
            description: "Manage courses, track learner progress, and automate assessments — all from a single intelligent dashboard.",
            svg: (
                <svg viewBox="0 0 72 72" fill="none" stroke="#111110" strokeWidth="1.3" className="w-16 h-16 mb-8">
                    <rect x="12" y="12" width="48" height="48" rx="8" />
                    <path d="M24 36 L32 44 L48 28" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-32 bg-[#fdfdfd]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-[clamp(40px,5vw,72px)] font-normal tracking-tight text-center mb-20 text-[#111110]"
                >
                    Trusted. Flexible. Built for Education.
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {props.map((prop, index) => (
                        <motion.div
                            key={prop.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-start"
                        >
                            {prop.svg}
                            <h3 className="text-2xl font-serif mb-4 text-[#111110]">{prop.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                {prop.description}
                            </p>
                            <Link
                                href="#"
                                className="text-sm font-semibold text-black border-b border-slate-300 pb-0.5 hover:border-black transition-colors"
                            >
                                Learn more
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProps;
