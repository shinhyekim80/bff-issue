interface ColophonProps {
  yearMonth: string;
  startDate: string;
  endDate: string;
  arrivedCount: number;
  restCount: number;
}

export default function Colophon({ yearMonth, startDate, endDate, arrivedCount, restCount }: ColophonProps) {
  return (
    <section className="mx-auto mb-6 max-w-[340px] border-main border-ink-main bg-cream-main px-5 py-5 shadow-card-light">
      <p className="m-0 font-mono text-[10px] tracking-[1.4px] text-text-tertiary">COLOPHON</p>
      <h2 className="mt-2 mb-0 text-[20px] font-bold text-ink-main">{yearMonth}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 text-[12px] text-text-secondary">
        <div>
          <p className="m-0 text-[10px] text-text-tertiary">발행 기간</p>
          <p className="mt-1 mb-0 font-mono text-[11px] text-ink-main">
            {startDate}
            <br />
            — {endDate}
          </p>
        </div>
        <div>
          <p className="m-0 text-[10px] text-text-tertiary">수록 기록</p>
          <p className="mt-1 mb-0 text-[13px] font-bold text-ink-main">
            {arrivedCount}개 도착
            <br />
            {restCount}개 쉬어감
          </p>
        </div>
      </div>
    </section>
  );
}
