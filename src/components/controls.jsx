import React from "react";
import "../vedalayout.css";

function Controls({ setSubtitle, setState }) {
  const trigger = (text) => {
    setSubtitle(text);
    setState("speaking");
    setTimeout(() => setState("idle"), 2500);
  };

  return (
    <div className="control-panel">
      <button onClick={() => trigger("Telling a joke!")}>🧠 Joke</button>
      <button onClick={() => trigger("Opening YouTube...")}>▶️ YouTube</button>
      <button onClick={() => trigger("Reminder saved!")}>📅 Reminder</button>
    </div>
  );
}

export default Controls;
