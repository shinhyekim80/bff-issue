import { useNavigate } from 'react-router-dom';

export type AnswerMode = 'text' | 'photo' | 'sticker';

const segments: Array<{ mode: AnswerMode; label: string; path: string }> = [
  { mode: 'text', label: '한 줄', path: '/write/text' },
  { mode: 'photo', label: '짤·사진', path: '/write/photo' },
  { mode: 'sticker', label: '스티커', path: '/write/sticker' },
];

interface AnswerSegmentProps {
  current: AnswerMode;
}

export default function AnswerSegment({ current }: AnswerSegmentProps) {
  const navigate = useNavigate();

  return (
    <div className="relative max-w-[340px] mx-auto mb-[18px] z-[2]">
      <div className="bg-white border-main border-ink-main p-1 flex gap-1 shadow-card-light">
        {segments.map((segment) => {
          const isActive = segment.mode === current;

          return (
            <button
              key={segment.mode}
              type="button"
              onClick={() => {
                if (!isActive) navigate(segment.path);
              }}
              className={`flex-1 border-none py-[9px] px-2 text-[12.5px] font-medium font-sans cursor-pointer transition-transform active:scale-[0.97] ${
                isActive
                  ? 'bg-gradient-to-b from-pink-light to-pink-main text-white shadow-[1px_2px_0_rgba(0,0,0,0.15)]'
                  : 'bg-transparent text-ink-main'
              }`}
            >
              {segment.label}
              {isActive ? ' ✦' : ''}
            </button>
          );
        })}
      </div>
    </div>
  );
}
