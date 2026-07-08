import { useEffect, useRef, useState, type CSSProperties, type SyntheticEvent } from 'react';
import './BirthdayInvitation.css';

const retreatSteps = [
  { x: 44, y: -20, scale: 0.94, label: '거절: 버튼 산책 중' },
  { x: -58, y: 28, scale: 0.88, label: '거절: 한옥이 말립니다' },
  { x: 66, y: 34, scale: 0.8, label: '거절: 침대랑 협의했나요?' },
  { x: -34, y: -32, scale: 0.74, label: '거절: 진짜 최종?' },
];

const confetti = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 19) % 84)}%`,
  delay: `${(index % 9) * 0.09}s`,
  spin: `${120 + (index % 7) * 38}deg`,
  drift: `${(index % 2 === 0 ? 1 : -1) * (22 + (index % 5) * 8)}px`,
}));

function BirthdayInvitation() {
  const [isOpen, setIsOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [declined, setDeclined] = useState(false);
  const [declineAttempts, setDeclineAttempts] = useState(0);
  const [isPeeking, setIsPeeking] = useState(false);
  const lastDeclineTeaseAt = useRef(0);

  useEffect(() => {
    document.title = '서울 한복판 한옥에서 쉬는 생일';
  }, []);

  const activeRetreat =
    declineAttempts === 0 ? null : retreatSteps[Math.min(declineAttempts - 1, retreatSteps.length - 1)];
  const canDecline = declineAttempts >= retreatSteps.length;

  const openInvitation = () => {
    setIsPeeking(false);
    setIsOpen(true);
    window.setTimeout(() => {
      document.querySelector('.bi-message')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }, 760);
  };

  const acceptInvitation = () => {
    setDeclined(false);
    setAccepted(false);
    openInvitation();
    window.setTimeout(() => {
      setAccepted(true);
    }, 860);
  };

  const handleDecline = (event?: SyntheticEvent<HTMLButtonElement>) => {
    if (!canDecline) {
      event?.preventDefault();
      const now = Date.now();
      if (now - lastDeclineTeaseAt.current < 420) {
        return;
      }
      lastDeclineTeaseAt.current = now;
      setDeclineAttempts((attempt) => attempt + 1);
      return;
    }

    setDeclined(true);
    setAccepted(false);
  };

  const declineStyle = {
    transform: `translate(${canDecline || !activeRetreat ? 0 : activeRetreat.x}px, ${
      canDecline || !activeRetreat ? 0 : activeRetreat.y
    }px) scale(${canDecline || !activeRetreat ? 1 : activeRetreat.scale})`,
  };

  const declineLabel = canDecline ? '거절: 진짜 안 갈래요' : activeRetreat?.label ?? '거절: 오늘은 어려워요';
  const declineDisplayLabel = declineLabel.replace(/^거절:\s*/, '');

  return (
    <main
      className={`birthday-invite ${isOpen ? 'is-open' : ''} ${isPeeking && !isOpen ? 'is-peeking' : ''} ${
        accepted ? 'is-accepted' : ''
      }`}
    >
      <div className="bi-rice-paper" />
      <section className="bi-shell" aria-label="서울 한복판 한옥에서 쉬는 생일 초대장">
        <div className="bi-topline">
          <span>seoul rest day</span>
          <span>hanok, clay, quiet lunch</span>
        </div>

        <div
          className="bi-envelope-scene"
          onMouseEnter={() => setIsPeeking(true)}
          onMouseLeave={() => setIsPeeking(false)}
          aria-label={isOpen ? '열린 생일 초대장' : '닫힌 생일 초대장'}
        >
          <span className="bi-site-brand">RestOfYou</span>
          <span className="bi-cover-title">서울 도심 휴식권</span>
          <span className="bi-cover-date">2026. 07. 10 FRI</span>
          <span className="bi-inner-frame" />
          <span className="bi-hero-illustration" aria-hidden="true">
            <span className="bi-hero-sun" />
            <span className="bi-hero-city" />
            <span className="bi-hero-roof" />
            <span className="bi-hero-yard" />
            <span className="bi-hero-tree bi-hero-tree-one" />
            <span className="bi-hero-tree bi-hero-tree-two" />
            <span className="bi-hero-pot" />
          </span>
          <span className="bi-card-shadow" />
          <span className="bi-letter bi-letter-back">
            <span className="bi-poster-sky">
              <span className="bi-paper-sun" />
              <span className="bi-hanok-roof" />
              <span className="bi-ceramic-cup" />
            </span>
            <span className="bi-pressed-leaf" />
            <span className="bi-landscape">
              <span />
              <span />
              <span />
            </span>
          </span>
          <span className="bi-envelope">
            <span className="bi-envelope-liner" />
            <span className="bi-envelope-flap" />
            <span className="bi-wax-seal">生</span>
          </span>
          <span className="bi-postcard">
            <span className="bi-postcard-meta">birthday invitation</span>
            <strong>서울 휴식권</strong>
            <span className="bi-bloom" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="bi-postcard-copy">밥 먹고, 흙 만지고, 한옥에서 아무것도 안 하기.</span>
            <span className="bi-stamp" />
          </span>
        </div>

        <div className="bi-actions" aria-label="초대 응답">
          <p className="bi-action-title">초대장 답장</p>
          <button className="bi-accept" type="button" onClick={acceptInvitation}>
            <span className="bi-button-kicker">수락</span>
            <span className="bi-button-main">휴식권 사용하기</span>
          </button>
          <button
            className={`bi-decline ${!canDecline ? 'is-teasing' : ''}`}
            type="button"
            onMouseEnter={handleDecline}
            onPointerDown={handleDecline}
            onClick={handleDecline}
            style={declineStyle}
          >
            <span className="bi-button-kicker">거절</span>
            <span className="bi-button-main">{declineDisplayLabel}</span>
          </button>
        </div>

        {declined && <p className="bi-status">알겠어요. 대신 다음 생일엔 버튼을 더 멀리 숨길게요.</p>}

        <article className="bi-message" aria-hidden={!isOpen}>
          <p className="bi-kicker">birthday invitation</p>
          <h1>7월 10일, 서울에서 잠깐 로그아웃</h1>
          <p>
            이번주 금요일은 슬랙 로그인 금지입미다.
            <br />
            자주 들르던 광화문에서 만나요.
            <br />
            정확히 뭔지는 와보면 알게 됩니다.
          </p>
          <div className="bi-day-scene" aria-hidden="true">
            <span className="bi-scene-sky" />
            <span className="bi-scene-sun" />
            <span className="bi-scene-city" />
            <span className="bi-scene-roof" />
            <span className="bi-scene-door" />
            <span className="bi-scene-table" />
            <span className="bi-scene-pottery bi-scene-pottery-one" />
            <span className="bi-scene-pottery bi-scene-pottery-two" />
            <span className="bi-scene-tree" />
          </div>
          <div className="bi-breath-note">
            <span>오늘의 코스</span>
            <p>밥, 흙, 한옥.</p>
          </div>
          <dl className="bi-details">
            <div>
              <dt>when</dt>
              <dd>2026년 7월 10일 금요일 11시</dd>
            </div>
            <div>
              <dt>lunch</dt>
              <dd>광화문 아사달</dd>
            </div>
            <div>
              <dt>clay</dt>
              <dd>종로 미믹크래프트</dd>
            </div>
            <div>
              <dt>stay</dt>
              <dd>종로구 누하동</dd>
            </div>
            <div>
              <dt>bring</dt>
              <dd>빈 지갑, 공기</dd>
            </div>
          </dl>

        </article>
      </section>

      {accepted && (
        <div className="bi-celebration" role="status" aria-live="polite">
          <div className="bi-confetti" aria-hidden="true">
            {confetti.map((piece) => (
              <span
                key={piece.id}
                style={
                  {
                    '--left': piece.left,
                    '--delay': piece.delay,
                    '--spin': piece.spin,
                    '--drift': piece.drift,
                  } as CSSProperties
                }
              />
            ))}
          </div>
          <div className="bi-accept-note">
            <p>좋아요. 7월 10일, 휴식 멤버로 등록됐습니다.</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default BirthdayInvitation;
