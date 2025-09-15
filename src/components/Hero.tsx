'use client';

import { useState, useEffect } from 'react';

// Add custom styles for animations
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes gradientX {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes spinReverse {
    from { transform: rotate(360deg); }
    to { transform: rotate(0deg); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  
  @keyframes orbit1 {
    0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
  }
  
  @keyframes orbit2 {
    0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
    100% { transform: rotate(-360deg) translateX(100px) rotate(360deg); }
  }
  
  @keyframes orbit3 {
    0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
  }
  
  @keyframes ringRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes ringRotateReverse {
    0% { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }
  }
  
  @keyframes bubbleFloat {
    0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
    50% { transform: translateY(-30px) scale(1.1); opacity: 1; }
  }
  
  @keyframes atmosphericGlow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.05); }
  }
  
  @keyframes energyPulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
  }
  
  @keyframes ringGlow {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.02); }
  }
  
  @keyframes particleFloat {
    0%, 100% { transform: translateY(0px) translateX(0px) scale(1); opacity: 0.7; }
    25% { transform: translateY(-15px) translateX(10px) scale(1.1); opacity: 1; }
    50% { transform: translateY(-30px) translateX(-5px) scale(0.9); opacity: 0.8; }
    75% { transform: translateY(-15px) translateX(-10px) scale(1.05); opacity: 0.9; }
  }
  
  @keyframes atmosphericPulse {
    0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
    50% { opacity: 0.7; transform: scale(1.1) rotate(180deg); }
  }
  
  @keyframes cosmicGlow {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
  }
  
  @keyframes buttonHover {
    0% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-2px) scale(1.05); }
    100% { transform: translateY(0px) scale(1); }
  }
  
  @keyframes buttonPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.4); }
    50% { box-shadow: 0 0 0 10px rgba(147, 51, 234, 0); }
  }
  
  @keyframes textGlow {
    0%, 100% { text-shadow: 0 0 5px rgba(147, 51, 234, 0.3); }
    50% { text-shadow: 0 0 20px rgba(147, 51, 234, 0.6); }
  }
  
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes wordSpacing {
    0%, 100% { letter-spacing: 0.05em; }
    50% { letter-spacing: 0.1em; }
  }
  
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
  
  .animate-gradient-x {
    background-size: 200% 200%;
    animation: gradientX 3s ease infinite;
  }
  
  .animate-spin-slow {
    animation: spinSlow 20s linear infinite;
  }
  
  .animate-spin-reverse {
    animation: spinReverse 15s linear infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-orbit-1 {
    animation: orbit1 8s linear infinite;
  }
  
  .animate-orbit-2 {
    animation: orbit2 12s linear infinite;
  }
  
  .animate-orbit-3 {
    animation: orbit3 10s linear infinite;
  }
  
  .animate-ring-rotate {
    animation: ringRotate 15s linear infinite;
  }
  
  .animate-ring-rotate-reverse {
    animation: ringRotateReverse 12s linear infinite;
  }
  
  .animate-bubble-float {
    animation: bubbleFloat 4s ease-in-out infinite;
  }
  
  .animate-atmospheric-glow {
    animation: atmosphericGlow 3s ease-in-out infinite;
  }
  
  .animate-energy-pulse {
    animation: energyPulse 2s ease-in-out infinite;
  }
  
  .animate-ring-glow {
    animation: ringGlow 3s ease-in-out infinite;
  }
  
  .animate-particle-float {
    animation: particleFloat 6s ease-in-out infinite;
  }
  
  .animate-atmospheric-pulse {
    animation: atmosphericPulse 4s ease-in-out infinite;
  }
  
  .animate-cosmic-glow {
    animation: cosmicGlow 2.5s ease-in-out infinite;
  }
  
  .animate-button-hover {
    animation: buttonHover 0.3s ease-in-out;
  }
  
  .animate-button-pulse {
    animation: buttonPulse 2s ease-in-out infinite;
  }
  
  .animate-text-glow {
    animation: textGlow 3s ease-in-out infinite;
  }
  
  .animate-slide-in-up {
    animation: slideInUp 0.8s ease-out;
  }
  
  .animate-word-spacing {
    animation: wordSpacing 4s ease-in-out infinite;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 z-10">
      {/* Enhanced Interactive Background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.4), transparent 60%)`
        }}
      />

      {/* Additional Hero-specific Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 100}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              backgroundColor: i % 3 === 0 ? 'rgba(147, 51, 234, 0.9)' : 'rgba(255, 255, 255, 0.7)',
              animationDelay: `${(i * 0.1) % 5}s`,
              animationDuration: `${3 + (i % 4)}s`
            }}
          />
        ))}
      </div>

      {/* Cosmic Nebula Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-cyan-500/20 rounded-full blur-3xl animate-cosmic-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/20 via-pink-500/15 to-purple-500/20 rounded-full blur-3xl animate-cosmic-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/15 via-blue-400/10 to-purple-400/15 rounded-full blur-2xl animate-atmospheric-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-400/12 via-pink-400/8 to-indigo-400/12 rounded-full blur-3xl animate-cosmic-glow"></div>
      </div>

      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
            
            {/* Left Side - Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-wider">
                  <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-text-glow">
                    Omnifier AI
                  </span>
                  <br />
                  <span className="text-white animate-word-spacing">
                    Voice Assistant
                  </span>
                </h1>
                
                <p className="text-base lg:text-lg text-gray-300 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed tracking-wide animate-slide-in-up" style={{animationDelay: '0.3s'}}>
                  Experience the future of artificial intelligence with our advanced voice assistant technology
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105 animate-slide-in-up" style={{animationDelay: '0.5s'}}>
                  <div className="text-lg font-bold text-purple-400 mb-1 tracking-wide">Smart</div>
                  <div className="text-xs text-gray-400 leading-relaxed">Advanced AI Processing</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-400/30 transition-all duration-300 hover:scale-105 animate-slide-in-up" style={{animationDelay: '0.7s'}}>
                  <div className="text-lg font-bold text-pink-400 mb-1 tracking-wide">Fast</div>
                  <div className="text-xs text-gray-400 leading-relaxed">Real-time Response</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 animate-slide-in-up" style={{animationDelay: '0.9s'}}>
                  <div className="text-lg font-bold text-cyan-400 mb-1 tracking-wide">Secure</div>
                  <div className="text-xs text-gray-400 leading-relaxed">Privacy Protected</div>
                </div>
              </div>


              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6 border-t border-white/10">
                <div className="text-center lg:text-left animate-slide-in-up" style={{animationDelay: '1.5s'}}>
                  <div className="text-xl font-bold text-white mb-1 tracking-wide">99.9%</div>
                  <div className="text-xs text-purple-300 font-medium tracking-wide">Accuracy Rate</div>
                </div>
                <div className="text-center lg:text-left animate-slide-in-up" style={{animationDelay: '1.7s'}}>
                  <div className="text-xl font-bold text-white mb-1 tracking-wide">50+</div>
                  <div className="text-xs text-pink-300 font-medium tracking-wide">Languages</div>
                </div>
                <div className="text-center lg:text-left animate-slide-in-up" style={{animationDelay: '1.9s'}}>
                  <div className="text-xl font-bold text-white mb-1 tracking-wide">24/7</div>
                  <div className="text-xs text-cyan-300 font-medium tracking-wide">Available</div>
                </div>
              </div>
            </div>

            {/* Right Side - AI Planet Visualization */}
            <div className="flex flex-col items-center">
              <div className="relative">
                {/* Cosmic Orbital Rings - Like Saturn */}
                <div className="absolute inset-0 w-80 h-80 border-2 border-gradient-to-r from-blue-400/40 via-purple-500/30 to-cyan-400/40 rounded-full animate-ring-rotate animate-ring-glow"></div>
                <div className="absolute inset-6 w-68 h-68 border border-gradient-to-r from-indigo-400/35 via-pink-400/25 to-purple-400/35 rounded-full animate-ring-rotate-reverse animate-ring-glow"></div>
                <div className="absolute inset-12 w-56 h-56 border-2 border-gradient-to-r from-cyan-400/30 via-blue-400/20 to-purple-400/30 rounded-full animate-ring-rotate animate-ring-glow"></div>
                <div className="absolute inset-18 w-44 h-44 border border-gradient-to-r from-pink-400/25 via-cyan-400/15 to-indigo-400/25 rounded-full animate-ring-rotate-reverse animate-ring-glow"></div>
                
                {/* Glowing Ring Particles */}
                <div className="absolute inset-0 w-80 h-80">
                  {[...Array(24)].map((_, i) => {
                    const angle = (i * 15) * Math.PI / 180;
                    const left = 50 + 45 * Math.cos(angle);
                    const top = 50 + 45 * Math.sin(angle);
                    return (
                      <div
                        key={`ring-particle-${i}`}
                        className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-particle-float"
                        style={{
                          left: `${Math.round(left * 100) / 100}%`,
                          top: `${Math.round(top * 100) / 100}%`,
                          animationDelay: `${Math.round((i * 0.1) % 3 * 10) / 10}s`,
                          animationDuration: `${4 + (i % 3)}s`
                        }}
                      />
                    );
                  })}
                </div>
                
                {/* Energy Lines */}
                <div className="absolute inset-0 w-80 h-80">
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-purple-400/40 via-pink-400/30 to-transparent animate-energy-pulse"></div>
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-energy-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/4 left-1/4 w-0.5 h-1/2 bg-gradient-to-b from-pink-400/30 to-transparent animate-energy-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute top-1/4 right-1/4 w-0.5 h-1/2 bg-gradient-to-b from-cyan-400/30 to-transparent animate-energy-pulse" style={{animationDelay: '1.5s'}}></div>
                </div>
                
                {/* Cosmic Atmospheric Bubbles */}
                <div className="absolute inset-0 w-80 h-80">
                  {[...Array(12)].map((_, i) => {
                    const left = 15 + (i * 8.3) % 70;
                    const top = 15 + (i * 11.2) % 70;
                    return (
                      <div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-br from-blue-400/25 to-purple-400/20 animate-particle-float"
                        style={{
                          width: `${6 + (i % 4) * 3}px`,
                          height: `${6 + (i % 4) * 3}px`,
                          left: `${Math.round(left * 100) / 100}%`,
                          top: `${Math.round(top * 100) / 100}%`,
                          animationDelay: `${Math.round((i * 0.3) % 5 * 10) / 10}s`,
                          animationDuration: `${4 + (i % 4)}s`
                        }}
                      />
                    );
                  })}
                </div>
                
                {/* Cosmic Dust Particles */}
                <div className="absolute inset-0 w-80 h-80">
                  {[...Array(20)].map((_, i) => {
                    const left = 10 + (i * 4.5) % 80;
                    const top = 10 + (i * 6.7) % 80;
                    return (
                      <div
                        key={`dust-${i}`}
                        className="absolute w-0.5 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-particle-float"
                        style={{
                          left: `${Math.round(left * 100) / 100}%`,
                          top: `${Math.round(top * 100) / 100}%`,
                          animationDelay: `${Math.round((i * 0.2) % 4 * 10) / 10}s`,
                          animationDuration: `${3 + (i % 3)}s`
                        }}
                      />
                    );
                  })}
                </div>
                
                {/* Atmospheric Glow */}
                <div className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-cyan-500/10 animate-atmospheric-glow"></div>
                <div className="absolute inset-2 w-76 h-76 rounded-full bg-gradient-to-r from-indigo-500/8 via-purple-500/5 to-pink-500/8 animate-atmospheric-glow" style={{animationDelay: '1s'}}></div>
                
                {/* Main Planet - Cosmic Style */}
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-slate-900 via-purple-900 to-black shadow-2xl shadow-blue-500/50 flex items-center justify-center animate-float">
                  {/* Planet Atmospheric Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-500/15 to-cyan-400/10 animate-atmospheric-pulse"></div>
                  
                  {/* Planet Surface Details */}
                  <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-blue-600/25 via-purple-500/20 to-cyan-500/15"></div>
                  
                  {/* Planet Surface Texture */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-slate-800/40 via-purple-800/30 to-indigo-900/50"></div>
                  
                  {/* Surface Features */}
                  <div className="absolute top-12 left-16 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/25 to-pink-500/15"></div>
                  <div className="absolute bottom-16 right-20 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/25 to-indigo-500/15"></div>
                  <div className="absolute top-24 right-12 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-500/15"></div>
                  
                  {/* Planet Surface Shells/Lines */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    {/* Concentric Shell Lines */}
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-purple-400/15 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-pink-400/12 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-2/5 left-2/5 w-1/5 h-1/5 border border-cyan-400/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                    
                    {/* Horizontal Shell Lines */}
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-t border-purple-400/20 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 border-t border-pink-400/15 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-3/4 left-1/4 w-1/2 h-1/2 border-t border-cyan-400/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    
                    {/* Vertical Shell Lines */}
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-l border-purple-400/15 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                    <div className="absolute top-1/4 left-1/2 w-1/2 h-1/2 border-l border-pink-400/12 rounded-full animate-pulse" style={{animationDelay: '1.8s'}}></div>
                    <div className="absolute top-1/4 left-3/4 w-1/2 h-1/2 border-l border-cyan-400/15 rounded-full animate-pulse" style={{animationDelay: '2.8s'}}></div>
                    
                    {/* Diagonal Shell Lines */}
                    <div className="absolute top-1/6 left-1/6 w-2/3 h-2/3 border border-purple-400/10 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                    <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-pink-400/8 rounded-full transform -rotate-45 animate-pulse" style={{animationDelay: '1.3s'}}></div>
                    
                    {/* Additional Curved Shell Details */}
                    <div className="absolute top-1/5 left-1/5 w-3/5 h-3/5 border border-purple-400/8 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
                    <div className="absolute top-2/5 left-2/5 w-1/5 h-1/5 border border-cyan-400/10 rounded-full animate-pulse" style={{animationDelay: '1.7s'}}></div>
                    <div className="absolute top-3/5 left-3/5 w-1/5 h-1/5 border border-pink-400/8 rounded-full animate-pulse" style={{animationDelay: '2.7s'}}></div>
                    
                    {/* Small Shell Details */}
                    <div className="absolute top-1/8 left-1/8 w-3/4 h-3/4 border border-purple-400/6 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-pink-400/6 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
                    <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 border border-cyan-400/6 rounded-full animate-pulse" style={{animationDelay: '2.2s'}}></div>
                  </div>
                  
                  {/* Starfield on Planet */}
                  <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => {
                      const left = 20 + (i * 13.7) % 60;
                      const top = 20 + (i * 19.3) % 60;
                      return (
                        <div
                          key={i}
                          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
                          style={{
                            left: `${Math.round(left * 100) / 100}%`,
                            top: `${Math.round(top * 100) / 100}%`,
                            animationDelay: `${Math.round((i * 0.15) % 3 * 100) / 100}s`
                          }}
                        />
                      );
                    })}
                  </div>
                  
                  {/* Central AI Symbol */}
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-400 via-pink-400 to-cyan-400 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="text-sm font-semibold text-white/80">AI Core</div>
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-orbit-1 shadow-lg shadow-purple-500/50"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-full animate-orbit-2 shadow-lg shadow-cyan-500/50"></div>
                <div className="absolute top-1/2 -right-4 w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-orbit-3 shadow-lg shadow-pink-500/50"></div>
                
                {/* Additional Floating Bubbles */}
                <div className="absolute inset-0 w-80 h-80">
                  {[...Array(12)].map((_, i) => {
                    const left = 10 + (i * 8.3) % 80;
                    const top = 10 + (i * 11.2) % 80;
                    return (
                      <div
                        key={`bubble-${i}`}
                        className="absolute rounded-full bg-gradient-to-br from-cyan-400/15 to-purple-400/10 animate-bubble-float"
                        style={{
                          width: `${4 + (i % 2) * 2}px`,
                          height: `${4 + (i % 2) * 2}px`,
                          left: `${Math.round(left * 100) / 100}%`,
                          top: `${Math.round(top * 100) / 100}%`,
                          animationDelay: `${Math.round((i * 0.3) % 5 * 10) / 10}s`,
                          animationDuration: `${2 + (i % 4)}s`
                        }}
                      />
                    );
                  })}
                </div>
                
                {/* Energy Particles */}
                <div className="absolute inset-0 w-80 h-80">
                  {[...Array(6)].map((_, i) => {
                    const left = 15 + (i * 14.2) % 70;
                    const top = 15 + (i * 16.7) % 70;
                    return (
                      <div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-energy-pulse"
                        style={{
                          left: `${Math.round(left * 100) / 100}%`,
                          top: `${Math.round(top * 100) / 100}%`,
                          animationDelay: `${Math.round((i * 0.4) % 3 * 10) / 10}s`,
                          animationDuration: `${1.5 + (i % 2)}s`
                        }}
                      />
                    );
                  })}
                </div>
                
                {/* Outer Energy Ring */}
                <div className="absolute -inset-4 w-88 h-88 border border-purple-400/10 rounded-full animate-ring-rotate"></div>
                <div className="absolute -inset-6 w-92 h-92 border border-cyan-400/8 rounded-full animate-ring-rotate-reverse"></div>
              </div>
              
              {/* Action Buttons Below Planet */}
              <div className="flex flex-row gap-4 justify-center items-center mt-8 animate-slide-in-up" style={{animationDelay: '2.1s'}}>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold text-base rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40 overflow-hidden">
                  <span className="relative z-10 tracking-wider flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Get Started
                  </span>
                </button>

                <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-bold text-base rounded-xl border border-white/20 hover:border-purple-400/60 hover:bg-white/20 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
                  <span className="flex items-center justify-center gap-2 tracking-wider">
                    <svg className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a3.5 3.5 0 110 7H9.5m3.5-7H15a3.5 3.5 0 110 7H12" />
                    </svg>
                    Try Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute top-1/2 left-8 transform -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
        <div className="text-6xl font-black text-purple-900/50 transform -rotate-90">AI</div>
      </div>

      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
        <div className="text-6xl font-black text-purple-900/50 transform rotate-90">2024</div>
      </div>
    </section>
  );
};

export default Hero;