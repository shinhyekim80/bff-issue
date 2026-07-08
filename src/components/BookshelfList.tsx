import VolumeRow from './VolumeRow';

interface VolumeItem {
  vol: number;
  label: string;
  title: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  pagesCount?: number;
  totalDays?: number;
  restCount?: number;
}

interface BookshelfListProps {
  volumes: VolumeItem[];
  onOpenVolume: (vol: number, status: VolumeItem['status']) => void;
}

export default function BookshelfList({ volumes, onOpenVolume }: BookshelfListProps) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        {volumes.map((volume) => (
          <VolumeRow
            key={volume.vol}
            {...volume}
            onClick={volume.status === 'completed' ? () => onOpenVolume(volume.vol, volume.status) : undefined}
          />
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-effect-dotted-h opacity-40" />
        <span className="font-mono text-[9px] tracking-[1.2px] text-text-tertiary">— 책장 선반 —</span>
        <span className="h-px flex-1 bg-effect-dotted-h opacity-40" />
      </div>
    </div>
  );
}
