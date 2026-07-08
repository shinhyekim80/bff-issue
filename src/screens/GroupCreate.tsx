import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InviteMethod from '../components/InviteMethod';
import MemberCardSlot from '../components/MemberCardSlot';
import SparkleDot from '../components/ui/SparkleDot';

const groupCreate = {
  myName: '김하늘',
  myColor: 'yellow' as const,
  inviteCode: 'BFF-0KR2',
  emptySeats: [
    { color: 'green' as const, title: '친구 1' },
    { color: 'blue' as const, title: '친구 2' },
    { color: 'purple' as const, title: '친구 3' },
  ],
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 ml-1 mt-0 text-[12px] font-bold tracking-[0.5px] text-pink-main">
      ⌗ {children}
    </p>
  );
}

export default function GroupCreate() {
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState('하늘이네 모임');

  const copyInviteCode = async () => {
    try {
      await navigator.clipboard.writeText(groupCreate.inviteCode);
      console.log('초대 코드 복사', groupCreate.inviteCode);
    } catch {
      console.log('초대 코드 복사 실패', groupCreate.inviteCode);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-grad-main px-4 pb-8 pt-5 font-sans">
      <div className="absolute inset-0 bg-effect-glitter opacity-80 pointer-events-none" />
      <SparkleDot top="12%" left="8%" color="yellow" rotate="-15deg" symbol="⭐" size="large" />
      <SparkleDot top="14%" right="10%" color="pink" rotate="20deg" symbol="♡" size="medium" />
      <SparkleDot bottom="24%" left="8%" color="pink" symbol="✦" size="small" />
      <SparkleDot bottom="22%" right="10%" color="blue" symbol="⭐" size="small" />

      <header className="relative z-10 mb-4 flex items-center justify-between">
        <button type="button" onClick={() => navigate(-1)} className="text-[24px] leading-none text-ink-main">
          ←
        </button>
        <p className="m-0 text-[14px] font-bold text-pink-main">우리 모임 만들기 ♡</p>
        <span className="w-6" />
      </header>

      <p className="relative z-10 mb-6 mt-0 text-center text-[12px] italic text-text-secondary">
        — 새 우정 매거진의 시작 ⋆｡‧˚ʚ♡ɞ˚‧｡⋆
      </p>

      <main className="relative z-10 mx-auto flex max-w-[320px] flex-col gap-6">
        <section>
          <SectionTitle>모임 이름</SectionTitle>
          <div className="relative">
            <span className="absolute -top-2 left-6 z-10 h-[14px] w-[46px] rotate-[-3deg] bg-yellow-main shadow-tape" />
            <div className="border-main border-ink-main bg-white px-5 pb-4 pt-6 shadow-card">
              <input
                value={groupName}
                onChange={(event) => setGroupName(event.target.value)}
                placeholder="모임 이름을 적어주세요"
                className="w-full bg-transparent p-0 text-[22px] font-bold leading-tight text-ink-main outline-none placeholder:text-text-muted"
              />
              <div className="mt-2 h-px bg-effect-dotted-h opacity-40" />
              <p className="mt-2 mb-0 text-[11px] italic text-text-secondary">— 우리 매거진의 이름이 돼요 ʕ•ᴥ•ʔ</p>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle>내 카드</SectionTitle>
          <MemberCardSlot
            color={groupCreate.myColor}
            filled
            initial="하"
            title={groupCreate.myName}
            subtitle="옐로우 컬러 · 모임장"
          />
        </section>

        <section>
          <SectionTitle>친구 자리 (3자리)</SectionTitle>
          <p className="mb-3 ml-1 mt-0 text-[11px] italic text-text-tertiary">친구가 들어오면 자동으로 색이 정해져요</p>
          <div className="grid grid-cols-3 gap-2.5">
            {groupCreate.emptySeats.map((seat, index) => (
              <MemberCardSlot
                key={seat.color}
                color={seat.color}
                title={seat.title}
                compact
                className={index === 1 ? 'rotate-[1deg]' : '-rotate-[1deg]'}
              />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle>초대 방식</SectionTitle>
          <InviteMethod
            inviteCode={groupCreate.inviteCode}
            onKakaoInvite={() => navigate('/share/kakao')}
            onCopyCode={copyInviteCode}
          />
        </section>

        <section>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="relative w-full overflow-hidden rounded-pill border-cta border-ink-main bg-grad-cta p-[15px] text-[16px] font-bold text-white shadow-cta transition-transform active:translate-y-0.5"
          >
            <span className="absolute left-[22%] right-[22%] top-1 h-[5px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)] blur-[1px]" />
            <span className="relative">모임 만들기 ♡</span>
          </button>
          <p className="mt-3 mb-0 text-center text-[11px] italic text-text-tertiary">친구는 나중에 초대해도 돼요 ᵕ̈</p>
        </section>
      </main>
    </div>
  );
}
