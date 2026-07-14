'use client';

import { useEffect, useRef } from 'react';

/**
 * InteractiveBackground
 * ----------------------
 * Fixed, full-viewport canvas background: a quiet "network" of nodes
 * that drift slowly and connect when close together — a nod to
 * component graphs / dependency trees, fitting a fullstack dev portfolio.
 * The cursor gently pulls nearby nodes toward it and brightens their links.
 *
 * Theme-aware: colors are read live from this site's own CSS variables
 * (--foreground, --muted-foreground, --accent, defined in globals.css and
 * flipped by the `.dark` class), so the background always matches the site's
 * actual palette — light or dark — and stays in sync if those variables
 * change later. No hardcoded colors, no re-render needed on toggle: each
 * animation frame just re-reads the current values.
 *
 * Usage:
 *   Drop this file in e.g. `components/InteractiveBackground.tsx` and render
 *   it once, near the top of your root layout, BEFORE your page content:
 *
 *     <body>
 *       <InteractiveBackground />
 *       {children}
 *     </body>
 *
 *   It's `position: fixed; inset: 0; z-index: -1; pointer-events: none`,
 *   so it never blocks clicks and always sits behind your content —
 *   you don't need to change anything else on the page.
 */

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
};

const NODE_COUNT_DESKTOP = 70;
const NODE_COUNT_MOBILE = 32;
const LINK_DISTANCE = 140;
const CURSOR_RADIUS = 160;
const CURSOR_PULL = 0.02;
const DRIFT_SPEED = 0.15;
const SYMBOLS = ['</>', '{ }', '( )', ';', '#', '=>'];

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let animationId = 0;

    const mouse = { x: -9999, y: -9999, active: false };

    // ---- theme colors -----------------------------------------------
    // Read straight from the site's own CSS variables (globals.css) rather
    // than hardcoding hex here, so this stays in sync automatically —
    // including if the palette changes later:
    //   --foreground, --muted-foreground, --accent
    // Each resolves differently under `.dark`, so re-reading after the
    // theme class flips is all that's needed; no separate light/dark maps.
    function hexToRgba(hex: string, alpha: number): string {
      const clean = hex.trim().replace('#', '');
      const full =
        clean.length === 3
          ? clean.split('').map((c) => c + c).join('')
          : clean;
      const r = parseInt(full.slice(0, 2), 16);
      const g = parseInt(full.slice(2, 4), 16);
      const b = parseInt(full.slice(4, 6), 16);
      if ([r, g, b].some(Number.isNaN)) return `rgba(128,128,128,${alpha})`;
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function palette() {
      const styles = getComputedStyle(document.documentElement);
      const fg = styles.getPropertyValue('--foreground') || '#18181b';
      const muted = styles.getPropertyValue('--muted-foreground') || '#52525b';
      const accent = styles.getPropertyValue('--accent') || '#ea580c';
      const mono = styles.getPropertyValue('--font-geist-mono').trim();
      return {
        dot: hexToRgba(fg, 0.4),
        line: hexToRgba(muted, 0.15),
        lineNearCursor: hexToRgba(accent, 0.55),
        glow: hexToRgba(accent, 0.14),
        font: `10px ${mono || 'monospace'}`,
      };
    }

    // ---- setup --------------------------------------------------------
    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = width < 640 ? NODE_COUNT_MOBILE : NODE_COUNT_DESKTOP;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * DRIFT_SPEED,
        vy: (Math.random() - 0.5) * DRIFT_SPEED,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      }));
    }

    function step() {
      const c = palette();
      ctx!.clearRect(0, 0, width, height);

      // update
      for (const n of nodes) {
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;

          if (n.x <= 0 || n.x >= width) n.vx *= -1;
          if (n.y <= 0 || n.y >= height) n.vy *= -1;

          if (mouse.active) {
            const dx = mouse.x - n.x;
            const dy = mouse.y - n.y;
            const dist = Math.hypot(dx, dy);
            if (dist < CURSOR_RADIUS && dist > 0.01) {
              n.x += dx * CURSOR_PULL * (1 - dist / CURSOR_RADIUS);
              n.y += dy * CURSOR_PULL * (1 - dist / CURSOR_RADIUS);
            }
          }
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const distToCursor = Math.hypot(mouse.x - midX, mouse.y - midY);
            const near = mouse.active && distToCursor < CURSOR_RADIUS;

            ctx!.strokeStyle = near ? c.lineNearCursor : c.line;
            ctx!.lineWidth = near ? 1.1 : 0.7;
            ctx!.globalAlpha = 1 - dist / LINK_DISTANCE;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      ctx!.globalAlpha = 1;

      // cursor glow
      if (mouse.active) {
        const gradient = ctx!.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          CURSOR_RADIUS
        );
        gradient.addColorStop(0, c.glow);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx!.fillStyle = gradient;
        ctx!.fillRect(
          mouse.x - CURSOR_RADIUS,
          mouse.y - CURSOR_RADIUS,
          CURSOR_RADIUS * 2,
          CURSOR_RADIUS * 2
        );
      }

      // node glyphs
      ctx!.fillStyle = c.dot;
      ctx!.font = c.font;
      ctx!.textAlign = 'center';
      ctx!.textBaseline = 'middle';
      for (const n of nodes) {
        ctx!.fillText(n.symbol, n.x, n.y);
      }

      animationId = requestAnimationFrame(step);
    }

    // ---- listeners ------------------------------------------------------
    function handlePointerMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }
    function handlePointerDown(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }
    function handlePointerUp() {
      mouse.active = false;
    }
    function handlePointerLeave() {
      mouse.active = false;
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointerleave', handlePointerLeave);
    animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
