import React from "react";

const VolumeInput = ({ onChange }) => {
  return <input type='range' min='0' max='10' onChange={onChange} />;
};

export default VolumeInput;
