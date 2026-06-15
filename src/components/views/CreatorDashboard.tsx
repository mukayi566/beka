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
                    <h1 className="text-3xl font-bold">Good Morning, Alex</h1>
                    <p className="text-foreground/50">Your influence grew by 12% this week. Keep it up!</p>
                </div>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 emerald-glow">
                    <Plus size={20} /> Create Content Plan
                </button>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Total Reach', value: '1.2M', change: '+14%', icon: <Users size={24} className="text-primary" /> },
                    { label: 'Engagement Rate', value: '8.4%', change: '+2.1%', icon: <MessageSquare size={24} className="text-secondary" /> },
                    { label: 'Market Valuation', value: '$12,450', change: '+$1.2k', icon: <TrendingUp size={24} className="text-primary" /> },
                    { label: 'Profile Views', value: '45.2k', change: '+8%', icon: <Eye size={24} className="text-blue-400" /> },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6 rounded-3xl"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-2xl bg-white/5">{stat.icon}</div>
                            <span className="text-xs font-bold text-secondary">{stat.change}</span>
                        </div>
                        <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">{stat.label}</p>
                        <h4 className="text-2xl font-bold mt-1">{stat.value}</h4>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart */}
                <div className="lg:col-span-2 glass-card rounded-[2.5rem] p-8">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold">Engagement Analytics</h3>
                        <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm font-bold">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6bdba2" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6bdba2" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#ffffff40', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1c1b1b', border: '1px solid #ffffff10', borderRadius: '16px' }}
                                    itemStyle={{ color: '#6bdba2' }}
                                />
                                <Area type="monotone" dataKey="views" stroke="#6bdba2" fillOpacity={1} fill="url(#colorViews)" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Sidebar Activity */}
                <div className="space-y-6">
                    <div className="glass-card rounded-[2.5rem] p-8 bg-primary/10 border-primary/20">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-xl bg-primary/20 text-primary">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="font-bold">Next Payout</h3>
                        </div>
                        <p className="text-4xl font-bold">$2,840.00</p>
                        <p className="text-sm text-foreground/50 mt-2">Expected on Friday, Oct 24</p>
                        <button className="w-full mt-6 py-4 bg-primary text-on-primary font-bold rounded-2xl emerald-glow text-sm">
                            View Wallet
                        </button>
                    </div>

                    <div className="glass-card rounded-[2.5rem] p-8">
                        <h3 className="font-bold mb-6">Upcoming Campaigns</h3>
                        <div className="space-y-4">
                            {[
                                { brand: 'Guinness', offer: '$1,200', date: 'Oct 28' },
                                { brand: 'Paystack', offer: '$800', date: 'Nov 02' }
                            ].map((campaign, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-bold">{campaign.brand[0]}</div>
                                        <div>
                                            <p className="text-sm font-bold">{campaign.brand}</p>
                                            <p className="text-xs text-foreground/50">{campaign.offer}</p>
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
