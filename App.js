import React, { useState, useEffect } from "react";
import Orb from "./orb";
import Subtitle from "./subtitle";
import VoiceCapture from "./voicecapture";
import "./orb.css";

function App() {
  const [subtitle, setSubtitle] = useState("Listening...");

  const handleVoiceCommand = async (text) => {
    console.log("Received:", text);
    setSubtitle(`You said: ${text}`);

    try {
      await fetch("http://localhost:5000/speak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
    } catch (err) {
      console.error("Failed to send to backend:", err);
    }
  };


  return (
    <div className="veda-container">
      <h1>VEDA AI</h1>
      <Orb />
      <Subtitle text={subtitle} />
      <VoiceCapture onCommand={handleVoiceCommand} />
    </div>
  );
}

export default App;




