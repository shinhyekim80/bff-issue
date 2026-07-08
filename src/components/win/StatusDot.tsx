/**
 * StatusDot — MSN 메신저 풍 친구 상태 점
 * online (초록), busy (핑크), idle (회색), away (노랑)
 *
 * 사용법: <StatusDot status="online" />
 */

export type StatusValue = 'online' | 'away' | 'busy' | 'idle';

const colors: Record<StatusValue, string> = {
  online: '#A8D8B9',
  away: '#FFE66D',
  busy: '#FF5C8A',
  idle: '#C4A8B0',
};

export default function StatusDot({ status }: { status: StatusValue }) {
  return (
    <span
      className="block w-2 h-2 rounded-full shrink-0"
      style={{ backgroundColor: colors[status] }}
      aria-label={`status: ${status}`}
    />
  );
}
