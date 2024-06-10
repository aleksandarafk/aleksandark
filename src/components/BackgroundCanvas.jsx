import React, { useEffect } from 'react';
import p5 from 'p5'; // Import p5 library

const BackgroundCanvas = () => {
  let p5Instance = null;

  useEffect(() => {
    // p5 sketch function
    const sketch = (p) => {
      // CONSTANTS
      const CELL_SIZE = 50;
      const COLOR_R = 79;
      const COLOR_G = 38;
      const COLOR_B = 233;
      const STARTING_ALPHA = 255;
      const BACKGROUND_COLOR = 31;
      const PROB_OF_NEIGHBOR = 0.5;
      const AMT_FADE_PER_FRAME = 5;
      const STROKE_WEIGHT = 1;

      // VARIABLES
      let colorWithAlpha;
      let numRows;
      let numCols;
      let currentRow = -1;
      let currentCol = -1;
      let allNeighbors = [];

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.colorMode(p.RGB);
        colorWithAlpha = p.color(COLOR_R, COLOR_G, COLOR_B, STARTING_ALPHA);
        p.noFill();
        p.stroke(colorWithAlpha);
        p.strokeWeight(STROKE_WEIGHT);
        numRows = Math.ceil(window.innerHeight / CELL_SIZE);
        numCols = Math.ceil(window.innerWidth / CELL_SIZE);
      };

      p.draw = () => {
        p.background(BACKGROUND_COLOR);
        const row = Math.floor(p.mouseY / CELL_SIZE);
        const col = Math.floor(p.mouseX / CELL_SIZE);
        if (row !== currentRow || col !== currentCol) {
          currentRow = row;
          currentCol = col;
          allNeighbors.push(...getRandomNeighbors(row, col));
        }

        const x = col * CELL_SIZE;
        const y = row * CELL_SIZE;

        p.stroke(colorWithAlpha);
        p.rect(x, y, CELL_SIZE, CELL_SIZE);

        for (const neighbor of allNeighbors) {
          const neighborX = neighbor.col * CELL_SIZE;
          const neighborY = neighbor.row * CELL_SIZE;

          neighbor.opacity = Math.max(0, neighbor.opacity - AMT_FADE_PER_FRAME);
          p.stroke(COLOR_R, COLOR_G, COLOR_B, neighbor.opacity);
          p.rect(neighborX, neighborY, CELL_SIZE, CELL_SIZE);
        }
        allNeighbors = allNeighbors.filter((neighbor) => neighbor.opacity > 0);
      };

      const getRandomNeighbors = (row, col) => {
        const neighbors = [];

        for (let dRow = -1; dRow <= 1; dRow++) {
          for (let dCol = -1; dCol <= 1; dCol++) {
            const neighborRow = row + dRow;
            const neighborCol = col + dCol;

            const isCurrentCell = dRow === 0 && dCol === 0;
            const isInBounds =
              neighborRow >= 0 &&
              neighborRow < numRows &&
              neighborCol >= 0 &&
              neighborCol < numCols;

            if (!isCurrentCell && isInBounds && Math.random() < PROB_OF_NEIGHBOR) {
              neighbors.push({
                row: neighborRow,
                col: neighborCol,
                opacity: STARTING_ALPHA,
              });
            }
          }
        }
        return neighbors;
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        numRows = Math.ceil(window.innerHeight / CELL_SIZE);
        numCols = Math.ceil(window.innerWidth / CELL_SIZE);
      };
    };

    // Create p5 instance
    p5Instance = new p5(sketch);

    // Clean up p5 instance on unmount
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <></>; // This component doesn't render anything directly
};

export default BackgroundCanvas;
