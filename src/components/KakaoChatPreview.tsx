import KakaoMessage from './KakaoMessage';
import OGCard from './OGCard';

interface KakaoChatPreviewProps {
  variant?: 'invite' | 'weekly' | 'monthly';
}

export default function KakaoChatPreview({ variant = 'invite' }: KakaoChatPreviewProps) {
  return (
    <div className="rounded-md border-main border-ink-main bg-kakao-ui-bg px-3 py-3 shadow-card-medium">
      <p className="mb-3 mt-0 text-center text-[11px] font-bold tracking-[0.5px] text-white/95">베프단톡방 (4)</p>
      <KakaoMessage text="우리 이거 같이 해볼래? 우정 매거진 같이 만드는 앱이야 ʕ•ᴥ•ʔ" isMe />
      <div className="mb-2 flex justify-end">
        <OGCard variant={variant} compact />
      </div>
      <KakaoMessage sender="지" text="오 뭐야 귀엽다 ʕ•ᴥ•ʔ" />
      <KakaoMessage sender="수" text="ㄱㄱ 들어갈게 ♡" />
    </div>
  );
}
