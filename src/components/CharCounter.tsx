interface CharCounterProps {
  count: number;
  max: number;
}

export default function CharCounter({ count, max }: CharCounterProps) {
  const isNearLimit = count > max * 0.9;

  return (
    <p className={`m-0 text-[11px] font-mono ${isNearLimit ? 'text-pink-main' : 'text-text-tertiary'}`}>
      {count} / {max}
    </p>
  );
}
