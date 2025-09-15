"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface BackgroundParticlesProps {
  particleCount?: number;
  starCount?: number;
  className?: string;
  variant?: "galaxy" | "cosmic" | "tech" | "voice";
}

export default function BackgroundParticles({ 
  particleCount = 50, 
  starCount = 100, 
  className = "",
  variant = "galaxy"
}: BackgroundParticlesProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [particlePositions, setParticlePositions] = useState<Array<{left: number, top: number}>>([]);
  const [starPositions, setStarPositions] = useState<Array<{left: number, top: number, width: number, height: number}>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Generate positions only on client side to prevent hydration mismatch
    setMounted(true);
    setParticlePositions(
      [...Array(particleCount)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100
      }))
    );
    setStarPositions(
      [...Array(starCount)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1
      }))
    );
  }, [particleCount, starCount]);

  const getVariantStyles = () => {
    switch (variant) {
      case "cosmic":
        return {
          particleColor: "from-cyan-400 to-blue-400",
          starColors: ['rgba(6, 182, 212, 0.8)', 'rgba(59, 130, 246, 0.6)', 'rgba(255, 255, 255, 0.4)'],
          glowColor: "rgba(6, 182, 212, 0.3)"
        };
      case "tech":
        return {
          particleColor: "from-blue-400 to-indigo-400",
          starColors: ['rgba(59, 130, 246, 0.8)', 'rgba(147, 51, 234, 0.6)', 'rgba(255, 255, 255, 0.4)'],
          glowColor: "rgba(59, 130, 246, 0.2)"
        };
      case "voice":
        return {
          particleColor: "from-cyan-400 to-purple-400",
          starColors: ['rgba(6, 182, 212, 0.8)', 'rgba(147, 51, 234, 0.6)', 'rgba(255, 255, 255, 0.4)'],
          glowColor: "rgba(6, 182, 212, 0.3)"
        };
      default: // galaxy
        return {
          particleColor: "from-purple-400 to-pink-400",
          starColors: ['rgba(147, 51, 234, 0.8)', 'rgba(236, 72, 153, 0.6)', 'rgba(255, 255, 255, 0.4)'],
          glowColor: "rgba(147, 51, 234, 0.3)"
        };
    }
  };

  const styles = getVariantStyles();

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className={`particles-container ${className}`} />;
  }

  return (
    <div className={`particles-container gradient-bg ${className}`}>
      {/* Interactive Background Glow */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, ${styles.glowColor}, transparent 50%)`
        }}
      />

      {/* Floating Particles */}
      {particlePositions.map((position, i) => (
        <motion.div
          key={`particle-${i}`}
          className={`absolute w-1 h-1 bg-gradient-to-r ${styles.particleColor} rounded-full opacity-30`}
          style={{
            left: `${position.left}%`,
            top: `${position.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Stars */}
      {starPositions.map((position, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${position.left}%`,
            top: `${position.top}%`,
            width: `${position.width}px`,
            height: `${position.height}px`,
            backgroundColor: styles.starColors[i % 3],
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Additional floating elements for variety */}
      {particlePositions.slice(0, Math.floor(particleCount / 2)).map((position, i) => (
        <motion.div
          key={`float-${i}`}
          className={`absolute w-0.5 h-0.5 bg-gradient-to-r ${styles.particleColor} rounded-full opacity-20`}
          style={{
            left: `${position.left}%`,
            top: `${position.top}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
}
