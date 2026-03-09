"use client";

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden bg-background">
      {/* Custom Abstract Grain Background */}
      <div className="absolute inset-0 -z-10 bg-background overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-full opacity-60 dark:opacity-40 blur-3xl rounded-full bg-linear-to-b from-indigo-500/10 to-transparent" />
        <img
          src="/images/premium-hero.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none mix-blend-soft-light"
        />
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-600 dark:text-slate-400 mb-10"
        >
          <Sparkles size={14} className="text-indigo-600" />
          <span>Announcing TeachGrid Spark for Enterprises</span>
          <ArrowRight size={14} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Your next breakthrough,<br />powered by AI
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            TeachGrid is where powerful AI meets practical educational solutions — so you can teach smarter.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all">
              Request a demo
            </button>
            <button className="text-slate-900 dark:text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border-b border-transparent hover:border-slate-200">
              Explore products
            </button>
          </div>
        </motion.div>

        {/* Floating Mockup / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 relative max-w-6xl mx-auto group"
        >
          <div className="absolute inset-0 bg-linear-to-r from-indigo-500/20 to-purple-500/20 blur-2xl rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="p-2 rounded-[2rem] bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-2xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
            <div className="rounded-[1.5rem] overflow-hidden bg-slate-950 aspect-video relative group/mockup">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Premium 3D Grained Layer */}
                <img
                  src="/images/premium-hero.png"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen grayscale"
                  alt=""
                />
                <div className="absolute inset-0 bg-linear-to-br from-slate-950/80 via-slate-950/40 to-indigo-900/40" />
                <div className="flex flex-col items-center gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <img
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/f32bc3e4-3637-45b4-97a7-8620b4aefe83/image-resized-1772182697345.webp?width=8000&height=8000&resize=contain"
                      alt="TeachGrid Logo"
                      className="w-full h-auto object-contain p-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="w-48 h-2 bg-slate-700 rounded-full animate-pulse" />
                    <div className="w-32 h-2 bg-slate-700 rounded-full animate-pulse mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
