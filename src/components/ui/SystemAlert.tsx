import { useEffect, useState } from 'react';

type Props = {
  emoji: string;
  name: string;
  message?: string;
  onConfirm: () => void;
  onDismiss: () => void;
};

export default function SystemAlert({ emoji, name, message, onConfirm, onDismiss }: Props) {
  const [shake, setShake] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShake(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes alertShake {
          0%, 100% { transform: translateX(0) rotate(-0.5deg); }
          20%       { transform: translateX(-4px) rotate(-1deg); }
          40%       { transform: translateX(4px) rotate(0.5deg); }
          60%       { transform: translateX(-3px) rotate(-0.5deg); }
          80%       { transform: translateX(3px) rotate(0.3deg); }
        }
        @keyframes alertIn {
          from { opacity: 0; transform: translateY(-8px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        .alert-shake { animation: alertShake 0.5s ease; }
        .alert-in    { animation: alertIn 0.2s ease forwards; }
      `}</style>

      <div
        className={`alert-in ${shake ? 'alert-shake' : ''}`}
        style={{
          width: 232,
          border: '2px solid #B83258',
          background: '#FFF5F8',
          boxShadow: '3px 3px 0 rgba(184,50,88,0.4)',
          fontFamily: 'SUIT, sans-serif',
        }}
      >
        {/* 타이틀바 */}
        <div
          className="flex items-center justify-between px-2 py-[5px]"
          style={{
            background: 'linear-gradient(180deg, #FF8FB0 0%, #FF5C8A 45%, #E63D70 100%)',
            borderBottom: '2px solid #B83258',
          }}
        >
          <div className="flex items-center gap-1.5">
            {/* 경고 아이콘 픽셀 */}
            <div
              className="w-3.5 h-3.5 flex items-center justify-center text-[8px] font-bold"
              style={{
                background: '#FFD700',
                border: '1px solid #B83258',
                color: '#B83258',
                lineHeight: 1,
              }}
            >
              !
            </div>
            <span className="text-white text-[11px] font-bold tracking-tight drop-shadow-[1px_1px_0_rgba(184,50,88,0.6)]">
              새로운 알림
            </span>
          </div>
          <button
            onClick={onDismiss}
            className="w-4 h-4 flex items-center justify-center text-[10px] font-bold leading-none"
            style={{
              background: '#FFEDF3',
              border: '1px solid #B83258',
              color: '#B83258',
            }}
          >
            ×
          </button>
        </div>

        {/* 본문 */}
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-start gap-2.5 mb-4">
            {/* 이모지 아이콘 */}
            <div
              className="w-9 h-9 flex items-center justify-center text-[20px] shrink-0"
              style={{
                background: '#FFF0F5',
                border: '1.5px solid #FFC2D4',
              }}
            >
              {emoji}
            </div>
            <p
              className="m-0 text-[12px] leading-snug"
              style={{ color: '#3D1A2E' }}
            >
              <span className="font-bold">{name}</span>이가 답변 완료&nbsp;♡
              {message && (
                <span className="block mt-1 text-[11px] opacity-60 font-normal">
                  {message}
                </span>
              )}
            </p>
          </div>

          {/* 버튼 행 */}
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={onDismiss}
              className="px-4 py-1 text-[11px] font-medium"
              style={{
                background: '#FFEDF3',
                border: '1.5px solid #FFC2D4',
                color: '#B83258',
                boxShadow: '1px 1px 0 rgba(184,50,88,0.3)',
              }}
            >
              무시
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-1 text-[11px] font-bold text-white"
              style={{
                background: 'linear-gradient(180deg, #FF8FB0 0%, #FF5C8A 60%, #E63D70 100%)',
                border: '1.5px solid #B83258',
                boxShadow: '1px 1px 0 rgba(184,50,88,0.45)',
              }}
            >
              확인
            </button>
          </div>
        </div>

        {/* 상태바 */}
        <div
          className="px-2 py-[3px] flex items-center gap-1"
          style={{
            borderTop: '1px solid #FFC2D4',
            background: '#FFF0F5',
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-[9px]" style={{ color: '#B83258', opacity: 0.7 }}>
            BFF ISSUE notification
          </span>
        </div>
      </div>
    </>
  );
}
