"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, ShieldCheck, Heart, Share2, MessageCircle, BarChart3, Info } from 'lucide-react';

export default function BekaScore() {
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
            }, 30);
            return () => clearInterval(interval);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Your Beka Score</h1>
                <p className="text-foreground/50 font-medium">Calculated based on your verified influence footprint.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Main Score Visualization */}
                <div className="glass-card rounded-[3rem] p-12 flex flex-col items-center justify-center relative overflow-hidden bg-white shadow-xl border-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] pointer-events-none" />

                    <div className="relative w-64 h-64 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                            <circle
                                className="text-black/5"
                                cx="128" cy="128" r="110"
                                fill="transparent"
                                stroke="currentColor"
                                strokeWidth="20"
                            />
                            <motion.circle
                                stroke="url(#scoreGradient)"
                                cx="128" cy="128" r="110"
                                fill="transparent"
                                strokeWidth="20"
                                strokeLinecap="round"
                                strokeDasharray={2 * Math.PI * 110}
                                animate={{ strokeDashoffset: (2 * Math.PI * 110) * (1 - 0.842) }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            />
                            <defs>
                                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--color-primary)" />
                                    <stop offset="50%" stopColor="var(--color-accent)" />
                                    <stop offset="100%" stopColor="var(--color-secondary)" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-7xl font-bold tracking-tighter">{score}</span>
                            <div className="flex items-center gap-2 mt-1">
                                <Award size={18} className="text-secondary" />
                                <span className="text-sm font-bold text-secondary tracking-widest uppercase">Platinum Tier</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center space-y-4">
                        <p className="text-foreground/60 max-w-sm font-medium">
                            Your score is in the top <span className="text-primary font-bold">2.4%</span> of African creators in your niche.
                        </p>
                        <button className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
                            Why it changed <Info size={14} />
                        </button>
                    </div>
                </div>

                {/* Breakdown */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold px-2 tracking-tight">Score Breakdown</h3>
                    <div className="space-y-4">
                        {[
                            { label: 'Engagement Consistency', value: 92, icon: <Heart size={20} />, color: 'text-rose-500' },
                            { label: 'Audience Authenticity', value: 98, icon: <ShieldCheck size={20} />, color: 'text-emerald-500' },
                            { label: 'Growth Velocity', value: 78, icon: <Zap size={20} />, color: 'text-amber-500' },
                            { label: 'Brand Conversion', value: 85, icon: <BarChart3 size={20} />, color: 'text-blue-500' }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-6 rounded-3xl bg-white shadow-sm hover:shadow-md transition-all border-white">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={item.color}>{item.icon}</div>
                                        <span className="font-bold text-foreground/80">{item.label}</span>
                                    </div>
                                    <span className="font-extrabold">{item.value}%</span>
                                </div>
                                <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${item.value}%` }}
                                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                        className={`h-full bg-current ${item.color}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projections */}
            <div className="glass-card rounded-[3rem] p-10 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/5 shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-2xl font-bold tracking-tight">Target: 900+ Beka Gold</h3>
                        <p className="text-foreground/60 max-w-lg font-medium">
                            Increase your posting frequency twice a week and engage with top comments to reach the next tier and unlock premium financing.
                        </p>
                    </div>
                    <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-2xl primary-glow whitespace-nowrap hover:scale-105 transition-all">
                        Generate AI Strategy
                    </button>
                </div>
            </div>
        </div>
    );
}
