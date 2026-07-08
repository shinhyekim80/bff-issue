import { useEffect } from 'react';
import DialogBackdrop from './DialogBackdrop';
import PhilosophyBox from './PhilosophyBox';

interface PassDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const infoItems = [
  { color: 'bg-pink-main', text: '친구 페이지는 내일 자동으로 열려요' },
  { color: 'bg-yellow-accent', text: '이번 주 동안 언제든 다시 채울 수 있어요' },
  { color: 'bg-blue-main', text: '매거진에 쉬어간 페이지로 남아요' },
];

export default function PassDialog({ isOpen, onClose, onConfirm }: PassDialogProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <DialogBackdrop onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pass-dialog-title"
        className="fixed left-1/2 top-1/2 z-[60] w-[calc(100%-36px)] max-w-[320px] -translate-x-1/2 -translate-y-1/2 animate-[passDialogIn_200ms_ease-out]"
        onClick={(event) => event.stopPropagation()}
      >
        <style>
          {'@keyframes passDialogIn { from { opacity: 0; transform: translate(-50%, -50%) scale(0.95); } to { opacity: 1; transform: translate(-50%, -50%) scale(1); } }'}
        </style>

        <span className="absolute -top-5 left-9 rotate-[-15deg] text-[16px] text-yellow-accent">⭐</span>
        <span className="absolute -top-6 right-8 rotate-[20deg] text-[14px] text-pink-soft">♡</span>
        <span className="absolute -bottom-4 left-7 rotate-[-10deg] text-[13px] text-blue-main">✦</span>
        <span className="absolute -bottom-5 right-9 text-[11px] text-text-accent">·*:｡</span>

        <div className="relative border-main border-ink-main bg-white px-5 pb-5 pt-8 shadow-card-deep">
          <span className="absolute -top-2.5 left-9 z-10 h-4 w-[52px] rotate-[-4deg] bg-purple-main shadow-tape" />
          <span className="absolute -top-2.5 right-10 z-10 h-4 w-11 rotate-[5deg] bg-pink-pastel shadow-tape" />

          <div className="mb-5 text-center">
            <span className="text-[36px]">💤</span>
            <h2 id="pass-dialog-title" className="mt-3 mb-0 text-[24px] font-bold leading-snug text-ink-main">
              오늘은
              <br />
              <span className="bg-effect-highlighter px-1">쉬어갈까요</span>? ᵕ̈
            </h2>
            <p className="mt-3 mb-0 text-[12px] italic text-text-secondary">— 내일 다시 만나요 ⋆</p>
          </div>

          <PhilosophyBox />

          <div className="mb-5 flex flex-col gap-2.5">
            {infoItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span className={`h-[5px] w-[5px] shrink-0 rounded-full ${item.color}`} />
                <p className="m-0 flex-1 text-[11px] leading-normal text-ink-main">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="relative w-full overflow-hidden rounded-pill border-cta border-ink-main bg-grad-cta p-[14px] text-[15px] font-bold text-white shadow-cta transition-transform active:translate-y-0.5"
            >
              <span className="absolute left-[22%] right-[22%] top-1 h-[5px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)] blur-[1px]" />
              <span className="relative">돌아갈래요 ♡</span>
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="w-full rounded-pill border-main border-ink-main bg-white px-4 py-3 text-[13px] font-bold text-ink-main shadow-sticker transition-transform active:translate-y-0.5"
            >
              오늘은 쉬어가기 💤
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
