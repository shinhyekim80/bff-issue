import HighlighterText from './ui/HighlighterText';

interface WeeklyMemberLegend {
  id: string;
  name: string;
  color: 'yellow' | 'green' | 'blue' | 'purple';
}

interface WeeklyCoverProps {
  vol: number;
  title: string;
  groupName: string;
  members: readonly WeeklyMemberLegend[];
  dailyQuestionCount: number;
  selectedPageCount: number;
}

const dotClassMap: Record<WeeklyMemberLegend['color'], string> = {
  yellow: 'bg-yellow-main',
  green: 'bg-green-main',
  blue: 'bg-blue-main',
  purple: 'bg-purple-main',
};

export default function WeeklyCover({
  vol,
  title,
  groupName,
  members,
  dailyQuestionCount,
  selectedPageCount,
}: WeeklyCoverProps) {
  return (
    <div className="relative max-w-[320px] mx-auto mb-[30px] z-[2]">
      <div className="absolute -top-2.5 left-8 rotate-[-4deg] w-16 h-[18px] bg-yellow-main z-[5] shadow-tape" />
      <div className="absolute -top-2.5 right-9 rotate-[5deg] w-[52px] h-[18px] bg-blue-main z-[5] shadow-tape" />

      <div className="relative bg-white border-main border-ink-main pt-8 px-[22px] pb-6 shadow-[4px_5px_0_rgba(255,92,138,0.25)] text-center">
        <p className="m-0 text-label text-pink-main font-medium tracking-[2px]">vol.0{vol} · 이번 주 표지</p>

        <p className="mt-[18px] mb-0 text-[25px] font-medium text-ink-main leading-snug">
          친구와 <HighlighterText>사소한 일상</HighlighterText>을<br />
          공유한 한 주 <span className="text-pink-main text-[18px] inline-block rotate-[12deg]">✦</span>
        </p>

        <p className="mt-[14px] mb-0 text-[11px] text-text-secondary italic">— {groupName} ⋆｡‧˚ʚ♡ɞ˚‧｡⋆</p>

        <p className="mt-3 mb-0 text-[10.5px] text-text-tertiary leading-snug">
          매일 도착한 질문 {dailyQuestionCount}개 중,<br />
          이번 주를 잘 보여주는 {selectedPageCount}개를 골랐어요
        </p>

        <div className="mx-auto mt-5 mb-4 max-w-[200px] h-[1.5px] bg-effect-dotted-light opacity-45" />

        <div className="flex gap-[14px] justify-center flex-wrap">
          {members.map((member) => (
            <div key={member.id} className="flex items-center gap-[5px]">
              <span className={`w-2.5 h-2.5 rounded-full ${dotClassMap[member.color]} border-thin border-ink-main`} />
              <span className="text-label text-ink-main font-medium">{member.name}</span>
            </div>
          ))}
        </div>
      </div>

      <span className="sr-only">{title}</span>
    </div>
  );
}
