/**
 * ToolbarIcon — Word/Paint 풍 작은 픽셀 툴바 버튼
 *
 * 사용법:
 *   <ToolbarIcon label="Save">💾</ToolbarIcon>
 *   <ToolbarIcon label="Heart" onClick={...}>♡</ToolbarIcon>
 */

import type { ReactNode, MouseEventHandler } from 'react';

type ToolbarIconProps = {
  children: ReactNode;
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ToolbarIcon({ children, label, onClick }: ToolbarIconProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-6 h-6 flex items-center justify-center bg-pink-very-pale hover:bg-pink-pastel active:translate-y-px transition-all"
      style={{ border: '1px solid #FFC2D4' }}
      title={label}
      aria-label={label}
    >
      <span className="text-[12px] leading-none">{children}</span>
    </button>
  );
}

/** 툴바 안에서 그룹 사이 시각적 구분선 */
export function ToolbarDivider() {
  return <span className="w-px h-4 bg-pink-border-light mx-1" />;
}
