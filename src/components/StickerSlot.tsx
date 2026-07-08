import { isTextSticker } from '../data/stickers';

interface StickerSlotProps {
  sticker?: string;
  index: number;
  onRemove: () => void;
}

const rotations = ['-3deg', '4deg', '-2deg'];
const slotBg = ['#FFE66D', '#B8E0F5', '#E0D4F0'];  // yellow / blue / purple (member colors)

export default function StickerSlot({ sticker, index, onRemove }: StickerSlotProps) {
  const rot = rotations[index] ?? '0deg';
  const bg  = slotBg[index] ?? '#FFE66D';
  const textMode = Boolean(sticker && isTextSticker(sticker));

  if (!sticker) {
    return (
      <div
        className="flex items-center justify-center"
        style={{
          width: 60,
          height: 56,
          border: '1.5px dashed #FFC2D4',
          background: '#FFEDF3',
          transform: `rotate(${rot})`,
        }}
      >
        <span className="font-pixel text-[18px] text-pink-border-light leading-none">+</span>
      </div>
    );
  }

  return (
    <div className="relative" style={{ transform: `rotate(${rot})` }}>
      <div
        className="flex items-center justify-center min-w-[52px] min-h-[48px] px-3 py-2"
        style={{
          background: bg,
          border: '1.5px solid #B83258',
          boxShadow: '2px 2px 0 rgba(184,50,88,0.35)',
        }}
      >
        <span
          style={{
            fontSize: textMode ? 11 : 22,
            fontFamily: textMode ? 'Galmuri11, monospace' : undefined,
            fontWeight: textMode ? 700 : undefined,
            color: '#1A1A1A',
            lineHeight: 1,
          }}
        >
          {sticker}
        </span>
      </div>

      {/* 제거 버튼 */}
      <button
        type="button"
        onClick={onRemove}
        className="absolute -top-2 -right-2 w-[18px] h-[18px] flex items-center justify-center cursor-pointer"
        style={{
          background: '#E63D70',
          border: '1.5px solid #B83258',
          boxShadow: '1px 1px 0 rgba(184,50,88,0.4)',
          color: '#fff',
          fontSize: 9,
          fontWeight: 700,
          lineHeight: 1,
        }}
        aria-label={`${sticker} 제거`}
      >
        ×
      </button>
    </div>
  );
}
