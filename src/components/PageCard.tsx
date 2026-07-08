type ResponseColor = 'yellow' | 'green' | 'blue' | 'purple';

export type FriendResponse =
  | {
      member: string;
      name: string;
      color: ResponseColor;
      type: 'text';
      content: string;
      isMe?: boolean;
      arrivedAt: string;
    }
  | {
      member: string;
      name: string;
      color: ResponseColor;
      type: 'photo';
      content: { emoji: string; caption: string; oneLine: string };
      arrivedAt: string;
    }
  | {
      member: string;
      name: string;
      color: ResponseColor;
      type: 'sticker';
      content: { caption: string; stickers: string[] };
      arrivedAt: string;
    }
  | {
      member: string;
      name: string;
      color: ResponseColor;
      type: 'rest';
      content: string;
    };

interface PageCardProps {
  item: FriendResponse;
  index: number;
}

const colorClassMap: Record<ResponseColor, string> = {
  yellow: 'bg-yellow-main',
  green: 'bg-green-main',
  blue: 'bg-blue-main',
  purple: 'bg-purple-main',
};

const rotations = ['-0.8deg', '0.6deg', '-0.4deg', '0.6deg'];
const typeMetaMap = {
  text: '— 글',
  photo: '— 짤·사진',
  sticker: '— 스티커',
  rest: '— 쉬는 페이지',
};

function MemberLabel({ item }: { item: FriendResponse }) {
  return (
    <div className={`absolute -top-[7px] left-2.5 ${colorClassMap[item.color]} border-thin border-ink-main py-[3px] px-2 text-[9.5px] font-medium text-ink-main rotate-[-3deg] shadow-sticker`}>
      {item.name}{item.type === 'text' && item.isMe ? ' (나)' : ''}
    </div>
  );
}

function Meta({ item }: { item: FriendResponse }) {
  const arrivedAt = 'arrivedAt' in item ? `  ·  ${item.arrivedAt}` : '';

  return (
    <p className="mt-3 mb-0 text-meta text-text-accent text-right italic">
      {typeMetaMap[item.type]}{arrivedAt}
    </p>
  );
}

export default function PageCard({ item, index }: PageCardProps) {
  const isRest = item.type === 'rest';

  return (
    <div
      className={`relative border-main p-4 px-[14px] pb-3 mb-[14px] ${
        isRest
          ? 'bg-purple-pastel-deep border-dashed border-purple-border'
          : 'bg-white border-ink-main shadow-card-light'
      }`}
      style={{ transform: `rotate(${rotations[index % rotations.length]})` }}
    >
      <MemberLabel item={item} />

      {item.type === 'text' && (
        <p className="mt-3 mb-0 text-[16px] text-ink-main font-medium leading-relaxed text-center">
          {item.content}
        </p>
      )}

      {item.type === 'photo' && (
        <div className="mt-[14px] mx-auto relative max-w-[180px]">
          <div className="bg-white border-main border-ink-main p-2 pb-[22px] rotate-[-3deg] shadow-card-medium">
            <div className="aspect-square bg-gradient-to-br from-green-pastel to-green-pastel-light flex items-center justify-center">
              <span className="text-[38px]">{item.content.emoji}</span>
            </div>
            <p className="mt-1.5 mb-0 text-meta text-text-secondary text-center font-mono">{item.content.caption}</p>
          </div>
          <div className="absolute -bottom-[14px] -right-3 bg-white border-2 border-pink-main rounded-bubble-left py-1.5 px-3 rotate-[4deg] shadow-[2px_2px_0_rgba(255,92,138,0.22)]">
            <p className="m-0 text-[11px] text-ink-main font-medium whitespace-nowrap">{item.content.oneLine}</p>
          </div>
        </div>
      )}

      {item.type === 'sticker' && (
        <div className="mt-[14px] text-center">
          <p className="m-0 text-[13px] text-ink-main font-medium">{item.content.caption}</p>
          <div className="mt-3 mx-auto flex gap-2 justify-center">
            {item.content.stickers.map((sticker, stickerIndex) => {
              const bgClass = ['bg-yellow-main', 'bg-pink-pastel', 'bg-blue-main'][stickerIndex] ?? 'bg-purple-main';
              const rotate = ['rotate-[-5deg]', 'rotate-[4deg]', 'rotate-[-2deg]'][stickerIndex] ?? '';

              return (
                <div key={`${sticker}-${stickerIndex}`} className={`${bgClass} ${rotate} border-thin border-ink-main py-2.5 px-[14px] shadow-sticker text-[20px]`}>
                  {sticker}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {item.type === 'rest' && (
        <div className="mt-[18px] text-center">
          <span className="text-[32px]">💤</span>
          <p className="mt-2 mb-0 text-[12px] text-[#553D7A] italic">{item.content}</p>
        </div>
      )}

      <Meta item={item} />
    </div>
  );
}
