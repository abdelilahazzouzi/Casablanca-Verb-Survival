import React from 'react';
import '../styles/GeminiSketch.css';

/**
 * Pixel-art character generated from gemini-svg.svg
 * Data extracted from: <path d="M5 2 h6 v1 h2 v1 h1 v3 h-4 v2 h4 v3 h-1 v1 h-1 v2 h-2 v-2 h-1 v2 h-2 v-2 h-1 v2 h-2 v-1 h-1 v-1 h-1 v-9 h1 v-1 h2 v-1 Z M5 5 v2 h2 v-2 Z M7 8 v1 h2 v-1 Z" />
 */
const GeminiSketch: React.FC = () => {
  // 16x16 grid representation (1 = filled, 0 = empty)
  // Rows: 0 to 15
  const grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 0
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 1
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], // Row 2
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], // Row 3
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // Row 4
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // Row 5
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // Row 6
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // Row 7
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // Row 8
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // Row 9
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], // Row 10
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], // Row 11
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], // Row 12
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0], // Row 13
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 14
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Row 15
  ];

  return (
    <div className="pixel-art-container">
      <div className="pixel-grid">
        {grid.flat().map((pixel, index) => (
          <div key={index} className={`pixel ${pixel ? 'filled' : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default GeminiSketch;
