"use client";

import React, { useEffect, useRef, useState } from "react";

export type ShutterType =
  | "curtain-up"
  | "curtain-right"
  | "split-horizontal"
  | "split-vertical"
  | "louvers";

interface ImageShutterProps {
  children: React.ReactNode;
  shutterType?: ShutterType;
  overlayColor?: string; // Tailwind bg class, e.g. "bg-[#16191D]" or "bg-[#EBE5DB]"
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function ImageShutter({
  children,
  shutterType = "curtain-up",
  overlayColor = "bg-[#16191D]",
  delay = 80,
  duration = 850,
  className = "",
  triggerOnce = true,
}: ImageShutterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check if already in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const timer = setTimeout(() => setIsOpen(true), delay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsOpen(true);
          if (triggerOnce) {
            observer.unobserve(el);
          }
        } else if (!triggerOnce) {
          setIsOpen(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, triggerOnce]);

  // Luxury architectural kinetic easing
  const easing = "cubic-bezier(0.77, 0, 0.175, 1)";
  const transitionProps = `transform ${duration}ms ${easing} ${delay}ms, opacity ${duration * 0.7}ms ease-out ${delay + duration * 0.3}ms`;

  const renderShutters = () => {
    switch (shutterType) {
      case "curtain-up":
        return (
          <div
            className={`absolute inset-0 z-20 pointer-events-none ${overlayColor} border-b-2 border-[#A8824C]`}
            style={{
              transform: isOpen ? "translate3d(0, -101%, 0)" : "translate3d(0, 0, 0)",
              transition: transitionProps,
              willChange: "transform",
            }}
          />
        );

      case "curtain-right":
        return (
          <div
            className={`absolute inset-0 z-20 pointer-events-none ${overlayColor} border-l-2 border-[#A8824C]`}
            style={{
              transform: isOpen ? "translate3d(101%, 0, 0)" : "translate3d(0, 0, 0)",
              transition: transitionProps,
              willChange: "transform",
            }}
          />
        );

      case "split-horizontal":
        return (
          <>
            {/* Top Blade */}
            <div
              className={`absolute top-0 left-0 right-0 h-1/2 z-20 pointer-events-none ${overlayColor} border-b border-[#A8824C]/60`}
              style={{
                transform: isOpen ? "translate3d(0, -101%, 0)" : "translate3d(0, 0, 0)",
                transition: transitionProps,
                willChange: "transform",
              }}
            />
            {/* Bottom Blade */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1/2 z-20 pointer-events-none ${overlayColor} border-t border-[#A8824C]/60`}
              style={{
                transform: isOpen ? "translate3d(0, 101%, 0)" : "translate3d(0, 0, 0)",
                transition: transitionProps,
                willChange: "transform",
              }}
            />
          </>
        );

      case "split-vertical":
        return (
          <>
            {/* Left Shutter Blade */}
            <div
              className={`absolute top-0 bottom-0 left-0 w-1/2 z-20 pointer-events-none ${overlayColor} border-r border-[#A8824C]/60`}
              style={{
                transform: isOpen ? "translate3d(-101%, 0, 0)" : "translate3d(0, 0, 0)",
                transition: transitionProps,
                willChange: "transform",
              }}
            />
            {/* Right Shutter Blade */}
            <div
              className={`absolute top-0 bottom-0 right-0 w-1/2 z-20 pointer-events-none ${overlayColor} border-l border-[#A8824C]/60`}
              style={{
                transform: isOpen ? "translate3d(101%, 0, 0)" : "translate3d(0, 0, 0)",
                transition: transitionProps,
                willChange: "transform",
              }}
            />
          </>
        );

      case "louvers":
        // 4 Architectural Shutter Slats with micro-stagger
        return (
          <div className="absolute inset-0 z-20 pointer-events-none flex flex-col">
            {[0, 1, 2, 3].map((idx) => {
              const slatDelay = delay + idx * 75;
              const slatTransition = `transform ${duration * 0.85}ms ${easing} ${slatDelay}ms`;
              return (
                <div
                  key={idx}
                  className={`flex-1 w-full ${overlayColor} border-b border-[#A8824C]/40 relative`}
                  style={{
                    transform: isOpen
                      ? idx % 2 === 0
                        ? "translate3d(-101%, 0, 0)"
                        : "translate3d(101%, 0, 0)"
                      : "translate3d(0, 0, 0)",
                    transition: slatTransition,
                    willChange: "transform",
                  }}
                />
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Shutter Overlay Layers */}
      {renderShutters()}

      {/* Child Image with subtle scale-down on shutter open */}
      <div
        className="w-full h-full transition-transform duration-1000 ease-out"
        style={{
          transform: isOpen ? "scale(1)" : "scale(1.08)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDuration: `${duration + 300}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
