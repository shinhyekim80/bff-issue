
interface JellyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function JellyButton({ children, onClick, className = '', disabled = false }: JellyButtonProps) {
  return (
    <div className={`relative flex justify-center w-full ${className}`}>
      {/* CTA 옆 ✦ 데코 */}
      {!disabled && (
        <div className="absolute -top-2.5 right-4 text-[16px] text-pink-main rotate-[15deg] z-10 pointer-events-none animate-pulse-slow">✦</div>
      )}
      
      <button 
        onClick={onClick}
        disabled={disabled}
        className={`relative w-full border-2 border-white/20 rounded-pill p-[15px] text-[16px] font-bold cursor-pointer overflow-hidden transition-all duration-300 active:scale-95 ${
          disabled 
            ? 'bg-text-muted text-white/60 cursor-not-allowed' 
            : 'bg-grad-cta text-white hover:shadow-[0_8px_25px_rgba(255,92,138,0.4)]'
        }`}
        style={{ boxShadow: disabled ? 'none' : '0 4px 15px rgba(255,92,138,0.25)' }}
      >
        {/* 글로시 하이라이트 */}
        <span className="absolute top-1 left-[20%] right-[20%] h-[6px] rounded-full blur-[2px] opacity-70" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)' }}></span>
        <span className="relative z-10 drop-shadow-sm">{children}</span>
      </button>
    </div>
  );
}
