import { BentoCard } from './BentoCard';
import { ExternalLink, BookOpen, Key } from 'lucide-react';
import type { TranslationType } from '../locales/translations';

interface GuideSectionProps {
    t: TranslationType['guide'];
}

export function GuideSection({ t }: GuideSectionProps) {
    return (
        <BentoCard title={t.title} icon={<BookOpen size={20} />} className="col-span-1 border-brand-primary/20">
            <div className="flex flex-col gap-4">
                <div className="space-y-4 text-sm text-white/60 leading-relaxed">
                    <div className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-[10px] font-bold text-brand-primary border border-brand-primary/20 flex-shrink-0">1</div>
                        <p>{t.step1}</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-[10px] font-bold text-brand-primary border border-brand-primary/20 flex-shrink-0">2</div>
                        <p>{t.step2}</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center text-[10px] font-bold text-brand-primary border border-brand-primary/20 flex-shrink-0">3</div>
                        <p>{t.step3}</p>
                    </div>
                </div>

                <a
                    href="https://github.com/settings/tokens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 py-3 bg-brand-primary/10 border border-brand-primary/20 rounded-xl text-brand-primary text-sm font-semibold hover:bg-brand-primary hover:text-white transition-all group"
                >
                    <Key size={16} />
                    {t.btnText}
                    <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                </a>
            </div>
        </BentoCard>
    );
}
