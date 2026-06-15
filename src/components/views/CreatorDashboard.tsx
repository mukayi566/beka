"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    Users,
    Eye,
    MessageSquare,
    Calendar,
    Plus,
    ArrowUpRight,
    ShieldCheck,
    ChevronRight
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Mon', views: 4000, engagement: 2400 },
    { name: 'Tue', views: 3000, engagement: 1398 },
    { name: 'Wed', views: 2000, engagement: 9800 },
    { name: 'Thu', views: 2780, engagement: 3908 },
    { name: 'Fri', views: 1890, engagement: 4800 },
    { name: 'Sat', views: 2390, engagement: 3800 },
    { name: 'Sun', views: 3490, engagement: 4300 },
];

export default function CreatorDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Good Morning, Alex</h1>
                    <p className="text-foreground/50 font-medium">Your influence grew by 12% this week. Keep it up!</p>
                </div>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 primary-glow hover:scale-105 transition-all">
                    <Plus size={20} /> Create Content Plan
                </button>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total Reach', value: '1.2M', change: '+14%', icon: <Users size={24} className="text-primary" /> },
                    { label: 'Engagement Rate', value: '8.4%', change: '+2.1%', icon: <MessageSquare size={24} className="text-accent" /> },
                    { label: 'Market Valuation', value: '$12,450', change: '+$1.2k', icon: <TrendingUp size={24} className="text-primary" /> },
                    { label: 'Profile Views', value: '45.2k', change: '+8%', icon: <Eye size={24} className="text-blue-500" /> },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6 rounded-3xl group hover:border-primary/20 transition-all shadow-sm bg-white"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-2xl bg-surface border border-black/5 group-hover:bg-primary/5 transition-all">{stat.icon}</div>
                            <span className="text-xs font-bold text-accent">{stat.change}</span>
                        </div>
                        <p className="text-xs font-bold text-foreground/30 uppercase tracking-widest">{stat.label}</p>
                        <h4 className="text-2xl font-bold mt-1 tracking-tight">{stat.value}</h4>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart */}
                <div className="lg:col-span-2 glass-card rounded-[2.5rem] p-8 border-white shadow-lg bg-white">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold tracking-tight">Engagement Analytics</h3>
                        <select className="bg-surface border border-black/5 rounded-xl px-4 py-2 text-sm font-bold text-foreground/60 outline-none focus:border-primary/30">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#00000008" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#00000040', fontSize: 12, fontWeight: 600 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #00000010', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                    itemStyle={{ color: 'var(--color-primary)' }}
                                />
                                <Area type="monotone" dataKey="views" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorViews)" strokeWidth={4} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sidebar Activity */}
                <div className="space-y-6">
                    <div className="glass-card rounded-[2.5rem] p-8 bg-primary/5 border-primary/10 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="font-bold tracking-tight">Next Payout</h3>
                        </div>
                        <p className="text-4xl font-bold tracking-tighter">$2,840.00</p>
                        <p className="text-sm text-foreground/40 font-medium mt-2">Expected on Friday, Oct 24</p>
                        <button className="w-full mt-6 py-4 bg-primary text-on-primary font-bold rounded-2xl primary-glow text-sm hover:scale-[1.02] transition-all">
                            View Wallet
                        </button>
                    </div>

                    <div className="glass-card rounded-[2.5rem] p-8 bg-white border-white shadow-xl">
                        <h3 className="font-bold mb-6 tracking-tight">Upcoming Campaigns</h3>
                        <div className="space-y-4">
                            {[
                                { brand: 'Guinness', offer: '$1,200', date: 'Oct 28' },
                                { brand: 'Paystack', offer: '$800', date: 'Nov 02' }
                            ].map((campaign, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-surface border border-black/5 hover:border-primary/20 transition-all group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all text-lg">{campaign.brand[0]}</div>
                                        <div>
                                            <p className="text-sm font-extrabold">{campaign.brand}</p>
                                            <p className="text-xs text-foreground/40 font-bold">{campaign.offer}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={16} className="text-foreground/30" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
