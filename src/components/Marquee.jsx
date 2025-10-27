// components/Marquee.jsx
import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * Marquee - infinite auto-scrolling marquee component
 *
 * Props:
 *  - children: content to scroll (string or JSX)
 *  - speed: pixels per second (default 100)
 *  - direction: "left" | "right" (default "left")
 *  - pauseOnHover: boolean (default true)
 *  - className: extra classes for outer container
 *  - gap: spacing (px) between duplicated blocks (default 40)
 */
export default function Marquee({
  children,
  speed = 100,
  direction = "left",
  pauseOnHover = true,
  className = "",
  gap = 40,
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

  // Measure widths and compute duration
  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const measure = () => {
      const cWidth = contentRef.current.getBoundingClientRect().width;
      const containerWidth = containerRef.current.getBoundingClientRect().width;

      // We want scroll distance = contentWidth + gap
      const distance = cWidth + gap;
      // Duration seconds = distance (px) / speed (px per second)
      const dur = distance / Math.max(1, speed);

      setContentWidth(cWidth);
      setDuration(dur);
    };

    measure();

    // re-measure on resize
    let ro = new ResizeObserver(measure);
    ro.observe(containerRef.current);
    ro.observe(contentRef.current);

    // also on font load / window resize
    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, [children, speed, gap]);

  // Build inline keyframes using CSS variables to avoid stylesheet injection
  const animationStyle =
    duration > 0
      ? {
          // We'll animate translateX from 0 to - (contentWidth + gap) px
          // Using CSS variable for duration to make pause/resume easier
          ["--marquee-duration"]: `${duration}s`,
          ["--marquee-distance"]: `${contentWidth + gap}px`,
        }
      : {};

  // Events for pause on hover
  const onMouseEnter = () => pauseOnHover && setIsPaused(true);
  const onMouseLeave = () => pauseOnHover && setIsPaused(false);

  // direction multiplier: left = negative translation of duplicate block
  // For right direction we reverse translation
  const isLeft = direction === "left";

  return (
    <div
      ref={containerRef}
      className={`marquee-outer relative overflow-hidden ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      // accessibility: allow keyboard user to pause
      tabIndex={0}
      onFocus={onMouseEnter}
      onBlur={onMouseLeave}
      aria-label="auto-scrolling content"
    >
      {/* gradient masks for edges */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-16 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* moving track */}
      <div
        className="marquee-track whitespace-nowrap flex items-center"
        // style holds CSS variables and animation play state
        style={{
          ...animationStyle,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {/* original content */}
        <div
          ref={contentRef}
          className="marquee-block inline-flex items-center"
          style={{ marginRight: gap }}
        >
          {children}
        </div>

        {/* duplicate content for seamless loop */}
        <div
          className="marquee-block inline-flex items-center"
          style={{ marginRight: gap }}
        >
          {children}
        </div>
      </div>

      {/* Styles scoped to component */}
      <style jsx>{`
        .marquee-outer {
          /* background should match page color; adjust as needed */
          background: transparent;
        }

        .marquee-track {
          display: inline-flex;
          align-items: center;
          /* animate using transform (GPU-accelerated) */
          /* When direction is left: move from 0 to -distance */
          animation-name: marquee-move-left;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: var(--marquee-duration, 10s);
        }

        /* reverse animation if direction is right */
        .marquee-outer[dir="rtl"] .marquee-track {
          animation-name: marquee-move-right;
        }

        @keyframes marquee-move-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-1 * var(--marquee-distance, 500px)));
          }
        }
        @keyframes marquee-move-right {
          0% {
            transform: translateX(calc(-1 * var(--marquee-distance, 500px)));
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

Marquee.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
  direction: PropTypes.oneOf(["left", "right"]),
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
  gap: PropTypes.number,
};
