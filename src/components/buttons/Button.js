import React from "react";

const Button = ({ handleClick, letter }) => {
  return (
    <button onClick={handleClick} className='button' value={letter}>
      {letter}
    </button>
  );
};

export default Button;
