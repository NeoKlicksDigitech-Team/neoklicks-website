"use client";

import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
}

/**
 * AnimatedCounter component that detects numeric values inside a string
 * and smoothly increments them from 0 to the target number when in viewport.
 * Uses IntersectionObserver to trigger animation dynamically on scroll.
 */
export default function AnimatedCounter({ value }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Parse target number and surrounding prefix/suffix
    // Handles formats like "2+", "98%", "99.9%", "100/100", "Over 80%", "24/7/365", "10x+"
    const match = value.match(/(\d+(?:\.\d+)?)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const numberString = match[1];
    const target = parseFloat(numberString);
    const index = match.index ?? 0;
    const prefix = value.substring(0, index);
    const suffix = value.substring(index + numberString.length);
    const isDecimal = numberString.includes(".");

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const start = 0;
          const duration = 1500; // Smooth 1.5 seconds animation duration
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease-out quad formula for decelerating speed
            const easeProgress = progress * (2 - progress);
            const currentVal = start + easeProgress * (target - start);

            if (isDecimal) {
              const precision = numberString.split(".")[1]?.length || 1;
              setDisplayValue(`${prefix}${currentVal.toFixed(precision)}${suffix}`);
            } else {
              setDisplayValue(`${prefix}${Math.floor(currentVal)}${suffix}`);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value); // Clamp to exact target string at end
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return <span ref={elementRef}>{displayValue}</span>;
}
