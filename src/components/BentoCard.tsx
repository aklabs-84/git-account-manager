import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    title?: string;
    icon?: ReactNode;
}

export function BentoCard({ children, className, title, icon }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className={cn(
                "glass glass-hover p-6 rounded-3xl flex flex-col gap-4 overflow-hidden relative",
                className
            )}
        >
            {(title || icon) && (
                <div className="flex items-center gap-3 mb-2">
                    {icon && <div className="p-2 bg-brand-primary/10 rounded-xl text-brand-primary">{icon}</div>}
                    {title && <h3 className="text-lg font-semibold text-white/90">{title}</h3>}
                </div>
            )}
            <div className="flex-1">
                {children}
            </div>

            {/* Background Micro-glow */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-primary/5 blur-3xl rounded-full" />
        </motion.div>
    );
}
