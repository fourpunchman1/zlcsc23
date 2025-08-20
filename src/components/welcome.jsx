// WelcomePage.jsx

import React, { useState, useEffect } from 'react';

// 接收 props，其中包含了 children
export const Welcome = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const symbols = [
    '#', '&', '$', '}', '{', '>', '<', '/', '0', '1'
  ];

  const animatedSymbols = symbols.map((symbol, index) => (
    <div 
      key={index} 
      className="symbol" 
      style={{
        transform: `translateY(${scrollY * (0 + Math.random() * 0.001)}px) rotate(${scrollY * (0.2 + Math.random() * 0.4)}deg) scale(${Math.max(0, 1 - scrollY / 1000)})`,
        opacity: Math.max(0, 1 - scrollY / 800),
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      }}
    >
      {symbol}
    </div>
  ));

  return (
    <div className="welcome-section-container">
 
      <div className="symbols-container">
        {animatedSymbols}
      </div>
    </div>
  );
};