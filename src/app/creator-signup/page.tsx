"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    Plus,
    Trash2,
    AlertCircle,
    Clock,
    Globe,
    Layout,
    Play,
    Share2,
    Briefcase,
    Ghost,
    Video,
    Image as ImageIcon,
    MessageSquare
} from 'lucide-react';
import Link from 'next/link';

const PLATFORMS = [
    { id: 'tiktok', icon: Video, label: 'TikTok' },
    { id: 'instagram', icon: Layout, label: 'Instagram' },
    { id: 'youtube', icon: Play, label: 'YouTube' },
    { id: 'facebook', icon: Share2, label: 'Facebook' },
    { id: 'x', icon: Share2, label: 'X (Twitter)' },
    { id: 'snapchat', icon: Ghost, label: 'Snapchat' },
    { id: 'linkedin', icon: Briefcase, label: 'LinkedIn' },
    { id: 'twitch', icon: Video, label: 'Twitch' },
    { id: 'other', icon: Globe, label: 'Other' },
];

const NICHES = [
    "Tech & Gadgets", "Lifestyle", "Fashion", "Beauty", "Fitness", "Gaming",
    "Food & Cooking", "Travel", "Education", "Business & Finance", "Comedy",
    "Music & Dance", "Art & Design", "Parenting", "Health & Wellness",
    "Automotive", "Sports", "News & Politics", "Real Estate", "DIY & Crafts"
];

