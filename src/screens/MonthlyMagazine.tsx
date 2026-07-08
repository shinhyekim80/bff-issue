import { useNavigate, useParams } from 'react-router-dom';
import Colophon from '../components/Colophon';
import Epilogue from '../components/Epilogue';
import Imprint from '../components/Imprint';
import MagazineCover from '../components/MagazineCover';
import MonthlyCutGrid from '../components/MonthlyCutGrid';
import TableOfContents from '../components/TableOfContents';
import JellyButton from '../components/ui/JellyButton';
import SparkleDot from '../components/ui/SparkleDot';

const monthlyMagazine = {
  vol: 1,
  monthLabel: '4월호',
  yearMonth: '2026년 4월',
  startDate: '2026.04.01',
  endDate: '2026.04.30',
  title: '처음 만난 우리',
  groupName: '하늘이네 모임',
  arrivedCount: 11,
  restCount: 5,
  members: [
    { id: 'haneul', name: '하늘', initial: '하', color: 'yellow' as const },
    { id: 'jiwon', name: '지원', initial: '지', color: 'green' as const },
    { id: 'sumin', name: '수민', initial: '수', color: 'blue' as const },
    { id: 'yuna', name: '유나', initial: '유', color: 'purple' as const },
  ],
  monthlyCut: {
    mostSaid: { tag: '이달의 말버릇', highlight: '아 진짜', content: '죽겠다', meta: '4명 중 3명이 적어둠' },
    bestPhoto: { tag: '이달의 짤', emoji: '🥐', caption: '학교 앞 빵집 (지원)' },
    moodMix: { tag: '이달의 무드', emojis: ['😩', '☕', '🎧'], meta: '4월의 우리 톤' },
    restPages: { tag: '쉬어간 페이지', count: 5 },
  },
  epilogue: [
    { member: 'haneul', initial: '하', color: 'yellow' as const, text: '"우리 자주 만나지 못해도, 매주 너희 페이지 보는 게 좋아."' },
    { member: 'jiwon', initial: '지', color: 'green' as const, text: '"올해도 같이 늙어가자 ʕ•ᴥ•ʔ"' },
    { member: 'sumin', initial: '수', color: 'blue' as const, text: '"4월의 우리, 생각보다 잘 살았다."' },
    { member: 'yuna', initial: '유', color: 'purple' as const, text: '"가끔 못 써도 너희가 채워줘서 고마워."' },
  ],
};

export default function MonthlyMagazine() {
  const navigate = useNavigate();
  const { vol } = useParams();
  const volumeNumber = Number(vol);
  const magazine = Number.isFinite(volumeNumber) && volumeNumber === monthlyMagazine.vol ? monthlyMagazine : monthlyMagazine;

  return (
    <div className="relative min-h-screen overflow-hidden bg-grad-main px-4 pb-8 pt-5 font-sans">
      <div className="absolute inset-0 bg-effect-glitter opacity-80 pointer-events-none" />
      <SparkleDot top="7%" left="6%" color="yellow" rotate="-12deg" symbol="⭐" />
      <SparkleDot top="12%" right="8%" color="pink" symbol="♡" size="small" />
      <SparkleDot top="38%" right="5%" color="blue" symbol="✦" size="small" />
      <SparkleDot bottom="16%" left="7%" color="pink" symbol="·*:｡" size="small" />

      <header className="relative z-10 mb-5 flex items-center justify-between">
        <button type="button" onClick={() => navigate('/magazine')} className="text-[24px] leading-none text-ink-main">
          ←
        </button>
        <p className="m-0 text-[13px] font-bold text-pink-main">월간 매거진 ₊˚⊹♡</p>
        <span className="w-6 text-right text-[16px] text-ink-main/50">⋯</span>
      </header>

      <main className="relative z-10">
        <MagazineCover
          vol={magazine.vol}
          monthLabel={magazine.monthLabel}
          title={magazine.title}
          groupName={magazine.groupName}
          members={magazine.members}
        />

        <Colophon
          yearMonth={magazine.yearMonth}
          startDate={magazine.startDate}
          endDate={magazine.endDate}
          arrivedCount={magazine.arrivedCount}
          restCount={magazine.restCount}
        />

        <TableOfContents />
        <MonthlyCutGrid data={magazine.monthlyCut} />
        <Epilogue items={magazine.epilogue} />
        <Imprint groupName={magazine.groupName} yearMonth={magazine.yearMonth} />

        <div className="mx-auto flex max-w-[340px] flex-col gap-3">
          <JellyButton onClick={() => navigate('/share/kakao?variant=monthly')}>표지 공유하기 ♡</JellyButton>
          <button
            type="button"
            onClick={() => navigate('/magazine')}
            className="mx-auto text-[12px] text-text-secondary underline decoration-dotted underline-offset-4"
          >
            책장에 보관하기 📖
          </button>
        </div>
      </main>
    </div>
  );
}
