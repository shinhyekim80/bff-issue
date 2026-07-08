import type { ReactNode } from 'react';

interface SpreadContainerProps {
  children: ReactNode;
}

export default function SpreadContainer({ children }: SpreadContainerProps) {
  return (
    <div className="relative max-w-[360px] mx-auto z-[2]">
      <div className="absolute -top-2.5 left-9 rotate-[-4deg] w-16 h-[18px] bg-yellow-main z-[5] shadow-tape" />
      <div className="absolute -top-2.5 right-10 rotate-[5deg] w-[52px] h-[18px] bg-blue-main z-[5] shadow-tape" />

      <div className="relative bg-cream-main border-main border-ink-main pt-[26px] px-4 pb-5 shadow-[4px_5px_0_rgba(255,92,138,0.25)]">
        <div className="text-center mb-[18px]">
          <div className="inline-block bg-white border-thin border-ink-main py-[5px] px-[14px] text-[12px] font-medium text-ink-main rotate-[-2deg] shadow-sticker">
            💌 오늘의 펼침면
          </div>
          <p className="mt-3 mb-0 text-[13px] text-pink-main font-medium">친구들의 페이지가 열렸어요 ₊˚⊹</p>
          <p className="mt-1.5 mb-0 text-[10.5px] text-text-secondary italic">— 오늘은 3개의 페이지가 도착했어요</p>
        </div>

        <div className="mx-auto mb-[18px] max-w-[200px] h-[1.5px] bg-effect-dotted-light opacity-55" />

        {children}

        <div className="mt-[18px] text-center">
          <p className="m-0 text-meta text-text-muted tracking-[1.5px]">— 하늘이네 모임 · vol.02 ·*:｡</p>
        </div>
      </div>
    </div>
  );
}
