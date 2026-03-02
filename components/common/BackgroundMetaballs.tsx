'use client';

import { useEffect, useRef } from 'react';

type BallState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
};

const BALL_SIZES = [384, 500, 400];

export default function BackgroundMetaballs() {
  const ballRefs = useRef<Array<HTMLDivElement | null>>([]);
  const ballStateRef = useRef<BallState[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    const initializeBalls = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      ballStateRef.current = BALL_SIZES.map((size, index) => {
        const maxX = Math.max(0, viewportWidth - size);
        const maxY = Math.max(0, viewportHeight - size);

        const startX = [0.05, 0.45, 0.25][index] * maxX;
        const startY = [0.2, 0.35, 0.55][index] * maxY;

        const velocity = [22, 18, 25][index];
        const angle = [35, 135, 300][index] * (Math.PI / 180);

        return {
          x: startX,
          y: startY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          size,
        };
      });

      ballStateRef.current.forEach((ball, index) => {
        const element = ballRefs.current[index];
        if (!element) {
          return;
        }
        element.style.transform = `translate3d(${ball.x}px, ${ball.y}px, 0)`;
      });
    };

    initializeBalls();

    let animationFrameId = 0;
    let previousTime = performance.now();

    const animate = (time: number) => {
      const deltaTime = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      ballStateRef.current.forEach((ball, index) => {
        ball.x += ball.vx * deltaTime;
        ball.y += ball.vy * deltaTime;

        const maxX = Math.max(0, viewportWidth - ball.size);
        const maxY = Math.max(0, viewportHeight - ball.size);

        if (ball.x <= 0) {
          ball.x = 0;
          ball.vx = Math.abs(ball.vx);
        } else if (ball.x >= maxX) {
          ball.x = maxX;
          ball.vx = -Math.abs(ball.vx);
        }

        if (ball.y <= 0) {
          ball.y = 0;
          ball.vy = Math.abs(ball.vy);
        } else if (ball.y >= maxY) {
          ball.y = maxY;
          ball.vy = -Math.abs(ball.vy);
        }

        const element = ballRefs.current[index];
        if (element) {
          element.style.transform = `translate3d(${ball.x}px, ${ball.y}px, 0)`;
        }
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      ballStateRef.current.forEach((ball, index) => {
        const maxX = Math.max(0, viewportWidth - ball.size);
        const maxY = Math.max(0, viewportHeight - ball.size);
        ball.x = Math.min(ball.x, maxX);
        ball.y = Math.min(ball.y, maxY);

        const element = ballRefs.current[index];
        if (element) {
          element.style.transform = `translate3d(${ball.x}px, ${ball.y}px, 0)`;
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        ref={(element) => {
          ballRefs.current[0] = element;
        }}
        className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20 blur-3xl will-change-transform"
      />

      <div
        ref={(element) => {
          ballRefs.current[1] = element;
        }}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-400 to-purple-600 opacity-25 blur-[120px] will-change-transform"
      />

      <div
        ref={(element) => {
          ballRefs.current[2] = element;
        }}
        className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 opacity-30 blur-3xl will-change-transform"
      />
    </div>
  );
}
