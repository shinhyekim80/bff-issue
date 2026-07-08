type OGVariant = 'invite' | 'weekly' | 'monthly';

interface OGCardProps {
  variant?: OGVariant;
  compact?: boolean;
}

const variantCopy: Record<OGVariant, { label: string; title: string; footer: string; description: string }> = {
  invite: {
    label: 'BFF ISSUE',
    title: '우정 매거진\n같이 만들래?',
    footer: '하늘이가 우정 매거진에 초대했어요 ♡',
    description: '친구들과 같은 질문에 답하며 한 달에 한 권 만들어요',
  },
  weekly: {
    label: 'BFF ISSUE · WEEKLY',
    title: '이번 주 페이지\n같이 볼래?',
    footer: '하늘이네 모임의 이번 주 표지가 열렸어요 ♡',
    description: '7개의 질문 중 대표 3개를 모아 작은 표지로 엮었어요',
  },
  monthly: {
    label: 'BFF ISSUE · MONTHLY',
    title: '처음 만난 우리\n한 권 완성',
    footer: '하늘이네 모임의 4월호가 완성됐어요 ♡',
    description: '한 달의 답변과 쉬어간 페이지까지 우리만의 책이 됐어요',
  },
};

export default function OGCard({ variant = 'invite', compact = false }: OGCardProps) {
  const copy = variantCopy[variant];
  const memberSize = compact ? 'h-[14px] w-[14px] text-[7px]' : 'h-7 w-7 text-[12px]';
  const titleSize = compact ? 'text-[13px]' : 'text-[25px]';

  return (
    <div className={`overflow-hidden rounded-lg border-main border-ink-main bg-white shadow-card ${compact ? 'max-w-[210px]' : ''}`}>
      <div className={`relative bg-grad-main text-center ${compact ? 'min-h-[82px] px-3 py-3' : 'min-h-[200px] px-6 py-7'}`}>
        <div className="absolute inset-0 bg-effect-glitter opacity-90 pointer-events-none" />
        <span className={`absolute ${compact ? 'left-3 top-2 h-1.5 w-6' : 'left-7 top-2 h-[14px] w-[50px]'} rotate-[-4deg] bg-yellow-main shadow-tape`} />
        <span className="absolute right-[14%] top-[14%] text-[11px] text-pink-soft">♡</span>
        <span className="absolute bottom-[22%] left-[10%] text-[11px] text-yellow-accent">⭐</span>

        <p className={`relative m-0 font-mono font-bold tracking-[1.6px] text-pink-main ${compact ? 'text-[8px]' : 'text-[10px]'}`}>
          {copy.label}
        </p>
        <p className={`relative mt-3 mb-0 whitespace-pre-line font-medium leading-snug text-ink-main ${titleSize}`}>
          <span className="bg-effect-highlighter px-1">{copy.title.split('\n')[0]}</span>
          <br />
          {copy.title.split('\n')[1]} <span className="text-pink-main">♡</span>
        </p>

        <div className={`relative mx-auto flex justify-center ${compact ? 'mt-2 gap-1' : 'mt-5 gap-1.5'}`}>
          {[
            ['하', 'bg-yellow-main border-solid border-ink-main -rotate-[4deg]'],
            ['?', 'bg-green-main/45 border-dashed border-green-main rotate-[3deg] text-[#5A7A65]'],
            ['?', 'bg-blue-main/45 border-dashed border-blue-main -rotate-[2deg] text-[#5A7A85]'],
            ['?', 'bg-purple-main/45 border-dashed border-purple-border rotate-[4deg] text-[#553D7A]'],
          ].map(([label, cls]) => (
            <span key={`${label}-${cls}`} className={`flex items-center justify-center border-thin font-bold ${memberSize} ${cls}`}>
              {label}
            </span>
          ))}
        </div>
        {!compact && <p className="relative mt-3 mb-0 text-[11px] font-bold text-text-accent">한 자리가 비어 있어요 ⋆</p>}
      </div>

      <div className={`${compact ? 'px-2.5 py-2' : 'border-t border-dashed border-text-muted px-5 py-4'}`}>
        <p className={`m-0 font-bold leading-normal text-ink-main ${compact ? 'text-[10px]' : 'text-[13px]'}`}>{copy.footer}</p>
        <p className={`mt-1 mb-0 leading-normal text-text-secondary ${compact ? 'text-[8px]' : 'text-[11px]'}`}>{copy.description}</p>
        <p className={`mt-1.5 mb-0 font-mono tracking-[1px] text-text-tertiary ${compact ? 'text-[8px]' : 'text-[10px]'}`}>bff-issue.app</p>
      </div>
    </div>
  );
}
