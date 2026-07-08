interface PreviewMember {
  initial?: string;
  color: 'yellow' | 'green' | 'blue' | 'purple';
  filled?: boolean;
}

interface InvitePreviewCardProps {
  groupName: string;
  members: PreviewMember[];
}

const memberStyles = {
  yellow: { bg: 'bg-yellow-main', border: 'border-ink-main', text: 'text-ink-main' },
  green: { bg: 'bg-green-main/45', border: 'border-green-main', text: 'text-[#5A7A65]' },
  blue: { bg: 'bg-blue-main/45', border: 'border-blue-main', text: 'text-[#5A7A85]' },
  purple: { bg: 'bg-purple-main/45', border: 'border-purple-border', text: 'text-[#553D7A]' },
};

export default function InvitePreviewCard({ groupName, members }: InvitePreviewCardProps) {
  const rotations = ['-rotate-[4deg]', 'rotate-[3deg]', '-rotate-[2deg]', 'rotate-[4deg]'];

  return (
    <div className="relative mx-auto max-w-[280px]">
      <span className="absolute -top-2 left-9 z-10 h-[14px] w-[50px] rotate-[-4deg] bg-yellow-main shadow-tape" />
      <span className="absolute -top-2 right-10 z-10 h-[14px] w-[42px] rotate-[5deg] bg-blue-main shadow-tape" />

      <div className="border-main border-ink-main bg-white px-5 pb-5 pt-7 text-center shadow-card-deep">
        <p className="m-0 font-mono text-[10px] font-bold tracking-[1.5px] text-pink-main">BFF ISSUE · 새 모임</p>
        <h2 className="mt-4 mb-0 text-[23px] font-bold leading-tight text-ink-main">{groupName}</h2>
        <p className="mt-3 mb-0 text-[11px] italic text-text-secondary">— 4인의 페이지 ʕ•ᴥ•ʔ</p>

        <div className="mt-5 flex justify-center gap-1.5">
          {members.map((member, index) => {
            const styles = memberStyles[member.color];
            return (
              <span
                key={`${member.color}-${index}`}
                className={`flex h-[31px] w-[31px] items-center justify-center border-thin ${
                  member.filled ? 'border-ink-main' : `${styles.border} border-dashed`
                } ${styles.bg} ${styles.text} ${rotations[index]} text-[13px] font-bold shadow-sticker`}
              >
                {member.filled ? member.initial : '?'}
              </span>
            );
          })}
        </div>

        <p className="mt-4 mb-0 text-[11px] font-bold text-text-accent">한 자리가 비어 있어요 ⋆</p>
      </div>
    </div>
  );
}
