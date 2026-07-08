import { useNavigate } from 'react-router-dom';
import BookshelfList from '../components/BookshelfList';
import CurrentWeekCard from '../components/CurrentWeekCard';
import EmptyPagesList from '../components/EmptyPagesList';
import {
  WindowFrame,
  StatusBar,
  ToolbarIcon,
  ToolbarDivider,
} from '../components/win';

const magazineData = {
  groupName: '하늘이네 모임',
  currentVol: 2,
  currentWeek: { label: 'vol.02 · 5월 2주차', arrivedCount: 9 },
  volumes: [
    { vol: 1, label: '4월호', title: '처음 만난 우리', status: 'completed' as const, pagesCount: 11, restCount: 5 },
    { vol: 2, label: '5월호', title: '5월호 편집 중', status: 'in-progress' as const, pagesCount: 9, totalDays: 30 },
    { vol: 3, label: '6월호', title: '다음 권', status: 'upcoming' as const },
  ],
  emptyPages: [
    { vol: 2, weekLabel: '5월 1주차', day: 'TUE', date: '5/7', question: '요즘 듣는 노래?' },
    { vol: 2, weekLabel: '5월 1주차', day: 'THU', date: '5/9', question: '오늘 본 풍경?' },
    { vol: 2, weekLabel: '5월 2주차', day: 'MON', date: '5/13', question: '아침에 한 일?' },
  ],
};

/* 윈도우 본문 내 섹션 헤더 (폴더 헤더 톤) */
function SectionHeader({ children, count }: { children: React.ReactNode; count?: number }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 bg-pink-very-pale"
      style={{ borderTop: '1px solid #FFC2D4', borderBottom: '1px solid #FFC2D4' }}
    >
      <span className="text-[11px] text-pink-deep font-pixel">▷</span>
      <span className="flex-1 text-[12px] font-bold text-ink-main">{children}</span>
      {typeof count === 'number' && (
        <span className="text-[10px] text-text-secondary font-pixel">{count} items</span>
      )}
    </div>
  );
}

export default function Magazine() {
  const navigate = useNavigate();
  const totalPages = magazineData.volumes.reduce(
    (sum, v) => sum + ('pagesCount' in v ? v.pagesCount ?? 0 : 0),
    0,
  );

  return (
    <div
      className="relative min-h-full pt-4 px-3 pb-6 font-sans overflow-hidden"
      style={{
        backgroundColor: '#FFEDF3',
        backgroundImage:
          'linear-gradient(45deg, #FFD9E5 25%, transparent 25%), linear-gradient(-45deg, #FFD9E5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FFD9E5 75%), linear-gradient(-45deg, transparent 75%, #FFD9E5 75%)',
        backgroundSize: '22px 22px',
        backgroundPosition: '0 0, 0 11px, 11px -11px, -11px 0px',
      }}
    >
      {/* 코너 데코 */}
      <div className="absolute top-2 left-2 text-[10px] text-pink-deep font-pixel opacity-50 z-[1]">
        ♡_♡
      </div>
      <div className="absolute top-2 right-2 text-[10px] text-pink-deep font-pixel opacity-50 z-[1]">
        archive.dir
      </div>

      {/* ============ 메인 윈도우: 매거진 아카이브 ============ */}
      <div className="relative max-w-[340px] mx-auto z-[5] mt-3">
        <WindowFrame
          title="매거진"
          filename={`${magazineData.groupName}_vol${String(magazineData.currentVol).padStart(2, '0')}.dir`}
          showMenuBar
          menuItems={['File', 'Edit', 'View', 'Help']}
        >
          {/* 툴바 */}
          <div
            className="flex items-center gap-[3px] px-2 py-1 bg-pink-very-pale"
            style={{ borderBottom: '1px solid #FFC2D4' }}
          >
            <ToolbarIcon label="Back">◁</ToolbarIcon>
            <ToolbarIcon label="Forward">▷</ToolbarIcon>
            <ToolbarDivider />
            <ToolbarIcon label="Refresh">↻</ToolbarIcon>
            <ToolbarIcon label="Search">🔍</ToolbarIcon>
            <ToolbarDivider />
            <ToolbarIcon label="View">▦</ToolbarIcon>
            <div className="ml-auto flex items-center gap-1">
              <span className="text-[9px] text-text-secondary font-pixel">
                /{magazineData.groupName}/
              </span>
            </div>
          </div>

          {/* 헤더 영역 */}
          <div className="bg-white px-5 pt-5 pb-4">
            <p className="m-0 text-[10px] text-text-tertiary font-pixel tracking-wider">
              {'>'} {magazineData.groupName} · vol.
              {String(magazineData.currentVol).padStart(2, '0')} 편집 중
            </p>
            <h1 className="m-0 mt-2 text-[28px] font-display font-bold text-ink-main leading-[1.0]">
              우리 책장 ₊˚⊹♡
            </h1>
            <p className="m-0 mt-2 text-[12px] text-text-secondary italic">
              친구들과 쌓은 페이지를 책장처럼 모아봐요
            </p>
          </div>

          {/* 섹션 1: 이번 주 페이지 모음 */}
          <SectionHeader count={magazineData.currentWeek.arrivedCount}>
            이번 주 페이지 모음
          </SectionHeader>
          <div className="bg-white px-3 py-3">
            <CurrentWeekCard
              label={magazineData.currentWeek.label}
              arrivedCount={magazineData.currentWeek.arrivedCount}
              onClick={() => navigate('/weekly')}
            />
          </div>

          {/* 섹션 2: 우리 책장 */}
          <SectionHeader count={magazineData.volumes.length}>우리 책장</SectionHeader>
          <div className="bg-white px-3 py-3">
            <BookshelfList
              volumes={magazineData.volumes}
              onOpenVolume={(vol, status) => {
                if (status === 'completed') {
                  navigate(`/magazine/${vol}`);
                  return;
                }
                console.log('volume unavailable', { vol, status });
              }}
            />
          </div>

          {/* 섹션 3: 비어 있는 페이지 */}
          <SectionHeader count={magazineData.emptyPages.length}>
            비어 있는 페이지
          </SectionHeader>
          <div className="bg-white px-3 py-3">
            <EmptyPagesList
              pages={magazineData.emptyPages}
              onOpenPage={(page) => navigate(`/write/text?date=${encodeURIComponent(page.date)}`)}
            />
          </div>

          {/* 상태바 */}
          <StatusBar
            left={`${magazineData.volumes.length} volumes · ${totalPages} pages`}
            right={`vol.${String(magazineData.currentVol).padStart(2, '0')} active`}
          />
        </WindowFrame>
      </div>
    </div>
  );
}