export default function CreatorSignup() {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        fullName: '',
        displayName: '',
        email: '',
        phone: '',
        country: '',
        primaryPlatform: '',
        primaryUrl: '',
        primaryFollowers: '',
        primaryViews: '',
        primaryEngagement: '',
        sampleLinks: ['', ''],
        secondaryPlatforms: [] as { platform: string, url: string, followers: string }[],
        niches: [] as string[],
        otherNiche: '',
        rates: {
            shortVideo: { min: '', max: '' },
            longVideo: { min: '', max: '' },
            staticPost: { min: '', max: '' },
            story: { min: '', max: '' },
            bundle: { min: '', max: '' },
        },
        negotiable: false,
        collaborations: '',
        minFollowers: '',
        campaignTypes: [] as string[],
        demographics: '',
        mediaKit: '',
        password: '',
        confirmPassword: '',
        truthfulnessConfirmed: false
    });

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 mesh-bg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full glass-card rounded-[3rem] p-12 text-center space-y-8"
                >
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={48} className="text-primary" />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold">Your profile is under review.</h1>
                        <p className="text-lg text-foreground/60 leading-relaxed">
                            ⏱️ Typical time: 1–3 business days. <br />
                            📧 We'll email you at <span className="text-primary font-bold">{formData.email}</span> with:
                        </p>
                    </div>
                    <div className="text-left bg-black/5 rounded-3xl p-8 space-y-4 border border-black/5">
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <p className="text-sm">Approval + dashboard access, OR</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <p className="text-sm">Specific changes needed (with 7 days to resubmit)</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <p className="text-sm">Rejection reason (only for fraud or totally wrong niche — rare)</p>
                        </div>
                    </div>
                    <p className="text-sm text-foreground/40 font-bold tracking-widest uppercase italic">
                        No hidden gates. No forever pending.
                    </p>
                    <Link href="/" className="inline-block px-8 py-4 bg-black/5 border border-black/5 rounded-2xl font-bold hover:bg-black/5 transition-all">
                        Return to Home
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground pb-20 mesh-bg">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <Link href="/" className="text-2xl font-bold text-primary tracking-tight mb-12 block">
                    Beka
                </Link>

                <div className="mb-12 space-y-4">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-2">Step {step} of 6</p>
                            <h1 className="text-3xl font-bold">
                                {step === 1 && "Basic Information"}
                                {step === 2 && "Primary Platform"}
                                {step === 3 && "Niche & Secondary Content"}
                                {step === 4 && "Your Rate Card"}
                                {step === 5 && "Additional Insights"}
                                {step === 6 && "Account Security"}
                            </h1>
                        </div>
                        <p className="text-sm text-foreground/40 font-bold">
                            {Math.round((step / 6) * 100)}% Complete
                        </p>
                    </div>
                    <div className="h-1.5 w-full bg-black/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary shadow-[0_0_10px_rgba(107,219,162,0.5)]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${(step / 6) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="glass-card rounded-[2.5rem] p-8 md:p-10 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 ml-2 italic">Full Name</label>
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-primary transition-colors" size={18} />
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.fullName}
                                                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                                                    placeholder="John Doe"
                                                    className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 ml-2 italic">Display Name (Pseudonym OK)</label>
                                            <div className="relative group">
                                                <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-primary transition-colors" size={18} />
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.displayName}
                                                    onChange={e => setFormData({ ...formData, displayName: e.target.value })}
                                                    placeholder="JD Creates"
                                                    className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-all"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold opacity-60 ml-2 italic">Email Address (Verified via Magic Link)</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-primary transition-colors" size={18} />
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="john@example.com"
                                                className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 ml-2 italic">Phone Number (Optional)</label>
                                            <div className="relative group">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-primary transition-colors" size={18} />
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder="+260..."
                                                    className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 ml-2 italic">Country / Timezone</label>
                                            <div className="relative group">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/20 group-focus-within:text-primary transition-colors" size={18} />
                                                <select
                                                    required
                                                    value={formData.country}
                                                    onChange={e => setFormData({ ...formData, country: e.target.value })}
                                                    className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-primary/50 transition-all appearance-none"
                                                >
                                                    <option value="" className="bg-surface">Select Country</option>
                                                    <option value="zambia" className="bg-surface">Zambia (CAT)</option>
                                                    <option value="nigeria" className="bg-surface">Nigeria (WAT)</option>
                                                    <option value="kenya" className="bg-surface">Kenya (EAT)</option>
                                                    <option value="south_africa" className="bg-surface">South Africa (SAST)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 flex gap-4 items-center">
                                    <AlertCircle className="text-primary" size={24} />
                                    <p className="text-sm font-medium">Tell us where you actually perform best. We only require metrics for your primary platform.</p>
                                </div>

                                <div className="glass-card rounded-[2.5rem] p-8 md:p-10 space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold opacity-60 ml-2 italic">Select Primary Platform</label>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                            {PLATFORMS.map(p => (
                                                <button
                                                    key={p.id}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, primaryPlatform: p.id })}
                                                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all gap-2 ${formData.primaryPlatform === p.id
                                                        ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(107,219,162,0.2)]'
                                                        : 'bg-black/5 border-black/5 text-foreground/40 hover:bg-black/5'
                                                        }`}
                                                >
                                                    <p.icon size={24} />
                                                    <span className="text-[10px] font-bold uppercase tracking-widest">{p.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {formData.primaryPlatform && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-black/5"
                                        >
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold opacity-60 ml-2 italic">Profile URL</label>
                                                <input
                                                    type="url"
                                                    required
                                                    value={formData.primaryUrl}
                                                    onChange={e => setFormData({ ...formData, primaryUrl: e.target.value })}
                                                    placeholder="https://..."
                                                    className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all font-mono text-xs"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold opacity-60 ml-2 italic">Follower Count</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.primaryFollowers}
                                                    onChange={e => setFormData({ ...formData, primaryFollowers: e.target.value })}
                                                    placeholder="e.g. 50,000"
                                                    className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold opacity-60 ml-2 italic">Avg. Views per Post (30 Days)</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.primaryViews}
                                                    onChange={e => setFormData({ ...formData, primaryViews: e.target.value })}
                                                    placeholder="e.g. 15k"
                                                    className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold opacity-60 ml-2 italic">Avg. Engagement Rate % (Optional)</label>
                                                <input
                                                    type="text"
                                                    value={formData.primaryEngagement}
                                                    onChange={e => setFormData({ ...formData, primaryEngagement: e.target.value })}
                                                    placeholder="e.g. 4.5%"
                                                    className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all"
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    <div className="space-y-4">
                                        <label className="text-sm font-bold opacity-60 ml-2 italic">Sample Content Links (Best Performing - 2 Required)</label>
                                        <div className="space-y-3">
                                            {formData.sampleLinks.map((link, index) => (
                                                <input
                                                    key={index}
                                                    type="url"
                                                    required
                                                    value={link}
                                                    onChange={e => {
                                                        const newLinks = [...formData.sampleLinks];
                                                        newLinks[index] = e.target.value;
                                                        setFormData({ ...formData, sampleLinks: newLinks });
                                                    }}
                                                    placeholder={`Link ${index + 1} (https://...)`}
                                                    className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all font-mono text-xs"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="glass-card rounded-[2.5rem] p-8 md:p-10 space-y-8">
                                    <div className="space-y-4">
                                        <label className="text-sm font-bold opacity-60 ml-2 italic">Your Niches (Select 1-3)</label>
                                        <div className="flex flex-wrap gap-2">
                                            {NICHES.map(niche => (
                                                <button
                                                    key={niche}
                                                    type="button"
                                                    onClick={() => {
                                                        if (formData.niches.includes(niche)) {
                                                            setFormData({ ...formData, niches: formData.niches.filter(n => n !== niche) });
                                                        } else if (formData.niches.length < 3) {
                                                            setFormData({ ...formData, niches: [...formData.niches, niche] });
                                                        }
                                                    }}
                                                    className={`px-4 py-2 rounded-xl border text-xs font-bold transition-all ${formData.niches.includes(niche)
                                                        ? 'bg-primary text-on-primary border-primary'
                                                        : 'bg-black/5 border-black/5 text-foreground/60 hover:bg-black/5'
                                                        }`}
                                                >
                                                    {niche}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="pt-4 space-y-2">
                                            <label className="text-xs font-bold opacity-40 ml-2 uppercase italic tracking-widest">Other Niche (Please Specify)</label>
                                            <input
                                                type="text"
                                                value={formData.otherNiche}
                                                onChange={e => setFormData({ ...formData, otherNiche: e.target.value })}
                                                className="w-full bg-transparent border-b border-black/5 py-2 focus:outline-none focus:border-primary transition-all text-sm"
                                                placeholder="e.g. Urban Farming, ASMR..."
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4 border-t border-black/5 pt-8">
                                        <div className="flex justify-between items-center">
                                            <label className="text-sm font-bold opacity-60 ml-2 italic">Secondary Platforms (Optional)</label>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, secondaryPlatforms: [...formData.secondaryPlatforms, { platform: '', followers: '', url: '' }] as any })}
                                                className="p-2 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all"
                                            >
                                                <Plus size={20} />
                                            </button>
                                        </div>
                                        <div className="space-y-4">
                                            {formData.secondaryPlatforms.map((p: any, i) => (
                                                <div key={i} className="bg-black/5 rounded-3xl p-6 border border-black/5 grid grid-cols-1 sm:grid-cols-3 gap-4 group">
                                                    <select
                                                        className="bg-background border border-black/5 rounded-xl py-2 px-3 text-xs focus:outline-none"
                                                        value={p.platform}
                                                        onChange={e => {
                                                            const newPlatforms = [...formData.secondaryPlatforms] as any;
                                                            newPlatforms[i].platform = e.target.value;
                                                            setFormData({ ...formData, secondaryPlatforms: newPlatforms });
                                                        }}
                                                    >
                                                        <option value="">Platform</option>
                                                        {PLATFORMS.map(opt => <option key={opt.id} value={opt.id}>{opt.label}</option>)}
                                                    </select>
                                                    <input
                                                        type="text"
                                                        placeholder="Link (https://...)"
                                                        className="bg-background border border-black/5 rounded-xl py-2 px-4 text-xs focus:outline-none font-mono"
                                                        value={p.url}
                                                        onChange={e => {
                                                            const newPlatforms = [...formData.secondaryPlatforms] as any;
                                                            newPlatforms[i].url = e.target.value;
                                                            setFormData({ ...formData, secondaryPlatforms: newPlatforms });
                                                        }}
                                                    />
                                                    <div className="flex gap-2">
                                                        <input
                                                            type="text"
                                                            placeholder="Followers"
                                                            className="flex-1 bg-background border border-black/5 rounded-xl py-2 px-4 text-xs focus:outline-none"
                                                            value={p.followers}
                                                            onChange={e => {
                                                                const newPlatforms = [...formData.secondaryPlatforms] as any;
                                                                newPlatforms[i].followers = e.target.value;
                                                                setFormData({ ...formData, secondaryPlatforms: newPlatforms });
                                                            }}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setFormData({ ...formData, secondaryPlatforms: formData.secondaryPlatforms.filter((_, idx) => idx !== i) })}
                                                            className="p-2 text-foreground/40 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="bg-primary/5 border border-primary/20 rounded-3xl p-6 flex gap-4 items-center">
                                    <AlertCircle className="text-primary" size={24} />
                                    <div>
                                        <p className="text-sm font-bold">No minimum. No maximum. Just tell brands what you actually charge.</p>
                                        <p className="text-xs opacity-60">Leave blank if you don't offer that format.</p>
                                    </div>
                                </div>

                                <div className="glass-card rounded-[2.5rem] p-8 md:p-10 space-y-6">
                                    <div className="space-y-4">
                                        {[
                                            { id: 'shortVideo', label: 'Short Video (15–30s)', example: 'TikTok / Reel / Shorts', icon: <Video className="text-primary" size={20} /> },
                                            { id: 'longVideo', label: 'Long Video (60s+)', example: 'YouTube integration / IGTV', icon: <Play className="text-primary" size={20} /> },
                                            { id: 'staticPost', label: 'Static Image/Post', example: 'Instagram Feed Post', icon: <ImageIcon className="text-primary" size={20} /> },
                                            { id: 'story', label: 'Story (24hr)', example: 'IG / FB Story', icon: <Clock className="text-primary" size={20} /> },
                                            { id: 'bundle', label: 'Bundle (3+ Posts)', example: 'Campaign Package', icon: <CheckCircle2 className="text-primary" size={20} /> },
                                        ].map((format) => (
                                            <div key={format.id} className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-black/5 rounded-3xl border border-black/5 group hover:bg-white/[0.08] transition-all">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        {format.icon}
                                                        <h3 className="font-bold">{format.label}</h3>
                                                    </div>
                                                    <p className="text-xs text-foreground/40 italic">{format.example}</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-primary italic">ZMW</span>
                                                    <div className="flex items-center bg-background rounded-xl border border-black/5 px-4 py-2 focus-within:border-primary/50 transition-all">
                                                        <input
                                                            type="text"
                                                            placeholder="Min"
                                                            className="bg-transparent w-20 text-sm focus:outline-none"
                                                            value={(formData.rates as any)[format.id].min}
                                                            onChange={e => {
                                                                const newRates = { ...formData.rates } as any;
                                                                newRates[format.id].min = e.target.value;
                                                                setFormData({ ...formData, rates: newRates });
                                                            }}
                                                        />
                                                        <span className="mx-2 text-foreground/20">—</span>
                                                        <input
                                                            type="text"
                                                            placeholder="Max"
                                                            className="bg-transparent w-20 text-sm focus:outline-none text-right"
                                                            value={(formData.rates as any)[format.id].max}
                                                            onChange={e => {
                                                                const newRates = { ...formData.rates } as any;
                                                                newRates[format.id].max = e.target.value;
                                                                setFormData({ ...formData, rates: newRates });
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-black/5 flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, negotiable: !formData.negotiable })}
                                            className={`w-6 h-6 rounded-lg border-2 transition-all flex items-center justify-center ${formData.negotiable ? 'bg-primary border-primary' : 'border-black/5'}`}
                                        >
                                            {formData.negotiable && <CheckCircle2 size={14} className="text-on-primary" />}
                                        </button>
                                        <span className="text-sm font-medium opacity-70">Open to negotiating rates for long-term partnerships</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 5 && (
                            <motion.div
                                key="step5"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="glass-card rounded-[2.5rem] p-8 md:p-10 space-y-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold opacity-60 ml-2 italic">Top 3 Past Brand Collaborations</label>
                                        <textarea
                                            value={formData.collaborations}
                                            onChange={e => setFormData({ ...formData, collaborations: e.target.value })}
                                            placeholder="e.g. Safaricom, MTN, Jumia..."
                                            className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all min-h-[100px]"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 ml-2 italic">Min. Follower Requirement (If Any)</label>
                                            <input
                                                type="text"
                                                value={formData.minFollowers}
                                                onChange={e => setFormData({ ...formData, minFollowers: e.target.value })}
                                                placeholder="e.g. 5,000"
                                                className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 ml-2 italic">Link to Media Kit (If Available)</label>
                                            <input
                                                type="url"
                                                value={formData.mediaKit}
                                                onChange={e => setFormData({ ...formData, mediaKit: e.target.value })}
                                                placeholder="https://drive.google.com/..."
                                                className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all font-mono text-xs"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold opacity-60 ml-2 italic">Audience Demographics (Age/Location/Gender)</label>
                                        <textarea
                                            value={formData.demographics}
                                            onChange={e => setFormData({ ...formData, demographics: e.target.value })}
                                            placeholder="e.g. 60% Gen Z, 40% Millennial. Primarily Zambia and South Africa."
                                            className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all min-h-[100px]"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 6 && (
                            <motion.div
                                key="step6"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                <div className="glass-card rounded-[2.5rem] p-8 md:p-10 space-y-6">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 ml-2 italic">Create Password</label>
                                            <input
                                                type="password"
                                                required
                                                value={formData.password}
                                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                                                placeholder="••••••••"
                                                className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all"
                                            />
                                            <p className="text-[10px] text-foreground/40 ml-2">Min. 8 characters</p>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold opacity-60 ml-2 italic">Confirm Password</label>
                                            <input
                                                type="password"
                                                required
                                                value={formData.confirmPassword}
                                                onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                placeholder="••••••••"
                                                className="w-full bg-black/5 border border-black/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-primary/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-black/5 space-y-6">
                                        <div className="flex items-start gap-4 group cursor-pointer" onClick={() => setFormData({ ...formData, truthfulnessConfirmed: !formData.truthfulnessConfirmed })}>
                                            <button
                                                type="button"
                                                className={`mt-1 w-6 h-6 rounded-lg border-2 flex-shrink-0 transition-all flex items-center justify-center ${formData.truthfulnessConfirmed ? 'bg-primary border-primary' : 'border-black/5 group-hover:border-primary/50'}`}
                                            >
                                                {formData.truthfulnessConfirmed && <CheckCircle2 size={14} className="text-on-primary" />}
                                            </button>
                                            <p className="text-sm leading-relaxed text-foreground/60">
                                                I confirm that all metrics provided are truthful from the last 30 days. <span className="text-primary font-bold">Falsification leads to permanent ban.</span>
                                            </p>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={!formData.truthfulnessConfirmed}
                                            className={`w-full py-5 rounded-[2rem] font-bold text-lg transition-all flex items-center justify-center gap-3 ${formData.truthfulnessConfirmed
                                                ? 'bg-primary text-on-primary brand-glow hover:scale-[1.02] active:scale-[0.98]'
                                                : 'bg-black/5 text-foreground/20 cursor-not-allowed border border-black/5'
                                                }`}
                                        >
                                            Complete Application <ChevronRight size={24} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex justify-between items-center pt-8">
                        {step > 1 ? (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="flex items-center gap-2 px-6 py-3 bg-black/5 border border-black/5 rounded-2xl font-bold text-sm hover:bg-black/5 transition-all"
                            >
                                <ChevronLeft size={20} /> Back
                            </button>
                        ) : <div />}

                        {step < 6 && (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-2xl font-bold text-sm brand-glow hover:scale-105 active:scale-95 transition-all"
                            >
                                Continue <ChevronRight size={20} />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
