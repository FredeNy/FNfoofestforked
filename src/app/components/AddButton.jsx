import React from 'react';

const ButtonComponent = ({ onButtonClick }) => {
  return (
    <>
    <button type="button" className="bg-Hotpink text-White rounded-full w-6 align-center" onClick={onButtonClick}>+</button>
    </>
  );
};

export default ButtonComponent;
