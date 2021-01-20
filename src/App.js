import DrumButton from "./components/DrumButton";
import "./App.css";
import { useEffect } from "react";
import { Howl } from "howler";

function App() {
  const hiHat = new Howl({
    src: ["./hh_sweet.wav"],
  });

  const snare = new Howl({
    src: ["./snare_phonk.wav"],
  });

  const kick = new Howl({
    src: ["./kick_tight.wav"],
  });

  const keyDownFunction = (event) => {
    if (event.key === "a") {
      console.log("play kick");
      kick.play();
    }
    if (event.key === "s") {
      console.log("play snare");
      snare.play();
    }
    if (event.key === "d") {
      console.log("play hi-hat");
      hiHat.play();
    }
  };

  useEffect(() => {
    console.log("App get rendered");
    document.addEventListener("keydown", keyDownFunction);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pekka's soundboard</h1>
        <DrumButton title="Kick (a)" letter="a" />
        <DrumButton title="Snare (s)" letter="s" />
        <DrumButton title="Hi-Hat (d)" letter="d" />
      </header>
    </div>
  );
}

export default App;
