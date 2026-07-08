import CharCounter from './CharCounter';

interface CaptionInputProps {
  value: string;
  onChange: (value: string) => void;
}

const MAX_CAPTION_LENGTH = 30;

export default function CaptionInput({ value, onChange }: CaptionInputProps) {
  return (
    <div className="relative max-w-[340px] mx-auto mb-4 z-[2]">
      <p className="mt-0 mb-2 ml-1 text-[10.5px] text-pink-main font-medium tracking-[0.5px]">⌗ 캡션</p>
      <div className="bg-white border-main border-ink-main py-3 px-[14px] shadow-card-light">
        <input
          type="text"
          value={value}
          maxLength={MAX_CAPTION_LENGTH}
          onChange={(event) => onChange(event.target.value)}
          className="w-full border-none outline-none bg-transparent font-sans text-[14px] text-ink-main p-0"
        />
        <div className="mt-2 h-px bg-effect-dotted-light opacity-50" />
        <div className="mt-2 flex justify-end">
          <CharCounter count={value.length} max={MAX_CAPTION_LENGTH} />
        </div>
      </div>
    </div>
  );
}
