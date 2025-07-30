import React, {useEffect, useRef} from "react";
import "./BlobComponent.css";

const BlobComponent = () => {
  const blobRef = useRef(null);

  const positionBuffer = useRef([]);
  const MAX_DELAY = 15; // Increase this for more delay (slower reaction)
  const blobX = useRef(0);
  const blobY = useRef(0);

  useEffect(() => {
    const handlePointerMove = (e) => {
      positionBuffer.current.push({x: e.clientX, y: e.clientY});
      if (positionBuffer.current.length > MAX_DELAY) {
        positionBuffer.current.shift();
      }
    };

    const animate = () => {
      if (positionBuffer.current.length > 0) {
        const delayedPos = positionBuffer.current[0]; // oldest position in buffer
        // Apply easing to slow the blob down
        blobX.current += (delayedPos.x - blobX.current) * 0.05;
        blobY.current += (delayedPos.y - blobY.current) * 0.05;

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
