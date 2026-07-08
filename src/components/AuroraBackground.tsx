import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const orbs = [
        { x: canvas.width * 0.3, y: canvas.height * 0.2, r: 400, color: 'rgba(124,92,252,', speed: 0.5 },
        { x: canvas.width * 0.7, y: canvas.height * 0.5, r: 350, color: 'rgba(167,139,250,', speed: 0.7 },
        { x: canvas.width * 0.5, y: canvas.height * 0.8, r: 300, color: 'rgba(96,165,250,', speed: 0.4 },
      ];

      orbs.forEach((orb) => {
        const offsetX = Math.sin(time * orb.speed) * 60;
        const offsetY = Math.cos(time * orb.speed * 0.8) * 40;
        const gradient = ctx.createRadialGradient(
          orb.x + offsetX, orb.y + offsetY, 0,
          orb.x + offsetX, orb.y + offsetY, orb.r
        );
        gradient.addColorStop(0, orb.color + '0.12)');
        gradient.addColorStop(0.5, orb.color + '0.04)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ opacity: 1 }}
      />
      <div className="grid-pattern" />
      <div className="noise-overlay" />
    </>
  );
}
