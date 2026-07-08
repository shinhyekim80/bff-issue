interface StepItem {
  title: string;
  description?: string;
}

interface NumberedStepListProps {
  steps: StepItem[];
}

export default function NumberedStepList({ steps }: NumberedStepListProps) {
  return (
    <div className="border-main border-ink-main bg-cream-main px-4 py-4 shadow-card-light">
      {steps.map((step, index) => (
        <div
          key={step.title}
          className="flex gap-3 border-b border-dashed border-text-muted/45 py-1.5 first:pt-0 last:border-b-0 last:pb-0"
        >
          <span className="min-w-[24px] font-mono text-[11px] font-bold text-pink-main">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p className="m-0 flex-1 text-[13px] leading-normal text-ink-main">
            <span className="font-bold">{step.title}</span>
            {step.description && <span className="text-text-secondary"> {step.description}</span>}
          </p>
        </div>
      ))}
    </div>
  );
}
