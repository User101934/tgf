"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const InteractiveShowcase = () => {
    return (
        <section className="py-32 bg-[#0d1f0e] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left Content */}
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-[clamp(40px,5vw,64px)] font-normal tracking-tight mb-8 leading-[1.1]"
                        >
                            Built for educators.<br />Loved by developers.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-white/70 text-[17px] leading-relaxed max-w-lg mb-12"
                        >
                            TeachGrid’s API-first architecture means you can deeply integrate learning into any product. Use our robust SDKs and webhooks to build custom learning experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            {[
                                "Comprehensive REST & GraphQL APIs",
                                "Real-time Event Webhooks",
                                "SSO & Identity Management (SAML, OAuth2)",
                                "Custom domain & whitelabeling"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-12"
                        >
                            <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-emerald-400 hover:text-emerald-300 transition-colors group">
                                Read the Documentation
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Terminal View */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-[1.2] w-full"
                    >
                        <div className="bg-[#fcfcfa] rounded-2xl overflow-hidden shadow-2xl border border-white/10 text-slate-800">
                            {/* Window Header */}
                            <div className="px-4 py-3 border-b border-slate-200 flex items-center gap-2 bg-white">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                                </div>
                                <div className="flex-1 text-center">
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">docs.teachgrid.ai</span>
                                </div>
                            </div>

                            <div className="flex">
                                {/* Sidebar */}
                                <div className="hidden sm:block w-48 border-r border-slate-200 p-4 bg-slate-50">
                                    <ul className="space-y-4">
                                        <li>
                                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Getting Started</span>
                                            <ul className="mt-2 space-y-2 text-sm text-slate-600 font-medium">
                                                <li>Authentication</li>
                                                <li className="text-indigo-600 font-bold bg-indigo-50 px-2 py-1 -mx-2 rounded">API Reference</li>
                                                <li>Webhooks</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 md:p-8">
                                    <h3 className="text-xl font-bold font-serif mb-2 text-slate-900">Create a new course</h3>
                                    <p className="text-sm text-slate-500 mb-6 font-medium">Generate a fully structured AI course via POST request.</p>

                                    <div className="bg-[#111110] rounded-xl p-4 overflow-x-auto">
                                        <pre className="text-sm font-mono leading-relaxed text-slate-300">
                                            <span className="text-indigo-400">curl</span> -X POST https://api.teachgrid.ai/v1/courses \
                                            -H <span className="text-emerald-400">"Authorization: Bearer tg_live_****"</span> \
                                            -H <span className="text-emerald-400">"Content-Type: application/json"</span> \
                                            -d <span className="text-coral-400">'{'{'}
                                                "title": "Machine Learning Fundamentals",
                                                "description": "Introductory course based on provided PDF",
                                                "source_material": "url_to_pdf",
                                                "ai_generation": true,
                                                "module_count": 5
                                                {'}'}'</span></pre>
                                    </div>

                                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Response</span>
                                        <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">200 OK</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveShowcase;
