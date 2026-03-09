import { useState, useEffect } from 'react';
import { BentoCard } from './BentoCard';
import { Terminal, Copy, Check, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TranslationType } from '../locales/translations';

interface GeneratorSectionProps {
    t: TranslationType['generator'];
    initialRepoUrl?: string;
    initialToken?: string;
    initialName?: string;
    initialEmail?: string;
}

export function GeneratorSection({ t, initialRepoUrl = '', initialToken = '', initialName = '', initialEmail = '' }: GeneratorSectionProps) {
    const [repoUrl, setRepoUrl] = useState(initialRepoUrl);
    const [token, setToken] = useState(initialToken);
    const [copied, setCopied] = useState<'remote' | 'config' | 'push' | 'push1' | 'push2' | 'push3' | 'push4' | null>(null);

    useEffect(() => {
        setRepoUrl(initialRepoUrl);
        setToken(initialToken);
    }, [initialRepoUrl, initialToken]);

    const getRemoteCommand = () => {
        if (!repoUrl) return t.waitingUrl;
        try {
            const url = new URL(repoUrl);
            if (url.hostname !== 'github.com') return t.githubOnly;
            const cleanPath = url.pathname.startsWith('/') ? url.pathname.slice(1) : url.pathname;
            return `git remote add origin https://${token ? token + '@' : ''}github.com/${cleanPath}`;
        } catch (e) {
            return t.invalidUrl;
        }
    };

    const getConfigCommand = () => {
        if (!initialName || !initialEmail) return '';
        return `git config user.name "${initialName}" && git config user.email "${initialEmail}"`;
    };

    const getPushCommand = () => {
        return `git add . && git commit -m "first commit" && git branch -M main && git push -u origin main`;
    };

    const pushSteps = [
        { id: 'push1' as const, label: t.pushSteps?.step1 || "1. Stage changes", cmd: "git add ." },
        { id: 'push2' as const, label: t.pushSteps?.step2 || "2. Commit with message", cmd: 'git commit -m "first commit"' },
        { id: 'push3' as const, label: t.pushSteps?.step3 || "3. Set main branch", cmd: "git branch -M main" },
        { id: 'push4' as const, label: t.pushSteps?.step4 || "4. Push to remote", cmd: "git push -u origin main" }
    ];

    const handleCopy = (type: 'remote' | 'config' | 'push' | 'push1' | 'push2' | 'push3' | 'push4', text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <BentoCard title={t.title} icon={<Terminal size={20} />} className="col-span-1 md:col-span-2">
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-white/50 px-1 uppercase tracking-wider">{t.repoUrl}</label>
                        <input
                            value={repoUrl}
                            onChange={e => setRepoUrl(e.target.value)}
                            placeholder="https://github.com/user/repo"
                            className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-white/50 px-1 uppercase tracking-wider flex items-center gap-1.5">
                            {t.token} <ShieldCheck size={12} className="text-brand-primary" />
                        </label>
                        <input
                            type="password"
                            value={token}
                            onChange={e => setToken(e.target.value)}
                            placeholder="ghp_xxxxxxxxxxxx"
                            className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/30 transition-all font-mono"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 group">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">{t.remoteLabel}</label>
                            <button
                                onClick={() => handleCopy('remote', getRemoteCommand())}
                                className="text-xs text-brand-primary flex items-center gap-1 hover:underline"
                            >
                                <AnimatePresence mode="wait">
                                    {copied === 'remote' ? (
                                        <motion.span key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1">
                                            <Check size={12} /> {t.copied}
                                        </motion.span>
                                    ) : (
                                        <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1">
                                            <Copy size={12} /> {t.copy}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                        <div className="bg-[#05080f] border border-white/5 rounded-2xl p-4 font-mono text-sm text-brand-primary/90 break-all relative">
                            {getRemoteCommand()}
                        </div>
                    </div>

                    {getConfigCommand() && (
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">{t.configLabel}</label>
                                <button
                                    onClick={() => handleCopy('config', getConfigCommand())}
                                    className="text-xs text-brand-primary flex items-center gap-1 hover:underline"
                                >
                                    <AnimatePresence mode="wait">
                                        {copied === 'config' ? (
                                            <motion.span key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 py-1">
                                                <Check size={12} /> {t.copied}
                                            </motion.span>
                                        ) : (
                                            <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 py-1">
                                                <Copy size={12} /> {t.copy}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </div>
                            <div className="bg-[#05080f] border border-white/5 rounded-2xl p-4 font-mono text-sm text-brand-secondary/90 break-all">
                                {getConfigCommand()}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">{t.pushLabel || "Push Guide"}</label>
                            <button
                                onClick={() => handleCopy('push', getPushCommand())}
                                className="text-xs text-brand-primary flex items-center gap-1 hover:underline"
                            >
                                <AnimatePresence mode="wait">
                                    {copied === 'push' ? (
                                        <motion.span key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 py-1">
                                            <Check size={12} /> {t.copied}
                                        </motion.span>
                                    ) : (
                                        <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 py-1">
                                            <Copy size={12} /> {t.copy}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                        <div className="bg-[#05080f] border border-white/5 rounded-2xl p-4 font-mono text-sm text-brand-secondary/90 break-all">
                            {getPushCommand()}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-2">
                        <label className="text-xs font-semibold text-white/50 px-1 uppercase tracking-wider">{t.pushStepLabel || "Step-by-step Push"}</label>
                        <div className="flex flex-col gap-1 border border-white/5 rounded-2xl overflow-hidden bg-white/[0.02]">
                            {pushSteps.map((step, idx) => (
                                <div key={step.id} className={`flex items-center justify-between p-3 ${idx !== pushSteps.length - 1 ? 'border-b border-white/5' : ''}`}>
                                    <div className="flex flex-col gap-1 w-full pr-4">
                                        <span className="text-[10px] text-white/40">{step.label}</span>
                                        <code className="text-xs text-brand-primary/80 font-mono break-all">{step.cmd}</code>
                                    </div>
                                    <button
                                        onClick={() => handleCopy(step.id, step.cmd)}
                                        className="p-2 hover:bg-white/5 rounded-xl text-brand-primary transition-colors flex-shrink-0"
                                        title={t.copy}
                                    >
                                        <AnimatePresence mode="wait">
                                            {copied === step.id ? (
                                                <motion.span key="check" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <Check size={14} />
                                                </motion.span>
                                            ) : (
                                                <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <Copy size={14} className="opacity-70 hover:opacity-100" />
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-[10px] text-center text-white/30 italic">
                    {t.securityTip}
                </p>
            </div>
        </BentoCard>
    );
}
