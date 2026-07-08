import { useState } from 'react';
import Polaroid from './ui/Polaroid';
import TextSticker from './ui/TextSticker';
import PinkBubble from './ui/PinkBubble';
import HighlighterText from './ui/HighlighterText';
import SystemAlert from './ui/SystemAlert';
import { copy } from '../copy';
import { todayQuestion, members } from '../data/mock';
import { useNavigate } from 'react-router-dom';

/* =========================================================================
 * Y2K Windows chrome components
 * Pink reskinned Windows XP / MSN style — for BFF ISSUE
 * ========================================================================= */

type WindowFrameProps = {
  title: string;
  filename?: string;
  children: React.ReactNode;
  className?: string;
  showMenuBar?: boolean;
  menuItems?: string[];
};

function WindowFrame({ title, filename, children, className = '', showMenuBar = false, menuItems = [] }: WindowFrameProps) {
  return (
    <div
      className={`relative bg-white shadow-[3px_3px_0_rgba(184,50,88,0.45)] ${className}`}
      style={{ border: '2px solid #B83258' }}
    >
      {/* 타이틀바 */}
      <div
        className="flex items-center justify-between px-2 py-[5px] border-b-[2px]"
        style={{
          borderColor: '#B83258',
          background:
            'linear-gradient(180deg, #FF8FB0 0%, #FF5C8A 45%, #E63D70 100%)',
        }}
      >
        <div className="flex items-center gap-1.5 min-w-0">
          {/* 작은 윈도우 아이콘 */}
          <div
            className="w-3.5 h-3.5 shrink-0"
            style={{
              background:
                'linear-gradient(135deg, #FFFFFF 0%, #FFD9E5 50%, #FF8FB0 100%)',
              border: '1px solid #B83258',
            }}
          />
          <span className="text-white text-[11px] font-bold tracking-tight truncate drop-shadow-[1px_1px_0_rgba(184,50,88,0.6)]">
            {title}
            {filename && <span className="font-normal opacity-90"> — {filename}</span>}
          </span>
        </div>
        <div className="flex items-center gap-[3px] shrink-0">
          <button className="w-4 h-4 flex items-center justify-center text-[10px] font-bold text-pink-deep leading-none bg-pink-pastel" style={{ border: '1px solid #B83258' }}>_</button>
          <button className="w-4 h-4 flex items-center justify-center text-[8px] font-bold text-pink-deep leading-none bg-pink-pastel" style={{ border: '1px solid #B83258' }}>□</button>
          <button className="w-4 h-4 flex items-center justify-center text-[10px] font-bold text-pink-deep leading-none bg-pink-pastel" style={{ border: '1px solid #B83258' }}>×</button>
        </div>
      </div>

      {/* 메뉴바 */}
      {showMenuBar && menuItems.length > 0 && (
        <div className="flex items-center gap-3 px-2 py-1 bg-pink-very-pale" style={{ borderBottom: '1px solid #FFC2D4' }}>
          {menuItems.map((item) => (
            <span key={item} className="text-[10px] text-ink-main font-medium">
              <span className="underline">{item[0]}</span>
              {item.slice(1)}
            </span>
          ))}
        </div>
      )}

      {children}
    </div>
  );
}

function StatusBar({ left, right }: { left: string; right: string }) {
  return (
    <div className="flex items-center justify-between px-2 py-1 bg-pink-very-pale" style={{ borderTop: '1px solid #FFC2D4' }}>
      <span className="text-[9px] text-text-secondary font-pixel tracking-tight">{left}</span>
      <span className="text-[9px] text-text-secondary font-pixel tracking-tight">{right}</span>
    </div>
  );
}

/* 작은 픽셀풍 툴바 버튼 */
function ToolbarIcon({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <button
      className="w-6 h-6 flex items-center justify-center bg-pink-very-pale hover:bg-pink-pastel transition-colors"
      style={{ border: '1px solid #FFC2D4' }}
      title={label}
    >
      <span className="text-[12px] leading-none">{children}</span>
    </button>
  );
}

