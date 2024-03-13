import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BoardList from "../pages/BoardList";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<BoardList />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default Routers;