import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // 👈 uses div#root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

