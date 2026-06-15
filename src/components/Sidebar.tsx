"use client";

import React from 'react';
import {
    LayoutDashboard,
    Target,
    Compass,
    Wallet,
    User,
    Award,
    Gift,
    BarChart3,
    LogOut,
    Bell,
    Settings
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SidebarProps {
    role: 'creator' | 'brand';
    activeTab: string;
    onTabChange: (tab: string) => void;
    onToggleRole: () => void;
}

export default function Sidebar({ role, activeTab, onTabChange, onToggleRole }: SidebarProps) {
    const creatorItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={22} /> },
        { id: 'score', label: 'Beka Score', icon: <Award size={22} /> },
        { id: 'offers', label: 'My Offers', icon: <Gift size={22} /> },
        { id: 'wallet', label: 'Earnings', icon: <Wallet size={22} /> },
        { id: 'profile', label: 'Profile', icon: <User size={22} /> },
    ];

    const brandItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={22} /> },
        { id: 'campaigns', label: 'Campaigns', icon: <Target size={22} /> },
        { id: 'discover', label: 'Discover', icon: <Compass size={22} /> },
        { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={22} /> },
        { id: 'wallet', label: 'Wallet', icon: <Wallet size={22} /> },
    ];

    const items = role === 'creator' ? creatorItems : brandItems;

    return (
        <aside className="hidden md:flex flex-col w-72 bg-surface/30 backdrop-blur-md border-r border-black/5 h-screen sticky top-0 px-6 py-10">
            <div className="flex items-center gap-3 mb-12 px-2">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-on-primary text-xl">B</div>
                <span className="text-2xl font-bold tracking-tight">Beka</span>
            </div>

            <nav className="flex-1 space-y-2">
                {items.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onTabChange(item.id)}
                        className={cn(
                            "w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-200 font-medium",
                            activeTab === item.id
                                ? "bg-primary text-on-primary brand-glow"
                                : "text-foreground/50 hover:bg-black/5 hover:text-foreground"
                        )}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="mt-auto space-y-4">
                <button
                    onClick={onToggleRole}
                    className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-black/5 border border-black/5 text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-all"
                >
                    Switch to {role === 'creator' ? 'Brand' : 'Creator'}
                </button>

                <div className="pt-6 border-t border-black/5 flex items-center justify-between px-2">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary p-0.5">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${role}`} className="rounded-full bg-surface" alt="Avatar" />
                        </div>
                        <div>
                            <p className="text-sm font-bold truncate w-24">Alex Mukie</p>
                            <p className="text-[10px] text-foreground/40 font-bold uppercase">{role}</p>
                        </div>
                    </div>
                    <button className="text-foreground/40 hover:text-error transition-colors">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>
        </aside>
    );
}
