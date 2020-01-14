import React, { useState, useEffect } from "react";
import Buttons from "./components/buttons";
import VolumeInput from "./components/right/VolumeInput";
import "./App.css";

function App() {
  const [sound, setSound] = useState("");
  const [volume, setVolume] = useState(0.6);

  function playSound(name) {
    let mp3 = require(`./sounds/${name}.mp3`);
    const audio = new Audio(mp3);
    audio.play();
    audio.volume = volume;
  }
  const handleClick = e => {
    e.preventDefault();
    setSound(e.target.value);
    playSound(e.target.value);
  };

  const handleChange = e => {
    e.preventDefault();
    setVolume((e.target.value / 10).toFixed(1));
  };

  document.addEventListener("keypress", e => {
    const name = e.key.toUpperCase();
    setSound(name);
    playSound(name);
  });

  return (
    <>
      <header>
        <h1> Welcome to sound machine!</h1>
      </header>
      <div className='left'>
        <Buttons handleClick={e => handleClick(e)} />
      </div>
      <div className='right'>
        <VolumeInput onChange={e => handleChange(e)} />
        <h1 style={{ fontSize: "4em" }}>{sound}</h1>
      </div>
      <footer>--Adil Ablimit</footer>
    </>
  );
}

export default App;
