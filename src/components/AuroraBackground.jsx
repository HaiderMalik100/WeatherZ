import React, { useEffect, useState } from 'react';
import '../styles/AuroraBackground.css';

const AuroraBackground = ({ condition = 'Clear' }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 15}s`,
      animationDuration: `${15 + Math.random() * 10}s`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className={`aurora-bg ${condition}`}>
      <div className="aurora-blob blob-1"></div>
      <div className="aurora-blob blob-2"></div>
      <div className="aurora-blob blob-3"></div>
      <div className="particles">
        {particles.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AuroraBackground;