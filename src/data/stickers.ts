export type StickerCategoryKey = 'reaction' | 'mood' | 'y2k' | 'deco';

export const stickerCategories: Record<
  StickerCategoryKey,
  { label: string; icon: string; items: string[] }
> = {
  reaction: {
    label: '반응',
    icon: '💬',
    items: [
      'ㅋㅋ', 'ㅠㅠ', 'ㄹㅇ', '헐', 'ㅇㅈ', '공감',
      '대박', '아ㅋ', '맞아', '진짜?', '그니까', '허허',
      '알겠어', '모르겠', '힘들어', '좋아♡', '귀여워', '최고야',
    ],
  },
  mood: {
    label: '기분',
    icon: '🌀',
    items: [
      '😩', '☕', '😴', '🥹', '🥺', '🫠',
      '😮‍💨', '😵‍💫', '🤍', '🥲', '😤', '🤗',
      '🫶', '🙃', '😶‍🌫️', '🫥', '😬', '🤌',
    ],
  },
  y2k: {
    label: 'Y2K',
    icon: '💾',
    items: [
      '💾', '📁', '🖱️', '📀', '🌐', '📟',
      '🎮', '📷', '🖥️', '📺', '⌨️', '🔋',
      '📻', '☎️', '📼', '🕹️', '🔌', '📡',
    ],
  },
  deco: {
    label: '데코',
    icon: '✦',
    items: [
      '♡', '⭐', '✦', '·*:｡', '✨', '⋆',
      '♥', '☆', '★', '◆', '▲', '●',
      '※', '✿', '❀', '⊹', '₊', '˚',
    ],
  },
};

export const tabs: Array<{ key: StickerCategoryKey; label: string; icon: string }> =
  (Object.keys(stickerCategories) as StickerCategoryKey[]).map((key) => ({
    key,
    label: stickerCategories[key].label,
    icon: stickerCategories[key].icon,
  }));

/** 텍스트형 스티커 (한글/영문 짧은 문자열) 여부 */
export const isTextSticker = (item: string) =>
  /^[가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z?!·*:｡⊹₊˚⋆※✿❀▲◆●]+$/.test(item);
