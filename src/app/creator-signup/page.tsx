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

const COUNTRY_CODES: Record<string, string> = {
    zambia: "+260",
    zimbabwe: "+263",
    nigeria: "+234",
    kenya: "+254",
    south_africa: "+27"
};

const STEP_LABELS = [
    "Basic Info",
    "Platform",
    "Niche",
    "Rates",
    "Insights",
    "Security",
];

export default function CreatorSignup() {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

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

    const validateStep = (currentStep: number) => {
        const newErrors: Record<string, string> = {};

        if (currentStep === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = "Required";
            if (!formData.displayName.trim()) newErrors.displayName = "Required";
            if (!formData.email.trim()) {
                newErrors.email = "Required";
            } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
                newErrors.email = "Invalid email";
            }
            if (!formData.country) newErrors.country = "Required";
        }

        if (currentStep === 2) {
            if (!formData.primaryPlatform) newErrors.primaryPlatform = "Select a platform";
            if (!formData.primaryUrl.trim()) newErrors.primaryUrl = "Required";
            if (!formData.primaryFollowers.trim()) newErrors.primaryFollowers = "Required";
            if (!formData.primaryViews.trim()) newErrors.primaryViews = "Required";
            if (formData.sampleLinks.some(link => !link.trim())) newErrors.sampleLinks = "Links required";
        }

        if (currentStep === 3) {
            if (formData.niches.length === 0 && !formData.otherNiche.trim()) {
                newErrors.niches = "Select at least 1 niche";
            }
        }

        if (currentStep === 6) {
            if (formData.password.length < 8) newErrors.password = "Min. 8 characters";
            if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match";
            if (!formData.truthfulnessConfirmed) newErrors.truthfulnessConfirmed = "Please confirm content truthfulness";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(step)) {
            setStep(s => s + 1);
            setErrors({});
        }
    };

    const prevStep = () => {
        setStep(s => s - 1);
        setErrors({});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validateStep(6)) {
            setIsLoading(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsLoading(false);
            setIsSubmitted(true);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-lg w-full"
                >
                    <div className="bg-surface border border-border rounded-xl p-10 sm:p-12 text-center space-y-8 shadow-sm">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
                        >
                            <CheckCircle2 size={30} className="text-primary" strokeWidth={2} />
                        </motion.div>

                        <div className="space-y-3">
                            <h1 className="text-2xl font-semibold tracking-tight">Your profile is under review</h1>
                            <p className="text-[15px] text-foreground/60 leading-relaxed">
                                Typical turnaround is 1–3 business days. We'll email{' '}
                                <span className="text-foreground font-medium">{formData.email || 'you'}</span>{' '}
                                with one of the following.
                            </p>
                        </div>

                        <div className="text-left space-y-3">
                            {[
                                { text: "Approval and dashboard access", primary: true },
                                { text: "Specific changes needed, with 7 days to resubmit" },
                                { text: "Rejection reason — rare, and only for fraud or totally mismatched niche" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 px-4 py-3.5 rounded-lg bg-background border border-border">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${item.primary ? 'bg-primary/15' : 'bg-foreground/[0.06]'}`}>
                                        <div className={`w-1.5 h-1.5 rounded-full ${item.primary ? 'bg-primary' : 'bg-foreground/30'}`} />
                                    </div>
                                    <p className="text-[13px] text-foreground/70 leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-[11px] text-foreground/40 font-medium tracking-wide uppercase">
                            No hidden gates. No forever pending.
                        </p>

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-foreground/[0.04] border border-border rounded-lg font-medium text-sm hover:bg-foreground/[0.07] transition-all duration-200"
                        >
                            Return to home
                        </Link>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground pb-24">
            <div className="max-w-2xl mx-auto px-6 py-10 sm:py-14">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <Link href="/" className="text-xl font-semibold text-primary tracking-tight">
                        Beka
                    </Link>
                    <span className="text-xs font-medium text-foreground/50 tabular-nums uppercase tracking-wider">
                        Step {step} of 6
                    </span>
                </div>

                {/* Progress */}
                <div className="mb-10 space-y-3">
                    <div className="flex items-center gap-1.5">
                        {STEP_LABELS.map((label, i) => {
                            const idx = i + 1;
                            const isActive = idx === step;
                            const isComplete = idx < step;
                            return (
                                <div key={label} className="flex-1 group relative">
                                    <div className="h-1 rounded-sm bg-foreground/10 overflow-hidden">
                                        <motion.div
                                            className="h-full rounded-sm bg-primary"
                                            initial={false}
                                            animate={{ width: isComplete || isActive ? '100%' : '0%' }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            style={{ opacity: isActive ? 1 : isComplete ? 0.3 : 0 }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                        {step === 1 && "Basic information"}
                        {step === 2 && "Primary platform"}
                        {step === 3 && "Niche & secondary content"}
                        {step === 4 && "Your rate card"}
                        {step === 5 && "Additional insights"}
                        {step === 6 && "Account security"}
                    </h1>
                </div>

                <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Field label="Full name" error={errors.fullName}>
                                        <InputIcon icon={User} error={!!errors.fullName} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.fullName}
                                            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                                            placeholder="John Doe"
                                            className={errors.fullName ? inputErrorClass : inputClass}
                                        />
                                    </Field>
                                    <Field label="Display name" hint="Pseudonym OK" error={errors.displayName}>
                                        <InputIcon icon={MessageSquare} error={!!errors.displayName} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.displayName}
                                            onChange={e => setFormData({ ...formData, displayName: e.target.value })}
                                            placeholder="JD Creates"
                                            className={errors.displayName ? inputErrorClass : inputClass}
                                        />
                                    </Field>
                                </div>

                                <Field label="Email address" hint="Verified via magic link" error={errors.email}>
                                    <InputIcon icon={Mail} error={!!errors.email} />
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        className={errors.email ? inputErrorClass : inputClass}
                                    />
                                </Field>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Field label="Phone number" hint="Optional">
                                        <InputIcon icon={Phone} />
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder={formData.country ? `${COUNTRY_CODES[formData.country]}...` : "+260..."}
                                            className={inputClass}
                                        />
                                    </Field>
                                    <Field label="Country / timezone" error={errors.country}>
                                        <InputIcon icon={MapPin} error={!!errors.country} />
                                        <select
                                            required
                                            value={formData.country}
                                            onChange={e => setFormData({ ...formData, country: e.target.value })}
                                            className={`${errors.country ? inputErrorClass : inputClass} appearance-none cursor-pointer`}
                                        >
                                            <option value="">Select country</option>
                                            <option value="zambia">Zambia (CAT)</option>
                                            <option value="zimbabwe">Zimbabwe (CAT)</option>
                                            <option value="nigeria">Nigeria (WAT)</option>
                                            <option value="kenya">Kenya (EAT)</option>
                                            <option value="south_africa">South Africa (SAST)</option>
                                        </select>
                                        <ChevronRight size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none" />
                                    </Field>
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <InfoBanner text="Tell us where you actually perform best — we only require metrics for your primary platform." />

                                <div className="space-y-3">
                                    <Label>Select primary platform</Label>
                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                        {PLATFORMS.map(p => {
                                            const active = formData.primaryPlatform === p.id;
                                            return (
                                                <button
                                                    key={p.id}
                                                    type="button"
                                                    onClick={() => setFormData({ ...formData, primaryPlatform: p.id })}
                                                    className={`flex flex-col items-center justify-center py-4 px-2 rounded-lg border transition-all duration-150 gap-2 ${active
                                                        ? 'bg-primary/5 border-primary text-primary'
                                                        : 'bg-surface border-border text-foreground/50 hover:border-foreground/20 hover:text-foreground'
                                                        }`}
                                                >
                                                    <p.icon size={20} strokeWidth={1.5} />
                                                    <span className="text-[11px] font-medium tracking-wide">{p.label}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {formData.primaryPlatform && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border mt-2">
                                                <Field label="Profile URL">
                                                    <input
                                                        type="url"
                                                        required
                                                        value={formData.primaryUrl}
                                                        onChange={e => setFormData({ ...formData, primaryUrl: e.target.value })}
                                                        placeholder="https://..."
                                                        className={`${inputClassNoIcon} font-mono text-[13px]`}
                                                    />
                                                </Field>
                                                <Field label="Follower count">
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.primaryFollowers}
                                                        onChange={e => setFormData({ ...formData, primaryFollowers: e.target.value })}
                                                        placeholder="e.g. 50,000"
                                                        className={inputClassNoIcon}
                                                    />
                                                </Field>
                                                <Field label="Avg. views per post" hint="Last 30 days">
                                                    <input
                                                        type="text"
                                                        required
                                                        value={formData.primaryViews}
                                                        onChange={e => setFormData({ ...formData, primaryViews: e.target.value })}
                                                        placeholder="e.g. 15k"
                                                        className={inputClassNoIcon}
                                                    />
                                                </Field>
                                                <Field label="Avg. engagement rate" hint="Optional">
                                                    <input
                                                        type="text"
                                                        value={formData.primaryEngagement}
                                                        onChange={e => setFormData({ ...formData, primaryEngagement: e.target.value })}
                                                        placeholder="e.g. 4.5%"
                                                        className={inputClassNoIcon}
                                                    />
                                                </Field>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="space-y-3">
                                    <Label>Sample content links (2 required)</Label>
                                    <div className="space-y-2.5">
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
                                                placeholder={`Best performing link ${index + 1} — https://...`}
                                                className={`${inputClassNoIcon} font-mono text-[13px]`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <div className="space-y-3">
                                    <div className="flex items-baseline justify-between">
                                        <Label>Your niches</Label>
                                        <span className="text-xs text-foreground/50 tabular-nums">{formData.niches.length}/3 selected</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {NICHES.map(niche => {
                                            const selected = formData.niches.includes(niche);
                                            const disabled = !selected && formData.niches.length >= 3;
                                            return (
                                                <button
                                                    key={niche}
                                                    type="button"
                                                    disabled={disabled}
                                                    onClick={() => {
                                                        if (selected) {
                                                            setFormData({ ...formData, niches: formData.niches.filter(n => n !== niche) });
                                                        } else if (formData.niches.length < 3) {
                                                            setFormData({ ...formData, niches: [...formData.niches, niche] });
                                                        }
                                                    }}
                                                    className={`px-3.5 py-2 rounded-lg border text-[13px] font-medium transition-all duration-150 ${selected
                                                        ? 'bg-primary text-on-primary border-primary'
                                                        : disabled
                                                            ? 'bg-surface border-border text-foreground/30 cursor-not-allowed'
                                                            : 'bg-surface border-border text-foreground/60 hover:border-foreground/30 hover:text-foreground'
                                                        }`}
                                                >
                                                    {niche}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    <Field label="Other niche" hint="Optional">
                                        <input
                                            type="text"
                                            value={formData.otherNiche}
                                            onChange={e => setFormData({ ...formData, otherNiche: e.target.value })}
                                            className={inputClassNoIcon}
                                            placeholder="e.g. Urban farming, ASMR..."
                                        />
                                    </Field>
                                </div>

                                <div className="space-y-3 pt-6 border-t border-border">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Label>Secondary platforms</Label>
                                            <p className="text-xs text-foreground/50 mt-0.5">Optional</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, secondaryPlatforms: [...formData.secondaryPlatforms, { platform: '', followers: '', url: '' }] as any })}
                                            className="flex items-center gap-1.5 px-3 py-1.5 border border-border text-foreground text-[12px] font-medium rounded-lg hover:bg-foreground/5 transition-colors duration-150"
                                        >
                                            <Plus size={14} /> Add Platform
                                        </button>
                                    </div>
                                    <div className="space-y-2.5">
                                        {formData.secondaryPlatforms.map((p: any, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="bg-surface rounded-lg p-3 border border-border grid grid-cols-1 sm:grid-cols-[120px_1fr_auto] gap-2 items-center overflow-hidden"
                                            >
                                                <select
                                                    className="bg-background border border-border rounded-md py-2 px-3 text-[13px] focus:outline-none focus:border-primary/40 transition-colors h-10 w-full"
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
                                                    type="url"
                                                    placeholder="Profile URL"
                                                    className="bg-background border border-border rounded-md py-2 px-3 text-[13px] focus:outline-none focus:border-primary/40 transition-colors font-mono h-10 w-full"
                                                    value={p.url}
                                                    onChange={e => {
                                                        const newPlatforms = [...formData.secondaryPlatforms] as any;
                                                        newPlatforms[i].url = e.target.value;
                                                        setFormData({ ...formData, secondaryPlatforms: newPlatforms });
                                                    }}
                                                />
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        placeholder="Followers"
                                                        className="w-24 bg-background border border-border rounded-md py-2 px-3 text-[13px] focus:outline-none focus:border-primary/40 transition-colors h-10"
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
                                                        className="h-10 w-10 flex items-center justify-center text-foreground/40 hover:text-red-500 transition-colors rounded-md hover:bg-red-500/10 border border-transparent"
                                                        aria-label="Remove platform"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                        {formData.secondaryPlatforms.length === 0 && (
                                            <p className="text-[13px] text-foreground/40 py-2">No secondary platforms added yet.</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <InfoBanner
                                    text="No minimum, no maximum — just tell brands what you actually charge."
                                    subtext="Leave a row blank if you don't offer that format."
                                />

                                <div className="space-y-2.5">
                                    {[
                                        { id: 'shortVideo', label: 'Short video', sub: '15–30s · TikTok / Reel / Shorts', icon: Video },
                                        { id: 'longVideo', label: 'Long video', sub: '60s+ · YouTube integration / IGTV', icon: Play },
                                        { id: 'staticPost', label: 'Static image / post', sub: 'Instagram feed post', icon: ImageIcon },
                                        { id: 'story', label: 'Story', sub: '24hr · IG / FB story', icon: Clock },
                                        { id: 'bundle', label: 'Bundle', sub: '3+ posts · Campaign package', icon: CheckCircle2 },
                                    ].map((format) => (
                                        <div key={format.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-surface rounded-lg border border-border">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-md bg-foreground/5 flex items-center justify-center flex-shrink-0 border border-border">
                                                    <format.icon size={18} className="text-foreground/70" strokeWidth={1.5} />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-[14px]">{format.label}</h3>
                                                    <p className="text-xs text-foreground/50 mt-0.5">{format.sub}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 sm:flex-shrink-0">
                                                <span className="text-[11px] font-medium text-foreground/40 tracking-wide uppercase">ZMW</span>
                                                <div className="flex items-center bg-background rounded-md border border-border px-3 py-2 h-10 focus-within:border-primary/40 focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                                                    <input
                                                        type="text"
                                                        placeholder="Min"
                                                        className="bg-transparent w-16 text-[13px] focus:outline-none placeholder:text-foreground/30"
                                                        value={(formData.rates as any)[format.id].min}
                                                        onChange={e => {
                                                            const newRates = { ...formData.rates } as any;
                                                            newRates[format.id].min = e.target.value;
                                                            setFormData({ ...formData, rates: newRates });
                                                        }}
                                                    />
                                                    <span className="mx-1.5 text-foreground/20 text-xs">—</span>
                                                    <input
                                                        type="text"
                                                        placeholder="Max"
                                                        className="bg-transparent w-16 text-[13px] focus:outline-none text-right placeholder:text-foreground/30"
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

                                <Checkbox
                                    checked={formData.negotiable}
                                    onClick={() => setFormData({ ...formData, negotiable: !formData.negotiable })}
                                    label="Open to negotiating rates for long-term partnerships"
                                />
                            </motion.div>
                        )}

                        {step === 5 && (
                            <motion.div
                                key="step5"
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <Field label="Top 3 past brand collaborations">
                                    <textarea
                                        value={formData.collaborations}
                                        onChange={e => setFormData({ ...formData, collaborations: e.target.value })}
                                        placeholder="e.g. Safaricom, MTN, Jumia..."
                                        className={`${inputClassNoIcon} min-h-[100px] resize-y py-3 leading-relaxed`}
                                    />
                                </Field>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Field label="Min. follower requirement" hint="If any">
                                        <input
                                            type="text"
                                            value={formData.minFollowers}
                                            onChange={e => setFormData({ ...formData, minFollowers: e.target.value })}
                                            placeholder="e.g. 5,000"
                                            className={inputClassNoIcon}
                                        />
                                    </Field>
                                    <Field label="Media kit link" hint="If available">
                                        <input
                                            type="url"
                                            value={formData.mediaKit}
                                            onChange={e => setFormData({ ...formData, mediaKit: e.target.value })}
                                            placeholder="https://drive.google.com/..."
                                            className={`${inputClassNoIcon} font-mono text-[13px]`}
                                        />
                                    </Field>
                                </div>

                                <Field label="Audience demographics" hint="Age, location, gender">
                                    <textarea
                                        value={formData.demographics}
                                        onChange={e => setFormData({ ...formData, demographics: e.target.value })}
                                        placeholder="e.g. 60% Gen Z, 40% Millennial. Primarily Zambia and South Africa."
                                        className={`${inputClassNoIcon} min-h-[100px] resize-y py-3 leading-relaxed`}
                                    />
                                </Field>
                            </motion.div>
                        )}

                        {step === 6 && (
                            <motion.div
                                key="step6"
                                initial={{ opacity: 0, x: 12 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -12 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Field label="Create password" hint="Min. 8 characters" error={errors.password}>
                                        <input
                                            type="password"
                                            required
                                            minLength={8}
                                            value={formData.password}
                                            onChange={e => setFormData({ ...formData, password: e.target.value })}
                                            placeholder="••••••••"
                                            className={errors.password ? inputErrorClassNoIcon : inputClassNoIcon}
                                        />
                                    </Field>
                                    <Field label="Confirm password" error={errors.confirmPassword}>
                                        <input
                                            type="password"
                                            required
                                            value={formData.confirmPassword}
                                            onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                                            placeholder="••••••••"
                                            className={errors.confirmPassword ? inputErrorClassNoIcon : inputClassNoIcon}
                                        />
                                    </Field>
                                </div>

                                <div className="pt-6 border-t border-border space-y-6">
                                    <Checkbox
                                        checked={formData.truthfulnessConfirmed}
                                        error={!!errors.truthfulnessConfirmed}
                                        onClick={() => setFormData({ ...formData, truthfulnessConfirmed: !formData.truthfulnessConfirmed })}
                                        label={
                                            <>
                                                I confirm that all metrics provided are truthful from the last 30 days.{' '}
                                                <span className={`${errors.truthfulnessConfirmed ? 'text-red-500' : 'text-foreground'} font-medium`}>
                                                    Falsification leads to a permanent ban.
                                                </span>
                                            </>
                                        }
                                    />

                                    <button
                                        type="submit"
                                        disabled={!formData.truthfulnessConfirmed || isLoading}
                                        className={`w-full py-3.5 rounded-lg font-medium text-[15px] transition-all duration-200 flex items-center justify-center gap-2 ${formData.truthfulnessConfirmed && !isLoading
                                            ? 'bg-foreground text-background hover:bg-foreground/90 active:scale-[0.99]'
                                            : 'bg-foreground/[0.04] text-foreground/30 cursor-not-allowed border border-border'
                                            }`}
                                    >
                                        {isLoading ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                                                />
                                                Processing Application...
                                            </>
                                        ) : (
                                            <>Complete application <ChevronRight size={18} /></>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex justify-between items-center pt-10 mt-6 border-t border-border/50">
                        {step > 1 ? (
                            <button
                                type="button"
                                disabled={isLoading}
                                onClick={prevStep}
                                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground rounded-lg hover:bg-foreground/5 transition-all duration-150 border border-transparent hover:border-border disabled:opacity-50"
                            >
                                <ChevronLeft size={16} /> Back
                            </button>
                        ) : <div />}

                        {step < 6 && (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="flex items-center gap-1.5 px-5 py-2.5 bg-foreground text-background rounded-lg font-medium text-sm hover:bg-foreground/90 active:scale-[0.98] transition-all duration-150 shadow-sm"
                            >
                                Continue <ChevronRight size={16} />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div >
    );
}

/* ---------- Shared style fragments ---------- */

const inputClass = "w-full bg-surface border border-border rounded-lg h-12 pl-11 pr-4 text-[14px] placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200";
const inputErrorClass = "w-full bg-red-500/[0.02] border-red-500/50 rounded-lg h-12 pl-11 pr-4 text-[14px] placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-red-500/20 transition-all duration-200";
const inputClassNoIcon = "w-full bg-surface border border-border rounded-lg h-12 px-4 text-[14px] placeholder:text-foreground/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200";
const inputErrorClassNoIcon = "w-full bg-red-500/[0.02] border-red-500/50 rounded-lg h-12 px-4 text-[14px] placeholder:text-foreground/30 focus:outline-none focus:ring-1 focus:ring-red-500/20 transition-all duration-200";

/* ---------- Small reusable components ---------- */

function Label({ children }: { children: React.ReactNode }) {
    return <label className="text-[13px] font-medium text-foreground/80 block mb-1.5">{children}</label>;
}

function Field({
    label,
    hint,
    error,
    children,
}: {
    label: string;
    hint?: string;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-1">
            <div className="flex items-baseline justify-between">
                <div className="flex items-center gap-2">
                    <Label>{label}</Label>
                    {error && <span className="text-[11px] text-red-500 font-medium animate-pulse">Required</span>}
                </div>
                {hint && !error && <span className="text-[11px] text-foreground/40">{hint}</span>}
            </div>
            <div className="relative group">{children}</div>
        </div>
    );
}

function InputIcon({ icon: Icon, error }: { icon: React.ElementType, error?: boolean }) {
    return <Icon size={16} strokeWidth={2} className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${error ? 'text-red-500/50' : 'text-foreground/40 group-focus-within:text-primary'}`} />;
}

function InfoBanner({ text, subtext }: { text: string; subtext?: string }) {
    return (
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3 items-start">
            <AlertCircle className="text-primary flex-shrink-0 mt-0.5" size={18} strokeWidth={2} />
            <div className="space-y-1">
                <p className="text-[14px] font-medium leading-relaxed text-foreground/90">{text}</p>
                {subtext && <p className="text-[13px] text-foreground/60">{subtext}</p>}
            </div>
        </div>
    );
}

function Checkbox({
    checked,
    onClick,
    label,
    error
}: {
    checked: boolean;
    onClick: () => void;
    label: React.ReactNode;
    error?: boolean;
}) {
    return (
        <div className="flex items-start gap-3 cursor-pointer group" onClick={onClick}>
            <button
                type="button"
                className={`mt-0.5 w-5 h-5 rounded border flex-shrink-0 transition-all duration-150 flex items-center justify-center ${checked
                    ? 'bg-foreground border-foreground text-background'
                    : error
                        ? 'bg-red-500/10 border-red-500/50'
                        : 'bg-surface border-border group-hover:border-foreground/40'
                    }`}
                aria-pressed={checked}
            >
                {checked && <CheckCircle2 size={14} className="text-current" strokeWidth={2.5} />}
            </button>
            <div className="text-[14px] leading-relaxed text-foreground/80 pt-[1px]">{label}</div>
        </div>
    );
}
