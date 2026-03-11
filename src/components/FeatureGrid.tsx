"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FeatureGrid = () => {
    return (
        <section className="py-12 bg-background">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[400px] md:h-[500px]">
                    {/* Card 1: Abstract with Overlay */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-200/10"
                    >
                        <img
                            src="/images/grid-abstract.png"
                            alt="AI Infrastructure"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />

                        {/* Context Window Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="w-full max-w-sm bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl space-y-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="space-y-3">
                                    <div className="inline-flex px-3 py-1 rounded-full bg-white text-slate-900 text-[12px] font-bold">
                                        $18.5 million upside
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        &ldquo;TeachGrid AI identified significant optimization opportunities in our student lifecycle management&hellip;&rdquo;
                                    </p>
                                    <div className="inline-flex px-3 py-1 rounded-full bg-white text-slate-900 text-[12px] font-bold">
                                        expanded deal sizes
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Lifestyle/Professional */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                            alt="Professional Expert"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
