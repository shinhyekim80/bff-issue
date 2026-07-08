
interface TextStickerProps {
  text: string;
  tone: 'yellow' | 'purple' | 'pink' | 'blue';
  rotate?: string;
  className?: string;
}

export default function TextSticker({ text, tone, rotate = '-4deg', className = '' }: TextStickerProps) {
  const toneMap: Record<string, string> = {
    yellow: 'bg-yellow-main text-ink-main',
    purple: 'bg-purple-main text-purple-800', // We might need to adjust specific purple text color if needed, but the design token uses #553D7A. Let's use inline style for that specific color or extend tailwind.
    pink: 'bg-pink-main text-white',
    blue: 'bg-blue-main text-ink-main',
  };

  const textColors: Record<string, string> = {
    purple: '#553D7A'
  };

  return (
    <div 
      className={`absolute px-[11px] py-[5px] shadow-sticker border-main border-ink-main z-10 transition-transform hover:scale-105 cursor-default font-cute ${toneMap[tone]} ${className}`}
      style={{ 
        transform: `rotate(${rotate})`,
        color: textColors[tone]
      }}
    >
      <p className="m-0 text-[13px] leading-none font-bold font-cute">{text}</p>
    </div>
  );
}
