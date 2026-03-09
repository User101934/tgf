"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Box, Share2, GitBranch } from 'lucide-react';

const features = [
    {
        id: 'ta',
        title: 'Teaching Assistant',
        desc: 'Automate lesson planning, student queries, and personalized feedback loops with state-of-the-art pedagogical AI.',
        icon: <Layout className="w-5 h-5" />,
        content: {
            title: 'Pedagogical Intelligence Agent',
            subtitle: 'Analyze student performance data to generate personalized remedial tracks for the next semester.',
            file: 'PERFORMANCE_REPORT_Q3.XLS',
            size: '14.2 MB'
        }
    },
    {
        id: 'ca',
        title: 'Content Automator',
        desc: 'Generate interactive course materials, quizzes, and summaries from raw documents or video lectures instantly.',
        icon: <Box className="w-5 h-5" />,
        content: {
            title: 'Course Synthesis Agent',
            subtitle: 'Transform 12 hours of video lectures into a 50-page interactive study guide with auto-generated assessments.',
            file: 'COURSE_SYLLABUS_GEN.PDF',
            size: '8.5 MB'
        }
    },
    {
        id: 'gi',
        title: 'Grading Intelligence',
        desc: 'Scalable automated grading for essays and complex assignments with human-in-the-loop verification patterns.',
        icon: <GitBranch className="w-5 h-5" />,
        content: {
            title: 'Assessment Validatior',
            subtitle: 'Scan 500+ student essays for semantic understanding and provide detailed constructive feedback rubrics.',
            file: 'GRADING_MATRIX_FINAL.JSON',
            size: '2.1 MB'
        }
    }
];

const InteractiveShowcase = () => {
    const [activeTab, setActiveTab] = useState(features[0]);

    return (
        <section className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative rounded-[3rem] overflow-hidden aspect-[21/9] min-h-[600px] border border-slate-200 dark:border-slate-800 shadow-2xl">
                    {/* Background Image */}
                    <img
                        src="/images/mountain-bg.png"
                        alt="AI Landscape"
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 dark:opacity-40"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

                    {/* Sidebar UI */}
                    <div className="absolute inset-y-0 left-0 w-full md:w-[450px] p-8 md:p-12 flex flex-col justify-center">
                        <div className="flex gap-4 mb-12">
                            <div className="w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            </div>
                            <h3 className="text-3xl font-bold text-white tracking-tight">TeachGrid Agents</h3>
                        </div>

                        <div className="space-y-4">
                            {features.map((f) => (
                                <button
                                    key={f.id}
                                    onClick={() => setActiveTab(f)}
                                    className={`group w-full text-left p-6 rounded-2xl transition-all border ${activeTab.id === f.id
                                            ? 'bg-white/10 border-white/20 backdrop-blur-md shadow-xl'
                                            : 'bg-transparent border-transparent hover:bg-white/5'
                                        }`}
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className={`${activeTab.id === f.id ? 'text-green-400' : 'text-slate-400 group-hover:text-white'} transition-colors`}>
                                            {f.icon}
                                        </div>
                                        <span className={`font-bold transition-colors ${activeTab.id === f.id ? 'text-white' : 'text-slate-400 group-hover:text-white'}`}>
                                            {f.title}
                                        </span>
                                    </div>
                                    {activeTab.id === f.id && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="text-slate-300 text-sm leading-relaxed"
                                        >
                                            {f.desc}
                                        </motion.p>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Widget Overlay */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-12 hidden lg:block w-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400">
                                        {activeTab.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white">{activeTab.content.title}</h4>
                                </div>

                                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                    {activeTab.content.subtitle}
                                </p>

                                <div className="bg-black/40 border border-white/5 rounded-2xl p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
                                            <Layout className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-mono text-sm uppercase tracking-wider">{activeTab.content.file}</div>
                                            <div className="text-green-500/60 font-mono text-[10px]">{activeTab.content.size}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center text-slate-500 font-mono text-xs">
                                    <span>UNITS ACTIVATED: 2,492</span>
                                    <div className="flex gap-2">
                                        <div className="w-1 h-1 rounded-full bg-green-500" />
                                        <div className="w-1 h-3 rounded-full bg-green-500/30" />
                                        <div className="w-1 h-2 rounded-full bg-green-500/50" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveShowcase;
