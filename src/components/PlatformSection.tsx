"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const PlatformSection = () => {
  return (
    <section className="bg-[#0d1f0e] min-h-[700px] grid grid-cols-1 lg:grid-cols-2">
      {/* Left: dark green bg photo + text */}
      <div className="relative flex flex-col justify-end p-10 lg:p-20 overflow-hidden min-h-[500px]">
        <img
          src="/images/grid-abstract.png"
          alt="Turnkey Platform"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="relative z-10 max-w-lg">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(32px,4vw,48px)] text-white leading-[1.1] mb-8"
          >
            The all-in-one AI platform for impactful education.
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white text-black rounded-full px-8 py-3.5 font-medium hover:bg-slate-100 transition-all active:scale-[0.98]"
          >
            Explore TeachGrid
          </motion.button>
        </div>
      </div>

      {/* Right: dark panel with table */}
      <div className="bg-[#0d1f0e] flex items-center justify-center p-6 lg:p-20 border-t lg:border-t-0 lg:border-l border-white/5">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#1a1a18] border border-white/10 rounded-2xl overflow-hidden w-full max-w-xl shadow-2xl"
        >
          {/* Analytics Table Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-white font-medium text-sm">Deployment Progress</h3>
            <span className="text-xs text-white/40 uppercase tracking-widest">Real-time stats</span>
          </div>

          <div className="p-6 space-y-6">
            {[
              { label: 'Course Completion Rate', value: '97.4%', trend: '+3.2%', color: 'bg-emerald-500' },
              { label: 'Active Learners', value: '12.4k', trend: '+18%', color: 'bg-indigo-500' },
              { label: 'Content Delivery', value: '98ms', trend: '-22ms', color: 'bg-coral-500' },
              { label: 'Time Saved', value: '820hrs', trend: 'Monthly', color: 'bg-blue-500' }
            ].map((stat) => (
              <div key={stat.label} className="group flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm font-medium">{stat.label}</span>
                  <span className="text-white font-bold">{stat.value}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    className={cn("h-full rounded-full opacity-80", stat.color)}
                  />
                </div>
                <div className="flex justify-end">
                  <span className="text-[10px] font-bold text-white/30 uppercase">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white/[0.02] border-t border-white/5">
            <p className="text-white/40 text-xs italic">
              &quot;Since deploying TeachGrid, our institution has seen a 40% improvement in learner engagement and course completion.&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformSection;
