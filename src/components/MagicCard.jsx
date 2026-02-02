import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export const MagicCard = ({
    children,
    className = "",
    gradientColor = "rgba(56, 189, 248, 0.25)", // Slightly stronger default
    borderColor = "rgba(56, 189, 248, 0.4)",
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative bg-white/5 border border-white/10 overflow-hidden rounded-3xl ${className}`}
            onMouseMove={handleMouseMove}
        >
            {/* 
        Spotlight Effect:
        Radial gradient following mouse.
      */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${gradientColor},
              transparent 80%
            )
          `,
                }}
            />

            {/* Stars Noise Effect for premium look */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(1px 1px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, #eee, rgba(0,0,0,0))",
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px"
                }}
            />


            {/* Content Container */}
            <div className="relative h-full z-10 w-full">
                {children}
            </div>
        </div>
    );
};
