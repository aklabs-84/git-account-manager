import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { GitProfile } from './types';
import { translations } from './locales/translations';
import type { LanguageType } from './locales/translations';
import { ProfileSection } from './components/ProfileSection';
import { GeneratorSection } from './components/GeneratorSection';
import { GuideSection } from './components/GuideSection';
import { HelpModal } from './components/HelpModal';
import { Github, Globe, Sparkles, HelpCircle, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const [profiles, setProfiles] = useLocalStorage<GitProfile[]>('git-account-profiles', []);
  const [language, setLanguage] = useLocalStorage<LanguageType>('app-language', 'ko');
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [activeProfileId, setActiveProfileId] = useState<string | undefined>(
    profiles.length > 0 ? profiles[0].id : undefined
  );

  const t = translations[language];

  const activeProfile = profiles.find(p => p.id === activeProfileId);

  const handleAddProfile = (newProfile: Omit<GitProfile, 'id'>) => {
    const id = crypto.randomUUID();
    const profileWithId = { ...newProfile, id };
    const updatedProfiles = [...profiles, profileWithId];
    setProfiles(updatedProfiles);
    if (!activeProfileId) setActiveProfileId(id);
  };

  const handleDeleteProfile = (id: string) => {
    const updatedProfiles = profiles.filter(p => p.id !== id);
    setProfiles(updatedProfiles);
    if (activeProfileId === id) {
      setActiveProfileId(updatedProfiles.length > 0 ? updatedProfiles[0].id : undefined);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 md:px-8">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-secondary/5 blur-[120px] rounded-full" />
      </div>

      <header className="w-full max-w-6xl flex flex-col items-center gap-4 mb-12">
        <div className="w-full flex justify-between items-center mb-2">
          <div className="flex gap-2">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
            >
              <Sparkles size={16} className="text-brand-primary" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">{t.titlePrefix}</span>
            </motion.div>

            <button
              onClick={() => setLanguage(language === 'ko' ? 'en' : 'ko')}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/60 hover:text-white transition-all group"
            >
              <Languages size={15} className="group-hover:text-brand-primary transition-colors" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </button>
          </div>

          <button
            onClick={() => setIsHelpOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/60 hover:text-white transition-all group"
          >
            <HelpCircle size={16} className="group-hover:text-brand-primary transition-colors" />
            <span className="text-xs font-medium">{t.howToUse}</span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-center">
            {t.title.split(' ')[0]} <span className="text-gradient">{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-white/40 text-sm md:text-lg max-w-lg text-center font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>
      </header>

      <main className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Profiles */}
        <ProfileSection
          t={t.profiles}
          profiles={profiles}
          onAdd={handleAddProfile}
          onDelete={handleDeleteProfile}
          onSelect={(p) => setActiveProfileId(p.id)}
          activeProfileId={activeProfileId}
        />

        {/* Center/Right: Generator */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 h-fit">
          <GeneratorSection
            t={t.generator}
            initialName={activeProfile?.name}
            initialEmail={activeProfile?.email}
            initialRepoUrl=""
            initialToken={activeProfile?.token}
          />
          <GuideSection t={t.guide} />
        </div>
      </main>

      <footer className="w-full max-w-6xl mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-white/40 text-sm">
          <Github size={18} />
          <span>© 2026 {t.title}</span>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://litt.ly/aklabs"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white/40 hover:text-white transition-all"
          >
            <Globe size={18} className="group-hover:text-brand-primary" />
            <span className="text-sm font-medium">{t.poweredBy} <span className="text-brand-primary font-bold">AKLabs</span></span>
          </a>
        </div>
      </footer>

      <HelpModal t={t.help} isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
    </div>
  );
}

export default App;
