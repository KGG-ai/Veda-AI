import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Chat.js";
import Chat from './Chat';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Chat/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
