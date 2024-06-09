import React from 'react';

const RemoveButtonComponent = ({ onRemoveButtonClick }) => {
  return (
    <button type="button" className="bg-Hotpink rounded-full w-6 align-center text-White" onClick={onRemoveButtonClick}>-</button>
  );
};

export default RemoveButtonComponent;
