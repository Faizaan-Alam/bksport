"use client";

import { useEffect, useRef, type AnchorHTMLAttributes, type ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  maxX?: number;
  maxY?: number;
};

export function TiltLink({ children, className, maxX = 4, maxY = 7, ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.transform = `perspective(900px) rotateX(${(-y * maxX).toFixed(2)}deg) rotateY(${(x * maxY).toFixed(2)}deg)`;
    };
    const leave = () => {
      node.style.transform = "";
    };

    node.addEventListener("pointermove", move);
    node.addEventListener("pointerleave", leave);
    return () => {
      node.removeEventListener("pointermove", move);
      node.removeEventListener("pointerleave", leave);
    };
  }, [maxX, maxY]);

  return (
    <a ref={ref} className={className} {...rest}>
      {children}
    </a>
  );
}
