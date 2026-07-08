interface EmptyPageCardProps {
  weekLabel: string;
  day: string;
  date: string;
  question: string;
  onClick: () => void;
}

export default function EmptyPageCard({ weekLabel, day, date, question, onClick }: EmptyPageCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-4 border-main border-dashed border-text-muted bg-white/65 px-4 py-3 text-left shadow-card-light transition-transform active:translate-y-0.5"
    >
      <span className="w-[48px] shrink-0 text-center">
        <span className="block font-mono text-[9px] tracking-[1.4px] text-text-tertiary">{day}</span>
        <span className="block text-[23px] font-bold leading-none text-ink-main">{date}</span>
      </span>

      <span className="h-[44px] w-px shrink-0 bg-[repeating-linear-gradient(to_bottom,#C4A8B0_0,#C4A8B0_3px,transparent_3px,transparent_7px)] opacity-70" />

      <span className="min-w-0 flex-1">
        <span className="block text-[10px] text-text-tertiary">{weekLabel}</span>
        <span className="mt-1 block text-[15px] font-bold leading-snug text-ink-main">{question}</span>
      </span>

      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-main border-ink-main bg-white text-[18px] text-pink-main shadow-sticker">
        +
      </span>
    </button>
  );
}
