"use client";
import React, { useEffect, useRef } from "react";

export function DynamicBackground() {
  const canvasRef = useRef(null);
  const animFrameId = useRef(null);
  const isRunning = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle pool
    const particles = [];
    const MAX_PARTICLES = 160;
    const CONNECT_DIST = 90;

    let lastMouse = { x: -1000, y: -1000 };
    let hasMoved = false;

    class PatternNode {
      constructor(x, y, vx, vy, size, hueOffset = 0) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.size = size;
        this.alpha = 1;
        this.maxLife = 50 + Math.random() * 40;
        this.life = this.maxLife;
        // Vibrant yellow / gold palette (hue ~45-55)
        this.hue = 45 + hueOffset + Math.random() * 10;
        this.rot = Math.random() * Math.PI * 2;
        this.vRot = (Math.random() - 0.5) * 0.08;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.96;
        this.vy *= 0.96;
        this.rot += this.vRot;
        this.life--;
        this.alpha = Math.max(0, this.life / this.maxLife);
      }

      draw(c) {
        if (this.alpha <= 0) return;
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rot);

        c.shadowColor = `hsla(${this.hue}, 100%, 55%, ${this.alpha * 0.9})`;
        c.shadowBlur = 10;

        // Draw diamond / 4-point star geometric pattern
        c.fillStyle = `hsla(${this.hue}, 100%, 65%, ${this.alpha})`;
        c.beginPath();
        const s = this.size;
        c.moveTo(0, -s * 1.5);
        c.lineTo(s * 0.5, -s * 0.5);
        c.lineTo(s * 1.5, 0);
        c.lineTo(s * 0.5, s * 0.5);
        c.lineTo(0, s * 1.5);
        c.lineTo(-s * 0.5, s * 0.5);
        c.lineTo(-s * 1.5, 0);
        c.lineTo(-s * 0.5, -s * 0.5);
        c.closePath();
        c.fill();

        c.restore();
      }
    }

    const spawnPattern = (x, y, count = 3, force = 2) => {
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) {
          particles.shift();
        }
        const angle = Math.random() * Math.PI * 2;
        const speed = (0.5 + Math.random() * 2) * force;
        const vx = Math.cos(angle) * speed;
        const vy = Math.sin(angle) * speed;
        const size = 1.5 + Math.random() * 3.5;
        particles.push(new PatternNode(x, y, vx, vy, size));
      }
      startLoop();
    };

    const handlePointerMove = (e) => {
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY);
      if (clientX === undefined || clientY === undefined) return;

      const dx = clientX - lastMouse.x;
      const dy = clientY - lastMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 6 || !hasMoved) {
        lastMouse = { x: clientX, y: clientY };
        hasMoved = true;
        const count = Math.min(6, Math.max(2, Math.floor(dist / 12)));
        spawnPattern(clientX, clientY, count, Math.min(3, dist / 20));
      }
    };

    const handlePointerDown = (e) => {
      const clientX = e.clientX ?? (e.touches && e.touches[0]?.clientX);
      const clientY = e.clientY ?? (e.touches && e.touches[0]?.clientY);
      if (clientX === undefined || clientY === undefined) return;
      spawnPattern(clientX, clientY, 14, 4.5);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with luminous yellow web filaments
      const pLen = particles.length;
      for (let i = 0; i < pLen; i++) {
        const p1 = particles[i];
        if (p1.alpha <= 0) continue;

        for (let j = i + 1; j < pLen; j++) {
          const p2 = particles[j];
          if (p2.alpha <= 0) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < CONNECT_DIST) {
            const lineAlpha = (1 - d / CONNECT_DIST) * Math.min(p1.alpha, p2.alpha) * 0.7;
            ctx.strokeStyle = `hsla(48, 100%, 55%, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.shadowColor = `rgba(250, 204, 21, ${lineAlpha * 0.8})`;
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      if (particles.length > 0) {
        animFrameId.current = requestAnimationFrame(render);
      } else {
        isRunning.current = false;
        ctx.clearRect(0, 0, width, height);
      }
    };

    const startLoop = () => {
      if (!isRunning.current) {
        isRunning.current = true;
        animFrameId.current = requestAnimationFrame(render);
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ background: "transparent" }}
    />
  );
}
