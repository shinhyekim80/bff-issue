interface CurrentWeekCardProps {
  label: string;
  arrivedCount: number;
  onClick: () => void;
}

export default function CurrentWeekCard({ label, arrivedCount, onClick }: CurrentWeekCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative w-full bg-white border-main border-ink-main px-5 py-6 text-left shadow-card-deep transition-transform active:translate-y-0.5"
    >
      <span className="absolute -top-2 left-9 h-[18px] w-[66px] rotate-[-4deg] bg-yellow-main shadow-tape" />
      <span className="absolute -top-2 right-10 h-[18px] w-[52px] rotate-[5deg] bg-blue-main shadow-tape" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="m-0 font-mono text-[10px] tracking-[1.4px] text-pink-main">{label}</p>
          <h2 className="mt-3 mb-0 text-[23px] font-bold leading-snug text-ink-main">
            이번 주 페이지
            <br />
            모음 ₊˚⊹
          </h2>
          <p className="mt-3 mb-0 text-[12px] leading-normal text-text-secondary">
            대표 페이지 3개를 골라
            <br />
            작은 표지로 엮었어요
          </p>
        </div>

        <div className="relative grid h-[94px] w-[92px] grid-cols-2 gap-1.5 pt-1">
          {['bg-yellow-main', 'bg-green-main', 'bg-blue-main', 'bg-purple-main'].map((color, index) => (
            <span
              key={color}
              className={`flex items-center justify-center border-thin border-ink-main bg-white text-[18px] shadow-card-light ${
                index === 0 ? '-rotate-2' : index === 1 ? 'rotate-1' : index === 2 ? 'rotate-1' : '-rotate-1'
              }`}
            >
              <span className={`h-3 w-3 rounded-full border-thin border-ink-main ${color}`} />
            </span>
          ))}
          <span className="absolute -right-2 -top-1 rotate-[13deg] text-[15px] text-pink-main">✦</span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t-main border-dashed border-text-muted/60 pt-3">
        <span className="text-[12px] text-text-secondary">{arrivedCount}개의 조각 도착</span>
        <span className="text-[13px] font-bold text-pink-main">보러 가기 →</span>
      </div>
    </button>
  );
}
