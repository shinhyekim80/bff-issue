interface DialogBackdropProps {
  onClick: () => void;
}

export default function DialogBackdrop({ onClick }: DialogBackdropProps) {
  return (
    <button
      type="button"
      aria-label="다이얼로그 닫기"
      onClick={onClick}
      className="fixed inset-0 z-50 cursor-default bg-[rgba(255,235,245,0.55)] backdrop-blur-[1px]"
    />
  );
}
