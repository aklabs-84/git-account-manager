import { useState } from 'react';
import { BentoCard } from './BentoCard';
import { User, Plus, Trash2, CheckCircle2 } from 'lucide-react';
import type { GitProfile } from '../types';
import type { TranslationType } from '../locales/translations';
import { motion, AnimatePresence } from 'framer-motion';

interface ProfileSectionProps {
    t: TranslationType['profiles'];
    profiles: GitProfile[];
    onAdd: (profile: Omit<GitProfile, 'id'>) => void;
    onDelete: (id: string) => void;
    onSelect: (profile: GitProfile) => void;
    activeProfileId?: string;
}

export function ProfileSection({ t, profiles, onAdd, onDelete, onSelect, activeProfileId }: ProfileSectionProps) {
    const [isAdding, setIsAdding] = useState(false);
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newUsername, setNewUsername] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newName && newEmail && newUsername) {
            onAdd({ name: newName, email: newEmail, githubUsername: newUsername });
            setNewName('');
            setNewEmail('');
            setNewUsername('');
            setIsAdding(false);
        }
    };

    return (
        <BentoCard title={t.title} icon={<User size={20} />} className="col-span-1 border-white/10">
            <div className="flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                    {profiles.map((profile) => (
                        <motion.div
                            key={profile.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={() => onSelect(profile)}
                            className={`p-4 rounded-2xl flex items-center justify-between cursor-pointer transition-all ${activeProfileId === profile.id
                                ? 'bg-brand-primary/20 border border-brand-primary/30'
                                : 'bg-white/5 border border-white/5 hover:bg-white/10'
                                }`}
                        >
                            <div className="flex flex-col gap-0.5">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-white/90">{profile.name}</span>
                                    {activeProfileId === profile.id && <CheckCircle2 size={14} className="text-brand-primary" />}
                                </div>
                                <span className="text-xs text-white/50">{profile.githubUsername}</span>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); onDelete(profile.id); }}
                                className="p-2 hover:bg-brand-primary/20 rounded-lg text-white/30 hover:text-brand-primary transition-colors"
                            >
                                <Trash2 size={16} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isAdding ? (
                    <motion.form
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-3 p-4 bg-white/5 rounded-2xl border border-white/10"
                    >
                        <input
                            placeholder={t.namePlaceholder}
                            value={newName}
                            onChange={e => setNewName(e.target.value)}
                            className="bg-transparent border-b border-white/10 p-1 text-sm outline-none focus:border-brand-primary transition-colors"
                        />
                        <input
                            placeholder={t.emailPlaceholder}
                            value={newEmail}
                            onChange={e => setNewEmail(e.target.value)}
                            className="bg-transparent border-b border-white/10 p-1 text-sm outline-none focus:border-brand-primary transition-colors"
                        />
                        <input
                            placeholder={t.githubPlaceholder}
                            value={newUsername}
                            onChange={e => setNewUsername(e.target.value)}
                            className="bg-transparent border-b border-white/10 p-1 text-sm outline-none focus:border-brand-primary transition-colors"
                        />
                        <div className="flex gap-2 mt-2">
                            <button type="submit" className="flex-1 bg-brand-primary text-white py-2 rounded-xl text-sm font-medium">{t.add}</button>
                            <button onClick={() => setIsAdding(false)} className="flex-1 bg-white/10 py-2 rounded-xl text-sm font-medium">{t.cancel}</button>
                        </div>
                    </motion.form>
                ) : (
                    <button
                        onClick={() => setIsAdding(true)}
                        className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-white/10 rounded-2xl hover:border-brand-primary/50 hover:bg-brand-primary/5 transition-all group"
                    >
                        <Plus size={18} className="text-white/30 group-hover:text-brand-primary" />
                        <span className="text-sm font-medium text-white/30 group-hover:text-brand-primary">{t.addProfile}</span>
                    </button>
                )}
            </div>
        </BentoCard>
    );
}
