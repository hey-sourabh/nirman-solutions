"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  animation?: "slide-up" | "slide-down" | "slide-left" | "slide-right" | "fade" | "scale" | "blur";
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function Reveal({
  children,
  animation = "slide-up",
  delay = 0,
  duration = 700,
  className = "",
  triggerOnce = false, // re-animates smoothly on scroll
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Fast check if element is already in the viewport on mount
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [triggerOnce]);

  // Luxury kinetic cubic-bezier easing
  const easing = "cubic-bezier(0.16, 1, 0.3, 1)";
  const transitionProps = `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms, filter ${duration}ms ${easing} ${delay}ms`;

  const getStyle = (): React.CSSProperties => {
    if (isVisible) {
      return {
        opacity: 1,
        filter: "blur(0px)",
        transform: "none",
        transition: transitionProps,
        willChange: "opacity, transform, filter",
      };
    }

    switch (animation) {
      case "slide-up":
        return {
          opacity: 0,
          filter: "blur(4px)",
          transform: "translate3d(0, 32px, 0)",
          transition: transitionProps,
          willChange: "opacity, transform, filter",
        };
      case "slide-down":
        return {
          opacity: 0,
          filter: "blur(4px)",
          transform: "translate3d(0, -32px, 0)",
          transition: transitionProps,
          willChange: "opacity, transform, filter",
        };
      case "slide-left":
        return {
          opacity: 0,
          filter: "blur(4px)",
          transform: isMobile ? "translate3d(0, 24px, 0)" : "translate3d(36px, 0, 0)",
          transition: transitionProps,
          willChange: "opacity, transform, filter",
        };
      case "slide-right":
        return {
          opacity: 0,
          filter: "blur(4px)",
          transform: isMobile ? "translate3d(0, 24px, 0)" : "translate3d(-36px, 0, 0)",
          transition: transitionProps,
          willChange: "opacity, transform, filter",
        };
      case "scale":
        return {
          opacity: 0,
          filter: "blur(4px)",
          transform: "scale(0.95)",
          transition: transitionProps,
          willChange: "opacity, transform, filter",
        };
      case "blur":
      case "fade":
      default:
        return {
          opacity: 0,
          filter: "blur(6px)",
          transform: "none",
          transition: transitionProps,
          willChange: "opacity, transform, filter",
        };
    }
  };

  return (
    <div ref={elementRef} style={getStyle()} className={`max-w-full ${className}`}>
      {children}
    </div>
  );
}
