/**
 * WindowFrame — Y2K Windows XP pink chrome wrapper
 * 모든 화면의 메인 윈도우 컨테이너. 타이틀바 + (옵션) 메뉴바 + 본문 슬롯.
 *
 * 사용법:
 *   <WindowFrame title="BFF ISSUE" filename="vol02.doc" showMenuBar menuItems={['File','Edit']}>
 *     <YourContent />
 *   </WindowFrame>
 */

import type { ReactNode } from 'react';

export type WindowFrameProps = {
  title: string;
  filename?: string;
  children: ReactNode;
  className?: string;
  showMenuBar?: boolean;
  menuItems?: string[];
  /** 우상단 윈도우 컨트롤 표시 여부 (기본 true) */
  showControls?: boolean;
  /** × 클릭 핸들러 (있으면 cursor pointer + hover) */
  onClose?: () => void;
  /** _ 클릭 핸들러 */
  onMinimize?: () => void;
};

export default function WindowFrame({
  title,
  filename,
  children,
  className = '',
  showMenuBar = false,
  menuItems = [],
  showControls = true,
  onClose,
  onMinimize,
}: WindowFrameProps) {
  return (
    <div
      className={`relative bg-white shadow-[3px_3px_0_rgba(184,50,88,0.45)] ${className}`}
      style={{ border: '2px solid #B83258' }}
    >
      {/* 타이틀바 */}
      <div
        className="flex items-center justify-between px-2 py-[5px] border-b-[2px]"
        style={{
          borderColor: '#B83258',
          background:
            'linear-gradient(180deg, #FF8FB0 0%, #FF5C8A 45%, #E63D70 100%)',
        }}
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <div
            className="w-3.5 h-3.5 shrink-0"
            style={{
              background:
                'linear-gradient(135deg, #FFFFFF 0%, #FFD9E5 50%, #FF8FB0 100%)',
              border: '1px solid #B83258',
            }}
          />
          <span className="text-white text-[11px] font-bold tracking-tight truncate drop-shadow-[1px_1px_0_rgba(184,50,88,0.6)]">
            {title}
            {filename && <span className="font-normal opacity-90"> — {filename}</span>}
          </span>
        </div>
        {showControls && (
          <div className="flex items-center gap-[3px] shrink-0">
            <button
              type="button"
              onClick={onMinimize}
              className={`w-4 h-4 flex items-center justify-center text-[10px] font-bold text-pink-deep leading-none bg-pink-pastel ${onMinimize ? 'cursor-pointer hover:bg-pink-pastel/70 active:translate-y-px' : 'cursor-default'}`}
              style={{ border: '1px solid #B83258' }}
              aria-label="Minimize"
            >
              _
            </button>
            <button
              type="button"
              className="w-4 h-4 flex items-center justify-center text-[8px] font-bold text-pink-deep leading-none bg-pink-pastel cursor-default"
              style={{ border: '1px solid #B83258' }}
              aria-label="Maximize"
            >
              □
            </button>
            <button
              type="button"
              onClick={onClose}
              className={`w-4 h-4 flex items-center justify-center text-[10px] font-bold text-pink-deep leading-none bg-pink-pastel ${onClose ? 'cursor-pointer hover:bg-pink-deep hover:text-white active:translate-y-px' : 'cursor-default'}`}
              style={{ border: '1px solid #B83258' }}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {/* 메뉴바 */}
      {showMenuBar && menuItems.length > 0 && (
        <div
          className="flex items-center gap-3 px-2 py-1 bg-pink-very-pale"
          style={{ borderBottom: '1px solid #FFC2D4' }}
        >
          {menuItems.map((item) => (
            <span key={item} className="text-[10px] text-ink-main font-medium">
              <span className="underline">{item[0]}</span>
              {item.slice(1)}
            </span>
          ))}
        </div>
      )}

      {children}
    </div>
  );
}
