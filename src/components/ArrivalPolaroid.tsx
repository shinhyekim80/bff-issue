interface ArrivalPolaroidProps {
  content: string;
  member: string;
}

export default function ArrivalPolaroid({ content, member }: ArrivalPolaroidProps) {
  return (
    <div className="relative max-w-[240px] mx-auto mb-[26px] z-[2]">
      <div className="absolute -top-[14px] -right-2 rotate-[12deg] bg-pink-main text-white py-[5px] px-3 text-[11px] font-medium tracking-[1.2px] z-[4] shadow-sticker">
        도착!
      </div>

      <div className="relative bg-white border-main border-ink-main p-3 pb-[30px] rotate-[-3deg] shadow-[3px_4px_0_rgba(0,0,0,0.15)] z-[3]">
        <div className="relative aspect-[1.1] bg-gradient-to-br from-yellow-main to-[#FFEDC2] flex items-center justify-center p-5">
          <p className="m-0 text-[18px] text-ink-main font-medium leading-snug text-center whitespace-pre-wrap">
            {content.replace(' ', '\n')}
          </p>
          <span className="absolute top-2 right-2.5 text-[11px] text-pink-main">♡</span>
          <span className="absolute bottom-2.5 left-2 text-label text-yellow-accent">⭐</span>
        </div>
        <p className="mt-2.5 mb-0 text-label text-text-secondary text-center font-mono">
          {member} · 2026.05.13
        </p>
      </div>
    </div>
  );
}
