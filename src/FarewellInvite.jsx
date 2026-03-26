import { useState, useEffect } from "react";

const colors = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff", "#ff6bff", "#c3e88d", "#f78c6c"];

function Star({ style }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "3px",
        height: "3px",
        borderRadius: "50%",
        background: "white",
        ...style,
      }}
    />
  );
}

function ConfettiPiece({ style, color }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "-10px",
        borderRadius: "2px",
        background: color,
        pointerEvents: "none",
        zIndex: 999,
        ...style,
      }}
    />
  );
}

function Modal({ onClose }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.7)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #0f3460)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "20px",
          padding: "2rem",
          maxWidth: "320px",
          width: "90%",
          textAlign: "center",
          animation: "popIn 0.3s ease",
        }}
      >
        <h3
          style={{
            fontFamily: "'Pacifico', cursive",
            color: "#ffd93d",
            fontSize: "1.4rem",
            marginBottom: "1rem",
          }}
        >
          See you there! 🎉
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "13px",
            lineHeight: 1.7,
            fontFamily: "'Nunito', sans-serif",
            marginBottom: "1.5rem",
          }}
        >
          Awesome! Jyothi, your RSVP has been confirmed. We can't wait to
          celebrate YOU on March 30th. Get ready for a night full of memories!
          💛
        </p>
        <button
          onClick={onClose}
          style={{
            background: "rgba(255,255,255,0.1)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 24px",
            cursor: "pointer",
            fontFamily: "'Fira Code', monospace",
            fontSize: "12px",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function FarewellInvite() {
  const [stars, setStars] = useState([]);
  const [confetti, setConfetti] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  useEffect(() => {
    const generated = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      opacity: Math.random(),
      animDelay: Math.random() * 2 + "s",
      animDuration: 1.5 + Math.random() * 2 + "s",
    }));
    setStars(generated);
  }, []);

  const launchConfetti = () => {
    const pieces = Array.from({ length: 80 }, (_, i) => ({
      id: i + Date.now(),
      left: Math.random() * 100 + "vw",
      width: 6 + Math.random() * 8 + "px",
      height: 10 + Math.random() * 8 + "px",
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 2 + Math.random() * 2 + "s",
      delay: Math.random() * 0.5 + "s",
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 4500);
  };

  const handleRSVP = () => {
    launchConfetti();
    setShowModal(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Pacifico&family=Nunito:wght@400;700;900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: #0d0d1a;
          font-family: 'Fira Code', monospace;
          overflow-x: hidden;
        }

        @keyframes twinkle {
          from { opacity: 0.2; }
          to { opacity: 1; }
        }

        @keyframes cardFloat {
          from { transform: translateY(0px); }
          to { transform: translateY(-8px); }
        }

        @keyframes rainbowMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bounce {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes popIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        @keyframes fall {
          to { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }

        .star-el {
          animation: twinkle var(--dur) var(--delay) infinite alternate;
        }

        .card-float {
          animation: cardFloat 3s ease-in-out infinite alternate;
        }

        .rainbow-text {
          background: linear-gradient(90deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff, #ff6bff);
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: rainbowMove 3s linear infinite;
        }

        .emoji-bounce {
          animation: bounce 1s infinite alternate;
        }

        .cursor-blink {
          display: inline-block;
          width: 8px;
          height: 14px;
          background: #c3e88d;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }

        .confetti-fall {
          animation: fall var(--fdur) var(--fdelay) linear forwards;
        }

        .rsvp-btn {
          display: block;
          width: 100%;
          background: linear-gradient(135deg, #ff6b6b, #ffd93d);
          color: #0d0d1a;
          font-family: 'Fira Code', monospace;
          font-size: 14px;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          padding: 14px;
          cursor: pointer;
          letter-spacing: 1px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .rsvp-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 0 30px rgba(255,180,0,0.4);
        }
      `}</style>

      {/* Stars background */}
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }}>
        {stars.map((s) => (
          <div
            key={s.id}
            className="star-el"
            style={{
              position: "absolute",
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "white",
              left: s.left,
              top: s.top,
              opacity: s.opacity,
              "--dur": s.animDuration,
              "--delay": s.animDelay,
            }}
          />
        ))}
      </div>

      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="confetti-fall"
          style={{
            position: "fixed",
            top: "-10px",
            left: c.left,
            width: c.width,
            height: c.height,
            borderRadius: "2px",
            background: c.color,
            pointerEvents: "none",
            zIndex: 999,
            "--fdur": c.duration,
            "--fdelay": c.delay,
          }}
        />
      ))}

      {/* Modal */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}

      {/* Main Page */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1rem",
          background: "#0d0d1a",
        }}
      >
        {/* Card */}
        <div
          className="card-float"
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
            border: "2px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "2.5rem 2rem",
            maxWidth: "520px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 0 60px rgba(255,100,200,0.2), 0 0 120px rgba(100,180,255,0.1)",
          }}
        >
          {/* Rainbow border shimmer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "24px",
              background: "linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcb77, #4d96ff, #ff6bff, #ff6b6b)",
              backgroundSize: "300% 300%",
              animation: "rainbowMove 3s linear infinite",
              opacity: 0.25,
              pointerEvents: "none",
            }}
          />

          {/* Terminal Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "1.5rem",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "10px",
              padding: "10px 14px",
            }}
          >
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f56" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ffbd2e" }} />
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#27c93f" }} />
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginLeft: "auto", fontFamily: "'Fira Code', monospace" }}>
              farewell_invite.jsx
            </span>
          </div>

          {/* Code Block */}
          <div style={{ marginBottom: "1.5rem" }}>
            {[
              <span key="cm" style={{ color: "#546e7a", fontStyle: "italic" }}>// 🎉 special_invite.deploy()</span>,
              <span key="l1"><span style={{ color: "#c792ea" }}>const</span> <span style={{ color: "#82aaff" }}>guest</span> = {"{"}</span>,
              <span key="l2">&nbsp;&nbsp;name: <span style={{ color: "#c3e88d" }}>"Ayila Naga Jyothi"</span>,</span>,
              <span key="l3">&nbsp;&nbsp;role: <span style={{ color: "#c3e88d" }}>"Full Stack Developer"</span>,</span>,
              <span key="l4">&nbsp;&nbsp;level: <span style={{ color: "#c3e88d" }}>"Senior Legend"</span>,</span>,
              <span key="l5">&nbsp;&nbsp;status: <span style={{ color: "#c3e88d" }}>"VIP 🌟"</span></span>,
              <span key="l6">{"}"}</span>,
              <span key="l7">&nbsp;</span>,
              <span key="l8"><span style={{ color: "#82aaff" }}>sendInvite</span>(<span style={{ color: "#82aaff" }}>guest</span>); <span className="cursor-blink" /></span>,
            ].map((line, i) => (
              <div key={i} style={{ fontFamily: "'Fira Code', monospace", fontSize: "13px", lineHeight: 1.8, color: "#fff" }}>
                {line}
              </div>
            ))}
          </div>

          {/* Divider */}
          <hr style={{ border: "none", height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)", margin: "1.5rem 0" }} />

          {/* Invite Body */}
          <div style={{ textAlign: "center" }}>
            <div className="emoji-bounce" style={{ fontSize: "28px", marginBottom: "0.5rem" }}>🎊 🥳 🎉</div>

            <div
              className="rainbow-text"
              style={{ fontFamily: "'Pacifico', cursive", fontSize: "2rem", marginBottom: "0.5rem", height: "70px" }}
            >
              Naga Jyothi
            </div>

            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginBottom: "1.5rem", fontFamily: "'Fira Code', monospace" }}>
              // You are cordially invited to your farewell party
            </div>

            {/* Info Chips */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "1.5rem" }}>
              {[
                { icon: "📅", label: "DATE & TIME", value: "March 30, 2025 · 6:00 PM" },
                { icon: "👩‍💻", label: "OCCASION", value: "Senior Farewell Celebration" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "12px",
                    padding: "12px 16px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span style={{ fontSize: "18px", minWidth: "24px" }}>{chip.icon}</span>
                  <div style={{ textAlign: "left" }}>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", display: "block", fontFamily: "'Fira Code', monospace" }}>
                      {chip.label}
                    </span>
                    <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600, fontFamily: "'Fira Code', monospace" }}>
                      {chip.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Box */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                borderLeft: "3px solid #ffd93d",
                borderRadius: "0 12px 12px 0",
                padding: "1rem 1.2rem",
                textAlign: "left",
                marginBottom: "1.5rem",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", lineHeight: 1.7, fontFamily: "'Nunito', sans-serif" }}>
                Dear Jyothi, you didn't just write clean code — you wrote a beautiful chapter in all our lives.
                From debugging late nights to building something amazing, you've been our go-to stack —
                frontend wisdom, backend strength, and a heart full-stack with kindness.
                We are not saying goodbye... we're just pushing you to production. 🚀
                <br /><br />
                — Your juniors, with lots of love 💛
              </p>
            </div>

            {/* RSVP Button */}
            <button className="rsvp-btn" onClick={handleRSVP}>
              &gt; git commit -m "I'll be there!" 🎉
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
