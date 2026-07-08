interface NextWeekCardProps {
  dailyQuestionCount: number;
  selectedPageCount: number;
}

export default function NextWeekCard({ dailyQuestionCount, selectedPageCount }: NextWeekCardProps) {
  return (
    <div className="relative max-w-[320px] mx-auto mb-[26px] z-[2]">
      <div className="flex items-baseline gap-2.5 mb-2 px-0.5">
        <p className="m-0 text-[11px] text-text-tertiary font-medium tracking-[0.5px]">다음 주 ₊˚⊹</p>
        <p className="m-0 ml-auto text-[9.5px] text-text-accent font-mono tracking-[1px]">vol.03</p>
      </div>

      <div className="bg-white/50 border-main border-dashed border-[#E8D49A] py-[22px] px-4 shadow-[2px_3px_0_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-3 gap-2 mb-[14px]">
          {[-1, 1, -0.5].map((rotate, index) => (
            <div
              key={index}
              className="bg-white/55 border-thin border-dashed border-text-muted aspect-[0.85] flex items-center justify-center"
              style={{ transform: `rotate(${rotate}deg)` }}
            >
              <span className="text-[18px] text-text-muted">?</span>
            </div>
          ))}
        </div>

        <p className="m-0 text-center text-[11px] text-text-secondary">
          다음 주에도 매일 질문 {dailyQuestionCount}개가 도착해요
        </p>
        <p className="mt-1.5 mb-0 text-center text-[10.5px] text-text-tertiary italic">
          그중 {selectedPageCount}개가 또 표지가 돼요 ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა
        </p>
      </div>
    </div>
  );
}
