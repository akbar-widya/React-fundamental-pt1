import { useState, useEffect, useLayoutEffect, useRef } from "react";

function FlickerTest() {
  const [useLayout, setUseLayout] = useState(false);
  const [mountKey, setMountKey] = useState(0);

  return (
    <div style={{ padding: "50px", fontFamily: "sans-serif" }}>
      <h2>Flicker Simulator</h2>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setUseLayout(false)}
          style={{ marginRight: "10px" }}
        >
          Test useEffect (Flickers)
        </button>
        <button onClick={() => setUseLayout(true)}>
          Test useLayoutEffect (Smooth)
        </button>
      </div>

      <p>
        Currently testing:{" "}
        <strong>{useLayout ? "useLayoutEffect" : "useEffect"}</strong>
      </p>

      {/* click this button to open tooltip */}
      <button
        onClick={() => setMountKey((prev) => prev + 1)}
        style={{
          padding: "8px",
          background: "#007BFF",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Mount Tooltip
      </button>

      {useLayout ? (
        <LayoutEffectTooltip key={`layout-${mountKey}`} />
      ) : (
        <EffectTooltip key={`effect-${mountKey}`} />
      )}
    </div>
  );
}

function EffectTooltip() {
  const tooltipRef = useRef(null);
  const targetRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    // Artificial 300ms delay to simulate a slow CPU
    const start = performance.now();
    while (performance.now() - start < 300) {
      // Block the main thread to slow down the paint
    }

    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 8, left: rect.left });
    }
  }, []);

  return (
    <TooltipUI
      targetRef={targetRef}
      tooltipRef={tooltipRef}
      position={position}
    />
  );
}

function LayoutEffectTooltip() {
  const tooltipRef = useRef(null);
  const targetRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    const start = performance.now();
    while (performance.now() - start < 300) {}

    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      setPosition({ top: rect.bottom + 8, left: rect.left });
    }
  }, []);

  return (
    <TooltipUI
      targetRef={targetRef}
      tooltipRef={tooltipRef}
      position={position}
    />
  );
}

// --- Shared UI to avoid repeating the HTML ---
function TooltipUI({ targetRef, tooltipRef, position }) {
  return (
    <div style={{ marginTop: "100px" }}>
      <button ref={targetRef} style={{ padding: "10px" }}>
        Target Button
      </button>

      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          background: "black",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
        }}
      >
        Tooltip Element
      </div>
    </div>
  );
}

export default function Topic4Lesson5() {
  return <FlickerTest />;
}
