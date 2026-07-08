# BFF ISSUE — 디자인 시스템

> 친구 그룹이 매주 같은 질문에 답하고 교환 매거진을 만드는 한국 모바일 앱 (375px).
> 모든 새 화면은 이 가이드를 따라 동일한 톤으로 구현됩니다.

## 1. 톤 (Aesthetic)

**Windows XP / MSN 메신저 핑크 리스킨 + Y2K 잡지 키치**

레퍼런스:
- Windows XP / MS Word / Paint 옛날 OS chrome (핑크 리스킨)
- NDS Pictochat / Paperchat (픽셀 키보드, chat 윈도우)
- SM Town 2009, Tommy february⁶ (한국 Y2K)
- mishca, MSN Messenger 풍 친구 리스트

피해야 할 것:
- Modern flat design (지나치게 깔끔)
- Material Design 그림자/elevation
- iOS 17 SF Symbols 톤
- 영미권 Barbie 핑크 (너무 무거움)

## 2. 컬러

| 토큰 | HEX | 용도 |
|---|---|---|
| `pink-main` | `#FF5C8A` | primary fill, 강조 |
| `pink-deep` | `#E63D70` | hover, 강한 강조 |
| `pink-wine` | `#B83258` | 보더, 진한 텍스트 |
| `pink-pastel` | `#FFD9E5` | 보조 fill, 트랙 |
| `pink-very-pale` | `#FFEDF3` | 배경, 카드 |
| `pink-border-light` | `#FFC2D4` | 보조 보더 |
| `ink-main` | `#1A1A1A` | 본문 텍스트 |
| `cream-main` | `#FFFBF0` | 캔버스 배경 |
| `newtro-yellow` | `#FFD700` | 액센트 (사용 자제) |

규칙:
- 메인 보더는 항상 `#B83258` (pink-wine) 1.5~2px
- 보조 보더는 `#FFC2D4` (pink-border-light) 1px
- 그림자는 `3px 3px 0 rgba(184,50,88,0.45)` (hard shadow, NO blur)
- 그라데이션 = 핑크 light → main → deep 세로 방향

## 3. 폰트

`tailwind.config.js`의 fontFamily:

| Class | 폰트 | 용도 |
|---|---|---|
| `font-sans` | SUIT | 본문, 부제, 버튼 (기본) |
| `font-display` | Dongle | 큰 메인 카피 (28~48px) |
| `font-pixel` | Galmuri11 | 작은 UI chrome (8~12px) — 메뉴/툴바/상태바/모노 |
| `font-pixel-sm` | Galmuri9 | 매우 작은 픽셀 (8px) |
| `font-pixel-lg` | Galmuri14 | 큰 픽셀 강조 (14~18px) |
| `font-letter` | Nanum Pen Script | (사용 자제) 손글씨 톤 필요시 |

규칙:
- **본문 한글 = SUIT** (가독성)
- **헤드라인 한글 = Dongle font-bold** (둥글둥글 임팩트)
- **UI chrome (메뉴/상태바/모노) = Galmuri** (픽셀)
- 모노 텍스트는 항상 `font-pixel tracking-tight`

## 4. 공통 컴포넌트 — `src/components/win/`

모든 화면은 이 폴더에서 import:

```tsx
import {
  WindowFrame,
  StatusBar,
  ToolbarIcon,
  ToolbarDivider,
  StatusDot,
  VintageScrollbar,
  DialogButton,
} from '../components/win';
```

### `WindowFrame`
모든 화면의 메인 윈도우 컨테이너. 타이틀바 + (옵션) 메뉴바 + children.

```tsx
<WindowFrame
  title="BFF ISSUE"
  filename="vol02_today.doc"
  showMenuBar
  menuItems={['File', 'Edit', 'View', 'Help']}
>
  {/* 본문 */}
</WindowFrame>
```

Props: `title`, `filename?`, `showMenuBar?`, `menuItems?`, `showControls?`, `className?`

### `StatusBar`
윈도우 하단 상태바. Galmuri 픽셀 폰트.

```tsx
<StatusBar left="Page 1 of 1" right="● online · 4 friends" />
```

### `ToolbarIcon` / `ToolbarDivider`
Word/Paint 풍 툴바 버튼 + 시각적 구분선.

```tsx
<div className="flex items-center gap-[3px] px-2 py-1 bg-pink-very-pale" style={{ borderBottom: '1px solid #FFC2D4' }}>
  <ToolbarIcon label="Save">💾</ToolbarIcon>
  <ToolbarDivider />
  <ToolbarIcon label="Heart">♡</ToolbarIcon>
</div>
```

