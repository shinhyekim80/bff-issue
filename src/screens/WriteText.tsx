import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import WriteShell from '../components/WriteShell';
import {
  WindowFrame,
  StatusBar,
  VintageScrollbar,
  DialogButton,
  ToolbarIcon,
  ToolbarDivider,
} from '../components/win';

const MAX = 500;

export default function WriteText() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [ln, setLn] = useState(1);
  const [col, setCol] = useState(1);
  const taRef = useRef<HTMLTextAreaElement>(null);

  const updateCursor = (el: HTMLTextAreaElement) => {
    const before = el.value.slice(0, el.selectionStart ?? 0);
    const lines = before.split('\n');
    setLn(lines.length);
    setCol(lines[lines.length - 1].length + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
    updateCursor(e.target);
  };

  const handleCursorMove = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    updateCursor(e.currentTarget);
  };

  const hasAnswer = answer.trim().length > 0;

  return (
    <WriteShell current="text" minHeightClass="min-h-[720px]">
      <div className="relative max-w-[340px] mx-auto mb-5 z-[2]">
        <WindowFrame
          title="♡ 내 답변"
          filename="vol02.txt"
          showMenuBar
          menuItems={['File', 'Edit', 'Format', 'View']}
        >
          {/* ── Style Toolbar ─────────────────────────────── */}
          <div
            className="flex items-center gap-[3px] px-2 py-1 bg-pink-very-pale"
            style={{ borderBottom: '1px solid #FFC2D4' }}
          >
            {/* Font dropdown (decorative) */}
            <div
              className="flex items-center gap-1 px-2 py-0.5 bg-white"
              style={{ border: '1px solid #FFC2D4' }}
            >
              <span className="text-[9px] font-pixel text-ink-main">Cute Diary</span>
              <span className="text-[7px] text-text-secondary ml-1">▼</span>
            </div>
            <span className="text-[9px] font-pixel text-text-secondary mx-1">14</span>
            <ToolbarDivider />
            <ToolbarIcon label="Bold">
              <span className="font-bold text-[11px]">B</span>
            </ToolbarIcon>
            <ToolbarIcon label="Italic">
              <span className="italic text-[11px]">I</span>
            </ToolbarIcon>
            <ToolbarIcon label="Underline">
              <span className="underline text-[11px]">U</span>
            </ToolbarIcon>
            <ToolbarDivider />
            <ToolbarIcon label="Insert heart" onClick={() => setAnswer(a => a + '♡')}>♡</ToolbarIcon>
            <ToolbarIcon label="Insert star" onClick={() => setAnswer(a => a + '✦')}>✦</ToolbarIcon>
          </div>

          {/* ── Body + VintageScrollbar ───────────────────── */}
          <div
            className="relative bg-white pl-5 pr-[26px] pt-4 pb-4"
            style={{ minHeight: 224 }}
          >
            <VintageScrollbar />

            {/* Lined paper — repeating horizontal lines aligned to 28px line-height */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                left: 20,
                right: 26,
                background:
                  'repeating-linear-gradient(to bottom, transparent, transparent 27px, #FFE0EC 27px, #FFE0EC 28px)',
                backgroundPosition: '0 44px',
              }}
            />

            {/* 좌측 빨간 마진 선 (노트북 느낌) */}
            <div
              className="absolute top-0 bottom-0 pointer-events-none"
              style={{ left: 36, width: 1, background: '#FFB1C9', opacity: 0.5 }}
            />

            <textarea
              ref={taRef}
              value={answer}
              maxLength={MAX}
              onChange={handleChange}
              onSelect={handleCursorMove}
              onClick={handleCursorMove}
              onKeyUp={handleCursorMove}
              placeholder="나는 요즘…"
              className="relative w-full border-none outline-none resize-none bg-transparent font-sans text-[15px] text-ink-main placeholder:text-text-tertiary p-0 pl-[18px]"
              style={{ minHeight: 196, lineHeight: '28px' }}
              autoFocus
            />
          </div>

          {/* ── Status Bar ────────────────────────────────── */}
          <StatusBar
            left={`Ln ${ln}, Col ${col} | UTF-8`}
            right={`${answer.length} / ${MAX}`}
          />
        </WindowFrame>
      </div>

      {/* ── Submit ────────────────────────────────────────── */}
      <div className="relative max-w-[340px] mx-auto z-[2]">
        <DialogButton
          variant="primary"
          full
          disabled={!hasAnswer}
          onClick={() => { if (hasAnswer) navigate('/complete'); }}
        >
          ♡ 내 페이지 완성하기
        </DialogButton>
        <p className="mt-3 mb-0 text-center text-[11px] text-text-tertiary italic font-sans">
          — 잘 쓰지 않아도 괜찮아요 ᵕ̈
        </p>
      </div>
    </WriteShell>
  );
}
