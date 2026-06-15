"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    MapPin,
    Users,
    MessageSquare,
    Edit3,
    ExternalLink,
    Plus,
    Share2
} from 'lucide-react';

const Instagram = MessageSquare;
const Twitter = Share2;
const Youtube = ExternalLink;

export default function CreatorProfile() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <div className="relative h-64 md:h-80 w-full rounded-[3rem] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=1600&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <button className="absolute top-6 right-6 p-3 bg-background/50 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-background/80 transition-all">
                    <Edit3 size={20} />
                </button>
            </div>

            <div className="px-6 md:px-12 -mt-24 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center md:items-end gap-6 text-center md:text-left">
                        <div className="w-40 h-40 rounded-[3rem] border-8 border-background overflow-hidden emerald-glow">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=creator" className="w-full h-full bg-surface" alt="Avatar" />
                        </div>
                        <div className="pb-4">
                            <h1 className="text-4xl font-bold">Alex Mukie</h1>
                            <p className="text-primary font-bold tracking-widest uppercase text-xs mt-1">Tech & Lifestyle Creator</p>
                            <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-foreground/50">
                                <span className="flex items-center gap-1 text-sm"><MapPin size={16} /> Lagos, Nigeria</span>
                                <span className="flex items-center gap-1 text-sm"><Globe size={16} /> beka.me/alex</span>
                            </div>
                        </div>
                    </div>
                    <div className="pb-4 flex gap-4">
                        <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-2xl emerald-glow">
                            Share Profile
                        </button>
                        <button className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10">
                            <Settings size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {/* Stats */}
                    <div className="glass-card rounded-[2.5rem] p-8 space-y-8">
                        <h3 className="font-bold border-b border-white/5 pb-4">Social Footprint</h3>
                        <div className="space-y-6">
                            {[
                                { platform: 'Instagram', handle: '@alex_creates', followers: '450k', icon: <Instagram size={20} />, color: 'text-pink-500' },
                                { platform: 'X (Twitter)', handle: '@alexmukie', followers: '120k', icon: <Twitter size={20} />, color: 'text-blue-400' },
                                { platform: 'YouTube', handle: 'Alex Mukie', followers: '85k', icon: <Youtube size={20} />, color: 'text-red-500' },
                            ].map((social, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className={social.color}>{social.icon}</div>
                                        <div>
                                            <p className="text-xs font-bold">{social.platform}</p>
                                            <p className="text-[10px] text-foreground/40">{social.handle}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold">{social.followers}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold flex items-center justify-center gap-2">
                            Connect New Platform <Plus size={14} />
                        </button>
                    </div>

                    {/* About/Bio */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="glass-card rounded-[2.5rem] p-8">
                            <h3 className="font-bold mb-4">About</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                Building the future of African tech storytelling. I focus on high-production lifestyle content and deep dives into the emerging creator economy across the continent. Currently working with top-tier fintech and consumer brands.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="glass-card rounded-[2.5rem] p-8">
                                <h3 className="font-bold mb-4">Brand Preferences</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['Fintech', 'SaaS', 'Travel', 'Luxury', 'Gadgets'].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full border border-primary/20">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="glass-card rounded-[2.5rem] p-8">
                                <h3 className="font-bold mb-4">Audience Insights</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-xs font-bold">
                                        <span className="text-foreground/40">GEN Z / MILLENNIAL</span>
                                        <span className="text-secondary">82%</span>
                                    </div>
                                    <div className="flex justify-between text-xs font-bold">
                                        <span className="text-foreground/40">TOP REGION</span>
                                        <span className="text-secondary">NIGERIA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio / Recent Work */}
                <div className="mt-12 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">Portfolio</h3>
                        <button className="text-primary text-sm font-bold hover:underline">Manage Work</button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-square rounded-[2rem] overflow-hidden glass-card relative group">
                                <img
                                    src={`https://images.unsplash.com/photo-1${500 + i}?w=400&auto=format&fit=crop`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    alt="Work"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <ExternalLink className="text-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function Settings(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}
