import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WindowFrame, StatusBar } from '../components/win';
import PassDialog from '../components/PassDialog';

type AnswerType = {
  id: 'text' | 'photo';
  icon: string;
  title: string;
  subtitle: string;
  route: string;
  emphasis: boolean;
};

const answerTypes: AnswerType[] = [
  {
    id: 'text',
    icon: '📝',
    title: '한 줄',
    subtitle: '한 자만 적어도 OK ᵕ̈',
    route: '/write/text',
    emphasis: true,
  },
  {
    id: 'photo',
    icon: '📷',
    title: '짤·사진',
    subtitle: '사진첩에서 한 장',
    route: '/write/photo',
    emphasis: false,
  },
];

export default function AnswerTypeSelect() {
  const navigate = useNavigate();
  const [isPassDialogOpen, setIsPassDialogOpen] = useState(
    () => new URLSearchParams(window.location.search).get('pass') === '1',
  );

  const handleClose = () => navigate('/');
  const handleConfirmPass = () => {
    setIsPassDialogOpen(false);
    navigate('/');
  };

  return (
    <div
      className="relative min-h-screen pt-4 px-3 pb-6 font-sans overflow-hidden"
      style={{
        backgroundColor: '#FFEDF3',
        backgroundImage:
          'linear-gradient(45deg, #FFD9E5 25%, transparent 25%), linear-gradient(-45deg, #FFD9E5 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FFD9E5 75%), linear-gradient(-45deg, transparent 75%, #FFD9E5 75%)',
        backgroundSize: '22px 22px',
        backgroundPosition: '0 0, 0 11px, 11px -11px, -11px 0px',
      }}
    >
      {/* 데스크탑 코너 데코 */}
      <div className="absolute top-2 left-2 text-[10px] text-pink-deep font-pixel opacity-50 z-[1]">
        ♡_♡
      </div>
      <div className="absolute top-2 right-2 text-[10px] text-pink-deep font-pixel opacity-50 z-[1]">
        select_mode.exe
      </div>

      {/* 뒤로 가기 — 데스크탑 위 떠있는 작은 단축 */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="absolute top-9 left-3 z-[6] flex items-center gap-1 px-2 py-1 bg-white text-[10px] text-ink-main font-pixel hover:bg-pink-pastel active:translate-y-px cursor-pointer"
        style={{ border: '1.5px solid #B83258', boxShadow: '2px 2px 0 rgba(184,50,88,0.45)' }}
      >
        ← Back
      </button>

      {/* ============ 메인 윈도우: 답변 방식 선택 ============ */}
      <div className="relative max-w-[340px] mx-auto z-[5] mt-12">
        <WindowFrame
          title="답변 방식"
          filename="select_mode.exe"
          showMenuBar
          menuItems={['File', 'Edit', 'View', 'Help']}
          onClose={handleClose}
        >
          {/* 도큐먼트 헤더 영역 (질문) */}
          <div className="bg-white px-5 pt-5 pb-4">
            <p className="m-0 text-[10px] text-text-tertiary font-pixel tracking-wider">
              {'>'} vol.02 · 이번 주 2번째
            </p>

            <p className="m-0 mt-2 text-[26px] font-display font-bold text-ink-main leading-[1.0]">
              오늘은 어떻게
              <br />
              답할래?
            </p>

            <p className="m-0 mt-2 text-[11.5px] text-text-secondary italic">
              — 글 한 줄도, 사진 한 장도 일기 ʕ•ᴥ•ʔ
            </p>
          </div>

          {/* 분할선 */}
          <div
            className="h-px"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to right, #FFC2D4 0, #FFC2D4 4px, transparent 4px, transparent 8px)',
            }}
          />

          {/* 옵션 리스트 (Friends 풍 행 리스트) */}
          <div className="bg-white">
            {answerTypes.map((type, i) => (
              <button
                key={type.id}
                type="button"
                onClick={() => navigate(type.route)}
                className={`w-full flex items-center gap-3 px-3 py-3 text-left transition-colors cursor-pointer ${
                  i !== answerTypes.length - 1 ? 'border-b border-pink-border-light' : ''
                } hover:bg-pink-very-pale active:bg-pink-pastel`}
                style={
                  type.emphasis
                    ? { backgroundColor: 'rgba(255,237,243,0.6)' }
                    : undefined
                }
              >
                {/* 아이콘 셀 */}
                <div
                  className="w-10 h-10 flex items-center justify-center bg-pink-very-pale shrink-0 text-[22px] leading-none"
                  style={{ border: '1.5px solid #FFC2D4' }}
                >
                  {type.icon}
                </div>

                {/* 텍스트 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[15px] font-bold text-ink-main">
                      {type.title}
                    </span>
                    {type.emphasis && (
                      <span className="text-[10px] text-pink-main font-pixel">
                        ★ 추천
                      </span>
                    )}
                  </div>
                  <p className="m-0 text-[10px] text-text-secondary font-pixel mt-0.5">
                    {type.subtitle}
                  </p>
                </div>

                {/* 화살표 */}
                <span className="text-[16px] text-pink-main font-pixel">›</span>
              </button>
            ))}
          </div>

          {/* 쉬어가기 영역 (옅은 푸터) */}
          <div
            className="bg-pink-very-pale px-3 py-3"
            style={{ borderTop: '1px solid #FFC2D4' }}
          >
            <div
              className="mx-auto h-px max-w-[180px] opacity-50"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to right, #B83258 0, #B83258 3px, transparent 3px, transparent 7px)',
              }}
            />
            <button
              type="button"
              onClick={() => setIsPassDialogOpen(true)}
              className="w-full mt-2 text-center text-[11px] text-pink-deep font-pixel hover:text-newtro-red transition-colors cursor-pointer bg-transparent border-none"
              style={{
                textDecoration: 'underline',
                textDecorationStyle: 'dotted',
                textUnderlineOffset: '3px',
              }}
            >
              오늘은 쉬어가기 →
            </button>
            <p className="m-0 mt-1.5 text-center text-[9px] text-text-tertiary italic">
              — 비어 있는 페이지도 우리 이야기
            </p>
          </div>

          {/* 상태바 */}
          <StatusBar left="Ready" right="2 options · vol.02" />
        </WindowFrame>
      </div>

      <PassDialog
        isOpen={isPassDialogOpen}
        onClose={() => setIsPassDialogOpen(false)}
        onConfirm={handleConfirmPass}
      />
    </div>
  );
}