### `StatusDot`
MSN 풍 친구 상태 점 — `online` (초록) / `busy` (핑크) / `idle` (회색) / `away` (노랑).

```tsx
<StatusDot status="online" />
```

### `VintageScrollbar`
옛날 Windows 핑크 fake scrollbar. 본문 영역 우측 absolute. parent에 `relative pr-[26px]` 필요.

```tsx
<div className="relative bg-white pl-5 pr-[26px] pt-5 pb-4">
  <VintageScrollbar />
  {/* 본문 */}
</div>
```

### `DialogButton`
Windows 다이얼로그 OK/Cancel 풍.

```tsx
<DialogButton variant="primary" full onClick={handleSubmit}>♡ 확인</DialogButton>
<DialogButton variant="secondary">취소</DialogButton>
```

## 5. 배경 패턴

화면 컨테이너 배경 (홈, 메인 페이지):

```tsx
<div
  style={{
    backgroundColor: '#FFEDF3',
    backgroundImage:
      'linear-gradient(45deg, #FFD9E5 25%, transparent 25%), linear-gradient(-45deg, #FFD9E5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FFD9E5 75%), linear-gradient(-45deg, transparent 75%, #FFD9E5 75%)',
    backgroundSize: '22px 22px',
    backgroundPosition: '0 0, 0 11px, 11px -11px, -11px 0px',
  }}
>
```

→ 핑크 마름모 격자 (XP 데스크탑 wallpaper 풍)

데스크탑 코너 데코:

```tsx
<div className="absolute top-2 left-2 text-[10px] text-pink-deep font-pixel opacity-50 z-[1]">♡_♡</div>
<div className="absolute top-2 right-2 text-[10px] text-pink-deep font-pixel opacity-50 z-[1]">100%</div>
```

## 6. 화면 구성 패턴

### A. 도큐먼트 윈도우 (작성/편집 화면)
`WindowFrame` + toolbar + style bar + 본문 캔버스 (`VintageScrollbar`) + `StatusBar`.

예: PromptCard, Write (Notepad 풍), Magazine.

### B. 다이얼로그 윈도우 (확인/알림)
`WindowFrame` (작게) + 본문 텍스트 + `DialogButton` 2개 (primary + secondary).

예: SystemAlert, 답변 완료 알림.

### C. 리스트 윈도우 (메신저/친구)
`WindowFrame` + 본문에 행 리스트 (각 행 = StatusDot + 이름 + 상태) + `StatusBar`.

예: Friends 윈도우, AnswerTypeSelect (옵션 리스트).

## 7. 캐릭터 / 이모지

캐릭터 자산은 만들지 않음. **Fluent Emoji (Microsoft) 또는 Twemoji** 사용:
- CDN: `https://api.iconify.design/fluent-emoji-flat/{icon}.svg`
- 멤버 매핑: 하늘 🐰 / 지원 🐻 / 수민 🐱 / 유나 🐶
- 이모지는 모두 `<img src="...">` 또는 system emoji (디바이스 의존)

## 8. 안 쓸 것 (Absolute bans)

- **별 폭발/리본/하트 SVG 스티커** — Y2K 톤 본질 아님. 윈도우 chrome이 본질.
- **부드러운 일러스트 풍경 (DailyBean 산/구름)** — 다른 톤.
- **Modern 카드 그림자** (`shadow-lg` 같은 blur) — hard shadow `3px 3px 0 ...`만.
- **gradient text** (`bg-clip-text`).
- **둥근 모서리** (`rounded-2xl`) — Y2K는 각진 보더.
- **글래스모피즘** (`backdrop-blur-md`) — 모든 카드에 적용 X.

## 9. 다른 화면 만들 때 체크리스트

- [ ] `WindowFrame`으로 감쌌나?
- [ ] 컬러는 위 토큰만 사용했나?
- [ ] 작은 UI 텍스트는 `font-pixel`?
- [ ] 큰 헤드라인은 `font-display`?
- [ ] 보더 두께 = 1~2px solid?
- [ ] 그림자 = hard shadow (no blur)?
- [ ] 라운드 코너 = 0 (각진)?
- [ ] 캐릭터는 이모지 또는 Fluent Emoji?
- [ ] 메뉴/툴바 옵션이라도 있나? (있으면 톤 ↑)
