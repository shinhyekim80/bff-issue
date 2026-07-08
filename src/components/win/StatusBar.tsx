/**
 * StatusBar — 윈도우 하단 상태바
 * Galmuri 픽셀 폰트 적용. 좌우 텍스트 또는 children 슬롯.
 *
 * 사용법:
 *   <StatusBar left="Page 1 of 1" right="● online · 4 friends" />
 *   <StatusBar><CustomContent /></StatusBar>
 */

import type { ReactNode } from 'react';

type StatusBarProps =
  | { left: string; right: string; children?: never }
  | { children: ReactNode; left?: never; right?: never };

export default function StatusBar(props: StatusBarProps) {
  return (
    <div
      className="flex items-center justify-between px-2 py-1 bg-pink-very-pale"
      style={{ borderTop: '1px solid #FFC2D4' }}
    >
      {'children' in props && props.children ? (
        props.children
      ) : (
        <>
          <span className="text-[9px] text-text-secondary font-pixel tracking-tight">
            {props.left}
          </span>
          <span className="text-[9px] text-text-secondary font-pixel tracking-tight">
            {props.right}
          </span>
        </>
      )}
    </div>
  );
}
