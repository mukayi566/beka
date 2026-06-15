"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Wallet,
    ArrowUpRight,
    ArrowDownLeft,
    CreditCard,
    Download,
    Plus,
    RefreshCw
} from 'lucide-react';

export default function WalletView() {
    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold">Wallet</h1>
                    <p className="text-foreground/50">Manage your earnings and payouts.</p>
                </div>
                <div className="flex gap-4">
                    <button className="p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                        <RefreshCw size={20} />
                    </button>
                    <button className="bg-primary text-on-primary px-6 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 emerald-glow">
                        <Plus size={20} /> Add Account
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Balance Card */}
                <div className="lg:col-span-2 glass-card rounded-[3rem] p-10 bg-gradient-to-br from-primary/20 via-surface to-surface relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-24 bg-primary/20 blur-[100px] pointer-events-none" />

                    <div className="flex justify-between items-start mb-12">
                        <div>
                            <p className="text-xs font-bold text-foreground/40 uppercase tracking-[0.2em] mb-2">Available Balance</p>
                            <h2 className="text-5xl font-bold tracking-tight">$8,542.<span className="text-foreground/40">50</span></h2>
                        </div>
                        <div className="flex gap-2">
                            <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold">NGN 12,500,000</div>
                            <div className="px-3 py-1 rounded-full bg-white/5 text-foreground/50 text-[10px] font-bold">KES 1,200,000</div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button className="flex-1 min-w-[160px] py-4 bg-primary text-on-primary font-bold rounded-2xl flex items-center justify-center gap-2 emerald-glow">
                            <ArrowUpRight size={20} /> Withdraw Now
                        </button>
                        <button className="flex-1 min-w-[160px] py-4 bg-white/5 border border-white/10 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
                            <Download size={20} /> Statement
                        </button>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="glass-card rounded-[3rem] p-8 space-y-6">
                    <h3 className="font-bold">Payout Method</h3>
                    <div className="p-6 rounded-[2rem] bg-white/5 border border-primary/20 relative group hover:border-primary/50 transition-all cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                                <CreditCard size={24} className="text-primary" />
                            </div>
                            <div>
                                <p className="font-bold">Standard Bank</p>
                                <p className="text-xs text-foreground/40">**** 4290</p>
                            </div>
                            <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                        </div>
                    </div>
                    <button className="w-full py-4 text-sm font-bold text-foreground/40 border border-white/5 border-dashed rounded-[2rem] hover:text-foreground hover:bg-white/5 transition-all">
                        + New Payout Method
                    </button>
                </div>
            </div>

            {/* Transaction History */}
            <div className="glass-card rounded-[3rem] overflow-hidden">
                <div className="p-8 border-b border-white/5 flex items-center justify-between">
                    <h3 className="text-xl font-bold">Transaction History</h3>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-xs font-bold bg-primary text-on-primary rounded-full">All</button>
                        <button className="px-4 py-2 text-xs font-bold text-foreground/40 hover:bg-white/5 rounded-full">Earnings</button>
                        <button className="px-4 py-2 text-xs font-bold text-foreground/40 hover:bg-white/5 rounded-full">Payouts</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5">
                                <th className="px-8 py-4 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Transaction</th>
                                <th className="px-8 py-4 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Date</th>
                                <th className="px-8 py-4 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Status</th>
                                <th className="px-8 py-4 text-right text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[
                                { name: 'Campaign Payout: Nike Africa', date: 'Oct 20, 2024', status: 'Completed', amount: '+$1,200.00', type: 'in' },
                                { name: 'Withdrawal to Bank', date: 'Oct 18, 2024', status: 'Processing', amount: '-$500.00', type: 'out' },
                                { name: 'Ad Revenue: YouTube Sync', date: 'Oct 15, 2024', status: 'Completed', amount: '+$840.40', type: 'in' },
                                { name: 'Commission: Book Sales', date: 'Oct 12, 2024', status: 'Completed', amount: '+$210.15', type: 'in' },
                            ].map((tx, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-all">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className={cn(
                                                "w-10 h-10 rounded-xl flex items-center justify-center",
                                                tx.type === 'in' ? "bg-primary/20 text-primary" : "bg-white/10 text-foreground/60"
                                            )}>
                                                {tx.type === 'in' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                                            </div>
                                            <span className="font-bold text-sm">{tx.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm text-foreground/50">{tx.date}</td>
                                    <td className="px-8 py-6">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[10px] font-bold",
                                            tx.status === 'Completed' ? "bg-primary/20 text-primary" : "bg-white/10 text-foreground/60"
                                        )}>{tx.status}</span>
                                    </td>
                                    <td className={cn(
                                        "px-8 py-6 text-right font-bold",
                                        tx.type === 'in' ? "text-primary" : "text-foreground"
                                    )}>{tx.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}
