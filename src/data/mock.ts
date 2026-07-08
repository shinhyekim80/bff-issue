export interface Member {
  id: string;
  name: string;
  colorKey: 'haneul' | 'jiwon' | 'sumin' | 'yuna';
  colorClass: string;
  status: 'waiting' | 'locked' | 'resting' | 'completed';
  icon?: string;
  label?: string;
  role?: string;
  emoji?: string;
  bio?: string;
  streak?: number;
}

export const members: Member[] = [
  { id: "haneul", name: "하늘", colorKey: "haneul", colorClass: "yellow", status: "waiting", label: "대기 중", role: "모임장", emoji: "🌤️", bio: "커피 없으면 못 사는 사람. 계획 세우는 거 좋아하고 우리 모임 만든 장본인!", streak: 4 },
  { id: "jiwon",  name: "지원", colorKey: "jiwon",  colorClass: "green",  status: "locked",  icon: "🔒", role: "분위기 메이커", emoji: "🌿", bio: "웃음 포인트가 낮아서 뭐든 웃김. 맛집 찾기 담당이자 우리의 영원한 먹방 친구.", streak: 3 },
  { id: "sumin",  name: "수민", colorKey: "sumin",  colorClass: "blue",   status: "locked",  icon: "🔒", role: "감성 담당", emoji: "🌊", bio: "INFP 대표. 혼자 카페 가서 일기 쓰는 타입. 근데 의외로 드립력 최강.", streak: 2 },
  { id: "yuna",   name: "유나", colorKey: "yuna",   colorClass: "purple", status: "resting", icon: "💤", role: "리액션 장인", emoji: "🔮", bio: "늘 피곤하다면서 놀자고 하면 1초 만에 OK. 이모티콘 장인이자 톡방 분위기 살리미.", streak: 1 }
];

export const todayQuestion = {
  vol: 2,
  weekIndex: 2,
  question: { prefix: "요즘 가장 많이\n", highlight: "하는 말", suffix: "은?" },
  subtitle: "— 친구의 말버릇이 제일 웃긴 법 ʕ•ᴥ•ʔ",
  examples: {
    polaroids: [
      { tone: "pink", text: "\"아 진짜\n죽겠다\"", caption: "출퇴근.zip" },
      { tone: "blue", text: "\"배고픈데\n뭐 먹지\"", caption: "말버릇.zip" }
    ],
    stickers: [
      { tone: "yellow", text: "ㅋㅋㅋ" },
      { tone: "purple", text: "ㅇㅈ" }
    ],
    bubble: { text: "요즘 내 상태 ʕ•ᴥ•ʔ" }
  }
};

// ── Magazine mock data ──
export interface MagazineAnswer {
  memberId: string;
  memberName: string;
  colorKey: 'haneul' | 'jiwon' | 'sumin' | 'yuna';
  answer: string;
  reactions: { emoji: string; count: number }[];
  timestamp: string;
}

export const magazineAnswers: MagazineAnswer[] = [
  {
    memberId: "haneul",
    memberName: "하늘",
    colorKey: "haneul",
    answer: "\"아 진짜 죽겠다\" 하루에 열 번은 말하는 듯... 출근할 때, 퇴근할 때, 밥 먹고 나서도 ㅋㅋㅋ 근데 진짜 죽겠거든??",
    reactions: [{ emoji: "😂", count: 3 }, { emoji: "ㅇㅈ", count: 2 }],
    timestamp: "2시간 전"
  },
  {
    memberId: "jiwon",
    memberName: "지원",
    colorKey: "jiwon",
    answer: "\"그거 맛있어?\" 진짜 하루 종일 이것만 물어봄... 누가 뭘 먹고 있으면 반드시 물어보는 사람. 본인은 매번 같은 거 먹으면서 ㅎ",
    reactions: [{ emoji: "🍔", count: 4 }, { emoji: "ㅋㅋ", count: 2 }],
    timestamp: "5시간 전"
  },
  {
    memberId: "sumin",
    memberName: "수민",
    colorKey: "sumin",
    answer: "\"어 잠깐만\" ...하고 20분 지남. 매번 잠깐이라면서 한참 걸리는 수민이의 시간 개념은 우주 어딘가에 있는 듯",
    reactions: [{ emoji: "⏰", count: 3 }, { emoji: "😅", count: 1 }],
    timestamp: "어제"
  },
  {
    memberId: "yuna",
    memberName: "유나",
    colorKey: "yuna",
    answer: "\"나 오늘 좀 피곤해\" 매일 피곤한 유나... 근데 놀자고 하면 제일 먼저 옴 ㅋㅋ 피곤한 건 맞는데 노는 건 별개래",
    reactions: [{ emoji: "💤", count: 2 }, { emoji: "🤣", count: 3 }],
    timestamp: "어제"
  }
];

export const magazineMeta = {
  vol: 2,
  title: "말버릇 대공개",
  subtitle: "우리가 매일 하는 말의 정체",
  coverEmoji: "🗣️",
  date: "2026년 5월 셋째 주"
};
