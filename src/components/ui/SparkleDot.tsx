
interface SparkleDotProps {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  color?: 'yellow' | 'pink' | 'blue' | 'purple' | 'accent' | string;
  size?: 'small' | 'medium' | 'large';
  rotate?: string;
  symbol?: '⭐' | '✦' | '♡' | '·*:｡';
}

export default function SparkleDot({ 
  top, bottom, left, right, 
  color = 'yellow', 
  size = 'medium',
  rotate = '0deg',
  symbol = '⭐'
}: SparkleDotProps) {
  
  const colorMap: Record<string, string> = {
    yellow: 'text-yellow-accent',
    pink: 'text-pink-soft',
    blue: 'text-blue-main',
    purple: 'text-purple-main',
    accent: 'text-text-accent'
  };

  const sizeMap = {
    small: 'text-[11px]',
    medium: 'text-[12px]',
    large: 'text-[16px]'
  };

  const animationClass = rotate === '0deg' || size === 'small' ? 'animate-pulse-slow' : 'animate-float';

  return (
    <div 
      className={`absolute ${colorMap[color] || color} ${sizeMap[size]} ${animationClass} z-10 pointer-events-none`}
      style={{ top, bottom, left, right, transform: `rotate(${rotate})` }}
    >
      {symbol}
    </div>
  );
}
