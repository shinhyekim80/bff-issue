const samples = [
  {
    label: 'A · 추천',
    note: '큰 카피 Pretendard / 질문 카드 Gaegu',
    heroClass: 'font-sans text-[27px] font-extrabold tracking-[-0.4px]',
    questionClass: 'font-cute text-[18px] font-bold',
    captionClass: 'font-sans',
  },
  {
    label: 'B · 가장 선명',
    note: '전부 Pretendard, 장식은 배경/스티커로만',
    heroClass: 'font-sans text-[27px] font-extrabold tracking-[-0.4px]',
    questionClass: 'font-sans text-[16px] font-bold',
    captionClass: 'font-sans',
  },
  {
    label: 'C · 손글씨 강함',
    note: '큰 카피 Gaegu / 작은 UI Pretendard',
    heroClass: 'font-cute text-[31px] font-bold tracking-normal',
    questionClass: 'font-sans text-[16px] font-bold',
    captionClass: 'font-sans',
  },
  {
    label: 'D · 편지 톤',
    note: '큰 카피 Pretendard medium / 질문 카드 Nanum Pen',
    heroClass: 'font-sans text-[27px] font-medium tracking-[-0.4px]',
    questionClass: 'font-letter text-[24px] font-normal',
    captionClass: 'font-sans font-normal',
  },
  {
    label: 'D-1 · Gowun Dodum',
    note: '큰 카피 Gowun Dodum / 질문 카드 Nanum Pen',
    heroClass: 'font-gowun text-[27px] font-normal tracking-[-0.2px]',
    questionClass: 'font-letter text-[24px] font-normal',
    captionClass: 'font-sans font-normal',
  },
  {
    label: 'D-2 · Wanted Sans',
    note: '큰 카피 Wanted Sans / 질문 카드 Nanum Pen',
    heroClass: 'font-wanted text-[27px] font-medium tracking-[-0.4px]',
    questionClass: 'font-letter text-[24px] font-normal',
    captionClass: 'font-sans font-normal',
  },
  {
    label: 'D-3 · SUIT',
    note: '큰 카피 SUIT / 질문 카드 Nanum Pen',
    heroClass: 'font-suit text-[27px] font-medium tracking-[-0.4px]',
    questionClass: 'font-letter text-[24px] font-normal',
    captionClass: 'font-sans font-normal',
  },
  {
    label: 'D-4 · 마루부리',
    note: '큰 카피 MaruBuri (명조) / 질문 카드 Nanum Pen',
    heroClass: 'font-maru text-[27px] font-normal tracking-[-0.2px]',
    questionClass: 'font-letter text-[24px] font-normal',
    captionClass: 'font-sans font-normal',
  },
  {
    label: 'D-5 · 나눔명조',
    note: '큰 카피 Nanum Myeongjo / 질문 카드 Nanum Pen',
    heroClass: 'font-myeongjo text-[27px] font-normal tracking-[-0.2px]',
    questionClass: 'font-letter text-[24px] font-normal',
    captionClass: 'font-sans font-normal',
  },
];

function QuestionMiniCard({ questionClass }: { questionClass: string }) {
  return (
    <div className="relative mx-auto mt-5 max-w-[210px] rotate-[-2deg] border-main border-ink-main bg-white px-4 py-4 text-center shadow-card-light">
      <span className="absolute -top-2 left-5 h-3 w-10 rotate-[-4deg] bg-yellow-main shadow-tape" />
      <p className="m-0 font-mono text-[9px] font-bold tracking-[1px] text-pink-main">오늘의 페이지</p>
      <p className={`mt-2 mb-0 leading-snug text-ink-main ${questionClass}`}>
        "요즘 가장
        <br />
        많이 하는 말은?"
      </p>
    </div>
  );
}

function PreviewCard({
  label,
  note,
  heroClass,
  questionClass,
  captionClass,
}: {
  label: string;
  note: string;
  heroClass: string;
  questionClass: string;
  captionClass: string;
}) {
  return (
    <section className="relative border-main border-ink-main bg-white/85 px-4 pb-5 pt-4 shadow-card">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="rounded-pill border-thin border-ink-main bg-pink-very-pale px-3 py-1 text-[11px] font-bold text-pink-main">
          {label}
        </span>
        <span className={`text-right text-[10px] leading-snug text-text-secondary ${captionClass}`}>{note}</span>
      </div>

      <h2 className={`m-0 text-center leading-snug text-ink-main ${heroClass}`}>
        <span className="bg-effect-highlighter px-1">오늘의 한 줄</span>이
        <br />
        한 달 뒤
        <br />
        한 권이 돼요 <span className="text-pink-main">♡</span>
      </h2>

      <QuestionMiniCard questionClass={questionClass} />
    </section>
  );
}

export default function FontPreview() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-grad-main px-4 pb-8 pt-5 font-sans">
      <div className="absolute inset-0 bg-effect-glitter opacity-80 pointer-events-none" />

      <header className="relative z-10 mb-5 text-center">
        <p className="m-0 font-mono text-[10px] font-bold tracking-[1.8px] text-pink-main">BFF ISSUE · FONT TEST</p>
        <h1 className="mt-2 mb-0 text-[22px] font-extrabold tracking-[-0.4px] text-ink-main">폰트 조합 미리보기</h1>
        <p className="mt-2 mb-0 text-[12px] leading-normal text-text-secondary">
          같은 문구로 Pretendard / Gaegu / Nanum Pen 조합을 비교해요
        </p>
      </header>

      <main className="relative z-10 mx-auto flex max-w-[340px] flex-col gap-4">
        {samples.map((sample) => (
          <PreviewCard key={sample.label} {...sample} />
        ))}
      </main>
    </div>
  );
}