/* 친구 상태 점 */
function StatusDot({ status }: { status: 'online' | 'away' | 'busy' | 'idle' }) {
  const colors = { online: '#A8D8B9', away: '#FFE66D', busy: '#FF5C8A', idle: '#C4A8B0' };
  return <span className="block w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: colors[status] }} />;
}

/* =========================================================================
 * 멤버 캐릭터/상태 (캐릭터 자산 도착 전 임시 이모지)
 * ========================================================================= */
const memberMeta: Record<string, { emoji: string; status: 'online' | 'away' | 'busy' | 'idle'; statusText: string }> = {
  haneul: { emoji: '🐰', status: 'online', statusText: '대기 중' },
  jiwon: { emoji: '🐻', status: 'busy', statusText: '답변 완료 ♡' },
  sumin: { emoji: '🐱', status: 'idle', statusText: '잠수 중...' },
  yuna: { emoji: '🐶', status: 'away', statusText: 'zzz' },
};

/* =========================================================================
 * PromptCard — Windows XP pink edition
 * ========================================================================= */

export default function PromptCard() {
  const navigate = useNavigate();
  const handleCTAClick = () => navigate('/answer');
  const [alert, setAlert] = useState<{ emoji: string; name: string } | null>({
    emoji: '🐰',
    name: '하늘',
  });

  return (
    <div
      className="relative overflow-hidden pt-4 px-3 pb-6 font-sans min-h-screen"
      style={{
        backgroundColor: '#FFEDF3',
        backgroundImage:
          'linear-gradient(45deg, #FFD9E5 25%, transparent 25%), linear-gradient(-45deg, #FFD9E5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FFD9E5 75%), linear-gradient(-45deg, transparent 75%, #FFD9E5 75%)',
        backgroundSize: '22px 22px',
        backgroundPosition: '0 0, 0 11px, 11px -11px, -11px 0px',
      }}
    >
      {/* 데스크탑 작은 픽셀 데코 (각 코너) */}
      <div className="absolute top-2 left-2 text-[10px] text-pink-deep font-pixel opacity-50 z-[1]">
        ♡_♡
      </div>
      <div className="absolute top-2 right-2 text-[10px] text-pink-deep font-pixel opacity-50 z-[1]">
        100%
      </div>

      <div className="relative z-[5] mt-2 mb-3 text-center">
        <p className="m-0 text-[13px] font-medium text-pink-main">
          {copy.todayPage}
        </p>
      </div>

      {/* ============ 시스템 알림 다이얼로그 ============ */}
      {alert && (
        <div className="relative max-w-[340px] mx-auto z-[20] mb-3 flex justify-end">
          <SystemAlert
            emoji={alert.emoji}
            name={alert.name}
            onConfirm={() => { setAlert(null); navigate('/answer'); }}
            onDismiss={() => setAlert(null)}
          />
        </div>
      )}

      {/* ============ 메인 윈도우: 오늘의 페이지 ============ */}
      <div className="relative max-w-[340px] mx-auto z-[5] mt-3">
        <WindowFrame
          title="BFF ISSUE"
          filename="vol02_today.doc"
          showMenuBar
          menuItems={['File', 'Edit', 'View', 'Help']}
        >
          {/* 툴바 */}
          <div className="flex items-center gap-[3px] px-2 py-1 bg-pink-very-pale" style={{ borderBottom: '1px solid #FFC2D4' }}>
            <ToolbarIcon label="New">📄</ToolbarIcon>
            <ToolbarIcon label="Open">📂</ToolbarIcon>
            <ToolbarIcon label="Save">💾</ToolbarIcon>
            <span className="w-px h-4 bg-pink-border-light mx-1" />
            <ToolbarIcon label="Cut">✂️</ToolbarIcon>
            <ToolbarIcon label="Copy">📋</ToolbarIcon>
            <span className="w-px h-4 bg-pink-border-light mx-1" />
            <ToolbarIcon label="Heart">♡</ToolbarIcon>
            <ToolbarIcon label="Star">✦</ToolbarIcon>
            <div className="ml-auto flex items-center gap-1">
              <span className="text-[9px] text-text-secondary font-pixel">100%</span>
            </div>
          </div>

          {/* 폰트 / 스타일 바 (Word 풍) */}
          <div className="flex items-center gap-2 px-2 py-1 bg-white" style={{ borderBottom: '1px solid #FFC2D4' }}>
            <div className="flex items-center px-2 py-0.5 bg-pink-very-pale" style={{ border: '1px solid #FFC2D4' }}>
              <span className="text-[10px] text-ink-main">Cute Diary</span>
              <span className="text-[8px] ml-1 text-text-secondary">▼</span>
            </div>
            <span className="text-[10px] text-text-secondary">14pt</span>
            <span className="w-px h-4 bg-pink-border-light" />
            <span className="text-[11px] font-bold text-ink-main">B</span>
            <span className="text-[11px] italic text-ink-main">I</span>
            <span className="text-[11px] underline text-ink-main">U</span>
          </div>

          {/* 본문 영역 (도큐먼트 캔버스 + 빈티지 우측 스크롤바) */}
          <div className="relative bg-white pl-5 pr-[26px] pt-5 pb-4">
            {/* === Fake Vintage Scrollbar === */}
            <div
              className="absolute top-0 bottom-0 right-0 w-[18px] flex flex-col select-none"
              style={{
                background: '#FFEDF3',
                borderLeft: '1px solid #FFC2D4',
              }}
            >
              {/* 위 화살표 */}
              <div
                className="w-full h-[18px] flex items-center justify-center text-[8px] text-pink-deep leading-none"
                style={{
                  background: 'linear-gradient(180deg, #FFFBF0 0%, #FFD9E5 100%)',
                  borderBottom: '1px solid #FFC2D4',
                }}
              >
                ▲
              </div>

              {/* 트랙 + thumb */}
              <div className="flex-1 relative">
                {/* 트랙 패턴 (도트 텍스처) */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 50%, #FFC2D4 1px, transparent 1.5px)',
                    backgroundSize: '4px 4px',
                  }}
                />
                {/* Thumb */}
                <div
                  className="absolute left-[2px] right-[2px]"
                  style={{
                    top: '18%',
                    height: '42%',
                    background:
                      'linear-gradient(180deg, #FFB1C9 0%, #FF77A0 50%, #E63D70 100%)',
                    border: '1px solid #B83258',
                    boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.6)',
                  }}
                />
              </div>

              {/* 아래 화살표 */}
              <div
                className="w-full h-[18px] flex items-center justify-center text-[8px] text-pink-deep leading-none"
                style={{
                  background: 'linear-gradient(180deg, #FFD9E5 0%, #FFFBF0 100%)',
                  borderTop: '1px solid #FFC2D4',
                }}
              >
                ▼
              </div>
            </div>

            {/* 본문 상단 작은 메타 (한 줄) */}
            <p className="m-0 mb-2 text-[10px] text-text-tertiary font-pixel tracking-wider">
              {'>'} {copy.subtitle}
            </p>

            {/* 메인 질문 */}
            <p className="m-0 text-[28px] font-display font-bold text-ink-main leading-[1.05] tracking-tight">
              {todayQuestion.question.prefix}
              <HighlighterText>{todayQuestion.question.highlight}</HighlighterText>
              {todayQuestion.question.suffix.replace(' ✦', '')}
            </p>

            {/* 부제 */}
            <p className="m-0 mt-2 text-[12px] font-medium text-text-secondary italic">
              {todayQuestion.subtitle}
            </p>

            {/* 콜라주 영역 (Paint 캔버스 풍 - 점선 보더) */}
            <div
              className="relative mx-auto mt-4 h-[190px]"
              style={{
                border: '1.5px dashed #FFC2D4',
                backgroundColor: '#FFFBF0',
              }}
            >
              <Polaroid
                tone="pink"
                text={todayQuestion.examples.polaroids[0].text}
                caption={todayQuestion.examples.polaroids[0].caption}
                rotate="-5deg"
                className="top-1 left-2"
                symbol="♡"
              />
              <Polaroid
                tone="blue"
                text={todayQuestion.examples.polaroids[1].text}
                caption={todayQuestion.examples.polaroids[1].caption}
                rotate="5deg"
                className="top-3 right-1"
                symbol="⭐"
              />
              <TextSticker text="ㅋㅋㅋ" tone="yellow" className="top-[80px] left-[10px]" />
              <TextSticker text="ㅇㅈ" tone="purple" rotate="5deg" className="top-[90px] right-[8px]" />
              <PinkBubble
                text={todayQuestion.examples.bubble.text}
                className="bottom-1 left-1/2 -translate-x-1/2 rotate-[-1deg]"
              />
            </div>

            {/* CTA 영역 (윈도우 다이얼로그 풍) */}
            <div className="mt-5 p-3 bg-pink-very-pale" style={{ border: '1.5px solid #FFC2D4' }}>
              <p className="m-0 mb-2 text-[11px] text-ink-main font-medium leading-snug">
                {copy.ctaSubtitle}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCTAClick}
                  className="flex-1 py-2 bg-pink-main text-white text-[13px] font-bold hover:bg-pink-deep transition-colors cursor-pointer"
                  style={{
                    border: '1.5px solid #B83258',
                    boxShadow: '2px 2px 0 rgba(184,50,88,0.45)',
                  }}
                >
                  ♡ {copy.ctaText}
                </button>
                <button
                  className="px-3 py-2 bg-pink-pastel text-pink-deep text-[12px] font-medium hover:bg-pink-very-pale transition-colors cursor-pointer"
                  style={{
                    border: '1.5px solid #FFC2D4',
                  }}
                >
                  나중에
                </button>
              </div>
            </div>
          </div>

          {/* 상태바 */}
          <StatusBar left="Page 1 of 1 | vol.02 | Week 2" right="● online · {4} friends" />
        </WindowFrame>
      </div>

      {/* ============ 메신저 윈도우: Friends ============ */}
      <div className="relative max-w-[340px] mx-auto z-[5] mt-5">
        <WindowFrame title="♡ Friends" filename="4 friends">
          <div className="bg-white">
            {members.map((member, i) => {
              const meta = memberMeta[member.id] ?? memberMeta.haneul;
              return (
                <div
                  key={member.id}
                  className={`flex items-center gap-2.5 px-3 py-2 ${
                    i !== members.length - 1 ? 'border-b border-pink-border-light' : ''
                  } hover:bg-pink-very-pale transition-colors cursor-pointer`}
                >
                  <div
                    className="w-8 h-8 flex items-center justify-center bg-pink-very-pale shrink-0 text-[18px] leading-none"
                    style={{ border: '1.5px solid #FFC2D4' }}
                  >
                    {meta.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <StatusDot status={meta.status} />
                      <span className="text-[12px] font-bold text-ink-main truncate">
                        {member.name}
                      </span>
                    </div>
                    <p className="m-0 text-[10px] text-text-secondary truncate font-pixel">
                      {meta.statusText}
                    </p>
                  </div>
                  <span className="text-[12px] text-pink-main font-pixel">›</span>
                </div>
              );
            })}
          </div>
          <StatusBar left="connected" right={copy.exchangePromise.length > 18 ? '...' : copy.exchangePromise} />
        </WindowFrame>
      </div>

      {/* ============ 하단 잡지 풍 작은 서명 ============ */}
      <div className="relative mt-5 z-[5] text-center">
        <p className="m-0 text-[9px] text-pink-deep font-pixel tracking-[2px] opacity-70">
          {copy.signature}
        </p>
      </div>
    </div>
  );
}
