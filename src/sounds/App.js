import React, { useState } from "react";
import Buttons from "./components/buttons";
import "./App.css";

function App() {
  const [sound, setSound] = useState("");
  const [volume, setVolume] = useState(0.6);

  function handleClick(e) {
    setSound(e.target.value);
    const audio = new Audio();
    audio.src = `./sounds/${sound}.ogg`;
    audio.play();
    audio.volume = volume;
  }

  return (
    <>
      <div className='left'>
        <Buttons handleClick={handleClick} />
      </div>
      <p>hey!</p>
    </>
  );
}

export default App;
