"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import BottomNav from '@/components/BottomNav';
import CreatorDashboard from '@/components/views/CreatorDashboard';
import BrandDashboard from '@/components/views/BrandDashboard';
import BekaScore from '@/components/views/BekaScore';
import WalletView from '@/components/views/WalletView';
import CreatorProfile from '@/components/views/CreatorProfile';
import { Bell, Search, Settings } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Dashboard() {
    const [role, setRole] = useState<'creator' | 'brand'>('creator');
    const [activeTab, setActiveTab] = useState('dashboard');

    const toggleRole = () => {
        setRole(role === 'creator' ? 'brand' : 'creator');
        setActiveTab('dashboard'); // Reset to dashboard when switching roles
    };

    const renderContent = () => {
        if (activeTab === 'dashboard') {
            return role === 'creator' ? <CreatorDashboard /> : <BrandDashboard />;
        }
        if (activeTab === 'score') return <BekaScore />;
        if (activeTab === 'wallet') return <WalletView />;
        if (activeTab === 'profile') return <CreatorProfile />;

        // Fallback for other tabs
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
                <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center">
                    <Settings size={48} className="text-foreground/20 animate-spin-slow" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold uppercase tracking-widest">{activeTab} View</h2>
                    <p className="text-foreground/40 max-w-sm mt-2">
                        This module is being optimized for the premium {role} experience. Stay tuned.
                    </p>
                </div>
            </div>
        );
    };

    return (
        <div className="flex min-h-screen bg-background font-sans text-foreground">
            {/* Sidebar - Desktop */}
            <Sidebar
                role={role}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                onToggleRole={toggleRole}
            />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Top Header */}
                <header className="h-20 flex items-center justify-between px-6 md:px-10 border-b border-black/5 sticky top-0 bg-background/80 backdrop-blur-md z-40">
                    <div className="md:hidden flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-on-primary">B</div>
                        <span className="text-xl font-bold">Beka</span>
                    </div>

                    <div className="hidden md:flex flex-1 max-w-xl relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30" size={18} />
                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="w-full bg-surface border border-black/5 rounded-2xl pl-12 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary/20 transition-all font-medium"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2.5 rounded-xl bg-surface text-foreground/40 hover:text-primary transition-all relative border border-transparent hover:border-black/5">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
                        </button>
                        <button className="p-2.5 rounded-xl bg-surface text-foreground/40 hover:text-primary md:hidden transition-all border border-transparent" onClick={toggleRole}>
                            <Settings size={20} />
                        </button>
                        <div className="hidden md:flex items-center gap-3 pl-4 border-l border-black/5">
                            <div className="text-right">
                                <p className="text-xs font-bold truncate">Alex Mukie</p>
                                <p className="text-[10px] text-primary font-bold uppercase tracking-widest">{role}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent p-0.5 shadow-sm">
                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${role}`} className="rounded-full bg-surface" alt="Avatar" />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Content */}
                <main className="flex-1 p-6 md:p-10 pb-32 md:pb-10 overflow-y-auto mesh-bg">
                    <div className="max-w-7xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={role + activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                {renderContent()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </main>
            </div>

            {/* Bottom Navigation - Mobile */}
            <BottomNav
                role={role}
                activeTab={activeTab}
                onTabChange={setActiveTab}
            />
        </div>
    );
}
