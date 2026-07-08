type UnlockStatus = 'self' | 'unlocked' | 'resting';
type MemberColor = 'yellow' | 'green' | 'blue' | 'purple';

interface UnlockMemberCardProps {
  name: string;
  color: MemberColor;
  status: UnlockStatus;
  label: string;
  rotate: string;
  sparklePosition?: 'left' | 'right';
}

const colorClassMap: Record<MemberColor, { dot: string; shadow: string; restBg?: string; restBorder?: string; restText?: string }> = {
  yellow: { dot: 'bg-yellow-main', shadow: 'shadow-[1px_2px_0_rgba(255,230,109,0.5)]' },
  green: { dot: 'bg-green-main', shadow: 'shadow-[2px_3px_0_rgba(168,216,185,0.55)]' },
  blue: { dot: 'bg-blue-main', shadow: 'shadow-[2px_3px_0_rgba(184,224,245,0.55)]' },
  purple: {
    dot: 'bg-purple-main',
    shadow: '',
    restBg: 'bg-purple-pastel-deep',
    restBorder: 'border-dashed border-purple-border',
    restText: 'text-[#553D7A]',
  },
};

export default function UnlockMemberCard({ name, color, status, label, rotate, sparklePosition }: UnlockMemberCardProps) {
  const colorClass = colorClassMap[color];
  const isResting = status === 'resting';
  const isUnlocked = status === 'unlocked';

  return (
    <div
      className={`relative p-[10px] px-1.5 text-center border-main ${
        isResting ? `${colorClass.restBg} ${colorClass.restBorder}` : `bg-white border-ink-main ${colorClass.shadow}`
      }`}
      style={{ transform: `rotate(${rotate})` }}
    >
      {isUnlocked && (
        <span
          className={`absolute -top-2 text-[13px] text-pink-main ${
            sparklePosition === 'left' ? '-left-1 rotate-[-15deg]' : '-right-1 rotate-[15deg]'
          }`}
        >
          ✦
        </span>
      )}
      <span className={`block w-[18px] h-[18px] rounded-full ${colorClass.dot} border-thin border-ink-main mx-auto mb-[5px]`} />
      <p className={`m-0 text-label font-medium ${isResting ? colorClass.restText : 'text-ink-main'}`}>{name}</p>
      <p className={`mt-[3px] mb-0 ${isUnlocked ? 'text-label text-pink-main font-medium' : 'text-[8.5px] text-text-tertiary'}`}>
        {label}
      </p>
    </div>
  );
}
