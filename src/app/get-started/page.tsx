"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2, ArrowRight, Sparkles, Target } from 'lucide-react';
import Link from 'next/link';

export default function GetStartedPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 mesh-bg">
            <Link href="/" className="absolute top-8 left-8 text-2xl font-bold text-primary tracking-tight">
                Beka
            </Link>

            <div className="w-full max-w-4xl space-y-12">
                <div className="text-center space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        How do you want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">join Beka?</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-foreground/60"
                    >
                        Choose the path that best describes your goals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Creator Path */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Link href="/creator-signup" className="group block h-full">
                            <div className="glass-card rounded-[3rem] p-10 h-full border border-black/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px]" />

                                <div className="space-y-6 relative">
                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                        <User size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold">I'm a Creator</h2>
                                        <p className="text-foreground/60 leading-relaxed">
                                            Build your Beka Score, discover your true influence, and connect with premium brands for verified sponsorships.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-4 relative">
                                    <div className="flex items-center gap-3 text-sm font-bold opacity-60">
                                        <Sparkles size={16} className="text-primary" />
                                        <span>Get your Portable Creator Score</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-black/5">
                                        <span className="font-bold group-hover:text-primary transition-colors">Start for free</span>
                                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Brand Path */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link href="/dashboard" className="group block h-full">
                            <div className="glass-card rounded-[3rem] p-10 h-full border border-black/5 hover:border-secondary/30 transition-all duration-500 relative overflow-hidden flex flex-col justify-between">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 blur-[60px]" />

                                <div className="space-y-6 relative">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-500">
                                        <Building2 size={32} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-bold">I'm a Brand</h2>
                                        <p className="text-foreground/60 leading-relaxed">
                                            Access a verified database of African talent. Use data-driven insights to find the perfect match for your campaigns.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-4 relative">
                                    <div className="flex items-center gap-3 text-sm font-bold opacity-60">
                                        <Target size={16} className="text-secondary" />
                                        <span>ROI-focused talent discovery</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t border-black/5">
                                        <span className="font-bold group-hover:text-secondary transition-colors">Create Brand Account</span>
                                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-foreground/40 text-sm"
                >
                    Already have an account?{' '}
                    <Link href="/sign-in" className="text-primary font-bold hover:underline">
                        Sign In
                    </Link>
                </motion.p>
            </div>
        </div>
    );
}
