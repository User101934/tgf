"use client";

import React from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const PLATFORM_MENU_COLUMNS = [
  {
    title: 'Product',
    sections: [
      {
        title: 'TeachGrid Campus',
        description: 'The comprehensive AI infrastructure designed for universities and large-scale higher education.',
        items: []
      },
      {
        title: 'TeachGrid Spark',
        description: 'A nimble, high-performance platform for training institutes, bootcamps, and agile learning teams.',
        items: []
      },
      {
        title: 'Lumi AI ✨',
        description: 'Enterprise-grade AI agents for automated grading, 24/7 student support, and intelligent content creation.',
        items: []
      }
    ]
  },
  {
    title: 'Features',
    sections: [
      {
        title: 'Learning & Delivery',
        items: [
          'Smart Learning Management', 'Cohort Management', 'Live Sessions', 'Calendar',
          'Whiteboard AI ✨', 'Virtual Labs', 'Microlearning Studio', 'Community', 'Mobile-Friendly Experience'
        ]
      },
      {
        title: 'Experience Portals',
        items: ['LXP (Learner Portal)', 'MXP (Mentor Portal)', 'Learner Feedback Submission', 'Personalized Dashboard']
      },
      {
        title: 'CRM',
        items: ['Lead Management', 'Admissions & Enrollment', 'Student Lifecycle Tracking', 'Communication Automation', 'Billing & Payment Tracking']
      }
    ]
  },
  {
    title: 'Management',
    sections: [
      {
        title: 'Assessment',
        items: ['Quizzes & Assignments', 'Live Proctoring', 'Grading', 'Polls & Surveys', 'Certificates & Certificate Designer', 'Attendance']
      },
      {
        title: 'Intelligence',
        items: ['AI Features & AI Agents ✨', 'Intelligent Analytics']
      },
      {
        title: 'Engagement',
        items: ['Leaderboard & Badges']
      },
      {
        title: 'Administration',
        items: ['Billing Desk', 'Integrations', 'Admin Controls', 'System Settings']
      }
    ]
  }
];

const PLATFORM_LINKS_FLAT = [
  {
    title: 'Product',
    items: ['TeachGrid Campus', 'TeachGrid Spark', 'Lumi AI ✨']
  },
  {
    title: 'Features',
    items: [
      'Smart Learning Management', 'Cohort Management', 'Live Sessions', 'Calendar',
      'Whiteboard AI ✨', 'Virtual Labs', 'Microlearning Studio', 'Community', 'Mobile-Friendly Experience',
      'LXP (Learner Portal)', 'MXP (Mentor Portal)', 'CRM'
    ]
  },
  {
    title: 'Assessment',
    items: ['Quizzes & Assignments', 'Live Proctoring', 'Grading', 'Polls & Surveys', 'Certificates & Certificate Designer', 'Attendance']
  },
  {
    title: 'Intelligence',
    items: ['AI Features & AI Agents ✨', 'Intelligent Analytics']
  },
  {
    title: 'Engagement',
    items: ['Leaderboard & Badges']
  },
  {
    title: 'Administration',
    items: ['Billing Desk', 'Integrations', 'Admin Controls', 'System Settings']
  }
];

const SOLUTIONS_LINKS = [
  {
    title: 'TeachGrid For',
    items: ['Organizations', 'Colleges & Universities', 'Institutes & Academies']
  },
  {
    title: 'Extended Solutions',
    items: ['Instructional Design', 'AI for Education', 'White-labelled Solution', 'API Solution']
  },
  {
    title: 'Industry',
    items: ['Software', 'Finance', 'Healthcare', 'Education', 'Consulting', 'Tech / IT Services', 'Manufacturing']
  }
];

const RESOURCES_LINKS = [
  {
    title: 'Support & Content',
    items: ['Documentation', 'Help Center', 'Community & Q/A', 'Blog & Insights', 'Release Notes']
  },
  {
    title: 'Customer Feedback',
    items: ['Submit Feedback', 'Feature Requests', 'Product Suggestions']
  }
];

