export default function OnboardingPage2() {
  return (
    <div className="mx-auto max-w-[340px]">
      <section className="mb-7 mt-7 text-center">
        <h1 className="m-0 text-[30px] font-medium leading-snug text-ink-main">
          <span className="bg-effect-highlighter px-1">내가 답하면</span>
          <br />
          친구 페이지가 열려요
        </h1>
        <p className="mt-3 mb-0 text-[13px] italic text-text-secondary">— 글 한 줄도, 사진 한 장도 일기 ⋆｡˚</p>
      </section>

      <section className="mb-7">
        <p className="mb-3 ml-1 mt-0 text-[12px] font-bold text-pink-main">⌗ 답변 방식 2가지</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: '📝', title: '한 줄', sub: '글로', bg: 'bg-polaroid-pink', rotate: '-rotate-[2deg]' },
            { icon: '📷', title: '짤·사진', sub: '사진으로', bg: 'bg-polaroid-blue', rotate: 'rotate-[1deg]' },
          ].map((item) => (
            <div key={item.title} className={`border-main border-ink-main bg-white px-2 py-3 text-center shadow-card-light ${item.rotate}`}>
              <div className={`mx-auto mb-2 flex h-9 w-9 items-center justify-center border-thin border-ink-main ${item.bg} text-[17px]`}>
                {item.icon}
              </div>
              <p className="m-0 text-[12px] font-bold text-ink-main">{item.title}</p>
              <p className="mt-1 mb-0 text-[9px] text-text-secondary">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="mb-3 ml-1 mt-0 text-[12px] font-bold text-pink-main">⌗ 교환 구조</p>
        <div className="flex items-center justify-center gap-2 border-main border-ink-main bg-cream-main px-3 py-4 shadow-card-light">
          {[
            { initial: '하', color: 'bg-yellow-main', label: '나', mark: '✓' },
            { initial: '지', color: 'bg-green-main', label: '♡ 열림', mark: '✦' },
            { initial: '수', color: 'bg-blue-main', label: '♡ 열림', mark: '✦' },
          ].map((item, index) => (
            <div key={item.initial} className="flex items-center gap-2">
              {index > 0 && <span className="text-[15px] font-bold text-pink-main">→</span>}
              <div className="text-center">
                <div className={`relative mx-auto mb-1 flex h-10 w-10 items-center justify-center border-thin border-ink-main ${item.color} text-[14px] font-bold shadow-sticker`}>
                  {item.initial}
                  <span className="absolute -right-1.5 -top-2 text-[12px] text-pink-main">{item.mark}</span>
                </div>
                <p className={`m-0 text-[10px] font-bold ${index === 0 ? 'text-ink-main' : 'text-pink-main'}`}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 mb-0 text-center text-[11px] italic text-text-secondary">— 내 페이지를 채우면 친구 페이지가 열려요 ʕ•ᴥ•ʔ</p>
      </section>
    </div>
  );
}
