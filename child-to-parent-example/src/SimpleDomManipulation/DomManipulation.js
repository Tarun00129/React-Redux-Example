import React, { useState, useRef } from 'react';
import './DomManipulation.css';

function DomManipulation() {
  const [text, setText] = useState('Hello, world!');
  const textRef = useRef(null);

  const changeText = () => {
    setText('Text has been changed!');
    textRef.current.style.color = 'blue'; // Direct DOM manipulation using useRef
  };

  const revertText = () => {
    setText('Hello, world!');
    textRef.current.style.color = 'black'; // Direct DOM manipulation using useRef
  };
  return (
    <div className="DomManipulation">
      This is DOM Manipulation Section.
      <div ref={textRef}>{text}</div>
      <button onClick={changeText}>Change Text</button>
      <button onClick={revertText}>Revert Text</button>
    </div>
  );
}

export default DomManipulation;
