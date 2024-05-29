
import React, { useState, useEffect } from 'react';

const ThreeTentCal = ({ tentPrice, tentAmount}) => {
  const [tentTotalCost, setTentTotalCost] = useState(tentAmount * tentPrice);

  useEffect(() => {
    setTentTotalCost(tentAmount * tentPrice); 
  }, [tentAmount, tentPrice]);


  return (
    <>
    <div className='flex gap-2 text-xl'>
      <h2>{tentAmount}X</h2>
      <h2><span className='text-Hotpink font-bold'>3</span> PERSON TENT <br />{tentTotalCost} DKK</h2>
    </div>
    </>
  );
};

export default ThreeTentCal; 