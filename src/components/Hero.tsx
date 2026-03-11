"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-[clamp(48px,8vw,100px)] leading-[0.95] tracking-[-0.03em] text-[#111110] mb-10"
          >
            AI-powered <br />
            Learning for <br />
            Smarter Education.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="/get-started"
              className="bg-[#111110] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-black/90 transition-all active:scale-[0.98]"
            >
              Start Learning
            </Link>
            <Link
              href="/demo"
              className="group flex items-center gap-2 text-lg font-medium text-slate-900 border-b border-transparent hover:border-black transition-all"
            >
              Request a demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Visuals - Side by Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Card 1: Collaborative Learning */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-2xl"
          >
            <img
              src="/images/grid-abstract.png"
              alt="Collaborative AI Learning"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

            {/* Floating Tags */}
            <div className="absolute top-8 left-8 flex flex-col gap-3">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold tracking-tight">Live Cohorts</span>
              </div>
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
                <span className="text-sm font-bold">97.4% Completion Rate</span>
              </div>
            </div>

            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-[#111110]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-white">
                <p className="text-sm font-medium opacity-60 mb-2 uppercase tracking-widest text-emerald-400">Collaborative</p>
                <h3 className="text-2xl font-serif">Create and deliver learning content at scale.</h3>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Strategic Insights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-2xl"
          >
            <img
              src="/images/professional-lifestyle.png"
              alt="Strategic Insights"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />

            {/* Floating Tags */}
            <div className="absolute top-8 right-8 flex flex-col items-end gap-3">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
                <span className="text-sm font-bold">100+ Happy Clients ⭐</span>
              </div>
              <div className="bg-indigo-600 px-4 py-2 rounded-full shadow-lg text-white">
                <span className="text-sm font-semibold">AI-Powered ✨</span>
              </div>
            </div>

            <div className="absolute bottom-10 left-10 right-10">
              <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 text-[#111110]">
                <p className="text-sm font-medium opacity-60 mb-2 uppercase tracking-widest text-indigo-600">Education Ready</p>
                <h3 className="text-2xl font-serif">Impact-driven learning. Zero friction delivery.</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
