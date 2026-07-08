interface SubmitPillButtonProps {
  disabled?: boolean;
  disabledLabel: string;
  onClick: () => void;
}

export default function SubmitPillButton({ disabled = false, disabledLabel, onClick }: SubmitPillButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`relative w-full border-cta rounded-pill p-[15px] text-[15.5px] font-medium font-sans tracking-normal overflow-hidden transition-transform active:scale-[0.98] ${
        disabled
          ? 'bg-[#E5D8DC] text-text-tertiary border-text-muted cursor-not-allowed'
          : 'bg-grad-cta text-white border-ink-main shadow-cta cursor-pointer'
      }`}
    >
      {!disabled && (
        <span className="absolute top-1 left-[22%] right-[22%] h-[5px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full blur-[1px]" />
      )}
      <span className="relative">{disabled ? disabledLabel : '완료! ✦'}</span>
    </button>
  );
}
