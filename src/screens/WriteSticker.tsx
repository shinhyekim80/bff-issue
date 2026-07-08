import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StickerCategoryTabs from '../components/StickerCategoryTabs';
import StickerGrid from '../components/StickerGrid';
import StickerSlot from '../components/StickerSlot';
import SubmitPillButton from '../components/SubmitPillButton';
import WriteShell from '../components/WriteShell';
import type { StickerCategoryKey } from '../data/stickers';

export default function WriteSticker() {
  const navigate = useNavigate();
  const [category, setCategory] = useState<StickerCategoryKey>('reaction');
  const [stickers, setStickers] = useState<string[]>([]);

  const handleSelect = (sticker: string) => {
    if (stickers.length >= 3) return;
    setStickers((current) => [...current, sticker]);
  };

  const handleRemove = (index: number) => {
    setStickers((current) => current.filter((_, currentIndex) => currentIndex !== index));
  };

  return (
    <WriteShell current="sticker" minHeightClass="min-h-[780px]">
      <div className="relative mx-auto mb-5 max-w-[340px] border-main border-ink-main bg-white px-4 py-5 shadow-card-deep z-[2]">
        <div className="absolute -top-2 left-8 h-[18px] w-[58px] rotate-[-4deg] bg-yellow-main shadow-tape" />
        <div className="absolute -top-2 right-10 h-[18px] w-[52px] rotate-[5deg] bg-blue-main shadow-tape" />

        <p className="m-0 text-center text-[11px] font-medium tracking-[1.2px] text-pink-main">
          sticker board
        </p>
        <h2 className="m-0 mt-2 text-center text-[20px] font-bold leading-tight text-ink-main">
          오늘의 상태를<br />
          스티커 3개로 붙여봐요 ✦
        </h2>

        <div className="mx-auto mt-5 flex min-h-[78px] max-w-[250px] items-center justify-center gap-3 border-thin border-dashed border-text-muted/60 bg-pink-very-pale px-4 py-4">
          {[0, 1, 2].map((index) => (
            <StickerSlot
              key={index}
              index={index}
              sticker={stickers[index]}
              onRemove={() => handleRemove(index)}
            />
          ))}
        </div>

        <p className="mt-3 mb-0 text-center text-[10.5px] italic text-text-secondary">
          — 최대 3개까지 붙일 수 있어요 ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა
        </p>
      </div>

      <StickerCategoryTabs active={category} onChange={setCategory} />
      <StickerGrid category={category} selectedCount={stickers.length} onSelect={handleSelect} />

      <div className="relative mx-auto max-w-[340px] z-[2]">
        <SubmitPillButton
          disabled={stickers.length === 0}
          disabledLabel="스티커를 골라주세요"
          onClick={() => {
            if (stickers.length > 0) navigate('/complete');
          }}
        />
      </div>
    </WriteShell>
  );
}
