import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ShieldCheck, Zap, Terminal } from 'lucide-react';
import type { TranslationType } from '../locales/translations';

interface HelpModalProps {
    t: TranslationType['help'];
    isOpen: boolean;
    onClose: () => void;
}

export function HelpModal({ t, isOpen, onClose }: HelpModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-2xl glass rounded-3xl overflow-hidden shadow-2xl border-white/10"
                    >
                        <div className="p-6 sm:p-8 flex flex-col gap-6 max-h-[85vh] overflow-y-auto custom-scrollbar">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-brand-primary/10 rounded-xl text-brand-primary">
                                        <BookOpen size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold">{t.title}</h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                {t.steps.map((step, idx) => (
                                    <section key={idx} className="space-y-3">
                                        <h3 className="text-lg font-semibold flex items-center gap-2 text-brand-primary">
                                            <Zap size={18} /> {step.title}
                                        </h3>
                                        <p className="text-sm text-white/60 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </section>
                                ))}

                                <section className="space-y-4">
                                    <h3 className="text-lg font-semibold flex items-center gap-2 text-brand-secondary">
                                        <Terminal size={18} /> {t.terminalTip.title}
                                    </h3>
                                    <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-4">
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-brand-primary" />
                                                <span className="text-xs font-bold text-brand-primary uppercase">Set Remote URL</span>
                                            </div>
                                            <p className="text-xs text-white/50 leading-relaxed pl-4">{t.terminalTip.remote}</p>
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-brand-secondary" />
                                                <span className="text-xs font-bold text-brand-secondary uppercase">Update User Config</span>
                                            </div>
                                            <p className="text-xs text-white/50 leading-relaxed pl-4">{t.terminalTip.config}</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="p-4 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl flex gap-4 items-start">
                                    <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary shrink-0">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-white mb-1">{t.privacyTitle}</h4>
                                        <p className="text-xs text-white/50 leading-relaxed">
                                            {t.privacyDesc}
                                        </p>
                                    </div>
                                </section>
                            </div>

                            <div className="mt-4 pt-6 border-t border-white/5 flex justify-center">
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
                                >
                                    {t.gotIt}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
