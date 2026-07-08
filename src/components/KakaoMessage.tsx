interface KakaoMessageProps {
  sender?: string;
  text: string;
  isMe?: boolean;
}

export default function KakaoMessage({ sender, text, isMe = false }: KakaoMessageProps) {
  return (
    <div className={`mb-2 flex items-end gap-1.5 ${isMe ? 'justify-end' : 'justify-start'}`}>
      {!isMe && sender && (
        <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center border-thin border-ink-main bg-green-main text-[9px] font-bold">
          {sender}
        </span>
      )}
      <div
        className={`max-w-[75%] px-3 py-2 shadow-sticker ${
          isMe ? 'rounded-bubble-right bg-yellow-kakao' : 'rounded-bubble-other bg-white'
        }`}
      >
        <p className="m-0 text-[12px] leading-normal text-ink-main">{text}</p>
      </div>
    </div>
  );
}
