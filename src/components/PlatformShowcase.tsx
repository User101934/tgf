"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const PlatformShowcase = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            title: "AI-Powered Content Creation",
            description: "Create, deliver, and assess learning content in seconds with TeachGrid's advanced platform. Turn documents into structured courses instantly.",
            details: ["Doc-to-Course Engine", "Auto Assessment Builder", "Multi-language Support"]
        },
        {
            title: "Collaborative Learning ✨",
            description: "Collaborate with educators and learners without missing a beat. TeachGrid keeps you in sync and ahead with real-time co-creation tools.",
            details: ["Real-time Co-authoring", "Shared Workspaces", "Peer Review Tools"]
        },
        {
            title: "Unified Learning Dashboard",
            description: "TeachGrid brings all your educational tools together. Instantly create, track, and optimize your courses with AI-powered insights right from a single dashboard.",
            details: ["Course Analytics", "Learner Progress Tracking", "Engagement Heatmaps"]
        },
        {
            title: "Seamless Integrations",
            description: "Connect TeachGrid to your favorite tools — Linear, Netlify, GitHub, Zoom, Discord, WhatsApp and more. Automate your workflow and focus on delivering impactful education.",
            details: ["50+ Native Connectors", "Webhook Support", "API-first Architecture"]
        }
    ];

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="font-serif text-[clamp(40px,5vw,64px)] font-normal tracking-tight mb-20 text-[#111110]">
                    Our platform. <br /> All learning.
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Left: Beige/Cream AI Chat Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="aspect-[4/5] bg-[#f9f8f4] rounded-[3rem] p-10 flex flex-col shadow-inner"
                    >
                        <div className="mb-auto">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                                    <span className="font-bold">L</span>
                                </div>
                                <div className="px-4 py-2 bg-white rounded-2xl shadow-sm border border-slate-100 max-w-[80%]">
                                    <p className="text-sm font-medium text-slate-800">How can I create a course from my existing training materials?</p>
                                </div>
                            </div>

                            <div className="flex flex-row-reverse items-center gap-3 group">
                                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                                    <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
                                </div>
                                <div className="px-5 py-4 bg-[#111110] text-white rounded-2xl rounded-tr-none shadow-xl max-w-[85%] border border-white/5">
                                    <p className="text-sm leading-relaxed mb-4">
                                        Upload your documents and TeachGrid AI will automatically structure them into **modules**, add quizzes, and adapt content to your learners&apos; level.
                                    </p>
                                    <div className="h-px w-full bg-white/10 mb-4" />
                                    <p className="text-[12px] font-bold text-emerald-400 uppercase tracking-widest">Course deployed to 38 active learners</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 font-bold text-[10px]">AI</div>
                                <p className="text-[12px] font-bold tracking-widest uppercase text-slate-400 flex items-center">Cognitive Engine v4.2</p>
                            </div>
                            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100">
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Accordion */}
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className={cn(
                                    "border-b border-slate-100 overflow-hidden transition-all duration-300",
                                    activeIndex === index ? "pb-8" : "pb-6"
                                )}
                            >
                                <button
                                    onClick={() => setActiveIndex(index)}
                                    className="w-full flex items-center justify-between text-left group"
                                >
                                    <h3 className={cn(
                                        "text-2xl font-serif transition-colors",
                                        activeIndex === index ? "text-[#111110]" : "text-slate-400 hover:text-slate-600"
                                    )}>
                                        {feature.title}
                                    </h3>
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                                        activeIndex === index ? "bg-black text-white" : "bg-slate-50 text-slate-400 group-hover:text-slate-600"
                                    )}>
                                        {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="pt-6">
                                                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                                                    {feature.description}
                                                </p>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {feature.details.map((detail) => (
                                                        <li key={detail} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        <div className="pt-8">
                            <Link href="#" className="inline-flex items-center gap-2 text-lg font-medium text-indigo-600 group">
                                Download the technical specs
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlatformShowcase;
