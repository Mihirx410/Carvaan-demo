"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

export default function ScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,        // smooth scroll with mouse wheel
      touchMultiplier: 1.5,     // smoother on touchpad / mobile
      wheelMultiplier: 1,       // normal wheel speed
      lerp: 0.1,                // smoothness factor (0–1)
      easing: (t: number) =>
        1 - Math.pow(2, -10 * t), // natural easing curve
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // important cleanup
    };
  }, []);

  return <>{children}</>;
}
