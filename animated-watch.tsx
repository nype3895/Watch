import React, { useState, useEffect } from 'react';

const AnimatedWatch = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => (prev + 1) % 60);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate hand rotations
  const secondRotation = (seconds * 6); // 360 degrees / 60 seconds = 6 degrees per second
  const minuteRotation = ((seconds / 60) * 6); // Smooth minute movement
  const hourRotation = ((seconds / 3600) * 30); // Smooth hour movement

  return (
    <div className="flex items-center justify-center w-full h-full">
      <svg viewBox="0 0 400 400" className="w-96 h-96">
        {/* Watch band (top) */}
        <path d="M150 0 L250 0 L270 80 L130 80 Z" fill="#666666"/>
        
        {/* Watch case */}
        <circle cx="200" cy="200" r="150" fill="#333333" stroke="#888888" strokeWidth="8"/>
        <circle cx="200" cy="200" r="140" fill="#222222" stroke="#999999" strokeWidth="4"/>
        
        {/* Watch crystal */}
        <circle cx="200" cy="200" r="130" fill="#FFFFFF"/>
        
        {/* Hour numbers */}
        <g fontFamily="Arial" fontSize="20" fontWeight="bold" fill="#333333">
          <text x="200" y="100" textAnchor="middle">12</text>
          <text x="255" y="115" textAnchor="middle">1</text>
          <text x="285" y="155" textAnchor="middle">2</text>
          <text x="300" y="207" textAnchor="middle">3</text>
          <text x="285" y="260" textAnchor="middle">4</text>
          <text x="255" y="300" textAnchor="middle">5</text>
          <text x="200" y="315" textAnchor="middle">6</text>
          <text x="145" y="300" textAnchor="middle">7</text>
          <text x="115" y="260" textAnchor="middle">8</text>
          <text x="100" y="207" textAnchor="middle">9</text>
          <text x="115" y="155" textAnchor="middle">10</text>
          <text x="145" y="115" textAnchor="middle">11</text>
        </g>
        
        {/* Watch hands */}
        <g transform={`rotate(${hourRotation} 200 200)`}>
          <line x1="200" y1="200" x2="200" y2="140" 
                stroke="#333333" strokeWidth="6" strokeLinecap="round"/>
        </g>
        <g transform={`rotate(${minuteRotation} 200 200)`}>
          <line x1="200" y1="200" x2="200" y2="120" 
                stroke="#333333" strokeWidth="4" strokeLinecap="round"/>
        </g>
        <g transform={`rotate(${secondRotation} 200 200)`}>
          <line x1="200" y1="200" x2="200" y2="110" 
                stroke="#CC0000" strokeWidth="2" strokeLinecap="round"/>
        </g>
        
        {/* Center pin */}
        <circle cx="200" cy="200" r="8" fill="#333333"/>
        <circle cx="200" cy="200" r="2" fill="#CC0000"/>
        
        {/* Date window */}
        <rect x="270" y="190" width="25" height="20" fill="white" stroke="#333333" strokeWidth="1"/>
        <text x="282" y="205" fontFamily="Arial" fontSize="14" textAnchor="middle">15</text>
        
        {/* Brand name */}
        <text x="200" y="160" fontFamily="Arial" fontSize="14" fontWeight="bold" 
              textAnchor="middle" fill="#333333">CHRONO</text>
        
        {/* Watch band (bottom) */}
        <path d="M130 320 L270 320 L250 400 L150 400 Z" fill="#666666"/>
      </svg>
    </div>
  );
};

export default AnimatedWatch;
