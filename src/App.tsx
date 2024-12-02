import { useState } from "react";
import "./App.css";

const phrases = [
  "no",
  "wait what",
  "why do you keep saying no",
  "please?",
  "yes",
  "LOL you picked yes idc",
  "last chance I know if you pick no again >:(",
  "bruh",
  "i know its taking you forever to find the no button",
  "please i'm running out of ways to convince you to press yes",
  "press no again if you hate me",
  "wow",
  "no actually wow",
  "if you get to this point you have to give me $20",
  "another",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({});

  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
    // Generate random position for the "No" button
    const newPosition = {
      top: `${Math.floor(Math.random() * 90)}%`,
      left: `${Math.floor(Math.random() * 90)}%`,
    };
    setNoButtonPosition(newPosition);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="happy duck"
            src="src/cute-duck.gif"
            style={{ width: "100px", height: "auto" }}
          />
          <div className="text"> Yay! Happy Valentines :3 </div>
        </>
      ) : (
        <>
          {
            <img
              alt="angry duck"
              src="src/xVLTATh152VV.gif"
              style={{ width: "200px", height: "auto" }}
            />
          }

          <div className="text">
            {" "}
            do you want to be my valentine... or else{" "}
          </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="noButton"
              style={{ position: "absolute", ...noButtonPosition }}
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
