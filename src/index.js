import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { ModalProvider } from 'react-simple-hook-modal'

ReactDOM.render(
  
  <React.StrictMode>
    <ModalProvider>
    <App />
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);