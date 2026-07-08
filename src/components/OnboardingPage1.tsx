export default function OnboardingPage1() {
  return (
    <div className="mx-auto max-w-[340px]">
      <section className="mb-8 mt-8 text-center">
        <h1 className="m-0 text-[31px] font-medium leading-snug text-ink-main">
          <span className="bg-effect-highlighter px-1">오늘의 한 줄</span>이
          <br />
          한 달 뒤
          <br />
          한 권이 돼요 <span className="text-pink-main">♡</span>
        </h1>
      </section>

      <section>
        <div className="relative mx-auto max-w-[205px] rotate-[-3deg] border-main border-ink-main bg-white px-4 py-4 text-center shadow-card-light">
          <span className="absolute -top-2 left-5 h-3 w-10 rotate-[-4deg] bg-yellow-main shadow-tape" />
          <p className="m-0 font-mono text-[9px] font-bold tracking-[1px] text-pink-main">오늘의 페이지</p>
          <p className="mt-2 mb-0 text-[15px] font-bold leading-tight text-ink-main">
            "요즘 가장
            <br />
            많이 하는 말은?"
          </p>
        </div>

        <p className="my-5 text-center text-[13px] italic text-text-secondary">
          <span className="inline-block rotate-90 text-pink-main">→</span>
          <span className="mx-2">한 달간 모이면 ⋆</span>
          <span className="inline-block rotate-90 text-pink-main">→</span>
        </p>

        <div className="relative mx-auto max-w-[240px]">
          <span className="absolute -top-2 left-6 z-10 h-3 w-12 rotate-[-4deg] bg-yellow-main shadow-tape" />
          <span className="absolute -top-2 right-7 z-10 h-3 w-10 rotate-[5deg] bg-blue-main shadow-tape" />
          <span className="absolute right-[-6px] top-4 z-20 rotate-[10deg] bg-pink-main px-2 py-1 font-mono text-[8px] font-bold tracking-[1px] text-white shadow-sticker">
            완성 ♡
          </span>
          <div className="border-main border-ink-main bg-white px-5 pb-5 pt-7 text-center shadow-card-deep">
            <p className="m-0 font-mono text-[9px] font-bold tracking-[1.5px] text-pink-main">BFF ISSUE · vol.01</p>
          <p className="mt-4 mb-0 text-[24px] font-medium leading-tight text-ink-main">
              처음
              <br />
              <span className="bg-effect-highlighter px-1">만난 우리</span>
            </p>
            <div className="mt-4 flex justify-center gap-1.5">
              {[
                ['하', 'bg-yellow-main', '-rotate-[4deg]'],
                ['지', 'bg-green-main', 'rotate-[3deg]'],
                ['수', 'bg-blue-main', '-rotate-[2deg]'],
                ['유', 'bg-purple-main', 'rotate-[4deg]'],
              ].map(([initial, color, rotate]) => (
                <span key={initial} className={`flex h-5 w-5 items-center justify-center border-thin border-ink-main ${color} ${rotate} text-[9px] font-bold`}>
                  {initial}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
