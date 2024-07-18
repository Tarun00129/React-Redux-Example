import React, { useState, useEffect } from 'react';

const debounce = (func, delay) => {
  let debounceTimer;
  return function(...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

const DebouncedMouseMove = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoordinates({ x: event.clientX, y: event.clientY });
  };

  const debouncedMouseMove = debounce(handleMouseMove, 300);

  useEffect(() => {
    window.addEventListener('mousemove', debouncedMouseMove);
    return () => {
      window.removeEventListener('mousemove', debouncedMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Debounced Mouse Move</h2>
      <p>X: {coordinates.x}</p>
      <p>Y: {coordinates.y}</p>
    </div>
  );
};

export default DebouncedMouseMove;
