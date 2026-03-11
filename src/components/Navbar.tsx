"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

/* ── Dropdown content definitions ── */
const platformMenu = {
  cards: [
    {
      label: 'TEACHGRID CAMPUS',
      title: 'Campus',
      desc: 'The comprehensive AI infrastructure designed for universities and large-scale higher education.',
      dot: '#6366f1',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #7c3aed 100%)',
    },
    {
      label: 'TEACHGRID SPARK',
      title: 'Spark',
      desc: 'A nimble, high-performance platform for training institutes, bootcamps, and agile learning teams.',
      dot: '#a855f7',
      gradient: 'linear-gradient(135deg, #2e1065 0%, #7e22ce 50%, #c026d3 100%)',
    },
    {
      label: 'LUMI AI ✦',
      title: 'Lumi AI',
      desc: 'Enterprise-grade AI agents for automated grading, 24/7 student support, and intelligent content creation.',
      dot: '#f97316',
      gradient: 'linear-gradient(135deg, #431407 0%, #c2410c 50%, #f97316 100%)',
    },
  ],
  middle: {
    heading: 'LEARNING & DELIVERY',
    links: [
      'Smart Learning Management',
      'Cohort Management',
      'Live Sessions',
      'Calendar',
      'Whiteboard AI ✦',
      'Virtual Labs',
      'Microlearning Studio',
      'Community',
      'Mobile-Friendly Experience',
    ],
    heading2: 'EXPERIENCE PORTALS',
    links2: [
      'LXP (Learner Portal)',
      'MXP (Mentor Portal)',
      'Learner Feedback Submission',
      'Personalized Dashboard',
    ],
  },
  right: {
    heading: 'ASSESSMENT',
    links: [
      'Quizzes & Assignments',
      'Live Proctoring',
      'Grading',
      'Polls & Surveys',
      'Certificates & Certificate Designer',
      'Attendance',
    ],
    heading2: 'INTELLIGENCE',
    links2: ['AI Features & AI Agents ✦', 'Intelligent Analytics'],
    heading3: 'ENGAGEMENT',
    links3: ['Leaderboard & Badges'],
    heading4: 'ADMINISTRATION',
    links4: ['Billing Desk', 'Integrations', 'Admin Controls', 'System Settings'],
  },
  footer: ['CUSTOMIZATION →', 'PRICING →'],
};

const solutionsMenu = {
  left: {
    heading: 'TEACHGRID FOR',
    links: ['Organizations', 'Colleges & Universities', 'Institutes & Academies'],
    heading2: 'EXTENDED SOLUTIONS',
    links2: ['Instructional Design', 'AI for Education', 'White-labelled Solution', 'API Solution'],
    heading3: 'INDUSTRY',
    links3: ['Software', 'Finance', 'Healthcare', 'Education', 'Consulting', 'Tech / IT Services', 'Manufacturing'],
  },
  card: {
    title: 'TeachGrid Enterprise →',
    desc: 'Your all-in-one AI-powered learning infrastructure — built for scale.',
    gradient: 'linear-gradient(135deg, #0a0a14 0%, #1e1040 40%, #c2410c 130%)',
  },
  footer: ['SECURITY →', 'PRIVATE DEPLOYMENTS →'],
};

const resourcesMenu = {
  left: {
    heading: 'SUPPORT & CONTENT',
    links: ['Documentation', 'Help Center', 'Community & Q/A', 'Blog & Insights', 'Release Notes'],
  },
  middle: {
    heading: 'CUSTOMER FEEDBACK',
    links: ['Submit Feedback', 'Feature Requests', 'Product Suggestions'],
  },
  card: {
    title: 'Customer Stories →',
    desc: 'Explore education case studies and success stories from TeachGrid users.',
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 40%, #34d399 100%)',
  },
};

const companyMenu = {
  heading: 'COMPANY',
  links: ['About Us', 'Case Studies', 'Customer Reviews', 'Security', 'Legal', 'Customers', 'Testimonials', 'Careers', 'Contact', 'Comparison'],
};

/* ── Reusable dropdown link ── */
const DropLink = ({ children }: { children: React.ReactNode }) => (
  <Link href="#" className="block text-[15.5px] text-[#1a1a1a] hover:text-[#5b47e0] transition-colors duration-100 py-[5px] leading-snug font-normal">
    {children}
  </Link>
);

const DropHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#9ca3af] mb-3 mt-7 first:mt-0">
    {children}
  </p>
);

