/**
 * VintageScrollbar — 옛날 Windows 핑크 fake scrollbar (시각 데코)
 * 우측 column으로 absolute position. parent에 relative + padding-right 18~26px 필요.
 *
 * 사용법:
 *   <div className="relative pr-[26px]">
 *     <VintageScrollbar />
 *     <YourContent />
 *   </div>
 */

type VintageScrollbarProps = {
  /** 스크롤 thumb 위치 0~100 (기본 18) */
  thumbTop?: number;
  /** 스크롤 thumb 높이 0~100 (기본 42) */
  thumbHeight?: number;
};

export default function VintageScrollbar({
  thumbTop = 18,
  thumbHeight = 42,
}: VintageScrollbarProps) {
  return (
    <div
      className="absolute top-0 bottom-0 right-0 w-[18px] flex flex-col select-none pointer-events-none"
      style={{
        background: '#FFEDF3',
        borderLeft: '1px solid #FFC2D4',
      }}
    >
      {/* 위 화살표 */}
      <div
        className="w-full h-[18px] flex items-center justify-center text-[8px] text-pink-deep leading-none"
        style={{
          background: 'linear-gradient(180deg, #FFFBF0 0%, #FFD9E5 100%)',
          borderBottom: '1px solid #FFC2D4',
        }}
      >
        ▲
      </div>

      {/* 트랙 + thumb */}
      <div className="flex-1 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 50%, #FFC2D4 1px, transparent 1.5px)',
            backgroundSize: '4px 4px',
          }}
        />
        <div
          className="absolute left-[2px] right-[2px]"
          style={{
            top: `${thumbTop}%`,
            height: `${thumbHeight}%`,
            background:
              'linear-gradient(180deg, #FFB1C9 0%, #FF77A0 50%, #E63D70 100%)',
            border: '1px solid #B83258',
            boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.6)',
          }}
        />
      </div>

      {/* 아래 화살표 */}
      <div
        className="w-full h-[18px] flex items-center justify-center text-[8px] text-pink-deep leading-none"
        style={{
          background: 'linear-gradient(180deg, #FFD9E5 0%, #FFFBF0 100%)',
          borderTop: '1px solid #FFC2D4',
        }}
      >
        ▼
      </div>
    </div>
  );
}
