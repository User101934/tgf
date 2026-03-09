import React from 'react';
import { Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ValueProps from '@/components/ValueProps';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import FeatureGrid from '@/components/FeatureGrid';
import IndustryCarousel from '@/components/IndustryCarousel';
import PlatformSection from '@/components/PlatformSection';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <ValueProps />
        <InteractiveShowcase />
        <FeatureGrid />
        <IndustryCarousel />
        <PlatformSection />

        {/* Solutions Highlight */}
        <section className="py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-10">
                <div className="space-y-6">
                  <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Industry Solutions</h2>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight text-balance">
                    Tailored infrastructure for every learning vertical.
                  </h3>
                </div>

                <div className="space-y-8">
                  <div className="p-6 rounded-3xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Higher Education</h4>
                    <p className="text-slate-500 dark:text-slate-400">Scalable campus management with student lifecycle tracking and automated billing.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Corporate Training</h4>
                    <p className="text-slate-500 dark:text-slate-400">Microlearning studios and skills gap analysis powered by intelligent AI agents.</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Professional Academies</h4>
                    <p className="text-slate-500 dark:text-slate-400">End-to-end cohort management with lead capturing and multi-currency payment tracking.</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full -z-10" />
                <div className="p-8 rounded-[3rem] bg-slate-900 shadow-2xl overflow-hidden border border-slate-800">
                  <div className="aspect-square bg-linear-to-br from-indigo-900 to-slate-900 flex items-center justify-center p-12 text-center">
                    <div className="space-y-8">
                      <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto">
                        <Sparkles className="text-indigo-400" size={40} />
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-white tracking-tight">AI Agent Deployment</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">Instantly deploy custom learning agents that support your students 24/7 across any language.</p>
                      </div>
                      <div className="pt-8 grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <div className="text-2xl font-bold text-white">98%</div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Accuracy</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                          <div className="text-2xl font-bold text-white">2.4s</div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Latency</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Pricing />

        {/* Final CTA */}
        <section className="py-32 bg-linear-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-10 leading-[1.1]">
              Ready to modernize your <br className="hidden md:block" /> learning infrastructure?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="btn-primary px-12 py-5 text-xl shadow-2xl shadow-indigo-500/30">Get Started Now</button>
              <button className="btn-ghost px-12 py-5 text-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
