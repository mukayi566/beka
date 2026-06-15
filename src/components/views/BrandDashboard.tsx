"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    BarChart3,
    Target,
    Search,
    Filter,
    ChevronRight,
    MapPin,
    CheckCircle2,
    Sparkles,
    Zap,
    Star
} from 'lucide-react';

export default function BrandDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold">Brand Intelligence</h1>
                    <p className="text-foreground/50">Nike Africa • Discovering creators in Lagos, Nigeria</p>
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
                        <input
                            type="text"
                            placeholder="Search talent..."
                            className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-all w-64"
                        />
                    </div>
                    <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                        <Filter size={18} />
                    </button>
                </div>
            </header>

            {/* Featured AI Recommendations */}
            <section className="space-y-6">
                <div className="flex items-center gap-2 px-2">
                    <Sparkles className="text-primary" size={20} />
                    <h3 className="font-bold">AI-Powered Matches</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { name: 'Tunde Afolayan', niche: 'Tech & Lifestyle', score: 894, location: 'Lagos', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop' },
                        { name: 'Amara Okafor', niche: 'Beauty & Fashion', score: 865, location: 'Nairobi', image: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?w=400&auto=format&fit=crop' },
                        { name: 'Kofi Mensah', niche: 'Fitness & Health', score: 832, location: 'Accra', image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop' },
                    ].map((creator, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            className="glass-card rounded-[2.5rem] overflow-hidden group cursor-pointer"
                        >
                            <div className="h-48 relative">
                                <img src={creator.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={creator.name} />
                                <div className="absolute top-4 right-4 px-3 py-1.5 bg-background/80 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                                    <Star size={14} className="text-primary fill-primary" />
                                    <span className="text-xs font-bold text-primary">{creator.score}</span>
                                </div>
                            </div>
                            <div className="p-8 space-y-4">
                                <div>
                                    <h4 className="text-lg font-bold">{creator.name}</h4>
                                    <p className="text-xs text-foreground/50 flex items-center gap-1 mt-1">
                                        <MapPin size={12} /> {creator.location} • {creator.niche}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-white/5">
                                    <div>
                                        <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest leading-none mb-1">Avg Reach</p>
                                        <p className="text-sm font-bold">250k+</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-foreground/40 uppercase font-bold tracking-widest leading-none mb-1">Eng. Rate</p>
                                        <p className="text-sm font-bold">12.2%</p>
                                    </div>
                                </div>
                                <button className="w-full py-3 bg-white/5 hover:bg-primary hover:text-on-primary font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-2 group/btn">
                                    View Full Profile <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Campaign Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass-card rounded-[3rem] p-10 flex flex-col justify-between min-h-[400px]">
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold">Active Campaigns</h3>
                            <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">View All</button>
                        </div>

                        <div className="space-y-4">
                            {[
                                { name: 'Air Max Pulse Launch', creators: 12, budget: '$25,000', progress: 65 },
                                { name: 'Lagos Marathon 2024', creators: 8, budget: '$12,500', progress: 40 },
                            ].map((campaign, i) => (
                                <div key={i} className="p-6 rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/30 transition-all cursor-pointer group">
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <h4 className="font-bold group-hover:text-primary transition-colors">{campaign.name}</h4>
                                            <p className="text-xs text-foreground/40 mt-0.5">{campaign.creators} creators • {campaign.budget} budget</p>
                                        </div>
                                        <span className="text-sm font-bold">{campaign.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary" style={{ width: `${campaign.progress}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="mt-8 py-4 bg-primary text-on-primary font-bold rounded-2xl emerald-glow w-full flex items-center justify-center gap-2">
                        <Zap size={18} /> Launch New Campaign
                    </button>
                </div>

                <div className="glass-card rounded-[3rem] p-10 space-y-8">
                    <h3 className="font-bold">Conversion Insights</h3>

                    <div className="space-y-6">
                        {[
                            { label: 'Direct ROI', value: '4.2x', target: '3.5x' },
                            { label: 'Total Sales', value: '$124.5k', target: '$100k' },
                            { label: 'CPE', value: '$0.12', target: '$0.15' },
                        ].map((insight, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-xs font-bold">
                                    <span className="text-foreground/40 tracking-widest uppercase">{insight.label}</span>
                                    <span className="text-primary">{insight.value}</span>
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full relative">
                                    <div className="absolute top-0 bottom-0 left-0 bg-primary/40 rounded-full" style={{ width: '85%' }} />
                                    <div className="absolute top-0 bottom-0 left-0 bg-primary rounded-full" style={{ width: '60%' }} />
                                </div>
                                <p className="text-[10px] text-foreground/30">Target: {insight.target}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-secondary" />
                            <p className="text-xs font-bold uppercase tracking-widest">Verification Status</p>
                        </div>
                        <p className="text-xs text-foreground/60 leading-relaxed">
                            Your brand account is fully verified. You have access to Tier 1 creator valuations and smart contract escrow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
