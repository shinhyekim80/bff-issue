interface PageIndicatorProps {
  total: number;
  current: number;
  onChange: (index: number) => void;
}

export default function PageIndicator({ total, current, onChange }: PageIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: total }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`${index + 1}번째 온보딩 페이지`}
          onClick={() => onChange(index)}
          className={`h-[5px] rounded-pill transition-all ${index === current ? 'w-[18px] bg-pink-main' : 'w-[5px] bg-text-muted'}`}
        />
      ))}
    </div>
  );
}
