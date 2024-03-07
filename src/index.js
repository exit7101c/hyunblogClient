import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/MainComponent';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
);


reportWebVitals();