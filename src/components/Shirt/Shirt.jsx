import React, { useEffect, useRef } from "react";
import "./Shirt.scss";
import GooglyEyes, {
  EYE_SIZE,
  GooglyEyesDefs,
  PUPIL_RADIUS
} from "../GooglyEyes/GooglyEyes";

const ALL = ["all"];

// The shirt is a 12-column grid. Each row lists [count] for empty cells or
// [count, ringSides] for eyes; every row adds up to 12 cells.
const ROWS = [
  [[2], [1, ["right", "bottom"]], [1, ["right", "bottom", "left"]], [1, ["bottom", "left"]], [2], [1, ["right", "bottom"]], [1, ["right", "bottom", "left"]], [1, ["bottom", "left"]], [2]],
  [[1], [1, ["right", "bottom"]], [3, ALL], [2, ["right", "bottom", "left"]], [3, ALL], [1, ["left", "bottom"]], [1]],
  [[1, ["right", "bottom"]], [10, ALL], [1, ["left", "bottom"]]],
  [[1], [1, ["top", "left"]], [1], [1, ["top", "bottom", "right"]], [4, ALL], [1, ["top", "bottom", "left"]], [1], [1, ["top", "right"]], [1]],
  [[3], [1, ["top", "bottom", "right"]], [4, ALL], [1, ["top", "bottom", "left"]], [3]],
  [[3], [1, ["top", "bottom", "right"]], [4, ALL], [1, ["top", "bottom", "left"]], [3]],
  [[3], [1, ["top", "bottom", "right"]], [4, ALL], [1, ["top", "bottom", "left"]], [3]],
  [[3], [1, ["top", "bottom", "right"]], [4, ALL], [1, ["top", "bottom", "left"]], [3]],
  [[3], [1, ["top", "right"]], [4, ["top", "left", "right"]], [1, ["top", "left"]], [3]]
];

const renderRow = row =>
  row.flatMap(([count, sides]) =>
    Array.from({ length: count }, () => sides)
  ).map((sides, col) =>
    sides ? (
      <GooglyEyes position={sides} key={col} />
    ) : (
      <div className="Shirt__blank" key={col} />
    )
  );

// Moves each pupil toward the pointer, up to PUPIL_RADIUS from the center.
const lookAt = (pupils, pointer) => {
  // Read every position before writing any, so the browser lays out once.
  const rects = pupils.map(pupil => pupil.ownerSVGElement.getBoundingClientRect());
  pupils.forEach((pupil, i) => {
    const rect = rects[i];
    const scale = EYE_SIZE / rect.width; // screen pixels -> SVG units
    let dx = (pointer.x - (rect.left + rect.width / 2)) * scale;
    let dy = (pointer.y - (rect.top + rect.height / 2)) * scale;
    const distance = Math.hypot(dx, dy);
    if (distance > PUPIL_RADIUS) {
      dx *= PUPIL_RADIUS / distance;
      dy *= PUPIL_RADIUS / distance;
    }
    // Skip eyes whose pupil didn't visibly move, so the browser doesn't repaint them.
    const transform = `translate(${dx.toFixed(1)} ${dy.toFixed(1)})`;
    if (pupil.getAttribute("transform") !== transform) {
      pupil.setAttribute("transform", transform);
    }
  });
};

const Shirt = () => {
  const shirtRef = useRef(null);

  // Pupils are moved directly on the DOM, at most once per frame, instead of
  // re-rendering every eye through React on every mouse event.
  useEffect(() => {
    const pupils = Array.from(shirtRef.current.querySelectorAll(".GooglyEyes__pupil"));
    let pointer = null;
    let frame = null;

    const update = () => {
      frame = null;
      if (pointer) lookAt(pupils, pointer);
    };
    const scheduleUpdate = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    const onPointerMove = event => {
      const point = event.touches ? event.touches[0] : event;
      pointer = { x: point.clientX, y: point.clientY };
      scheduleUpdate();
    };

    const options = { passive: true };
    window.addEventListener("mousemove", onPointerMove, options);
    window.addEventListener("touchstart", onPointerMove, options);
    window.addEventListener("touchmove", onPointerMove, options);
    // The eyes move under a still pointer when the page scrolls or resizes.
    window.addEventListener("scroll", scheduleUpdate, options);
    window.addEventListener("resize", scheduleUpdate, options);
    return () => {
      window.removeEventListener("mousemove", onPointerMove, options);
      window.removeEventListener("touchstart", onPointerMove, options);
      window.removeEventListener("touchmove", onPointerMove, options);
      window.removeEventListener("scroll", scheduleUpdate, options);
      window.removeEventListener("resize", scheduleUpdate, options);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="Shirt" ref={shirtRef}>
      <GooglyEyesDefs />
      <h2>All Eyes On You</h2>
      {ROWS.map((row, i) => (
        <div className="Shirt__row" key={i}>
          {renderRow(row)}
        </div>
      ))}
    </div>
  );
};

export default Shirt;
