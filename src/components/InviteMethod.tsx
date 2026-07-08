interface InviteMethodProps {
  inviteCode: string;
  onKakaoInvite: () => void;
  onCopyCode: () => void;
}

export default function InviteMethod({ inviteCode, onKakaoInvite, onCopyCode }: InviteMethodProps) {
  return (
    <div className="border-main border-ink-main bg-cream-main px-4 py-4 shadow-card-light">
      <button
        type="button"
        onClick={onKakaoInvite}
        className="mb-3 flex w-full items-center justify-center gap-2 rounded-pill border-main border-ink-main bg-yellow-kakao px-4 py-3 shadow-sticker transition-transform active:translate-y-0.5"
      >
        <span className="text-[17px]">💬</span>
        <span className="text-[14px] font-bold text-ink-main">카톡으로 초대 카드 보내기</span>
      </button>

      <div className="mb-2 flex items-center gap-2 px-1 py-1">
        <span className="h-px flex-1 bg-effect-dotted-light" />
        <span className="text-[10px] text-text-tertiary">또는</span>
        <span className="h-px flex-1 bg-effect-dotted-light" />
      </div>

      <button
        type="button"
        onClick={onCopyCode}
        className="flex w-full items-center justify-between rounded-md border-main border-ink-main bg-white px-4 py-3 text-left shadow-sticker transition-transform active:translate-y-0.5"
      >
        <span>
          <span className="block font-mono text-[9px] tracking-[1px] text-text-accent">초대 코드</span>
          <span className="mt-1 block font-mono text-[15px] font-bold tracking-[2px] text-ink-main">{inviteCode}</span>
        </span>
        <span className="text-[12px] font-bold text-pink-main">복사 ♡</span>
      </button>
    </div>
  );
}
