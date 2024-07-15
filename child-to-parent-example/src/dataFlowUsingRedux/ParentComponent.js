// src/ParentComponent.js
import React from 'react';
import { useSelector } from 'react-redux';
import ChildComponent from '../dataFlowUsingRedux/ChildComponent';

const ParentComponent = () => {
  const dataFromChild = useSelector((state) => state.dataFromChild);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child: {dataFromChild}</p>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;

