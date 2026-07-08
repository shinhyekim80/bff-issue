import { todayQuestion } from '../data/mock';
import HighlighterText from './ui/HighlighterText';

export default function QuestionCard() {
  const prefix = todayQuestion.question.prefix.replace('\n', ' ');

  return (
    <div className="relative max-w-[340px] mx-auto mb-[22px] z-[2]">
      <div className="absolute -top-2 left-8 rotate-[-4deg] w-14 h-4 bg-yellow-main z-[3] shadow-tape" />
      <div className="relative bg-white border-main border-ink-main pt-[22px] px-[18px] pb-4 shadow-card">
        <p className="m-0 text-center text-label text-pink-main font-medium tracking-[1.5px]">
          오늘의 질문 · vol.0{todayQuestion.vol} · 이번 주 {todayQuestion.weekIndex}번째
        </p>
        <p className="mt-3 mb-0 text-center text-[22px] font-medium text-ink-main leading-snug">
          {prefix}{' '}
          <HighlighterText>{todayQuestion.question.highlight}</HighlighterText>
          {todayQuestion.question.suffix}{' '}
          <span className="text-pink-main text-[16px]">✦</span>
        </p>
      </div>
    </div>
  );
}
