import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import AnswerSegment, { type AnswerMode } from './AnswerSegment';
import QuestionCard from './QuestionCard';
import SparkleDot from './ui/SparkleDot';

interface WriteShellProps {
  current: AnswerMode;
  minHeightClass?: string;
  children: ReactNode;
}

export default function WriteShell({ current, minHeightClass = 'min-h-screen', children }: WriteShellProps) {
  const navigate = useNavigate();

  return (
    <div className={`relative bg-grad-main font-sans overflow-hidden px-4 pt-5 pb-[30px] ${minHeightClass}`}>
      <div className="absolute inset-0 bg-effect-glitter pointer-events-none z-0 mix-blend-overlay opacity-80" />

      <SparkleDot top="18%" left="5%" color="yellow" rotate="-15deg" symbol="⭐" />
      <SparkleDot top="22%" right="6%" color="pink" size="small" symbol="♡" />
      <SparkleDot bottom="28%" left="5%" color="text-pink-main" symbol="✦" />
      <SparkleDot bottom="32%" right="7%" color="accent" size="small" symbol="·*:｡" />

      <div className="relative flex items-center justify-between mb-[18px] z-[2]">
        <button
          type="button"
          onClick={() => navigate('/answer')}
          className="text-[22px] text-ink-main cursor-pointer bg-transparent border-none p-0 font-sans"
          aria-label="답변 방식 선택으로 돌아가기"
        >
          ←
        </button>
        <p className="m-0 text-[13px] text-pink-main font-medium">내 페이지 쓰기 ₊˚⊹♡</p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="text-[20px] text-ink-main cursor-pointer bg-transparent border-none p-0 font-sans opacity-60"
          aria-label="홈으로 이동"
        >
          ✕
        </button>
      </div>

      <QuestionCard />
      <AnswerSegment current={current} />

      {children}
    </div>
  );
}
