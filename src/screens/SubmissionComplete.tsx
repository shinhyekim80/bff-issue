import { useNavigate } from 'react-router-dom';
import ArrivalPolaroid from '../components/ArrivalPolaroid';
import RewardCard from '../components/RewardCard';
import UnlockMemberCard from '../components/UnlockMemberCard';
import HighlighterText from '../components/ui/HighlighterText';
import SparkleDot from '../components/ui/SparkleDot';

const myAnswer = {
  type: 'text',
  content: '"아 진짜 죽겠다"',
  member: '하늘',
};

const memberStates = [
  { id: 'haneul', name: '하늘', color: 'yellow', status: 'self', label: '내 페이지', rotate: '-2deg' },
  { id: 'jiwon', name: '지원', color: 'green', status: 'unlocked', label: '♡ 열림', rotate: '2deg', sparklePosition: 'right' },
  { id: 'sumin', name: '수민', color: 'blue', status: 'unlocked', label: '♡ 열림', rotate: '-1deg', sparklePosition: 'left' },
  { id: 'yuna', name: '유나', color: 'purple', status: 'resting', label: '💤', rotate: '2deg' },
] as const;

export default function SubmissionComplete() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-grad-main min-h-[780px] font-sans overflow-hidden px-4 pt-[22px] pb-[30px]">
      <div className="absolute inset-0 bg-effect-glitter pointer-events-none z-0 mix-blend-overlay opacity-90" />

      <SparkleDot top="8%" left="6%" color="yellow" rotate="-15deg" symbol="⭐" size="large" />
      <SparkleDot top="10%" right="9%" color="pink" rotate="20deg" symbol="♡" size="large" />
      <SparkleDot top="30%" left="4%" color="text-pink-main" symbol="✦" size="large" />
      <SparkleDot top="38%" right="5%" color="accent" symbol="·*:｡" />
      <SparkleDot bottom="32%" left="5%" color="blue" rotate="-10deg" symbol="♡" />
      <SparkleDot bottom="28%" right="6%" color="yellow" symbol="⭐" />
      <SparkleDot bottom="14%" left="8%" color="text-pink-main" symbol="✦" size="small" />

      <div className="relative text-center mb-[14px] z-[2]">
        <p className="m-0 text-[13px] text-pink-main font-medium">내 페이지가 채워졌어요 ₊˚⊹♡</p>
        <p className="mt-1 mb-0 text-label text-text-secondary tracking-[1.2px]">vol.02 · 이번 주 2번째 · ᐢ. ̫.ᐢ</p>
      </div>

      <div className="relative text-center mb-[26px] z-[2]">
        <p className="m-0 text-[26px] font-medium text-ink-main leading-snug">
          내 조각이<br />
          <HighlighterText>편집실에</HighlighterText> 도착했어요{' '}
          <span className="text-pink-main text-[22px] inline-block rotate-[12deg]">✦</span>
        </p>
      </div>

      <ArrivalPolaroid content={myAnswer.content} member={myAnswer.member} />

      <div className="relative mx-auto mb-[22px] max-w-[240px] h-[1.5px] bg-effect-dotted-h opacity-40 z-[2]" />

      <div className="relative text-center mb-[18px] z-[2]">
        <p className="m-0 text-[17px] font-medium text-ink-main tracking-normal">
          친구들의 페이지가 <span className="bg-gradient-to-t from-pink-pastel from-[60%] to-transparent to-[60%] px-1">열렸어요</span> ₊˚⊹
        </p>
        <p className="mt-2 mb-0 text-[10.5px] text-text-secondary italic">— 내가 답하니까 친구 페이지도 도착 ʕ•ᴥ•ʔ</p>
      </div>

      <div className="relative max-w-[340px] mx-auto mb-6 z-[2]">
        <div className="grid grid-cols-4 gap-2">
          {memberStates.map((member) => (
            <UnlockMemberCard key={member.id} {...member} />
          ))}
        </div>
        <p className="mt-3 mb-0 text-center text-label text-text-secondary italic">2개의 페이지가 도착했어요</p>
      </div>

      <RewardCard />

      <div className="relative max-w-[340px] mx-auto z-[2]">
        <button
          type="button"
          onClick={() => navigate('/friends/today')}
          className="relative w-full bg-grad-cta text-white border-cta border-ink-main rounded-pill p-[15px] text-[15.5px] font-medium font-sans cursor-pointer tracking-normal shadow-cta overflow-hidden active:scale-[0.98] transition-transform"
        >
          <span className="absolute top-1 left-[22%] right-[22%] h-[5px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full blur-[1px]" />
          <span className="relative">친구 페이지 보러 가기 →</span>
        </button>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="block mx-auto mt-3 bg-transparent text-text-secondary border-none text-[11.5px] font-sans cursor-pointer underline decoration-dotted underline-offset-[3px] decoration-text-muted"
        >
          나중에 보기
        </button>
      </div>
    </div>
  );
}
