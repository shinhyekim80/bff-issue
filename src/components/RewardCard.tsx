export default function RewardCard() {
  return (
    <div className="relative max-w-[320px] mx-auto mb-6 z-[2]">
      <div className="bg-cream-main border-main border-ink-main py-[14px] px-[18px] shadow-card-light flex items-center gap-[14px]">
        <div className="w-11 h-11 bg-gradient-to-br from-yellow-main to-pink-pastel border-main border-ink-main flex items-center justify-center shrink-0 rotate-[-4deg] shadow-sticker">
          <span className="text-[22px]">🎀</span>
        </div>
        <div className="flex-1">
          <p className="m-0 text-[10.5px] text-pink-main font-medium tracking-[0.5px]">⌗ 보상</p>
          <p className="mt-1 mb-0 text-[13px] text-ink-main font-medium">오늘의 꾸미기 도구를 받았어요</p>
          <p className="mt-1 mb-0 text-label text-text-secondary">— 도착 스티커 ✦ 1개</p>
        </div>
        <div className="bg-pink-main text-white py-1 px-2 text-label font-medium rotate-[8deg] shadow-sticker shrink-0">+1</div>
      </div>
    </div>
  );
}
