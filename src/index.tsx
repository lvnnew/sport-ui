import React from 'react';
import ReactDOM from 'react-dom/client';
import Trackers from './Trackers';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Trackers />
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
