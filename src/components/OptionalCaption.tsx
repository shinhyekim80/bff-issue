interface OptionalCaptionProps {
  value: string;
  onChange: (value: string) => void;
}

export default function OptionalCaption({ value, onChange }: OptionalCaptionProps) {
  return (
    <div className="relative max-w-[340px] mx-auto mb-5 z-[2]">
      <p className="mt-0 mb-2 ml-1 text-[10.5px] text-pink-main font-medium tracking-[0.5px]">
        ⌗ 한마디 (선택)
      </p>
      <div className="relative bg-white border-2 border-pink-main rounded-bubble-left py-[14px] px-[18px] shadow-card">
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="한마디 더할래?"
          className="w-full border-none outline-none bg-transparent font-sans text-[14px] text-ink-main p-0 placeholder:text-text-tertiary"
        />
        <p className="mt-2 mb-0 text-[9.5px] text-text-tertiary italic">비워두어도 괜찮아요 ᵕ̈</p>
      </div>
    </div>
  );
}
