interface EpilogueItem {
  member: string;
  initial: string;
  color: 'yellow' | 'green' | 'blue' | 'purple';
  text: string;
}

interface EpilogueProps {
  items: EpilogueItem[];
}

const initialClass = {
  yellow: 'bg-yellow-main',
  green: 'bg-green-main',
  blue: 'bg-blue-main',
  purple: 'bg-purple-main',
};

export default function Epilogue({ items }: EpilogueProps) {
  return (
    <section className="relative mx-auto mb-7 max-w-[340px] border-main border-ink-main bg-cream-main px-4 pb-5 pt-7 shadow-card-light">
      <span className="absolute -top-2 left-1/2 h-[18px] w-[74px] -translate-x-1/2 rotate-[-2deg] bg-yellow-main shadow-tape" />
      <h2 className="m-0 text-center text-[18px] font-bold text-ink-main">PAGE EPILOGUE</h2>
      <p className="mt-1 mb-4 text-center text-[11px] text-text-secondary">한 문장 편지</p>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.member} className="flex gap-3 border-b border-dashed border-text-muted/45 pb-3 last:border-b-0 last:pb-0">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center border-thin border-ink-main ${initialClass[item.color]} text-[15px] font-bold shadow-sticker`}>
              {item.initial}
            </span>
            <p className="m-0 text-[14px] leading-normal text-ink-main">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
