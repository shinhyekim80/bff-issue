export default function TableOfContents() {
  const rows = [
    { page: 'PAGE 01', title: '이달의 컷', status: '수록' },
    { page: 'PAGE 02', title: '우리.zip', status: 'v1.5' },
    { page: 'EPILOGUE', title: '한 문장 편지', status: '수록' },
  ];

  return (
    <section className="mx-auto mb-7 max-w-[340px] border-main border-ink-main bg-white px-5 py-5 shadow-card-light">
      <h2 className="m-0 text-[18px] font-bold text-ink-main">목차</h2>
      <div className="mt-4 flex flex-col gap-3">
        {rows.map((row) => (
          <div key={row.page} className="flex items-baseline gap-3 border-b border-dashed border-text-muted/45 pb-2 last:border-b-0 last:pb-0">
            <span className="w-[76px] font-mono text-[9px] tracking-[1.2px] text-pink-main">{row.page}</span>
            <span className="flex-1 text-[14px] font-bold text-ink-main">{row.title}</span>
            <span className="text-[10px] text-text-tertiary">{row.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
