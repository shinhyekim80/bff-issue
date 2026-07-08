import { useNavigate, useParams } from 'react-router-dom';
import InvitePreviewCard from '../components/InvitePreviewCard';
import NumberedStepList from '../components/NumberedStepList';
import SparkleDot from '../components/ui/SparkleDot';

const inviteAccept = {
  championName: '하늘',
  groupName: '하늘이네 모임',
  members: [
    { initial: '하', color: 'yellow' as const, filled: true },
    { color: 'green' as const },
    { color: 'blue' as const },
    { color: 'purple' as const },
  ],
  steps: [
    { title: '같은 질문', description: '에 4명이 함께 답해요' },
    { title: '내가 답하면', description: '친구 페이지가 열려요' },
    { title: '한 달 뒤', description: '우리만의 한 권이 완성돼요 ♡' },
  ],
};

export default function InviteAccept() {
  const navigate = useNavigate();
  const { code } = useParams();

  const acceptInvite = () => {
    console.log('invite accepted', code);
    navigate('/');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-grad-main px-4 pb-8 pt-5 font-sans">
      <div className="absolute inset-0 bg-effect-glitter opacity-80 pointer-events-none" />
      <SparkleDot top="14%" left="9%" color="yellow" rotate="-15deg" symbol="⭐" size="large" />
      <SparkleDot top="12%" right="10%" color="pink" rotate="20deg" symbol="♡" size="medium" />
      <SparkleDot bottom="22%" left="8%" color="pink" symbol="✦" size="small" />
      <SparkleDot bottom="24%" right="10%" color="blue" symbol="⭐" size="small" />

      <header className="relative z-10 mb-5 flex items-center justify-between">
        <button type="button" onClick={() => navigate('/')} className="text-[22px] leading-none text-ink-main">
          ✕
        </button>
        <p className="m-0 text-[14px] font-bold text-pink-main">초대 받았어요 ₊˚⊹♡</p>
        <span className="w-6" />
      </header>

      <main className="relative z-10">
        <section className="mb-6 text-center">
          <h1 className="m-0 text-[28px] font-bold leading-snug text-ink-main">
            <span className="bg-effect-highlighter px-1">{inviteAccept.championName}</span>이가
            <br />
            우리 모임에 초대했어요 ♡
          </h1>
          <p className="mt-3 mb-0 text-[12px] italic text-text-secondary">— 같은 질문에 답하는 4명의 페이지 ⋆｡˚</p>
          {code && <p className="mt-2 mb-0 font-mono text-[9px] tracking-[1px] text-text-tertiary">invite code · {code}</p>}
        </section>

        <section className="mb-7">
          <InvitePreviewCard groupName={inviteAccept.groupName} members={inviteAccept.members} />
        </section>

        <section className="mx-auto mb-7 max-w-[320px]">
          <p className="mb-3 ml-1 mt-0 text-[12px] font-bold tracking-[0.5px] text-pink-main">
            ⌗ 들어가면 이런 게 시작돼요
          </p>
          <NumberedStepList steps={inviteAccept.steps} />
        </section>

        <section className="mx-auto max-w-[320px]">
          <button
            type="button"
            onClick={acceptInvite}
            className="relative w-full overflow-hidden rounded-pill border-cta border-ink-main bg-grad-cta p-[15px] text-[16px] font-bold text-white shadow-cta transition-transform active:translate-y-0.5"
          >
            <span className="absolute left-[22%] right-[22%] top-1 h-[5px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)] blur-[1px]" />
            <span className="relative">우리 모임에 들어가기 ♡</span>
          </button>

          <button
            type="button"
            onClick={() => navigate('/')}
            className="mx-auto mt-3 block text-[12px] text-text-secondary underline decoration-dotted underline-offset-4"
          >
            나중에 결정할게요
          </button>
        </section>
      </main>
    </div>
  );
}
