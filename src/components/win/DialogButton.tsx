/**
 * DialogButton — Windows 다이얼로그 OK/Cancel 풍 버튼
 * variant: 'primary' (강조, 핑크 fill) | 'secondary' (보조, 연핑크 fill)
 *
 * 사용법:
 *   <DialogButton variant="primary" onClick={...}>♡ 확인</DialogButton>
 *   <DialogButton variant="secondary">취소</DialogButton>
 */

import type { ReactNode, MouseEventHandler } from 'react';

type DialogButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  /** 너비 100% 채우기 */
  full?: boolean;
};

export default function DialogButton({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  full = false,
}: DialogButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${full ? 'w-full' : ''} px-4 py-2 text-[13px] font-bold cursor-pointer transition-all hover:translate-y-[-1px] active:translate-y-px disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{
        background: isPrimary ? '#FF5C8A' : '#FFD9E5',
        color: isPrimary ? '#FFFFFF' : '#B83258',
        border: `1.5px solid ${isPrimary ? '#B83258' : '#FFC2D4'}`,
        boxShadow: isPrimary
          ? '2px 2px 0 rgba(184,50,88,0.45)'
          : '2px 2px 0 rgba(255,194,212,0.6)',
      }}
    >
      {children}
    </button>
  );
}
