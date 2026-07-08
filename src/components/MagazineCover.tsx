interface MemberInitial {
  name: string;
  initial: string;
  color: 'yellow' | 'green' | 'blue' | 'purple';
}

interface MagazineCoverProps {
  vol: number;
  monthLabel: string;
  title: string;
  groupName: string;
  members: MemberInitial[];
}

const colorClass = {
  yellow: 'bg-yellow-main',
  green: 'bg-green-main',
  blue: 'bg-blue-main',
  purple: 'bg-purple-main',
};

export default function MagazineCover({ vol, monthLabel, title, groupName, members }: MagazineCoverProps) {
  const rotations = ['-rotate-[4deg]', 'rotate-[2deg]', '-rotate-[2deg]', 'rotate-[4deg]'];

  return (
    <section className="relative mx-auto mb-7 max-w-[340px]">
      <span className="absolute -top-2 left-8 z-10 h-[18px] w-[68px] rotate-[-4deg] bg-yellow-main shadow-tape" />
      <span className="absolute -top-2 right-10 z-10 h-[18px] w-[54px] rotate-[5deg] bg-blue-main shadow-tape" />
      <span className="absolute -right-1 top-7 z-20 rotate-[10deg] border-main border-ink-main bg-pink-main px-3 py-1 text-[11px] font-bold text-white shadow-sticker">
        vol.{String(vol).padStart(2, '0')} 출간 ♡
      </span>

      <div className="border-main border-ink-main bg-white px-5 pb-7 pt-9 text-center shadow-card-deep">
        <p className="m-0 font-mono text-[10px] tracking-[1.8px] text-pink-main">
          vol.{String(vol).padStart(2, '0')} · {monthLabel}
        </p>

        <h1 className="mx-auto mt-7 mb-0 max-w-[250px] text-[34px] font-medium leading-tight text-ink-main">
          {title.split('만난 우리')[0]}
          <span className="bg-effect-highlighter px-1">만난 우리</span>
        </h1>

        <p className="mt-4 mb-0 text-[12px] italic text-text-secondary">— {groupName} ⋆｡‧˚ʚ♡ɞ˚‧｡⋆</p>

        <div className="mx-auto my-5 h-px max-w-[210px] bg-effect-dotted-light" />

        <div className="flex justify-center gap-2.5">
          {members.map((member, index) => (
            <span
              key={member.name}
              className={`flex h-10 w-10 items-center justify-center border-main border-ink-main ${colorClass[member.color]} ${
                rotations[index]
              } text-[18px] font-bold shadow-sticker`}
              title={member.name}
            >
              {member.initial}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
