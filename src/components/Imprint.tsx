interface ImprintProps {
  groupName: string;
  yearMonth: string;
}

export default function Imprint({ groupName, yearMonth }: ImprintProps) {
  return (
    <section className="mx-auto mb-6 max-w-[340px] border-y-main border-dashed border-text-muted py-5 text-center">
      <p className="m-0 font-mono text-[9px] tracking-[1.5px] text-text-tertiary">BFF ISSUE MONTHLY MAGAZINE</p>
      <p className="mt-2 mb-0 text-[12px] text-text-secondary">{groupName} · {yearMonth}</p>
      <p className="mt-2 mb-0 font-mono text-[9px] tracking-[1px] text-text-muted">printed in tiny everyday moments</p>
    </section>
  );
}
