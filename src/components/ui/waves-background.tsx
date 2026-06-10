import { useEffect, useRef } from "react";

interface WaveConfig {
  offset: number;
  amplitude: number;
  frequency: number;
  color: string;
  opacity: number;
}

interface WavesBackgroundProps {
  className?: string;
}

/**
 * Animated, mouse-reactive "glowing waves" canvas, tuned to the site's
 * black + gold palette. Zero dependencies — pulls colors straight from the
 * `--gold-*` / `--foreground` CSS variables so it stays in theme.
 */
export const WavesBackground = ({ className }: WavesBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let time = 0;
    let width = 0;
    let height = 0;

    // Read an `H S% L%` CSS variable and turn it into a canvas-ready color.
    const readHsl = (name: string, alpha = 1) => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
      if (!raw) return `rgba(255, 255, 255, ${alpha})`;
      const [h, s, l] = raw.split(/\s+/);
      return `hsla(${parseFloat(h)}, ${s}, ${l}, ${alpha})`;
    };

    const computeTheme = () => ({
      backgroundTop: readHsl("--background", 1),
      backgroundBottom: readHsl("--muted", 0.95),
      waves: [
        { offset: 0, amplitude: 70, frequency: 0.003, color: readHsl("--gold-light", 0.85), opacity: 0.5 },
        { offset: Math.PI / 2, amplitude: 90, frequency: 0.0026, color: readHsl("--gold", 0.75), opacity: 0.4 },
        { offset: Math.PI, amplitude: 60, frequency: 0.0034, color: readHsl("--gold-deep", 0.7), opacity: 0.32 },
        { offset: Math.PI * 1.5, amplitude: 80, frequency: 0.0022, color: readHsl("--gold-light", 0.4), opacity: 0.24 },
        { offset: Math.PI * 2, amplitude: 55, frequency: 0.004, color: readHsl("--foreground", 0.18), opacity: 0.18 },
      ] satisfies WaveConfig[],
    });

    let theme = computeTheme();
    const observer = new MutationObserver(() => {
      theme = computeTheme();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouseInfluence = prefersReduced ? 8 : 70;
    const influenceRadius = prefersReduced ? 160 : 320;
    const smoothing = prefersReduced ? 0.04 : 0.1;

    const recenter = () => {
      mouseRef.current = { x: width / 2, y: height / 2 };
      targetMouseRef.current = { x: width / 2, y: height / 2 };
    };

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseRef.current = { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };

    const onMouseLeave = () => recenter();

    resize();
    recenter();

    const ro = new ResizeObserver(() => {
      resize();
      recenter();
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const drawWave = (wave: WaveConfig) => {
      ctx.save();
      ctx.beginPath();

      for (let x = 0; x <= width; x += 4) {
        const dx = x - mouseRef.current.x;
        const dy = height / 2 - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect =
          influence * mouseInfluence * Math.sin(time * 0.001 + x * 0.01 + wave.offset);

        const y =
          height / 2 +
          Math.sin(x * wave.frequency + time * 0.002 + wave.offset) * wave.amplitude +
          Math.sin(x * wave.frequency * 0.4 + time * 0.003) * (wave.amplitude * 0.45) +
          mouseEffect;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.lineWidth = 2.5;
      ctx.strokeStyle = wave.color;
      ctx.globalAlpha = wave.opacity;
      ctx.shadowBlur = 35;
      ctx.shadowColor = wave.color;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      time += 1;

      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, theme.backgroundTop);
      gradient.addColorStop(1, theme.backgroundBottom);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      theme.waves.forEach(drawWave);

      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
};

export default WavesBackground;
