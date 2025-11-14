"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

interface MagneticTextProps {
  text: string;
  as?: "h1" | "h2" | "p" | "span";
  className?: string;
}

const MagneticText = ({ text, as: Component = "h1", className }: MagneticTextProps) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const [letterStates, setLetterStates] = useState(
    Array.from(text).map(() => ({ y: 0 }))
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    const newLetterStates = Array.from(text).map((_, i) => {
      const letterElement = ref.current?.children[i] as HTMLElement;
      if (!letterElement) return { y: 0 };

      const letterRect = letterElement.getBoundingClientRect();
      const letterCenterX = letterRect.left - rect.left + letterRect.width / 2;

      const distance = Math.abs(mouseX - letterCenterX);
      const maxDistance = 150; // The "magnetic" field range

      if (distance < maxDistance) {
        const y = (1 - distance / maxDistance) * -10; // -10 is the max lift
        return { y };
      }
      return { y: 0 };
    });

    setLetterStates(newLetterStates);
  };

  const handleMouseLeave = () => {
    setLetterStates(Array.from(text).map(() => ({ y: 0 })));
  };

  return (
    <Component
      ref={ref}
      className={`flex ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from(text).map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-default"
          animate={{ y: letterStates[index]?.y || 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </Component>
  );
};

export default MagneticText;
