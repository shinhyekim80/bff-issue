
interface HighlighterTextProps {
  children: React.ReactNode;
  color?: 'yellow' | 'pink' | 'blue';
}

export default function HighlighterText({ children, color = 'yellow' }: HighlighterTextProps) {
  const colorMap: Record<string, string> = {
    yellow: 'bg-effect-highlighter',
    // In actual implementation, we might need different gradients for different colors,
    // but the design token currently only provides yellow for highlighter.
    // If needed, we can define inline styles or extend tailwind config.
  };

  return (
    <span className={`${colorMap[color] || colorMap.yellow} px-1.5`}>
      {children}
    </span>
  );
}
