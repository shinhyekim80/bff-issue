# Routes

## Main Flow

| Route | Component | Purpose |
| --- | --- | --- |
| `/` | `pages/Home.tsx` | Home prompt card. Redirects to onboarding if `localStorage.onboarded` is not true. |
| `/onboarding` | `screens/Onboarding.tsx` | Three-page first-run flow. Supports `?page=0`, `?page=1`, `?page=2` for review. |
| `/answer` | `screens/AnswerTypeSelect.tsx` | Choose answer type. `?pass=1` opens the pass dialog for review. |
| `/write/text` | `screens/WriteText.tsx` | Text answer input. |
| `/write/photo` | `screens/WritePhoto.tsx` | Photo/meme answer input. |
| `/write/sticker` | `screens/WriteSticker.tsx` | Sticker answer input. |
| `/complete` | `screens/SubmissionComplete.tsx` | Submission reward and unlock state. |
| `/friends/today` | `screens/FriendResponses.tsx` | Today's friend responses and reaction bar. |

## Magazine Flow

| Route | Component | Purpose |
| --- | --- | --- |
| `/weekly` | `screens/WeeklyPreview.tsx` | Curated weekly preview: 7 daily prompts to 3 representative pages. |
| `/magazine` | `pages/Magazine.tsx` / `screens/Magazine.tsx` | Magazine tab, current week card, bookshelf, empty pages. |
| `/magazine/:vol` | `screens/MonthlyMagazine.tsx` | Monthly magazine view. Currently supports mock `vol.01`. |

## Group and Share Flow

| Route | Component | Purpose |
| --- | --- | --- |
| `/group/create` | `screens/GroupCreate.tsx` | Champion creates a group and invite card. |
| `/invite/:code` | `screens/InviteAccept.tsx` | Invite acceptance preview. |
| `/share/kakao` | `screens/KakaoShare.tsx` | Kakao chat and OG-card preview. Supports variants through query usage in code. |

## Review / Temporary Routes

| Route | Component | Purpose |
| --- | --- | --- |
| `/font-preview` | `screens/FontPreview.tsx` | Font pairing comparison screen. Temporary design aid. |
| `/birthday-invite` | `screens/BirthdayInvitation.tsx` | Experimental invitation screen. Review before keeping in production scope. |

## Notes

- The app is currently a front-end prototype with mocked data.
- `/` depends on `localStorage.onboarded`.
- Write routes currently converge into the mock completion flow.
- Share buttons are preview actions, not real Kakao API calls yet.
