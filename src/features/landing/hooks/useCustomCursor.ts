'use client';

import { useEffect } from 'react';

interface UseCustomCursorOptions {
  cursorId?: string;
  ringId?: string;
  interactiveSelector?: string;
}

export function useCustomCursor({
  cursorId = 'cursor',
  ringId = 'cursorRing',
  interactiveSelector = 'a, button'
}: UseCustomCursorOptions = {}) {
  useEffect(() => {
    const MOVING_WINDOW_MS = 80;
    const FOLLOW_SPEED_MOVING = 0.1;
    const FOLLOW_SPEED_IDLE = 0.24;

    const cursor = document.getElementById(cursorId);
    const ring = document.getElementById(ringId);

    if (!cursor || !ring) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let lastMouseMoveTime = 0;
    let animationFrameId = 0;

    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      mouseX = clientX;
      mouseY = clientY;
      lastMouseMoveTime = performance.now();
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const animateRing = () => {
      const isMouseMoving = performance.now() - lastMouseMoveTime < MOVING_WINDOW_MS;
      const followSpeed = isMouseMoving ? FOLLOW_SPEED_MOVING : FOLLOW_SPEED_IDLE;

      ringX += (mouseX - ringX) * followSpeed;
      ringY += (mouseY - ringY) * followSpeed;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      animationFrameId = window.requestAnimationFrame(animateRing);
    };

    const onInteractiveEnter = () => {
      cursor.style.width = '6px';
      cursor.style.height = '6px';
      ring.style.width = '52px';
      ring.style.height = '52px';
    };

    const onInteractiveLeave = () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      ring.style.width = '36px';
      ring.style.height = '36px';
    };

    const interactiveElements = Array.from(document.querySelectorAll(interactiveSelector));

    animateRing();
    document.addEventListener('mousemove', onMouseMove);
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', onInteractiveEnter);
      element.addEventListener('mouseleave', onInteractiveLeave);
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      document.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', onInteractiveEnter);
        element.removeEventListener('mouseleave', onInteractiveLeave);
      });
    };
  }, [cursorId, ringId, interactiveSelector]);
}
