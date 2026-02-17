import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    // Use MotionValues for high performance updates
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the follower ring
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') || target.classList.contains('cursor-none')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Dot - Instant follow */}
            <motion.div
                className="fixed top-0 left-0 bg-pink-500 rounded-full pointer-events-none z-[10000] hidden md:block mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    height: isHovering ? 8 : 8,
                    width: isHovering ? 8 : 8,
                }}
            />

            {/* Follower Ring - Smooth spring follow */}
            <motion.div
                className="fixed top-0 left-0 border border-slate-400 rounded-full pointer-events-none z-[9999] hidden md:block" // Hidden on mobile
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    height: isHovering ? 64 : 32,
                    width: isHovering ? 64 : 32,
                    backgroundColor: isHovering ? "rgba(139, 92, 246, 0.1)" : "transparent",
                    borderColor: isHovering ? "transparent" : "rgba(255, 255, 255, 0.5)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.5
                }}
            />
        </>
    );
};

export default CustomCursor;
