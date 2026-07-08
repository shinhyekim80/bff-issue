import PageGridCell, { type WeeklyCell } from './PageGridCell';

type LabelColor = 'pink' | 'ink' | 'blue';

export interface WeeklyPage {
  label: string;
  day: string;
  title: string;
  labelColor: LabelColor;
  cells: WeeklyCell[];
}

interface PageGridProps {
  page: WeeklyPage;
}

const labelClassMap: Record<LabelColor, string> = {
  pink: 'bg-pink-main text-white border-transparent',
  ink: 'bg-ink-main text-white border-transparent',
  blue: 'bg-blue-main text-ink-main border-ink-main',
};

export default function PageGrid({ page }: PageGridProps) {
  return (
    <div className="relative mx-auto mb-[22px] max-w-[320px] z-[2]">
      <div className="flex items-baseline gap-2.5 mb-2 px-0.5">
        <span className={`inline-block border-thin py-[3px] px-[9px] text-[8.5px] font-medium tracking-[1.5px] rotate-[-2deg] shadow-sticker ${labelClassMap[page.labelColor]}`}>
          {page.label}
        </span>
        <p className="m-0 text-[14px] text-ink-main font-medium tracking-normal">{page.title}</p>
        <p className="m-0 text-[8.5px] text-text-accent font-mono tracking-[0.6px]">{page.day}</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {page.cells.map((cell, index) => (
          <PageGridCell key={`${page.label}-${cell.member}-${index}`} cell={cell} index={index} />
        ))}
      </div>
    </div>
  );
}
