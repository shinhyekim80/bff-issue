import { useEffect, useRef, useState, type ChangeEvent } from 'react';

interface PhotoPickerProps {
  onSelectedChange: (selected: boolean) => void;
}

export default function PhotoPicker({ onSelectedChange }: PhotoPickerProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    onSelectedChange(Boolean(previewUrl));
  }, [onSelectedChange, previewUrl]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const openPicker = () => inputRef.current?.click();

  return (
    <div className="relative max-w-[340px] mx-auto mb-[18px] z-[2]">
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

      {previewUrl ? (
        <div className="relative bg-white border-main border-ink-main p-[14px] pb-9 shadow-card-medium max-w-[260px] mx-auto rotate-[-2deg]">
          <div className="relative aspect-square bg-polaroid-pink overflow-hidden">
            <img src={previewUrl} alt="선택한 사진" className="h-full w-full object-cover" />
            <span className="absolute top-2 right-2 text-[11px] text-pink-main">♡</span>
          </div>
          <p className="mt-3 mb-0 text-label text-text-secondary text-center font-mono">2026 / 05 / 13</p>
          <button
            type="button"
            onClick={openPicker}
            className="absolute top-2 left-2 bg-white border-thin border-ink-main px-2 py-[3px] text-meta font-medium font-sans cursor-pointer shadow-sticker"
          >
            다시
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={openPicker}
          className="w-full min-h-[220px] bg-white/80 border-main border-dashed border-text-muted flex flex-col items-center justify-center gap-2 text-center cursor-pointer shadow-card-light active:scale-[0.99]"
        >
          <span className="text-[44px] opacity-70">📷</span>
          <span className="text-[17px] text-ink-main font-medium">사진첩에서 한 장</span>
          <span className="text-[11px] text-text-tertiary italic">짤 1장이면 충분해요 ʕ•ᴥ•ʔ</span>
        </button>
      )}

      {previewUrl && (
        <p className="mt-3 mb-0 text-center text-[10.5px] text-text-secondary italic">
          — 짤 1장이면 충분해요 ʕ•ᴥ•ʔ
        </p>
      )}
    </div>
  );
}
