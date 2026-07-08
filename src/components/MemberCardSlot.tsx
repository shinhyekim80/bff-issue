interface MemberCardSlotProps {
  color: 'yellow' | 'green' | 'blue' | 'purple';
  filled?: boolean;
  initial?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  className?: string;
}

const slotStyles = {
  yellow: {
    bg: 'bg-yellow-main',
    soft: 'bg-yellow-main/20',
    border: 'border-yellow-main',
    text: 'text-text-secondary',
    label: '옐로우',
  },
  green: {
    bg: 'bg-green-main',
    soft: 'bg-green-main/20',
    border: 'border-green-main',
    text: 'text-[#5A7A65]',
    label: '그린',
  },
  blue: {
    bg: 'bg-blue-main',
    soft: 'bg-blue-main/20',
    border: 'border-blue-main',
    text: 'text-[#5A7A85]',
    label: '블루',
  },
  purple: {
    bg: 'bg-purple-main',
    soft: 'bg-purple-main/30',
    border: 'border-purple-border',
    text: 'text-[#553D7A]',
    label: '보라',
  },
};

export default function MemberCardSlot({
  color,
  filled = false,
  initial,
  title,
  subtitle,
  compact = false,
  className = '',
}: MemberCardSlotProps) {
  const styles = slotStyles[color];

  if (compact) {
    return (
      <div className={`${filled ? 'bg-white border-ink-main' : `${styles.soft} ${styles.border} border-dashed`} border-main p-3 text-center shadow-card-light ${className}`}>
        <span
          className={`mx-auto mb-2 flex h-7 w-7 items-center justify-center border-thin border-ink-main ${
            styles.bg
          } ${filled ? 'opacity-100' : 'rounded-full opacity-55'} text-[13px] font-bold shadow-sticker`}
        >
          {filled ? initial : ''}
        </span>
        <p className={`m-0 text-[11px] font-bold ${styles.text}`}>{title}</p>
        {!filled && <p className="mt-1 mb-0 text-[13px] text-ink-main">+</p>}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 border-main border-ink-main bg-white px-4 py-3 shadow-card-light">
      <span className={`flex h-9 w-9 shrink-0 rotate-[-3deg] items-center justify-center border-thin border-ink-main ${styles.bg} text-[15px] font-bold shadow-sticker`}>
        {initial}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-bold leading-tight text-ink-main">{title}</span>
        <span className="mt-1 block text-[11px] text-text-secondary">{subtitle ?? `${styles.label} 컬러`}</span>
      </span>
      <span className="text-[11px] font-bold text-text-accent">바꾸기</span>
    </div>
  );
}
