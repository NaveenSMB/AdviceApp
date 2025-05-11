import React from 'react'

export const FunctionSample = (props) => {
  const{handleclick}=props;
  return (
    <div>
      <p>This is function omponent</p>
      <button onClick={handleclick}>click me</button>
    </div>
  );
};