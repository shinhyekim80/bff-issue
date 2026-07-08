/**
 * Y2K Windows pink chrome 디자인 시스템
 * BFF ISSUE — 모든 화면이 import해서 사용하는 공통 컴포넌트
 *
 * 사용 예:
 *   import { WindowFrame, StatusBar, VintageScrollbar, DialogButton } from '../components/win';
 */

export { default as WindowFrame } from './WindowFrame';
export type { WindowFrameProps } from './WindowFrame';

export { default as StatusBar } from './StatusBar';

export { default as ToolbarIcon, ToolbarDivider } from './ToolbarIcon';

export { default as StatusDot } from './StatusDot';
export type { StatusValue } from './StatusDot';

export { default as VintageScrollbar } from './VintageScrollbar';

export { default as DialogButton } from './DialogButton';
