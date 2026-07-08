import MonthlyCutCard from './MonthlyCutCard';

interface MonthlyCutGridProps {
  data: {
    mostSaid: { tag: string; highlight: string; content: string; meta: string };
    bestPhoto: { tag: string; emoji: string; caption: string };
    moodMix: { tag: string; emojis: string[]; meta: string };
    restPages: { tag: string; count: number };
  };
}

export default function MonthlyCutGrid({ data }: MonthlyCutGridProps) {
  return (
    <section className="mx-auto mb-7 max-w-[340px]">
      <div className="mb-3 flex items-baseline justify-between">
        <h2 className="m-0 text-[18px] font-bold text-ink-main">PAGE 01 — 이달의 컷</h2>
        <span className="font-mono text-[9px] tracking-[1px] text-text-tertiary">2×2</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <MonthlyCutCard label={data.mostSaid.tag} labelColor="yellow" className="-rotate-[0.8deg]">
          <p className="m-0 text-[13px] text-text-secondary">가장 자주 나온 말</p>
          <p className="mt-2 mb-0 text-[24px] font-bold leading-tight text-ink-main">
            "{data.mostSaid.highlight}"
            <br />
            {data.mostSaid.content}
          </p>
          <p className="mt-2 mb-0 text-[10px] text-text-tertiary">{data.mostSaid.meta}</p>
        </MonthlyCutCard>

        <MonthlyCutCard label={data.bestPhoto.tag} labelColor="pink" className="rotate-[0.7deg]">
          <div className="border-main border-ink-main bg-green-pastel p-3 pb-5 text-center shadow-sticker">
            <span className="text-[42px]">{data.bestPhoto.emoji}</span>
          </div>
          <p className="mt-2 mb-0 text-center text-[11px] text-text-secondary">{data.bestPhoto.caption}</p>
        </MonthlyCutCard>

        <MonthlyCutCard label={data.moodMix.tag} labelColor="blue" className="rotate-[0.5deg]">
          <div className="flex justify-center gap-2 pt-3">
            {data.moodMix.emojis.map((emoji) => (
              <span key={emoji} className="flex h-10 w-10 items-center justify-center border-main border-ink-main bg-pink-very-pale text-[24px] shadow-sticker">
                {emoji}
              </span>
            ))}
          </div>
          <p className="mt-4 mb-0 text-center text-[11px] text-text-secondary">{data.moodMix.meta}</p>
        </MonthlyCutCard>

        <MonthlyCutCard label={data.restPages.tag} labelColor="purple" className="-rotate-[0.5deg]">
          <div className="flex flex-col items-center justify-center pt-2">
            <span className="text-[30px]">💤</span>
            <p className="mt-1 mb-0 text-[34px] font-bold leading-none text-ink-main">{data.restPages.count}</p>
            <p className="mt-1 mb-0 text-[11px] text-text-secondary">개의 페이지가 쉬어갔어요</p>
          </div>
        </MonthlyCutCard>
      </div>
    </section>
  );
}
