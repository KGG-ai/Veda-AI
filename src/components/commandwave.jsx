import React from "react";
import "../vedalayout.css";

function CommandWave({ isListening }) {
  return (
    <div className={`mic-pulse ${isListening ? "active" : ""}`}>
      <div className="pulse-ring" />
      <div className="mic-dot" />
    </div>
  );
}

export default CommandWave;
