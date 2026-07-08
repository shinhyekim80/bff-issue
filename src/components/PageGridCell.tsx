export type WeeklyMember = 'haneul' | 'jiwon' | 'sumin' | 'yuna';
export type WeeklyCellType = 'text' | 'photo' | 'sticker' | 'rest';

export interface WeeklyCell {
  member: WeeklyMember;
  type: WeeklyCellType;
  content?: string;
}

interface PageGridCellProps {
  cell: WeeklyCell;
  index: number;
}

const memberDotMap: Record<WeeklyMember, string> = {
  haneul: 'bg-yellow-main',
  jiwon: 'bg-green-main',
  sumin: 'bg-blue-main',
  yuna: 'bg-purple-main',
};

const memberTextMap: Record<WeeklyMember, string> = {
  haneul: 'text-ink-main',
  jiwon: 'text-ink-main',
  sumin: 'text-[#5A7A85]',
  yuna: 'text-[#553D7A]',
};

const rotations = ['rotate-[-1deg]', 'rotate-[0.8deg]', 'rotate-[0.4deg]', 'rotate-[-0.6deg]'];

export default function PageGridCell({ cell, index }: PageGridCellProps) {
  const isRest = cell.type === 'rest';
  const rotation = rotations[index % rotations.length];

  return (
    <div
      className={`relative aspect-square p-2 flex items-center justify-center ${rotation} ${
        isRest
          ? 'bg-purple-pastel-deep border-main border-dashed border-purple-border flex-col'
          : 'bg-white border-main border-ink-main shadow-card-light'
      } ${cell.type === 'photo' ? 'p-2 pb-[22px]' : 'p-2.5'}`}
    >
      <span className={`absolute top-1 left-1 w-2 h-2 rounded-full ${memberDotMap[cell.member]} border border-ink-main z-[2]`} />

      {cell.type === 'text' && (
        <p className="m-0 text-[15px] text-ink-main font-medium text-center leading-snug">{cell.content}</p>
      )}

      {cell.type === 'sticker' && <span className="text-[38px]">{cell.content}</span>}

      {cell.type === 'photo' && (
        <div className="w-full h-full bg-polaroid-pink flex items-center justify-center">
          <span className="text-[38px]">{cell.content}</span>
        </div>
      )}

      {cell.type === 'rest' && (
        <>
          <span className="text-[22px]">💤</span>
          <p className={`mt-1 mb-0 text-[7.5px] tracking-[0.5px] ${memberTextMap[cell.member]}`}>쉬는 페이지</p>
        </>
      )}
    </div>
  );
}
