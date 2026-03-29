import React, { useRef, useCallback } from 'react';

/**
 * TiltCard — React Bits-style subtle 3D perspective tilt on hover.
 * Max tilt: 5deg (barely perceptible, feels physical).
 * Disabled on touch devices via CSS media query.
 * No external dependencies.
 */
const TiltCard = ({ children, className = '', style = {} }) => {
  const cardRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    // Cancel any pending frame
    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      // Normalised position: -1 to 1
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      // Max 5deg — very subtle
      const rotateX = -(y * 5).toFixed(2);
      const rotateY = (x * 5).toFixed(2);

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
      card.style.transition = 'transform 80ms linear';
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    card.style.transition = 'transform 200ms ease-out';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      style={{ willChange: 'transform', transformStyle: 'preserve-3d', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard;
