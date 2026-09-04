"use client";

import { useEffect, useRef, useState } from "react";
import { textFlag } from "cursor-effects";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  // Enable only on mouse/trackpad devices without reduced-motion
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);
  }, []);

  // Init effects once enabled (refs are attached by then)
  useEffect(() => {
    if (!enabled) return;
    const glow = glowRef.current;
    if (!glow) return;

    // Text Flag effect (github.com/tholman/cursor-effects)
    const flag = new textFlag({
      text: "Full-Stack Developer",
      color: "#D9B26A",
      font: "monospace",
      textSize: 14,
    });

    let mouseX = -600;
    let mouseY = -600;
    let glowX = -600;
    let glowY = -600;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const loop = () => {
      // Smooth trailing glow (lerp)
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;

      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      flag.destroy();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[55] h-[420px] w-[420px] rounded-full opacity-60 mix-blend-screen"
      style={{
        background:
          "radial-gradient(circle, rgba(217,178,106,0.14) 0%, rgba(217,178,106,0.05) 40%, transparent 70%)",
      }}
    />
  );
}
