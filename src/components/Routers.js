import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardList from "../pages/BoardList";
import Home from "../pages/Home";

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<BoardList />} />
        </Routes>
    );
}

export default Routers;