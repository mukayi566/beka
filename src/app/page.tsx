"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Wallet,
  Target,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Award
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [score, setScore] = useState(0);
  const targetScore = 842;

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        if (current < targetScore) {
          current += Math.ceil((targetScore - current) / 10);
          setScore(current);
        } else {
          setScore(targetScore);
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <span className="text-3xl font-bold text-primary tracking-tight">Beka</span>
            <div className="hidden md:flex gap-8">
              <a href="#" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Creators</a>
              <a href="#" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Brands</a>
              <a href="#" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Resources</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 text-sm font-bold text-foreground/70 hover:text-primary transition-all">
              Sign In
            </button>
            <Link href="/dashboard" className="px-5 py-2.5 text-sm font-bold bg-primary text-on-primary rounded-full primary-glow hover:scale-105 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20 mesh-bg">
        {/* Hero Section */}
        <section className="relative py-24 px-6 md:py-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                Know your influence.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                  Get your true value.
                </span>
              </h1>

              <p className="text-xl text-foreground/60 max-w-xl leading-relaxed">
                The definitive financial benchmark for African creators. Transform your digital footprint into institutional grade equity with the Beka Score.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/dashboard" className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-on-primary font-bold rounded-2xl primary-glow hover:translate-y-[-2px] hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  Start Earning <ArrowRight size={20} />
                </Link>
                <Link href="/dashboard" className="px-8 py-4 bg-white border border-black/5 text-foreground font-bold rounded-2xl hover:bg-surface transition-all shadow-sm">
                  Find Talent
                </Link>
              </div>

              <div className="flex items-center gap-6 pt-8 opacity-40">
                <span className="text-xs font-bold uppercase tracking-widest">TRUSTED BY</span>
                <div className="flex gap-8 grayscale hover:grayscale-0 transition-all">
                  <span className="font-extrabold text-lg">Safaricom</span>
                  <span className="font-extrabold text-lg">MTN</span>
                  <span className="font-extrabold text-lg">Jumia</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group border-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px]" />

                <div className="flex justify-between items-start mb-12">
                  <div>
                    <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">Creator Valuation Index</p>
                    <h3 className="text-3xl font-bold underline decoration-accent/30 decoration-4 underline-offset-8">Beka Score</h3>
                  </div>
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="text-primary" size={28} />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center py-8">
                  <div className="relative w-56 h-56 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90">
                      <circle
                        className="text-black/5"
                        cx="112" cy="112" r="100"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="16"
                      />
                      <motion.circle
                        stroke="url(#gradient)"
                        cx="112" cy="112" r="100"
                        fill="transparent"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 100}
                        animate={{ strokeDashoffset: (2 * Math.PI * 100) * (1 - 0.842) }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="var(--color-primary)" />
                          <stop offset="50%" stopColor="var(--color-accent)" />
                          <stop offset="100%" stopColor="var(--color-secondary)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.span className="text-6xl font-bold tracking-tighter">{score}</motion.span>
                      <span className="text-sm font-bold text-primary tracking-widest uppercase">A+ Platinum</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-12">
                  <div className="p-6 rounded-3xl bg-surface border border-black/5">
                    <p className="text-xs font-bold text-foreground/40 mb-1 uppercase tracking-wider">Market Value</p>
                    <p className="text-2xl font-bold">$12.4K</p>
                  </div>
                  <div className="p-6 rounded-3xl bg-surface border border-black/5">
                    <p className="text-xs font-bold text-foreground/40 mb-1 uppercase tracking-wider">Growth Index</p>
                    <p className="text-2xl font-bold text-secondary">+18%</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 glass-card rounded-[3rem] p-12 flex flex-col justify-between min-h-[450px]">
              <div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <Sparkles className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6">For Creators: Own Your Narrative</h2>
                <p className="text-lg text-foreground/60 max-w-xl">
                  Move beyond vanity metrics. Beka analyzes your engagement, sentiment, and conversion history to generate a portable credit score for creators.
                </p>
              </div>
              <div className="flex gap-4 overflow-x-auto no-scrollbar pt-12">
                {['Direct Sponsorships', 'Revenue Analytics', 'Brand Matching'].map(item => (
                  <div key={item} className="px-6 py-3 rounded-2xl bg-surface border border-black/5 whitespace-nowrap text-sm font-bold text-foreground/70">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[3rem] overflow-hidden relative min-h-[450px] group shadow-xl border border-black/5">
              <img
                src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?q=80&w=2519&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Creator"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent flex items-end p-10">
                <h3 className="text-2xl font-bold text-primary">Monetize your voice with precision.</h3>
              </div>
            </div>

            <div className="rounded-[3rem] overflow-hidden relative min-h-[450px] group shadow-xl border border-black/5">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2601&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Brand"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent flex items-end p-10">
                <h3 className="text-2xl font-bold text-secondary">Discover verified influence.</h3>
              </div>
            </div>

            <div className="md:col-span-2 glass-card rounded-[3rem] p-12 flex flex-col justify-between min-h-[450px]">
              <div>
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
                  <ShieldCheck className="text-secondary" size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-6">For Brands: Invest in ROI</h2>
                <p className="text-lg text-foreground/60 max-w-xl">
                  Stop guessing who to partner with. Beka's proprietary engine filters through noise to connect you with creators who actually drive results.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12">
                {[
                  { icon: <Zap size={20} />, text: 'Fraud Protection' },
                  { icon: <BarChart3 size={20} />, text: 'Tiered Valuation' },
                  { icon: <Target size={20} />, text: 'Smart Contracts' },
                  { icon: <Users size={20} />, text: 'Regional Insights' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-surface border border-black/5">
                    <div className="text-secondary">{item.icon}</div>
                    <span className="font-bold text-sm text-foreground/70">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-accent to-secondary rounded-[4rem] p-16 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full group-hover:scale-150 transition-transform duration-1000" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-12">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Ready to join the ecosystem?</h2>
              <p className="text-xl text-white/80">
                Join thousands of creators and hundreds of brands building the future of commerce across the continent.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="px-10 py-5 bg-white text-primary font-bold rounded-3xl text-lg hover:shadow-2xl transition-all">
                  Create Creator Profile
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-3xl text-lg hover:bg-white/10 transition-all">
                  Register as a Brand
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-3xl font-bold text-primary">Beka</span>
            <p className="text-foreground/40 max-w-xs font-medium">
              Empowering the African creator economy with institutional grade tools and fair valuation.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8 text-sm font-bold text-foreground/40">
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
            <p className="text-xs text-foreground/30 font-bold tracking-widest">
              © 2024 BEKA. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
