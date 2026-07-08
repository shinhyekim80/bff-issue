const reactions = [
  { icon: '♡', label: '마음', action: 'heart' },
  { icon: '✦', label: '반짝', action: 'sparkle' },
  { icon: '💌', label: '한마디', action: 'letter' },
];

export default function ReactionBar() {
  return (
    <div className="relative max-w-[320px] mx-auto mt-7 z-[2]">
      <p className="mt-0 mb-3 text-center text-[11.5px] text-text-secondary italic">
        친구 페이지에 마음을 남겨보세요 ʕ•ᴥ•ʔ
      </p>

      <div className="bg-white border-main border-ink-main py-3 px-4 shadow-card-light flex items-center justify-center gap-4">
        {reactions.map((reaction, index) => (
          <div key={reaction.action} className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => console.log('reaction:', reaction.action)}
              className="bg-transparent border-none cursor-pointer font-sans flex flex-col items-center gap-1"
            >
              <span className="text-[22px]">{reaction.icon}</span>
              <span className="text-meta text-text-secondary">{reaction.label}</span>
            </button>
            {index < reactions.length - 1 && (
              <div className="w-px h-6 bg-[repeating-linear-gradient(to_bottom,#C4A8B0_0,#C4A8B0_3px,transparent_3px,transparent_6px)] opacity-50" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