const COMPANY_LINKS = [
  {
    title: 'Company Info',
    items: ['About Us', 'Customers', 'Case Studies', 'Testimonials', 'Customer Reviews', 'Careers', 'Security', 'Contact', 'Legal', 'Comparison']
  }
];

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Research', href: '#research' },
  { label: 'Resources', href: '#resources' },
  { label: 'Company', href: '#company' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Container */}
        <div className="flex-1 flex items-center justify-start">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/f32bc3e4-3637-45b4-97a7-8620b4aefe83/image-resized-1772182697345.webp?width=8000&height=8000&resize=contain"
              alt="TeachGrid"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex items-center gap-2 h-full">
          {/* Platform */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setActiveMenu('platform')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium transition-colors py-8 px-3 whitespace-nowrap">
              Platform
              <ChevronDown size={14} className={cn("transition-transform duration-200 opacity-50", activeMenu === 'platform' && "rotate-180")} />
            </button>
            <AnimatePresence>
              {activeMenu === 'platform' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[80px] left-1/2 -translate-x-1/2 w-screen max-w-[1200px] px-6"
                >
                  <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden ring-1 ring-black/5 p-10 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
                    <div className="grid grid-cols-3 gap-16">
                      {PLATFORM_MENU_COLUMNS.map((column, idx) => (
                        <div key={idx} className="space-y-12">
                          {column.sections.map((section: any) => (
                            <div key={section.title} className="space-y-4">
                              <h4 className="text-[12px] font-bold uppercase tracking-[0.1em] text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center gap-2">
                                {section.title.replace(' ✨', '')}
                                {section.title.includes('✨') && <Sparkles size={12} className="text-indigo-500" />}
                              </h4>
                              {section.description && (
                                <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed text-justify">
                                  {section.description}
                                </p>
                              )}
                              {section.items.length > 0 && (
                                <ul className="space-y-2.5">
                                  {section.items.map((item: any) => (
                                    <li key={item}>
                                      <Link href="#" className="text-[14px] text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors flex items-center gap-2">
                                        {item.replace(' ✨', '')}
                                        {item.includes('✨') && <Sparkles size={12} className="text-indigo-500" />}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setActiveMenu('solutions')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium transition-colors py-8 px-3 whitespace-nowrap">
              Solutions
              <ChevronDown size={14} className={cn("transition-transform duration-200 opacity-50", activeMenu === 'solutions' && "rotate-180")} />
            </button>
            <AnimatePresence>
              {activeMenu === 'solutions' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[80px] left-1/2 -translate-x-1/2 w-screen max-w-[800px] px-6"
                >
                  <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden ring-1 ring-black/5 p-10">
                    <div className="grid grid-cols-3 gap-12">
                      {SOLUTIONS_LINKS.map((section) => (
                        <div key={section.title} className="space-y-4">
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400">{section.title}</h4>
                          <ul className="space-y-2.5">
                            {section.items.map((item) => (
                              <li key={item}>
                                <Link href="#" className="text-[14px] text-slate-600 hover:text-indigo-600 transition-colors">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem label="Pricing" />

          {/* Resources */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setActiveMenu('resources')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium transition-colors py-8 px-3 whitespace-nowrap">
              Resources
              <ChevronDown size={14} className={cn("transition-transform duration-200 opacity-50", activeMenu === 'resources' && "rotate-180")} />
            </button>
            <AnimatePresence>
              {activeMenu === 'resources' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[80px] left-1/2 -translate-x-1/2 w-screen max-w-[600px] px-6"
                >
                  <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden ring-1 ring-black/5 p-10">
                    <div className="grid grid-cols-2 gap-12">
                      {RESOURCES_LINKS.map((section) => (
                        <div key={section.title} className="space-y-4">
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400">{section.title}</h4>
                          <ul className="space-y-2.5">
                            {section.items.map((item) => (
                              <li key={item}>
                                <Link href="#" className="text-[14px] text-slate-600 hover:text-indigo-600 transition-colors">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Company */}
          <div
            className="h-full flex items-center"
            onMouseEnter={() => setActiveMenu('company')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium transition-colors py-8 px-3 whitespace-nowrap">
              Company
              <ChevronDown size={14} className={cn("transition-transform duration-200 opacity-50", activeMenu === 'company' && "rotate-180")} />
            </button>
            <AnimatePresence>
              {activeMenu === 'company' && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[80px] left-1/2 -translate-x-1/2 w-screen max-w-[400px] px-6"
                >
                  <div className="bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden ring-1 ring-black/5 p-10">
                    <div className="grid grid-cols-1 gap-12">
                      {COMPANY_LINKS.map((section) => (
                        <div key={section.title} className="space-y-4">
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-400">{section.title}</h4>
                          <ul className="grid grid-cols-2 gap-y-2.5 gap-x-8">
                            {section.items.map((item) => (
                              <li key={item}>
                                <Link href="#" className="text-[14px] text-slate-600 hover:text-indigo-600 transition-colors">
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Auth Buttons - Right Aligned */}
        <div className="flex-1 hidden lg:flex items-center justify-end gap-4">
          <Link href="/login" className="btn-ghost whitespace-nowrap">Login</Link>
          <Link href="/get-started" className="btn-primary whitespace-nowrap">Get Started</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-20 bg-white dark:bg-slate-900 p-6 z-40 overflow-y-auto custom-scrollbar"
          >
            <div className="space-y-4">
              <MobileNavItem label="Platform" items={PLATFORM_LINKS_FLAT} />

              <MobileNavItem label="Solutions" items={SOLUTIONS_LINKS} />
              <MobileNavItem label="Pricing" />
              <MobileNavItem label="Resources" items={RESOURCES_LINKS} />
              <MobileNavItem label="Company" items={COMPANY_LINKS} />
            </div>
            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
              <Link href="/login" className="btn-ghost w-full text-center py-4">Login</Link>
              <Link href="/get-started" className="btn-primary w-full text-center py-4">Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavItem = ({ label, children, isActive, onMouseEnter, onMouseLeave }: any) => {
  return (
    <div className="relative h-full flex items-center" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-medium transition-colors py-8 px-3">
        {label}
        {children && <ChevronDown size={14} className={cn("transition-transform duration-200 opacity-50", isActive && "rotate-180")} />}
      </button>
      <AnimatePresence>
        {isActive && children && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-[80px] left-1/2 -translate-x-1/2 mt-0 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden ring-1 ring-black/5"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileNavItem = ({ label, items }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!items) {
    return (
      <div className="py-2">
        <Link href="#" className="flex items-center justify-between w-full text-lg font-medium text-slate-900 dark:text-white">
          {label}
        </Link>
      </div>
    );
  }

  return (
    <div className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg font-medium text-slate-900 dark:text-white"
      >
        {label}
        <ChevronDown size={18} className={cn("transition-transform duration-200", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2 space-y-6">
              {items.map((section: any) => (
                <div key={section.title} className="space-y-3 px-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item: any) => (
                      <li key={item}>
                        <Link href="#" className="text-[15px] text-slate-600 dark:text-slate-400 block py-1">
                          {item.replace(' ✨', '')}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
