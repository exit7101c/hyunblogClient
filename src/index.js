import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import './common/css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        <App />
        <Footer />
    </BrowserRouter>
);
