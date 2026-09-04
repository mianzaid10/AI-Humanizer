import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      t += 0.002;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const orbs = [
        { x: canvas.width * 0.25, y: canvas.height * 0.15, r: 450, c: 'rgba(168,85,247,', s: 0.6 },
        { x: canvas.width * 0.75, y: canvas.height * 0.45, r: 400, c: 'rgba(6,182,212,', s: 0.8 },
        { x: canvas.width * 0.5, y: canvas.height * 0.75, r: 350, c: 'rgba(244,114,182,', s: 0.5 },
        { x: canvas.width * 0.15, y: canvas.height * 0.6, r: 300, c: 'rgba(124,58,237,', s: 0.4 },
      ];

      orbs.forEach((orb) => {
        const ox = Math.sin(t * orb.s) * 50;
        const oy = Math.cos(t * orb.s * 0.7) * 35;
        const grad = ctx.createRadialGradient(
          orb.x + ox, orb.y + oy, 0,
          orb.x + ox, orb.y + oy, orb.r
        );
        grad.addColorStop(0, orb.c + '0.10)');
        grad.addColorStop(0.4, orb.c + '0.04)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="aurora-canvas" />
      <div className="grid-dots" />
      <div className="noise" />
    </>
  );
}
