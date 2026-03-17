// components/LoadingScreen.tsx
import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f0fafa",
      gap: "20px",
    }}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="32" fill="none" stroke="#e0f5f5" strokeWidth="6"/>
        <circle cx="40" cy="40" r="32" fill="none" stroke="#13C5CC" strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="50 150"
          style={{ transformOrigin: "center", animation: "spin 1s linear infinite" }}
        />
        <path
          d="M40 24 C40 24 32 32 32 40 C32 48 36 52 40 56 C44 52 48 48 48 40 C48 32 40 24 40 24Z"
          fill="#13C5CC" opacity="0.15"
        />
        <path
          d="M30 38 Q35 34 40 38 Q45 42 50 38"
          fill="none" stroke="#13C5CC" strokeWidth="2.5" strokeLinecap="round"
        />
        <circle cx="40" cy="30" r="3" fill="#13C5CC"/>
      </svg>

      <div style={{ textAlign: "center" }}>
        <p style={{
          fontSize: "1.2rem",
          fontWeight: "600",
          color: "#13C5CC",
          margin: "0 0 6px",
          fontFamily: "'Cairo', sans-serif",
        }}>
          جاري التحميل...
        </p>
        <p style={{
          fontSize: "0.85rem",
          color: "#7a9faa",
          margin: 0,
          fontFamily: "'Cairo', sans-serif",
          animation: "pulse 1.5s ease-in-out infinite",
        }}>
          يرجى الانتظار
        </p>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#13C5CC",
            animation: "pulse 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
          }}/>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;