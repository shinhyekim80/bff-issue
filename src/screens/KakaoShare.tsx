import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import InviteFlowMeta from '../components/InviteFlowMeta';
import KakaoChatPreview from '../components/KakaoChatPreview';
import OGCard from '../components/OGCard';
import SparkleDot from '../components/ui/SparkleDot';

type ShareVariant = 'invite' | 'weekly' | 'monthly';

const shareData = {
  inviteUrl: 'https://bff-issue.app/invite/BFF-0KR2',
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p className="mb-2 ml-1 mt-0 text-[12px] font-bold tracking-[0.5px] text-pink-main">⌗ {children}</p>;
}

export default function KakaoShare() {
  const navigate = useNavigate();
  const location = useLocation();
  const variant = useMemo<ShareVariant>(() => {
    const value = new URLSearchParams(location.search).get('variant');
    return value === 'weekly' || value === 'monthly' ? value : 'invite';
  }, [location.search]);

  const copyLink = async () => {
    await navigator.clipboard.writeText(shareData.inviteUrl);
    console.log('링크 복사', shareData.inviteUrl);
  };

  const sendShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: 'BFF ISSUE',
        text: '우정 매거진 같이 만들래?',
        url: shareData.inviteUrl,
      });
      return;
    }
    console.log('카톡 공유', { variant, url: shareData.inviteUrl });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-grad-main px-4 pb-8 pt-5 font-sans">
      <div className="absolute inset-0 bg-effect-glitter opacity-80 pointer-events-none" />
      <SparkleDot top="8%" left="5%" color="yellow" rotate="-15deg" symbol="⭐" />
      <SparkleDot top="11%" right="7%" color="pink" symbol="♡" size="small" />
      <SparkleDot bottom="24%" left="5%" color="pink" symbol="✦" size="small" />
      <SparkleDot bottom="18%" right="6%" color="accent" symbol="·*:｡" size="small" />

      <header className="relative z-10 mb-5 flex items-center justify-between">
        <button type="button" onClick={() => navigate(-1)} className="text-[24px] leading-none text-ink-main">
          ←
        </button>
        <p className="m-0 text-[14px] font-bold text-pink-main">카톡으로 보내기 ₊˚⊹</p>
        <span className="w-6" />
      </header>

      <p className="relative z-10 mb-6 mt-0 text-center text-[12px] italic text-text-secondary">— 친구들에게 이렇게 도착해요 ʕ•ᴥ•ʔ</p>

      <main className="relative z-10 mx-auto flex max-w-[340px] flex-col gap-7">
        <section>
          <SectionTitle>채팅창 미리보기</SectionTitle>
          <KakaoChatPreview variant={variant} />
        </section>

        <section>
          <SectionTitle>공유 카드 (확대)</SectionTitle>
          <OGCard variant={variant} />
        </section>

        <section>
          <SectionTitle>친구가 들어오면</SectionTitle>
          <InviteFlowMeta />
        </section>

        <section className="flex flex-col gap-2.5">
          <button
            type="button"
            onClick={sendShare}
            className="flex w-full items-center justify-center gap-2 rounded-pill border-cta border-ink-main bg-yellow-kakao px-4 py-[15px] text-[16px] font-bold text-ink-main shadow-cta transition-transform active:translate-y-0.5"
          >
            <span>카톡으로 보내기</span>
            <span>💬</span>
          </button>
          <button
            type="button"
            onClick={copyLink}
            className="w-full rounded-pill border-main border-ink-main bg-white px-4 py-3 text-[14px] font-bold text-ink-main shadow-sticker transition-transform active:translate-y-0.5"
          >
            링크 복사 ♡
          </button>
        </section>
      </main>
    </div>
  );
}
