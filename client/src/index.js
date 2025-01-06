import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PartsContextProvider } from './context/PartsContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PartsContextProvider>
     <App />
    </PartsContextProvider>
    
  </React.StrictMode>
);
