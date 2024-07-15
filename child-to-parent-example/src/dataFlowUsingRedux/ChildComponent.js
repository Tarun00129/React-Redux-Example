// src/ChildComponent.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDataFromChild } from '../redux/actions';

const ChildComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    dispatch(setDataFromChild(inputValue + "\n Using Redux"));
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;

