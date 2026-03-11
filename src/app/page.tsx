import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import ValueProps from '@/components/ValueProps';
import PlatformSection from '@/components/PlatformSection';
import IndustryCarousel from '@/components/IndustryCarousel';
import PlatformShowcase from '@/components/PlatformShowcase';
import InteractiveShowcase from '@/components/InteractiveShowcase';
import SuccessStory from '@/components/SuccessStory';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProof />
        <ValueProps />
        <PlatformSection />
        <IndustryCarousel />
        <PlatformShowcase />
        <InteractiveShowcase />
        <SuccessStory />
        <News />

        {/* Final CTA */}
        <section className="relative py-32 bg-white overflow-hidden border-t border-slate-100">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full -z-10" />
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-serif tracking-tight text-[#111110] mb-12 leading-[1.05]">
              Ready to transform <br className="hidden md:block" /> your learning experience?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-black text-white px-12 py-5 text-xl rounded-full font-medium shadow-2xl shadow-black/10 hover:bg-black/90 transition-all active:scale-[0.98]">
                Get Started Free
              </button>
              <button className="text-xl font-medium text-slate-600 hover:text-black transition-colors flex items-center gap-2 group">
                Watch TeachGrid in Action
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}