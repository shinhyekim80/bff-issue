import EmptyPageCard from './EmptyPageCard';

interface EmptyPage {
  vol: number;
  weekLabel: string;
  day: string;
  date: string;
  question: string;
}

interface EmptyPagesListProps {
  pages: EmptyPage[];
  onOpenPage: (page: EmptyPage) => void;
}

export default function EmptyPagesList({ pages, onOpenPage }: EmptyPagesListProps) {
  return (
    <div className="flex flex-col gap-3">
      {pages.map((page) => (
        <EmptyPageCard key={`${page.day}-${page.date}`} {...page} onClick={() => onOpenPage(page)} />
      ))}
    </div>
  );
}
