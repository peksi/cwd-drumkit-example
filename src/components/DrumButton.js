import { useEffect, useState } from "react";

const DrumButton = (props) => {
  const [isBeingPressed, setIsBeingPressed] = useState(false);

  const keydownFn = (event) => {
    if (props.letter === event.key) {
      console.log("key " + event.key + " was pressed");
      setIsBeingPressed(true);
    }
  };

  const keyupFn = (event) => {
    if (props.letter === event.key) {
      console.log("key " + event.key + " was released");
      setIsBeingPressed(false);
    }
  };

  useEffect(() => {
    console.log("rendered the button named ", props.title);
    document.addEventListener("keydown", keydownFn);
    document.addEventListener("keyup", keyupFn);
  }, []);

  return (
    <div
      className="drumButton"
      style={{ backgroundColor: isBeingPressed ? "white" : "gray" }}
    >
      {props.title}
    </div>
  );
};

export default DrumButton;
