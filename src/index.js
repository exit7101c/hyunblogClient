import React from 'react';
import ReactDOM from 'react-dom/client';
import './common/css/style.css';
import Routers from './components/Routers'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Header />
        {/*<App />*/}
        <Routers className="body" />
        <Footer />
    </BrowserRouter>
);
