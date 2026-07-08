import { useNavigate } from 'react-router-dom';
import NextWeekCard from '../components/NextWeekCard';
import PageGrid, { type WeeklyPage } from '../components/PageGrid';
import WeeklyCover from '../components/WeeklyCover';
import SparkleDot from '../components/ui/SparkleDot';

const weeklyData = {
  vol: 2,
  weekLabel: '5월 2주차',
  title: '친구와 사소한 일상을 공유한 한 주',
  groupName: '하늘이네 모임',
  dailyQuestionCount: 7,
  selectedPageCount: 3,
  members: [
    { id: 'haneul', name: '하늘', color: 'yellow' },
    { id: 'jiwon', name: '지원', color: 'green' },
    { id: 'sumin', name: '수민', color: 'blue' },
    { id: 'yuna', name: '유나', color: 'purple' },
  ],
  pages: [
    {
      label: 'PAGE 01',
      day: 'BEST 01',
      title: '오늘의 기분',
      labelColor: 'pink',
      cells: [
        { member: 'haneul', type: 'sticker', content: '😩' },
        { member: 'jiwon', type: 'text', content: '"피곤"' },
        { member: 'sumin', type: 'sticker', content: '☕' },
        { member: 'yuna', type: 'rest' },
      ],
    },
    {
      label: 'PAGE 02',
      day: 'BEST 02',
      title: '말버릇.zip',
      labelColor: 'ink',
      cells: [
        { member: 'haneul', type: 'text', content: '"아 진짜"' },
        { member: 'jiwon', type: 'text', content: '"맞아 맞아"' },
        { member: 'sumin', type: 'text', content: '"배고파"' },
        { member: 'yuna', type: 'text', content: '"음…"' },
      ],
    },
    {
      label: 'PAGE 03',
      day: 'BEST 03',
      title: '요즘 내 짤',
      labelColor: 'blue',
      cells: [
        { member: 'haneul', type: 'photo', content: '🌷' },
        { member: 'jiwon', type: 'photo', content: '🥐' },
        { member: 'sumin', type: 'rest' },
        { member: 'yuna', type: 'rest' },
      ],
    },
  ] satisfies WeeklyPage[],
  arrivedCount: 9,
} as const;

export default function WeeklyPreview() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-grad-main min-h-[1280px] font-sans overflow-hidden px-4 pt-[22px] pb-[30px]">
      <div className="absolute inset-0 bg-effect-glitter pointer-events-none z-0 mix-blend-overlay opacity-80" />

      <SparkleDot top="8%" left="5%" color="yellow" rotate="-15deg" symbol="⭐" />
      <SparkleDot top="11%" right="7%" color="pink" symbol="♡" size="small" />
      <SparkleDot bottom="24%" left="5%" color="text-pink-main" symbol="✦" />
      <SparkleDot bottom="18%" right="6%" color="accent" symbol="·*:｡" size="small" />

      <div className="relative flex items-center justify-between mb-[14px] z-[2]">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-[22px] text-ink-main cursor-pointer bg-transparent border-none p-0 font-sans"
          aria-label="뒤로가기"
        >
          ←
        </button>
        <p className="m-0 text-[13px] text-pink-main font-medium">이번 주 페이지 모음 ₊˚⊹♡</p>
        <button
          type="button"
          onClick={() => console.log('weekly menu')}
          className="text-[16px] text-ink-main cursor-pointer bg-transparent border-none p-0 font-sans opacity-55"
          aria-label="메뉴"
        >
          ⋯
        </button>
      </div>

      <div className="relative text-center mb-[22px] z-[2]">
        <p className="m-0 text-label text-text-secondary tracking-[1.5px]">vol.0{weeklyData.vol} · {weeklyData.weekLabel}</p>
      </div>

      <WeeklyCover
        vol={weeklyData.vol}
        title={weeklyData.title}
        groupName={weeklyData.groupName}
        members={weeklyData.members}
        dailyQuestionCount={weeklyData.dailyQuestionCount}
        selectedPageCount={weeklyData.selectedPageCount}
      />

      {weeklyData.pages.map((page) => (
        <PageGrid key={page.label} page={page} />
      ))}

      <div className="relative text-center mb-7 z-[2]">
        <p className="m-0 text-[12px] text-text-secondary italic">
          이번 주 {weeklyData.dailyQuestionCount}개의 질문 중 {weeklyData.selectedPageCount}개의 대표 페이지를 모았어요 ʕ•ᴥ•ʔ
        </p>
        <p className="mt-1.5 mb-0 text-label text-text-tertiary">
          친구들이 채운 조각은 총 {weeklyData.arrivedCount}개예요
        </p>
      </div>

      <NextWeekCard
        dailyQuestionCount={weeklyData.dailyQuestionCount}
        selectedPageCount={weeklyData.selectedPageCount}
      />

      <div className="relative max-w-[320px] mx-auto z-[2]">
        <button
          type="button"
          onClick={() => navigate('/share/kakao?variant=weekly')}
          className="relative w-full bg-grad-cta text-white border-cta border-ink-main rounded-pill p-[15px] text-[15.5px] font-medium font-sans cursor-pointer tracking-normal shadow-cta overflow-hidden active:scale-[0.98] transition-transform"
        >
          <span className="absolute top-1 left-[22%] right-[22%] h-[5px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full blur-[1px]" />
          <span className="relative">표지 공유하기 ♡</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/magazine')}
          className="block mx-auto mt-3 bg-transparent text-text-secondary border-none text-[11.5px] font-sans cursor-pointer underline decoration-dotted underline-offset-[3px] decoration-text-muted"
        >
          매거진 탭으로 가기 →
        </button>
      </div>
    </div>
  );
}
