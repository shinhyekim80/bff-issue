type VolumeStatus = 'completed' | 'in-progress' | 'upcoming';

interface VolumeRowProps {
  vol: number;
  label: string;
  title: string;
  status: VolumeStatus;
  pagesCount?: number;
  totalDays?: number;
  restCount?: number;
  onClick?: () => void;
}

const statusText: Record<VolumeStatus, string> = {
  completed: '완성',
  'in-progress': '편집 중',
  upcoming: '준비 중',
};

export default function VolumeRow({
  vol,
  label,
  title,
  status,
  pagesCount,
  totalDays,
  restCount,
  onClick,
}: VolumeRowProps) {
  const isClickable = Boolean(onClick);
  const stripClass =
    status === 'completed'
      ? 'bg-magazine-vol text-white border-ink-main'
      : status === 'in-progress'
        ? 'bg-pink-pastel/50 text-pink-main border-dashed border-pink-main'
        : 'bg-white/30 text-text-muted border-dashed border-text-muted/60 opacity-65';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!isClickable}
      className={`relative flex w-full overflow-hidden border-main border-ink-main bg-white text-left shadow-card-light ${
        isClickable ? 'cursor-pointer transition-transform active:translate-y-0.5' : 'cursor-default'
      } ${status === 'upcoming' ? 'opacity-70' : ''}`}
    >
      <span
        className={`flex w-4 shrink-0 items-center justify-center border-r-main ${stripClass}`}
        style={{ writingMode: 'vertical-rl' }}
      >
        <span className="rotate-180 font-mono text-[8px] tracking-[1.2px]">vol.{String(vol).padStart(2, '0')}</span>
      </span>

      <span className="flex min-h-[82px] flex-1 items-center justify-between gap-4 px-4 py-3">
        <span>
          <span className="block font-mono text-[10px] tracking-[1px] text-text-tertiary">{label}</span>
          <span className="mt-1 block text-[18px] font-bold leading-tight text-ink-main">{title}</span>
          <span className="mt-2 block text-[11px] text-text-secondary">
            {status === 'completed' && `${pagesCount}개 페이지 · 쉬어간 페이지 ${restCount}개`}
            {status === 'in-progress' && `${pagesCount}/${totalDays}개 조각 수집 중`}
            {status === 'upcoming' && '다음 달에 열려요'}
          </span>
        </span>

        <span
          className={`shrink-0 rounded-pill border-thin px-2.5 py-1 text-[10px] font-bold ${
            status === 'completed'
              ? 'border-pink-main bg-pink-very-pale text-pink-main'
              : status === 'in-progress'
                ? 'border-text-muted bg-white text-text-secondary'
                : 'border-text-muted/70 bg-white/60 text-text-muted'
          }`}
        >
          {statusText[status]}
        </span>
      </span>
    </button>
  );
}
