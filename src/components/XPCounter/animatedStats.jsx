import React, {useEffect, useRef, useState} from "react";
import "./AnimatedStats.css";

const AnimatedNumber = ({target, decimals = 0, start}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const duration = 2000;
      const progress = Math.min(elapsed / duration, 1);
      const current = target * progress;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, target]);

  return <span className="stat-number">{count.toFixed(decimals)}+</span>;
};

export default function AnimatedStats() {
  const stats = [
    {target: 1.4, label: "Years Experience", decimals: 1},
    {target: 17, label: "Completed Projects", decimals: 0},
    {target: 20, label: "Happy Clients", decimals: 0},
  ];

  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-container" ref={containerRef}>
      {stats.map((stat, index) => (
        <div className="stat-cell" key={index}>
          <AnimatedNumber
            target={stat.target}
            decimals={stat.decimals}
            start={animate}
          />
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
