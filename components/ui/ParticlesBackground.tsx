"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  // Inicializar partículas
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, 
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: ["#06b6d4", "#db2777", "#ffffff"] },
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 1, outModes: "out" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
}
