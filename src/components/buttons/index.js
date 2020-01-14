import React from "react";
import Button from "./Button";

const Buttons = ({ handleClick }) => {
  const buttonsArray = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  return buttonsArray.map(b => (
    <Button letter={b} handleClick={handleClick} key={b} />
  ));
};

export default Buttons;
