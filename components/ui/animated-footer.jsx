"use client";
import React, { useEffect, useRef, useState } from "react";

export default function WaveAnimation({ barCount = 23 }) {
  const waveRefs = useRef([]);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let t = 0;

    const animateWave = () => {
      let offset = 0;
      waveRefs.current.forEach((element, index) => {
        if (element) {
          offset += Math.max(0, 20 * Math.sin((t + index) * 0.3));
          element.style.transform = `translateY(${index + offset}px)`;
        }
      });

      t += 0.1;
      animationFrameRef.current = requestAnimationFrame(animateWave);
    };

    if (isVisible) {
      animateWave();
    } else if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
        height: 200,
        backgroundColor: "black",
      }}
    >
      {Array.from({ length: barCount }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (waveRefs.current[index] = el)}
          style={{
            height: `${index + 1}px`,
            backgroundColor: "white",
            transition: "transform 0.1s ease",
            willChange: "transform",
            marginTop: "-2px",
          }}
        />
      ))}
    </div>
  );
}
