import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import OnboardingPage1 from '../components/OnboardingPage1';
import OnboardingPage2 from '../components/OnboardingPage2';
import OnboardingPage3 from '../components/OnboardingPage3';
import PageIndicator from '../components/PageIndicator';
import SparkleDot from '../components/ui/SparkleDot';

const totalPages = 3;

export default function Onboarding() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialPage = useMemo(() => {
    const value = Number(new URLSearchParams(location.search).get('page') ?? 0);
    return Number.isFinite(value) ? Math.min(Math.max(value, 0), totalPages - 1) : 0;
  }, [location.search]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const completeOnboarding = (path: string) => {
    localStorage.setItem('onboarded', 'true');
    navigate(path);
  };

  const movePage = (nextPage: number) => {
    setCurrentPage(Math.min(Math.max(nextPage, 0), totalPages - 1));
  };

  const handleTouchEnd = (clientX: number) => {
    if (touchStart === null) return;
    const distance = touchStart - clientX;
    if (distance > 36) movePage(currentPage + 1);
    if (distance < -36) movePage(currentPage - 1);
    setTouchStart(null);
  };

  return (
    <div
      className="relative flex min-h-screen flex-col overflow-hidden bg-grad-main px-4 pb-7 pt-6 font-sans"
      onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
      onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
    >
      <div className="absolute inset-0 bg-effect-glitter opacity-80 pointer-events-none" />
      <SparkleDot top="10%" left="6%" color="yellow" rotate="-15deg" symbol="⭐" size="large" />
      <SparkleDot top="12%" right="8%" color="pink" symbol="♡" size="medium" />
      <SparkleDot bottom="14%" left="7%" color="pink" symbol="✦" size="small" />
      <SparkleDot bottom="16%" right="8%" color="accent" symbol="·*:｡" size="small" />

      <header className="relative z-10 flex items-center justify-between">
        <p className="m-0 font-mono text-[10px] font-bold tracking-[2px] text-pink-main">
          BFF ISSUE · 0{currentPage + 1}
        </p>
        {currentPage < totalPages - 1 ? (
          <button
            type="button"
            onClick={() => setCurrentPage(totalPages - 1)}
            className="text-[12px] text-text-tertiary underline decoration-dotted underline-offset-4"
          >
            건너뛰기
          </button>
        ) : (
          <span className="w-[58px]" />
        )}
      </header>

      <main className="relative z-10 flex flex-1 items-center py-4">
        {currentPage === 0 && <OnboardingPage1 />}
        {currentPage === 1 && <OnboardingPage2 />}
        {currentPage === 2 && (
          <OnboardingPage3
            onCreateGroup={() => completeOnboarding('/group/create')}
            onAcceptInvite={() => completeOnboarding('/invite/BFF-0KR2')}
          />
        )}
      </main>

      <footer className="relative z-10 flex items-center justify-between">
        {currentPage > 0 ? (
          <button type="button" onClick={() => movePage(currentPage - 1)} className="w-[64px] text-left text-[14px] text-text-secondary">
            ← 이전
          </button>
        ) : (
          <span className="w-[64px]" />
        )}

        <PageIndicator total={totalPages} current={currentPage} onChange={setCurrentPage} />

        {currentPage < totalPages - 1 ? (
          <button type="button" onClick={() => movePage(currentPage + 1)} className="w-[64px] text-right text-[14px] font-bold text-pink-main">
            다음 →
          </button>
        ) : (
          <span className="w-[64px]" />
        )}
      </footer>
    </div>
  );
}
