import { useRef, useState } from "react";

export function useMagicHover<T extends HTMLElement = HTMLDivElement>({ widthFactor = 1 }: { widthFactor?: number } = {}) {
  const containerRef = useRef<T | null>(null);
  const linkRefs = useRef<(HTMLElement | null)[]>([]);
  const [bgStyle, setBgStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseEnter = (idx: number) => {
    const link = linkRefs.current[idx];
    const container = containerRef.current;
    if (link && container) {
      const linkRect = link.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setBgStyle({
        opacity: 1,
        position: "absolute",
        left: linkRect.left - containerRect.left + container.scrollLeft,
        top: linkRect.top - containerRect.top + container.scrollTop,
        width: linkRect.width * widthFactor,
        height: linkRect.height,
        borderRadius: "0.5rem",
        background: "rgba(209, 204, 204, 0.12)",
        transition: "all 250ms cubic-bezier(.4,0,.2,1)",
        pointerEvents: "none",
        zIndex: 0,
      });
    }
  };

  const handleMouseLeave = () => {
    setBgStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  // For convenience, return a function to get props for each link
  const getLinkProps = (idx: number) => ({
    ref: (el: HTMLElement | null) => (linkRefs.current[idx] = el),
    onMouseEnter: () => handleMouseEnter(idx),
    onMouseMove: () => handleMouseEnter(idx),
    onMouseLeave: handleMouseLeave,
    onFocus: () => handleMouseEnter(idx),
    onBlur: handleMouseLeave,
  });

  return {
    containerRef,
    linkRefs,
    bgStyle,
    getLinkProps,
  };
} 