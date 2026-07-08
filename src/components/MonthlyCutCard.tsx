import type { ReactNode } from 'react';

interface MonthlyCutCardProps {
  label: string;
  labelColor: 'yellow' | 'pink' | 'blue' | 'purple';
  children: ReactNode;
  className?: string;
}

const labelClass = {
  yellow: 'bg-yellow-main text-ink-main',
  pink: 'bg-pink-main text-white',
  blue: 'bg-blue-main text-ink-main',
  purple: 'bg-purple-main text-ink-main',
};

export default function MonthlyCutCard({ label, labelColor, children, className = '' }: MonthlyCutCardProps) {
  return (
    <article className={`relative min-h-[142px] border-main border-ink-main bg-white p-3 shadow-card-light ${className}`}>
      <span className={`inline-block rotate-[-2deg] px-2 py-1 text-[9px] font-bold shadow-sticker ${labelClass[labelColor]}`}>
        {label}
      </span>
      <div className="mt-3">{children}</div>
    </article>
  );
}
