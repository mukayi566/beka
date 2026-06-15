"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Globe, Command } from 'lucide-react';
import Link from 'next/link';

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 mesh-bg relative">
            <Link href="/" className="absolute top-8 left-8 text-2xl font-bold text-primary tracking-tight">
                Beka
            </Link>

            <div className="hidden md:block absolute top-8 right-8 text-sm text-foreground/60">
                Don't have an account?{' '}
                <Link href="/get-started" className="text-primary font-bold hover:underline">
                    Get Started
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
            >
                <div className="glass-card rounded-[2.5rem] p-10 space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px]" />

                    <div className="space-y-2 relative">
                        <h1 className="text-4xl font-bold tracking-tight">Welcome back</h1>
                        <p className="text-foreground/60">Enter your details to access your account</p>
                    </div>

                    <form className="space-y-6 relative">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground/70 ml-1">Email Address</label>
                                <div className="relative group">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-primary transition-colors" size={20} />
                                    <input
                                        type="email"
                                        placeholder="name@example.com"
                                        className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-sm font-bold text-foreground/70">Password</label>
                                    <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot password?</button>
                                </div>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-primary transition-colors" size={20} />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 focus:bg-white/[0.07] transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-primary text-on-primary font-bold rounded-2xl brand-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                            Sign In <ArrowRight size={20} />
                        </button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-black/5"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-surface px-4 text-foreground/40 font-bold tracking-widest">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 relative">
                        <button className="flex items-center justify-center gap-2 py-3 bg-black/5 border border-black/5 rounded-2xl hover:bg-black/5 transition-all font-bold text-sm">
                            <Globe size={18} /> Google
                        </button>
                        <button className="flex items-center justify-center gap-2 py-3 bg-black/5 border border-black/5 rounded-2xl hover:bg-black/5 transition-all font-bold text-sm">
                            <Command size={18} /> GitHub
                        </button>
                    </div>

                    <p className="md:hidden text-center text-sm text-foreground/60">
                        Don't have an account?{' '}
                        <Link href="/get-started" className="text-primary font-bold hover:underline">
                            Get Started
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
