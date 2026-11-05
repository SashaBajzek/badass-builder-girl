import React from "react";
import "./GooglyEyes.scss";

// Each eye is drawn on a 32x32 grid and scaled to its grid cell with CSS,
// so the prerendered HTML already has the right size and layout.
export const EYE_SIZE = 32;
const CENTER = EYE_SIZE / 2;
const EYE_RADIUS = 10;
// Also the farthest the pupil's center can move from the eye's center.
export const PUPIL_RADIUS = 5;

// Rings that link an eye to its neighbors.
const RING_CENTERS = {
  top: [CENTER, 3],
  bottom: [CENTER, 29],
  left: [3, CENTER],
  right: [29, CENTER]
};

// Shared gradient for the shiny eye white. Render once per page.
// A gradient is far cheaper to paint than the blur + lighting filter it
// replaces, which re-ran for every eye whenever a pupil moved.
export const GooglyEyesDefs = () => (
  <svg className="GooglyEyes__defs" aria-hidden="true">
    <defs>
      <radialGradient id="GooglyEyes__shine" cx="38%" cy="35%" r="70%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="45%" stopColor="#f4f4f4" />
        <stop offset="100%" stopColor="#bdbdbd" />
      </radialGradient>
    </defs>
  </svg>
);

const GooglyEyes = ({ position }) => {
  const sides = position.includes("all") ? Object.keys(RING_CENTERS) : position;
  return (
    <svg className="GooglyEyes" viewBox={`0 0 ${EYE_SIZE} ${EYE_SIZE}`}>
      {sides.map(side => (
        <circle
          key={side}
          cx={RING_CENTERS[side][0]}
          cy={RING_CENTERS[side][1]}
          r={3}
          strokeWidth={2}
          stroke="#aaaaaa"
        />
      ))}
      {/* Soft glow around the eye */}
      <circle
        cx={CENTER}
        cy={CENTER}
        r={EYE_RADIUS + 0.4}
        fill="none"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth={0.8}
      />
      <circle
        cx={CENTER}
        cy={CENTER}
        r={EYE_RADIUS}
        fill="url(#GooglyEyes__shine)"
        stroke="#cccccc"
        strokeWidth={0.25}
      />
      {/* Moved by Shirt with a transform; React never re-renders it. */}
      <circle
        className="GooglyEyes__pupil"
        cx={CENTER}
        cy={CENTER}
        r={PUPIL_RADIUS}
        fill="#222222"
      />
    </svg>
  );
};

export default GooglyEyes;
