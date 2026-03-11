"use client";

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#111110] text-white pt-32 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          {/* Left: CTA */}
          <div>
            <h2 className="font-serif text-[clamp(48px,6vw,80px)] leading-[1.1] font-normal tracking-tight mb-8 text-coral-500">
              Build the future <br /> of learning.
            </h2>
            <div className="flex items-center gap-4 max-w-md bg-white/5 p-2 rounded-full border border-white/10 focus-within:bg-white/10 focus-within:border-white/20 transition-colors">
              <input
                type="email"
                placeholder="Work email"
                className="bg-transparent border-none outline-none px-4 py-2 flex-1 text-sm text-white placeholder:text-white/40"
              />
              <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Right: Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-6">Platform</h4>
              <ul className="space-y-4 text-sm font-medium text-white/80">
                <li><Link href="#" className="hover:text-white transition-colors">Models</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-6">Use Cases</h4>
              <ul className="space-y-4 text-sm font-medium text-white/80">
                <li><Link href="#" className="hover:text-white transition-colors">Corporate Training</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Higher Education</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Customer Onboarding</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Developer Docs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-white/40 mb-6">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-white/80">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {/* Replace SVG text logo with Image logo */}
            <Link href="/" className="inline-block relative">
              <img
                src="/logo.png"
                alt="TeachGrid Logo"
                className="h-6 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-xs text-white/40 font-medium">© 2024 TeachGrid Inc.</p>
          </div>

          <div className="flex items-center gap-8 text-xs font-semibold text-white/60">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-8">
              {/* Social Icons (simplified) */}
              <Link href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
