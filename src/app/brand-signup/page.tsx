"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2,
    Mail,
    Phone,
    MapPin,
    Globe,
    ChevronRight,
    ChevronLeft,
    CheckCircle2,
    Plus,
    Trash2,
    AlertCircle,
    Layout,
    Play,
    Share2,
    Briefcase,
    Ghost,
    Video,
    Image as ImageIcon,
    Target,
    Zap,
    Lock,
    ShieldCheck
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

const INDUSTRIES = [
    "Food & Beverage", "Fashion & Apparel", "Beauty & Personal Care",
    "Technology", "Electronics", "Fitness & Wellness", "Travel & Tourism",
    "Real Estate", "Education", "Finance & Fintech", "Entertainment",
    "Automotive", "Home & Decor", "E-commerce", "NGO / Non-Profit"
];

const CONTENT_TYPES = [
    "Tutorials", "Product Reviews", "Unboxing", "Taste Tests",
    "Behind the Scenes", "Day in the Life", "How-to Guides", "Comedy Skits",
    "Educational", "Testimonials", "Livestreams", "Giveaways"
];

const AGE_RANGES = [
    "13-17", "18-24", "25-34", "35-44", "45-54", "55+"
];

const COUNTRY_CODES: Record<string, string> = {
    zambia: "+260",
    zimbabwe: "+263",
    nigeria: "+234",
    kenya: "+254",
    south_africa: "+27"
};

const STEP_LABELS = [
    "Company",
    "Profile",
    "Verification",
    "Security",
];

