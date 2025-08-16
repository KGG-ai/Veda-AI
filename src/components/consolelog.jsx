import React from "react";
import "../vedalayout.css";

function ConsolePanels({ logs = [] }) {
  return (
    <div className="console-panel">
      <h3>🛰 VEDA LOG</h3>
      <div className="log-stream">
        {logs.map((log, index) => (
          <p key={index} className={`log-item ${log.type}`}>
            {log.type === "user" ? "🧍‍♀️" : "🤖"} {log.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ConsolePanels;
