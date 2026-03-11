"use client";

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

// Cohere-style grained SVG background generator
const GrainedCard = ({ gradient, accentColor, icon, label, title, stat, statLabel }: {
    gradient: string;
    accentColor: string;
    icon: React.ReactNode;
    label: string;
    title: string;
    stat: string;
    statLabel: string;
}) => (
    <div className="flex-shrink-0 w-[80vw] md:w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden relative group snap-start shadow-xl border border-white/5">
        {/* Gradient base */}
        <div className={`absolute inset-0 ${gradient}`} />

        {/* Grain texture overlay — Cohere style */}
        <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none mix-blend-overlay"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: '180px 180px',
            }}
        />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,transparent_40%,rgba(0,0,0,0.5)_100%)]" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
            {/* Top: icon + label */}
            <div>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 border border-white/10`} style={{ background: accentColor }}>
                    {icon}
                </div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/40">{label}</span>
            </div>

            {/* Bottom: title + stat */}
            <div>
                <h3 className="text-white font-serif text-2xl md:text-[26px] leading-snug mb-8 tracking-tight">
                    {title}
                </h3>
                <div className="h-px w-full bg-white/10 mb-6" />
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-3xl font-bold text-white">{stat}</p>
                        <p className="text-[11px] uppercase tracking-widest text-white/40 mt-1">{statLabel}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:border-white/50 group-hover:text-white transition-all">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const IndustryCarousel = () => {
    const cards = [
        {
            gradient: 'bg-[#0f1a2e]',
            accentColor: 'rgba(99,102,241,0.35)',
            label: 'Course Management',
            title: 'Build and launch structured courses in minutes, not weeks.',
            stat: '10×',
            statLabel: 'Faster course creation',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
                </svg>
            ),
        },
        {
            gradient: 'bg-[#0e1f16]',
            accentColor: 'rgba(16,185,129,0.35)',
            label: 'Learner Progress',
            title: 'Track every learner\'s journey with real-time analytics.',
            stat: '97%',
            statLabel: 'Avg. completion rate',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
            ),
        },
        {
            gradient: 'bg-[#1a0f2e]',
            accentColor: 'rgba(139,92,246,0.35)',
            label: 'AI Assessments',
            title: 'Auto-generate quizzes, assignments, and grading rubrics.',
            stat: '5 sec',
            statLabel: 'Assessment generation',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
            ),
        },
        {
            gradient: 'bg-[#1f1508]',
            accentColor: 'rgba(245,158,11,0.30)',
            label: 'Live Classrooms',
            title: 'Host live sessions, webinars, and instructor-led training.',
            stat: '50k+',
            statLabel: 'Live sessions hosted',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
            ),
        },
        {
            gradient: 'bg-[#1a1010]',
            accentColor: 'rgba(239,68,68,0.28)',
            label: 'Certifications',
            title: 'Issue verifiable certificates and badges upon completion.',
            stat: '200k+',
            statLabel: 'Certificates issued',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
            ),
        },
        {
            gradient: 'bg-[#0a1a1a]',
            accentColor: 'rgba(6,182,212,0.28)',
            label: 'Integrations',
            title: 'Connect with Zoom, GitHub, Slack, and 50+ tools seamlessly.',
            stat: '50+',
            statLabel: 'Native integrations',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
            ),
        },
        {
            gradient: 'bg-[#131318]',
            accentColor: 'rgba(99,102,241,0.25)',
            label: 'White-label',
            title: 'Launch your own branded learning portal in a single click.',
            stat: '100%',
            statLabel: 'Fully customisable',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                </svg>
            ),
        },
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollRef });

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 mb-12 flex items-end justify-between">
                <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-normal tracking-tight text-[#111110]">
                    Everything your LMS <br /> needs to succeed
                </h2>

                {/* Progress bar */}
                <div className="hidden md:flex h-1.5 w-64 bg-slate-100 rounded-full relative overflow-hidden">
                    <motion.div
                        className="absolute inset-0 bg-linear-to-r from-coral-500 via-indigo-500 to-blue-500"
                        style={{ scaleX: scrollXProgress, transformOrigin: "left" }}
                    />
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-10 px-6 no-scrollbar snap-x snap-mandatory"
            >
                {cards.map((card) => (
                    <GrainedCard key={card.label} {...card} />
                ))}
            </div>
        </section>
    );
};

export default IndustryCarousel;