export default function BrandSignup() {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Form State
    const [formData, setFormData] = useState({
        brandName: '',
        workEmail: '',
        phone: '',
        website: '',
        country: '',
        industry: '',
        description: '',
        targetAges: [] as string[],
        preferredContentTypes: [] as string[],
        preferredPlatforms: [] as string[],
        verificationMethod: 'email', // 'email' or 'manual'
        businessDoc: null as File | null,
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });

    const validateStep = (currentStep: number) => {
        const newErrors: Record<string, string> = {};

        if (currentStep === 1) {
            if (!formData.brandName.trim()) newErrors.brandName = "Required";
            if (!formData.workEmail.trim()) {
                newErrors.workEmail = "Required";
            } else if (!/^\S+@\S+\.\S+$/.test(formData.workEmail)) {
                newErrors.workEmail = "Invalid email";
            }
            if (!formData.country) newErrors.country = "Required";
        }

        if (currentStep === 2) {
            if (!formData.industry) newErrors.industry = "Required";
            if (!formData.description.trim() || formData.description.length < 50) {
                newErrors.description = "Min. 50 characters required";
            }
            if (formData.targetAges.length === 0) newErrors.targetAges = "Select at least 1";
            if (formData.preferredPlatforms.length === 0) newErrors.preferredPlatforms = "Select 1-3 platforms";
            if (formData.preferredPlatforms.length > 3) newErrors.preferredPlatforms = "Max 3 platforms";
        }

        if (currentStep === 4) {
            if (formData.password.length < 8) newErrors.password = "Min. 8 characters";
            if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords don't match";
            if (!formData.agreeToTerms) newErrors.agreeToTerms = "Required";
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
        if (validateStep(4)) {
            setIsLoading(true);
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
                    className="max-w-lg w-full"
                >
                    <div className="bg-surface border border-border rounded-xl p-10 sm:p-12 text-center space-y-8 shadow-sm">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                            <Mail size={30} className="text-primary" />
                        </div>

                        <div className="space-y-3">
                            <h1 className="text-2xl font-semibold tracking-tight">Verification link sent!</h1>
                            <p className="text-[15px] text-foreground/60 leading-relaxed">
                                We've sent an activation link to <span className="text-foreground font-medium">{formData.workEmail}</span>.
                                Please click the link to activate your brand account.
                            </p>
                        </div>

                        <div className="text-left space-y-3 bg-foreground/[0.02] p-6 rounded-lg border border-border">
                            <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-2">After activating, you can:</p>
                            {[
                                "Create your first campaign (budget optional)",
                                "Browse creators by niche and platform",
                                "Message creators directly"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <p className="text-sm text-foreground/70">{item}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/dashboard"
                            className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-foreground text-background rounded-lg font-medium text-sm hover:bg-foreground/90 transition-all duration-200"
                        >
                            Go to Dashboard
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
                        Beka <span className="text-foreground/30 font-normal">for Brands</span>
                    </Link>
                    <span className="text-xs font-medium text-foreground/50 tabular-nums uppercase tracking-wider">
                        Step {step} of 4
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
                        {step === 1 && "Company information"}
                        {step === 2 && "Brand profile"}
                        {step === 3 && "Verification method"}
                        {step === 4 && "Account security"}
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
                                <Field label="Brand name" error={errors.brandName}>
                                    <InputIcon icon={Building2} error={!!errors.brandName} />
                                    <input
                                        type="text"
                                        required
                                        value={formData.brandName}
                                        onChange={e => setFormData({ ...formData, brandName: e.target.value })}
                                        placeholder="e.g. Acme Corp"
                                        className={errors.brandName ? inputErrorClass : inputClass}
                                    />
                                </Field>

                                <Field label="Work email" hint="Company domain preferred" error={errors.workEmail}>
                                    <InputIcon icon={Mail} error={!!errors.workEmail} />
                                    <input
                                        type="email"
                                        required
                                        value={formData.workEmail}
                                        onChange={e => setFormData({ ...formData, workEmail: e.target.value })}
                                        placeholder="name@company.com"
                                        className={errors.workEmail ? inputErrorClass : inputClass}
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
                                    <Field label="Website" hint="Optional">
                                        <InputIcon icon={Globe} />
                                        <input
                                            type="url"
                                            value={formData.website}
                                            onChange={e => setFormData({ ...formData, website: e.target.value })}
                                            placeholder="https://acme.com"
                                            className={inputClass}
                                        />
                                    </Field>
                                </div>

                                <Field label="Country" error={errors.country}>
                                    <InputIcon icon={MapPin} error={!!errors.country} />
                                    <select
                                        required
                                        value={formData.country}
                                        onChange={e => setFormData({ ...formData, country: e.target.value })}
                                        className={`${errors.country ? inputErrorClass : inputClass} appearance-none cursor-pointer`}
                                    >
                                        <option value="">Select country</option>
                                        <option value="zambia">Zambia</option>
                                        <option value="zimbabwe">Zimbabwe</option>
                                        <option value="nigeria">Nigeria</option>
                                        <option value="kenya">Kenya</option>
                                        <option value="south_africa">South Africa</option>
                                    </select>
                                    <ChevronRight size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none" />
                                </Field>
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
                                <Field label="Industry" error={errors.industry}>
                                    <select
                                        required
                                        value={formData.industry}
                                        onChange={e => setFormData({ ...formData, industry: e.target.value })}
                                        className={`${errors.industry ? inputErrorClassNoIcon : inputClassNoIcon} appearance-none cursor-pointer`}
                                    >
                                        <option value="">Select industry</option>
                                        {INDUSTRIES.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                                    </select>
                                    <ChevronRight size={15} className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/30 pointer-events-none" />
                                </Field>

                                <Field label="Brand description" hint="100–200 characters preferred" error={errors.description}>
                                    <textarea
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        placeholder="We sell premium organic maize meal to households across the region..."
                                        className={`${errors.description ? inputErrorClassNoIcon : inputClassNoIcon} min-h-[120px] py-3 resize-none`}
                                    />
                                    <div className="absolute right-2 bottom-2 text-[10px] text-foreground/30">
                                        {formData.description.length} chars
                                    </div>
                                </Field>

                                <div className="space-y-3">
                                    <Label>Target audience age range</Label>
                                    <div className="flex flex-wrap gap-2">
                                        {AGE_RANGES.map(age => {
                                            const active = formData.targetAges.includes(age);
                                            return (
                                                <button
                                                    key={age}
                                                    type="button"
                                                    onClick={() => {
                                                        const newAges = active
                                                            ? formData.targetAges.filter(a => a !== age)
                                                            : [...formData.targetAges, age];
                                                        setFormData({ ...formData, targetAges: newAges });
                                                    }}
                                                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${active
                                                        ? 'bg-primary text-on-primary border-primary'
                                                        : 'bg-surface border-border text-foreground/50 hover:border-foreground/30'
                                                        }`}
                                                >
                                                    {age}
                                                </button>
                                            );
                                        })}
                                    </div>
                                    {errors.targetAges && <p className="text-[10px] text-red-500">{errors.targetAges}</p>}
                                </div>

                                <div className="space-y-3">
                                    <Label>Preferred platforms (Select 1-3)</Label>
                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                        {PLATFORMS.map(p => {
                                            const active = formData.preferredPlatforms.includes(p.id);
                                            return (
                                                <button
                                                    key={p.id}
                                                    type="button"
                                                    onClick={() => {
                                                        const newP = active
                                                            ? formData.preferredPlatforms.filter(id => id !== p.id)
                                                            : [...formData.preferredPlatforms, p.id];
                                                        setFormData({ ...formData, preferredPlatforms: newP });
                                                    }}
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
                                    {errors.preferredPlatforms && <p className="text-[10px] text-red-500">{errors.preferredPlatforms}</p>}
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
                                <InfoBanner text="We need to verify your brand to ensure the safety of our creators." />

                                <div className="grid grid-cols-1 gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, verificationMethod: 'email' })}
                                        className={`p-6 rounded-xl border text-left transition-all flex items-start gap-4 ${formData.verificationMethod === 'email'
                                            ? 'bg-primary/5 border-primary shadow-[0_0_20px_rgba(147,51,234,0.05)]'
                                            : 'bg-surface border-border hover:border-foreground/20'
                                            }`}
                                    >
                                        <div className={`mt-1 h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.verificationMethod === 'email' ? 'border-primary' : 'border-border'}`}>
                                            {formData.verificationMethod === 'email' && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm">Work email domain verification</h3>
                                            <p className="text-xs text-foreground/50 mt-1">We'll send a link to {formData.workEmail || 'your email'}. Recommended for company domains.</p>
                                        </div>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, verificationMethod: 'manual' })}
                                        className={`p-6 rounded-xl border text-left transition-all flex items-start gap-4 ${formData.verificationMethod === 'manual'
                                            ? 'bg-primary/5 border-primary shadow-[0_0_20px_rgba(147,51,234,0.05)]'
                                            : 'bg-surface border-border hover:border-foreground/20'
                                            }`}
                                    >
                                        <div className={`mt-1 h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${formData.verificationMethod === 'manual' ? 'border-primary' : 'border-border'}`}>
                                            {formData.verificationMethod === 'manual' && <div className="h-2.5 w-2.5 rounded-full bg-primary" />}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-sm">Business Registration (Manual)</h3>
                                            <p className="text-xs text-foreground/50 mt-1">If using a personal email (Gmail/Outlook), upload your registration docs for a quick review.</p>
                                        </div>
                                    </button>
                                </div>

                                {formData.verificationMethod === 'manual' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="bg-foreground/[0.03] border border-dashed border-border rounded-xl p-8 text-center"
                                    >
                                        <div className="flex flex-col items-center">
                                            <Zap size={24} className="text-foreground/20 mb-3" />
                                            <p className="text-sm font-medium">Upload PACRA or Trading License</p>
                                            <p className="text-[11px] text-foreground/40 mt-1">PDF, JPG, or PNG (Max 5MB)</p>
                                            <button type="button" className="mt-4 px-4 py-2 bg-foreground text-background text-xs font-bold rounded-lg hover:bg-foreground/80">
                                                Choose File
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
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
                                        checked={formData.agreeToTerms}
                                        error={!!errors.agreeToTerms}
                                        onClick={() => setFormData({ ...formData, agreeToTerms: !formData.agreeToTerms })}
                                        label={
                                            <>
                                                I agree to the <span className="text-primary font-medium">Terms of Service</span> and <span className="text-primary font-medium">Brand Guidelines</span>.
                                            </>
                                        }
                                    />

                                    <button
                                        type="submit"
                                        disabled={!formData.agreeToTerms || isLoading}
                                        className={`w-full py-3.5 rounded-lg font-medium text-[15px] transition-all duration-200 flex items-center justify-center gap-2 ${formData.agreeToTerms && !isLoading
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
                                                Creating account...
                                            </>
                                        ) : (
                                            <>Create account <ShieldCheck size={18} /></>
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

                        {step < 4 && (
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
        </div>
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
                    {error && <span className="text-[11px] text-red-500 font-medium animate-pulse">{error === "Required" ? "Required" : error}</span>}
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
