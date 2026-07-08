interface OnboardingPage3Props {
  onCreateGroup: () => void;
  onAcceptInvite: () => void;
}

export default function OnboardingPage3({ onCreateGroup, onAcceptInvite }: OnboardingPage3Props) {
  return (
    <div className="mx-auto max-w-[340px]">
      <section className="mb-6 mt-7 text-center">
        <h1 className="m-0 text-[30px] font-medium leading-snug text-ink-main">
          한 달 뒤,
          <br />
          <span className="bg-effect-highlighter px-1">우리만의 한 권</span> <span className="text-pink-main">♡</span>
        </h1>
      </section>

      <section className="relative mx-auto mb-6 max-w-[220px]">
        <span className="absolute -top-2 left-6 z-10 h-[14px] w-12 rotate-[-4deg] bg-yellow-main shadow-tape" />
        <span className="absolute -top-2 right-7 z-10 h-[14px] w-10 rotate-[5deg] bg-blue-main shadow-tape" />
        <span className="absolute right-[-6px] top-4 z-20 rotate-[10deg] bg-pink-main px-2 py-1 font-mono text-[8px] font-bold tracking-[1px] text-white shadow-sticker">
          완성 ♡
        </span>
        <div className="border-main border-ink-main bg-white px-5 pb-5 pt-7 text-center shadow-card-deep">
          <p className="m-0 font-mono text-[9px] font-bold tracking-[1.5px] text-pink-main">BFF ISSUE · vol.01</p>
          <p className="mt-4 mb-0 text-[22px] font-medium leading-tight text-ink-main">
            처음
            <br />
            <span className="bg-effect-highlighter px-1">만난 우리</span>
          </p>
          <div className="mt-4 flex justify-center gap-1">
            {['하', '지', '수', '유'].map((initial, index) => (
              <span
                key={initial}
                className={`flex h-[19px] w-[19px] items-center justify-center border-thin border-ink-main text-[8px] font-bold ${
                  ['bg-yellow-main -rotate-[4deg]', 'bg-green-main rotate-[3deg]', 'bg-blue-main -rotate-[2deg]', 'bg-purple-main rotate-[4deg]'][index]
                }`}
              >
                {initial}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-7 flex flex-wrap justify-center gap-1.5">
        {[
          ['#이달의 말버릇', 'bg-yellow-main -rotate-[2deg]'],
          ['#이달의 짤', 'bg-pink-pastel rotate-[1deg]'],
          ['#4월 무드', 'bg-blue-main -rotate-[1deg]'],
          ['#한 문장 편지', 'bg-purple-main rotate-[2deg]'],
        ].map(([label, cls]) => (
          <span key={label} className={`border-thin border-ink-main px-2.5 py-1 text-[11px] font-bold text-ink-main shadow-sticker ${cls}`}>
            {label}
          </span>
        ))}
      </section>

      <section className="flex flex-col gap-2.5">
        <button
          type="button"
          onClick={onCreateGroup}
          className="relative w-full overflow-hidden rounded-pill border-cta border-ink-main bg-grad-cta p-[15px] text-[16px] font-bold text-white shadow-cta transition-transform active:translate-y-0.5"
        >
          <span className="absolute left-[22%] right-[22%] top-1 h-[5px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.65),transparent)] blur-[1px]" />
          <span className="relative">우리 모임 만들기 ♡</span>
        </button>
        <button
          type="button"
          onClick={onAcceptInvite}
          className="w-full rounded-pill border-main border-ink-main bg-white px-4 py-3 text-[13px] font-bold text-ink-main shadow-sticker transition-transform active:translate-y-0.5"
        >
          친구 초대로 들어왔어요 →
        </button>
      </section>
    </div>
  );
}
