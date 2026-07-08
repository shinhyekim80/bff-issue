import { useNavigate } from 'react-router-dom';
import PageCard, { type FriendResponse } from '../components/PageCard';
import ReactionBar from '../components/ReactionBar';
import SpreadContainer from '../components/SpreadContainer';
import HighlighterText from '../components/ui/HighlighterText';
import SparkleDot from '../components/ui/SparkleDot';

const friendsResponses: FriendResponse[] = [
  { member: 'haneul', name: '하늘', color: 'yellow', type: 'text', content: '"아 진짜 죽겠다"', isMe: true, arrivedAt: '14:32' },
  {
    member: 'jiwon',
    name: '지원',
    color: 'green',
    type: 'photo',
    content: { emoji: '🥐', caption: '학교 앞 빵집', oneLine: '아침에 사 먹음 ʕ•ᴥ•ʔ' },
    arrivedAt: '15:08',
  },
  {
    member: 'sumin',
    name: '수민',
    color: 'blue',
    type: 'sticker',
    content: { caption: '요즘 내 상태', stickers: ['😩', '☕', '🎧'] },
    arrivedAt: '16:21',
  },
  { member: 'yuna', name: '유나', color: 'purple', type: 'rest', content: '유나는 이번 페이지 쉬어가는 중' },
];

export default function FriendResponses() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-grad-main min-h-[1100px] font-sans overflow-hidden px-4 pt-[22px] pb-[30px]">
      <div className="absolute inset-0 bg-effect-glitter pointer-events-none z-0 mix-blend-overlay opacity-80" />

      <SparkleDot top="8%" left="5%" color="yellow" rotate="-15deg" symbol="⭐" size="large" />
      <SparkleDot top="10%" right="7%" color="pink" symbol="♡" />
      <SparkleDot bottom="18%" left="5%" color="text-pink-main" symbol="✦" />
      <SparkleDot bottom="22%" right="6%" color="accent" symbol="·*:｡" />

      <div className="relative flex items-center justify-between mb-[14px] z-[2]">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-[22px] text-ink-main cursor-pointer bg-transparent border-none p-0 font-sans"
          aria-label="뒤로가기"
        >
          ←
        </button>
        <p className="m-0 text-[13px] text-pink-main font-medium">오늘의 페이지 ₊˚⊹♡</p>
        <button
          type="button"
          onClick={() => navigate('/weekly')}
          className="bg-white/80 border-thin border-ink-main px-2 py-1 text-[10px] text-ink-main font-sans cursor-pointer shadow-sticker rotate-[2deg]"
        >
          주간
        </button>
      </div>

      <div className="relative text-center mb-4 z-[2]">
        <p className="m-0 text-label text-text-secondary tracking-[1.2px]">vol.02 · 이번 주 2번째</p>
      </div>

      <div className="relative text-center mb-[22px] z-[2]">
        <p className="m-0 text-[18px] font-medium text-ink-main leading-snug">
          요즘 가장 많이 <HighlighterText>하는 말</HighlighterText>은?{' '}
          <span className="text-pink-main text-[15px]">✦</span>
        </p>
      </div>

      <SpreadContainer>
        {friendsResponses.map((item, index) => (
          <PageCard key={item.member} item={item} index={index} />
        ))}
      </SpreadContainer>

      <ReactionBar />
    </div>
  );
}
