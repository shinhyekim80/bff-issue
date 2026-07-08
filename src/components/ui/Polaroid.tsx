/**
 * Polaroid — Y2K 스티커 카드 (메모지/포토 카드 스타일)
 * - hard shadow (no blur), pink-wine border
 * - 상단 마스킹테이프 데코
 * - gradient photo area (light pastel)
 */

interface PolaroidProps {
  tone: 'pink' | 'blue' | 'green' | 'purple';
  text: string;
  caption: string;
  rotate?: string;
  className?: string;
  symbol?: string;
}

const photoGradient: Record<string, string> = {
  pink:   'linear-gradient(135deg, #FFD9E5 0%, #FFEDF3 100%)',
  blue:   'linear-gradient(135deg, #B8E0F5 0%, #DFF0F8 100%)',
  green:  'linear-gradient(135deg, #DCEFE3 0%, #EAF5EE 100%)',
  purple: 'linear-gradient(135deg, #F4EFFA 0%, #F9F4FA 100%)',
};

const textColor: Record<string, string> = {
  pink:   '#B83258',
  blue:   '#2B5F7A',
  green:  '#2B7A45',
  purple: '#553D7A',
};

const tapeColor: Record<string, string> = {
  pink:   '#FFD9E5',
  blue:   '#B8E0F5',
  green:  '#DCEFE3',
  purple: '#F4EFFA',
};

export default function Polaroid({
  tone,
  text,
  caption,
  rotate = '0deg',
  className = '',
  symbol,
}: PolaroidProps) {
  return (
    <div
      className={`absolute bg-white p-2 pb-5 z-10 w-[102px] transition-transform hover:scale-105 hover:z-20 cursor-default ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        border: '1.5px solid #B83258',
        boxShadow: '2px 2px 0 rgba(184,50,88,0.35)',
      }}
    >
      {/* 마스킹테이프 (상단 중앙) */}
      <div
        className="absolute -top-[9px] left-1/2 -translate-x-1/2 w-9 h-[14px] opacity-85"
        style={{
          background: tapeColor[tone],
          border: '1px solid #FFC2D4',
        }}
      >
        {/* 테이프 패턴 점선 */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent, transparent 4px, #FFC2D4 4px, #FFC2D4 5px)',
          }}
        />
      </div>

      {/* 사진 영역 */}
      <div
        className="h-[78px] flex items-center justify-center p-2 relative"
        style={{ background: photoGradient[tone] }}
      >
        <p
          className="m-0 text-[12px] leading-tight font-bold text-center whitespace-pre-wrap font-sans"
          style={{ color: textColor[tone] }}
        >
          {text}
        </p>
        {symbol && (
          <span
            className="absolute top-[3px] right-1 text-[9px] font-pixel"
            style={{ color: textColor[tone], opacity: 0.7 }}
          >
            {symbol}
          </span>
        )}
      </div>

      {/* 캡션 */}
      <p className="mt-1.5 mb-0 text-[9px] text-text-secondary text-center font-pixel tracking-tight truncate">
        {caption}
      </p>
    </div>
  );
}
