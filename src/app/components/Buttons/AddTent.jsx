import React from 'react';

const ButtonComponent = ({ onAddTentClick }) => {
  return (
    <>
    <button type="button" className="bg-Hotpink text-White rounded-full w-6 align-center" onClick={onAddTentClick}>+</button>
    </>
  );
};

export default ButtonComponent; 
