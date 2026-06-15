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
    BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick: () => void;
}

function NavItem({ icon, label, active, onClick }: NavItemProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "flex flex-col items-center justify-center gap-1 transition-all",
                active ? "text-primary" : "text-foreground/40 hover:text-foreground/70"
            )}
        >
            <div className={cn(
                "relative p-2 rounded-xl transition-all",
                active && "bg-primary/10"
            )}>
                {icon}
                {active && (
                    <motion.div
                        layoutId="nav-bg"
                        className="absolute inset-0 bg-primary/5 rounded-xl -z-10"
                    />
                )}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
        </button>
    );
}

interface BottomNavProps {
    role: 'creator' | 'brand';
    activeTab: string;
    onTabChange: (tab: string) => void;
}

export default function BottomNav({ role, activeTab, onTabChange }: BottomNavProps) {
    const creatorItems = [
        { id: 'dashboard', label: 'Home', icon: <LayoutDashboard size={20} /> },
        { id: 'score', label: 'Score', icon: <Award size={20} /> },
        { id: 'offers', label: 'Offers', icon: <Gift size={20} /> },
        { id: 'wallet', label: 'Wallet', icon: <Wallet size={20} /> },
        { id: 'profile', label: 'Profile', icon: <User size={20} /> },
    ];

    const brandItems = [
        { id: 'dashboard', label: 'Home', icon: <LayoutDashboard size={20} /> },
        { id: 'campaigns', label: 'Campaigns', icon: <Target size={20} /> },
        { id: 'discover', label: 'Discover', icon: <Compass size={20} /> },
        { id: 'analytics', label: 'Analytics', icon: <BarChart3 size={20} /> },
        { id: 'wallet', label: 'Wallet', icon: <Wallet size={20} /> },
    ];

    const items = role === 'creator' ? creatorItems : brandItems;

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <div className="bg-surface/80 backdrop-blur-2xl border-t border-white/5 px-6 pb-6 pt-3 flex justify-between items-center rounded-t-[2rem] shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)]">
                {items.map((item) => (
                    <NavItem
                        key={item.id}
                        icon={item.icon}
                        label={item.label}
                        active={activeTab === item.id}
                        onClick={() => onTabChange(item.id)}
                    />
                ))}
            </div>
        </nav>
    );
}
