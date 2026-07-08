
interface MaskingTapeProps {
  color?: 'yellow' | 'blue' | 'green' | 'pink';
  rotate?: '-4deg' | '4deg' | '-2deg' | '2deg';
  width?: string;
  className?: string;
}

export default function MaskingTape({
  color = 'yellow',
  rotate = '-4deg',
  width = '76px',
  className = ''
}: MaskingTapeProps) {
  const colorClassMap: Record<string, string> = {
    yellow: 'bg-yellow-main',
    blue: 'bg-blue-main',
    green: 'bg-green-main',
    pink: 'bg-pink-main',
  };

  return (
    <div 
      className={`absolute h-5 shadow-sm z-10 opacity-80 backdrop-blur-sm mix-blend-multiply ${colorClassMap[color]} ${className}`}
      style={{ 
        width, 
        transform: `rotate(${rotate})`,
        top: '-10px',
        left: '40px'
      }}
    />
  );
}
