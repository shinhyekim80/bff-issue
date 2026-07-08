import { type Member } from '../data/mock';

interface MemberMiniCardProps {
  member: Member;
}

export default function MemberMiniCard({ member }: MemberMiniCardProps) {
  const { name, colorKey, status, icon, label } = member;

  let bgClass: string;
  let borderClass: string;
  let textClass: string;
  let dotOpacity = 'opacity-100';
  let rotateClass = '';

  // Apply styling based on status and color
  switch(status) {
    case 'waiting':
      bgClass = 'bg-white/90 backdrop-blur-sm shadow-[0_4px_12px_rgba(255,230,109,0.3)] ring-1 ring-yellow-main/50';
      borderClass = 'border-transparent';
      textClass = 'text-ink-main';
      rotateClass = 'rotate-[-2deg]';
      break;
    case 'locked':
      bgClass = colorKey === 'jiwon' ? 'bg-[#A8D8B9]/15' : 'bg-[#B8E0F5]/15';
      borderClass = colorKey === 'jiwon' ? 'border border-dashed border-green-main/40' : 'border border-dashed border-blue-main/40';
      textClass = colorKey === 'jiwon' ? 'text-[#5A7A65]' : 'text-[#5A7A85]';
      dotOpacity = 'opacity-30';
      rotateClass = colorKey === 'jiwon' ? 'rotate-[1deg]' : 'rotate-[-1deg]';
      break;
    case 'resting':
      bgClass = 'bg-purple-pastel-deep/70 backdrop-blur-sm';
      borderClass = 'border border-dashed border-purple-border/50';
      textClass = 'text-[#553D7A]';
      rotateClass = 'rotate-[2deg]';
      break;
    default:
      bgClass = 'bg-white/90 backdrop-blur-sm';
      borderClass = 'border border-black/5';
      textClass = 'text-ink-main';
  }

  const dotColorClass = `bg-${member.colorClass}-main`;

  return (
    <div className={`relative px-1.5 py-2.5 text-center rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer ${bgClass} ${borderClass} ${rotateClass}`}>
      <span className={`block w-4 h-4 rounded-full mx-auto mb-1.5 shadow-inner ring-1 ring-black/5 ${dotColorClass} ${dotOpacity}`}></span>
      <p className={`m-0 text-[11px] font-bold tracking-wide ${textClass}`}>{name}</p>
      {label && <p className="m-0 mt-0.5 text-[9px] text-text-tertiary font-medium">{label}</p>}
      {icon && <p className="m-0 mt-1 text-sm opacity-80">{icon}</p>}
    </div>
  );
}
