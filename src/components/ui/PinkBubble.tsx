
interface PinkBubbleProps {
  text: string;
  className?: string;
}

export default function PinkBubble({ text, className = '' }: PinkBubbleProps) {
  return (
    <div 
      className={`absolute bg-white/95 backdrop-blur-sm border-2 border-pink-main px-4 py-2 rounded-bubble-left z-20 transition-transform hover:scale-105 cursor-default font-cute ${className}`}
      style={{ boxShadow: '2px 2px 0 rgba(255,92,138,0.25)' }}
    >
      <p className="m-0 text-[14px] leading-none text-ink-main font-bold whitespace-nowrap font-cute">{text}</p>
    </div>
  );
}
