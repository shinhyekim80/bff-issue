import { stickerCategories, isTextSticker, type StickerCategoryKey } from '../data/stickers';

interface Props {
  category: StickerCategoryKey;
  selectedCount: number;
  onSelect: (sticker: string) => void;
}

export default function StickerGrid({ category, selectedCount, onSelect }: Props) {
  const items = stickerCategories[category].items;
  const isFull = selectedCount >= 3;

  return (
    <div className="relative max-w-[340px] mx-auto mb-5 z-[2]">
      {/* 스티커 팔레트 — Win95 패널 풍 */}
      <div
        className="bg-pink-very-pale py-3 px-3"
        style={{
          border: '2px solid #B83258',
          borderTop: 'none',
          boxShadow: '3px 3px 0 rgba(184,50,88,0.35)',
        }}
      >
        <div className="grid grid-cols-6 gap-[6px]">
          {items.map((item) => {
            const isText = isTextSticker(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => !isFull && onSelect(item)}
                disabled={isFull}
                className={`
                  aspect-square flex items-center justify-center
                  transition-transform active:scale-90
                  ${isFull ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:-translate-y-0.5'}
                `}
                style={{
                  background: isText ? '#FFFFFF' : '#FFFFFF',
                  border: '1.5px solid #FFC2D4',
                  boxShadow: '1px 1px 0 rgba(184,50,88,0.2)',
                  fontSize: isText ? 9 : 18,
                  fontFamily: isText ? 'Galmuri11, monospace' : undefined,
                  fontWeight: isText ? 700 : undefined,
                  color: isText ? '#B83258' : undefined,
                  lineHeight: 1,
                }}
                title={item}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* 팔레트 하단 힌트 */}
        <p className="mt-2 mb-0 text-[9px] font-pixel text-text-secondary text-right">
          {selectedCount}/3 selected
          {isFull && <span className="ml-1 text-pink-main">■ full</span>}
        </p>
      </div>
    </div>
  );
}
