import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function HeroParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 80, duration: 0.4 },
        },
      },
      particles: {
        number: {
          value: 40,
          density: { enable: true, width: 1200, height: 600 },
        },
        color: { value: ["#1D3557", "#E63946"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.15, max: 0.45 },
          animation: { enable: true, speed: 0.6, sync: false },
        },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 130,
          color: "#1D3557",
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
      reduceDuplicates: true,
    }),
    [],
  );

  if (!ready) return null;

  return (
    <Particles
      id="hero-particles"
      options={options}
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
    />
  );
}
