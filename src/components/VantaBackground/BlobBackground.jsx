import React, {useEffect, useRef} from "react";
import "./BlobComponent.css";

const BlobComponent = () => {
  const blobRef = useRef(null);

  const positionBuffer = useRef([]);

  const blobX = useRef(0);
  const blobY = useRef(0);
const MAX_DELAY = 40; // Increased delay to build a longer trail
const SPEED = 0.01; // Lowered easing for smoother, slower movement

useEffect(() => {
  const handlePointerMove = (e) => {
    positionBuffer.current.push({ x: e.clientX, y: e.clientY });
    if (positionBuffer.current.length > MAX_DELAY) {
      positionBuffer.current.shift();
    }
  };

  const animate = () => {
    if (positionBuffer.current.length > 0) {
      const delayedPos = positionBuffer.current[0]; // Use oldest position

      blobX.current += (delayedPos.x - blobX.current) * SPEED;
      blobY.current += (delayedPos.y - blobY.current) * SPEED;

      if (blobRef.current) {
        blobRef.current.style.left = `${blobX.current}px`;
        blobRef.current.style.top = `${blobY.current}px`;
      }
    }
    requestAnimationFrame(animate);
  };

  window.addEventListener("pointermove", handlePointerMove);
  requestAnimationFrame(animate);

  return () => {
    window.removeEventListener("pointermove", handlePointerMove);
  };
}, []);

  return (
    <div className="blob-wrapper">
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>
    </div>
  );
};

export default BlobComponent;