/* ── Gradient image card used in dropdowns — Cohere style ── */
const DropImageCard = ({
  gradient,
  title,
  desc,
  className = '',
}: {
  gradient: string;
  title: string;
  desc: string;
  className?: string;
}) => (
  <Link
    href="#"
    className={cn(
      'relative overflow-hidden rounded-xl flex flex-col justify-end p-5 group cursor-pointer',
      className
    )}
    style={{ background: gradient }}
  >
    {/* Grain texture */}
    <div
      className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundSize: '160px 160px',
      }}
    />
    {/* Bottom gradient overlay for text legibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
    <div className="relative z-10">
      <p className="text-white font-semibold text-[16px] leading-snug mb-1.5 group-hover:underline underline-offset-2">
        {title}
      </p>
      <p className="text-white/65 text-[13px] leading-snug">{desc}</p>
    </div>
  </Link>
);

/* ── Main Navbar ── */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const navItems = [
    { label: 'Platform', hasDropdown: true },
    { label: 'Solutions', hasDropdown: true },
    { label: 'Pricing', hasDropdown: false },
    { label: 'Resources', hasDropdown: true },
    { label: 'Company', hasDropdown: true },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation */}
      <nav
        className={cn(
          'bg-white transition-all duration-300',
          isScrolled ? 'shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : ''
        )}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-[68px]">

          {/* Logo — unchanged */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img src="/logo.png" alt="Teachgrid Logo" className="h-9 w-auto" />
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && openDropdown(item.label)}
                onMouseLeave={closeDropdown}
              >
                <button
                  className={cn(
                    'relative flex items-center px-4 py-2 text-[15px] font-normal transition-colors duration-150',
                    activeDropdown === item.label
                      ? 'text-[#111110]'
                      : 'text-[#374151] hover:text-[#111110]'
                  )}
                >
                  {item.label}
                  {/* Cohere active underline */}
                  {item.hasDropdown && activeDropdown === item.label && (
                    <span className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#111110] rounded-full" />
                  )}
                </button>

                {/* ── Dropdown Panels ── */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.13, ease: 'easeOut' }}
                      onMouseEnter={() => openDropdown(item.label)}
                      onMouseLeave={closeDropdown}
                      className="absolute top-full mt-2 bg-white rounded-2xl overflow-y-auto overflow-x-hidden custom-scrollbar"
                      style={{
                        left: item.label === 'Platform' ? '-100px' : '50%',
                        transform: item.label === 'Platform' ? 'none' : 'translateX(-50%)',
                        minWidth:
                          item.label === 'Platform' ? 860
                            : item.label === 'Solutions' ? 700
                              : item.label === 'Resources' ? 680
                                : 300,
                        maxHeight: 'calc(100vh - 90px)',
                        boxShadow:
                          '0 0 0 1px rgba(0,0,0,0.06), 0 8px 32px -4px rgba(0,0,0,0.12), 0 24px 64px -12px rgba(0,0,0,0.10)',
                      }}
                    >

                      {/* ── PLATFORM MEGA MENU ── */}
                      {item.label === 'Platform' && (
                        <div>
                          {/* Header row with "Platform →" label */}
                          <div className="px-5 pt-5 pb-0 flex items-center gap-2 mb-4">
                            <span className="text-[16px] font-medium text-[#111110]">Platform</span>
                            <span className="text-[#9ca3af] text-[16px]">→</span>
                          </div>

                          {/* Three gradient image cards */}
                          <div className="px-5 grid grid-cols-3 gap-3">
                            {platformMenu.cards.map((card) => (
                              <Link href="#" key={card.label} className="group block">
                                {/* Gradient image thumbnail */}
                                <div
                                  className="h-[110px] w-full rounded-xl relative overflow-hidden mb-2.5"
                                  style={{ background: card.gradient }}
                                >
                                  <div
                                    className="absolute inset-0 opacity-[0.2] mix-blend-overlay"
                                    style={{
                                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                                      backgroundSize: '120px 120px',
                                    }}
                                  />
                                </div>
                                {/* Category label */}
                                <p className="text-[9.5px] font-bold tracking-[0.15em] uppercase text-[#9ca3af] mb-1">{card.label}</p>
                                {/* Dot + product name */}
                                <div className="flex items-center gap-1.5 mb-1">
                                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: card.dot }} />
                                  <span className="text-[14.5px] font-medium text-[#111110] group-hover:text-[#5b47e0] transition-colors">{card.title}</span>
                                </div>
                                {/* Description */}
                                <p className="text-[12px] text-[#6b7280] leading-snug">{card.desc}</p>
                              </Link>
                            ))}
                          </div>

                          {/* Divider */}
                          <div className="mx-5 my-5 h-px bg-[#ebebea]" />

                          {/* Two text columns */}
                          <div className="grid grid-cols-2 gap-0 px-5 pb-5">
                            <div className="pr-6 border-r border-[#ebebea]">
                              <DropHeading>{platformMenu.middle.heading}</DropHeading>
                              {platformMenu.middle.links.map((l) => <DropLink key={l}>{l}</DropLink>)}
                              <DropHeading>{platformMenu.middle.heading2}</DropHeading>
                              {platformMenu.middle.links2.map((l) => <DropLink key={l}>{l}</DropLink>)}
                            </div>
                            <div className="pl-6">
                              <DropHeading>{platformMenu.right.heading}</DropHeading>
                              {platformMenu.right.links.map((l) => <DropLink key={l}>{l}</DropLink>)}
                              <DropHeading>{platformMenu.right.heading2}</DropHeading>
                              {platformMenu.right.links2.map((l) => <DropLink key={l}>{l}</DropLink>)}
                              <DropHeading>{platformMenu.right.heading3}</DropHeading>
                              {platformMenu.right.links3.map((l) => <DropLink key={l}>{l}</DropLink>)}
                              <DropHeading>{platformMenu.right.heading4}</DropHeading>
                              {platformMenu.right.links4.map((l) => <DropLink key={l}>{l}</DropLink>)}
                            </div>
                          </div>

                          {/* Footer quick-links */}
                          <div className="border-t border-[#ebebea] px-5 py-3 flex items-center justify-end gap-8">
                            {platformMenu.footer.map((f) => (
                              <Link key={f} href="#" className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#6b7280] hover:text-[#111110] transition-colors">
                                {f}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ── SOLUTIONS ── */}
                      {item.label === 'Solutions' && (
                        <div>
                          <div className="grid grid-cols-[1fr_240px] gap-0 p-5">
                            {/* Left text links */}
                            <div className="pr-5 border-r border-[#ebebea]">
                              <DropHeading>{solutionsMenu.left.heading}</DropHeading>
                              {solutionsMenu.left.links.map((l) => <DropLink key={l}>{l}</DropLink>)}
                              <DropHeading>{solutionsMenu.left.heading2}</DropHeading>
                              {solutionsMenu.left.links2.map((l) => <DropLink key={l}>{l}</DropLink>)}
                              <DropHeading>{solutionsMenu.left.heading3}</DropHeading>
                              {solutionsMenu.left.links3.map((l) => <DropLink key={l}>{l}</DropLink>)}
                            </div>
                            {/* Right: gradient image card */}
                            <div className="pl-5">
                              <DropImageCard
                                gradient={solutionsMenu.card.gradient}
                                title={solutionsMenu.card.title}
                                desc={solutionsMenu.card.desc}
                                className="w-full h-full min-h-[180px]"
                              />
                            </div>
                          </div>
                          {/* Footer */}
                          <div className="border-t border-[#ebebea] px-5 py-3 flex items-center justify-end gap-8">
                            {solutionsMenu.footer.map((f) => (
                              <Link key={f} href="#" className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#6b7280] hover:text-[#111110] transition-colors">
                                {f}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ── RESOURCES ── */}
                      {item.label === 'Resources' && (
                        <div className="grid grid-cols-[1fr_1fr_230px] gap-0 p-5">
                          <div className="pr-5 border-r border-[#ebebea]">
                            <DropHeading>{resourcesMenu.left.heading}</DropHeading>
                            {resourcesMenu.left.links.map((l) => <DropLink key={l}>{l}</DropLink>)}
                          </div>
                          <div className="px-5 border-r border-[#ebebea]">
                            <DropHeading>{resourcesMenu.middle.heading}</DropHeading>
                            {resourcesMenu.middle.links.map((l) => <DropLink key={l}>{l}</DropLink>)}
                          </div>
                          <div className="pl-5">
                            <DropImageCard
                              gradient={resourcesMenu.card.gradient}
                              title={resourcesMenu.card.title}
                              desc={resourcesMenu.card.desc}
                              className="w-full h-full min-h-[160px]"
                            />
                          </div>
                        </div>
                      )}

                      {/* ── COMPANY ── simple list, no image (matches video) */}
                      {item.label === 'Company' && (
                        <div className="p-5">
                          <DropHeading>{companyMenu.heading}</DropHeading>
                          <div className="grid grid-cols-2 gap-x-10">
                            <div>{companyMenu.links.slice(0, 5).map((l) => <DropLink key={l}>{l}</DropLink>)}</div>
                            <div>{companyMenu.links.slice(5).map((l) => <DropLink key={l}>{l}</DropLink>)}</div>
                          </div>
                        </div>
                      )}

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:block text-[15px] font-normal text-[#374151] hover:text-[#111110] transition-colors px-3 py-2"
            >
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="bg-[#111110] hover:bg-[#2d2d2b] text-white px-5 py-2.5 rounded-full text-[15px] font-medium transition-all duration-150 active:scale-[0.98]"
            >
              Get Started
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-[#374151] hover:text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href="#"
                className="text-lg font-normal text-[#111110] py-2 border-b border-slate-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/login"
                className="text-center py-3 rounded-xl border border-slate-200 font-medium text-[#374151]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/get-started"
                className="text-center py-3 rounded-full bg-[#111110] text-white font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
