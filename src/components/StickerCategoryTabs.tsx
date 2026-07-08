import { tabs } from '../data/stickers';
import type { StickerCategoryKey } from '../data/stickers';

interface Props {
  active: StickerCategoryKey;
  onChange: (category: StickerCategoryKey) => void;
}

export default function StickerCategoryTabs({ active, onChange }: Props) {
  return (
    <div className="relative max-w-[340px] mx-auto mb-0 z-[2]">
      {/* 탭 바 — Win95 툴바 풍 */}
      <div
        className="flex"
        style={{ borderBottom: '2px solid #B83258' }}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              className="flex-1 flex items-center justify-center gap-1 py-[6px] px-1 font-pixel text-[10px] cursor-pointer transition-colors"
              style={{
                background: isActive
                  ? '#FFFFFF'
                  : '#FFEDF3',
                color: isActive ? '#B83258' : '#8B6B5A',
                fontWeight: isActive ? 700 : 400,
                border: '1px solid #B83258',
                borderBottom: isActive ? '2px solid #FFFFFF' : '1px solid #B83258',
                marginBottom: isActive ? '-2px' : 0,
                position: 'relative',
                zIndex: isActive ? 2 : 1,
              }}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
