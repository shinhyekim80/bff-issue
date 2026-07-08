# BFF ISSUE Project Brief

## One-liner

BFF ISSUE는 4인 친구 모임이 매일 질문에 답하고, 그 답변을 주간 펼침면과 월간 매거진으로 쌓아가는 우정 기록 앱 프로토타입입니다.

## Core Loop

1. 오늘의 편집 카드를 받는다.
2. 내 페이지를 채운다: 한 줄, 짤/사진, 스티커.
3. 작성 완료 후 내 조각이 편집실에 도착한다.
4. 친구 페이지가 열린다.
5. 주간에는 7개의 질문 중 대표 3개가 편집된다.
6. 월간에는 한 권의 매거진으로 출간되어 우리 책장에 보관된다.

## Product Principles

- **4인 모임 단위**: 개인 일기보다 “우리”가 먼저 보이는 구조.
- **축적 보상**: 매일 답변이 주간, 월간 결과물로 쌓이는 흐름.
- **매거진 메타포**: 페이지, 펼침면, 표지, vol, 책장이라는 언어를 유지.
- **편집실 뉘앙스**: 공간 기능을 크게 만들지 않고, 카피와 정물 비주얼에만 얇게 사용.
- **Y2K 키치**: Windows XP, MSN, 폴라로이드, 마스킹테이프, 점선, 스티커 톤.

## Current Copy Direction

| Surface | Copy |
| --- | --- |
| Home header | 오늘의 편집 카드 ₊˚⊹♡ |
| CTA | 내 페이지 채우기 ♡ |
| Submission complete | 내 조각이 편집실에 도착했어요 ✦ |
| Friend responses | 💌 오늘의 펼침면 |
| Magazine tab | 우리 책장 ₊˚⊹♡ |
| Monthly cover label | vol.01 출간 ♡ |

## Differentiation

Compared with daily question diaries, BFF ISSUE focuses on:

- A clear 4-person friend group.
- A visible progression from daily answers to a finished magazine.
- Shareable covers and archive moments.
- Y2K magazine identity instead of soft diary identity.

## MVP Boundary

Included:

- Mocked home, answer, write, complete, friend response, weekly, monthly, onboarding, group invite, and Kakao share flows.
- Client-side routing.
- Static mock data.
- Mobile-first visual prototype.

Not included yet:

- Authentication.
- Backend persistence.
- Real group/member state.
- Real image upload.
- Real Kakao Share API integration.
- Monthly auto-generation logic.
- Representative weekly page selection logic.

## Next Product Questions

- What is the minimum backend schema for group, member, prompt, answer, page, and volume?
- Does the first launch always start with onboarding, or only when no group exists?
- Should one user support multiple groups?
- Which monthly output is shareable: cover only, full book preview, or selected pages?
- What is the privacy model for friend responses and invite links?
