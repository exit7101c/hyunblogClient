import React from 'react';
import Header from "./components/Header";
import Routers from "./components/Routers";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import BoardList from "./pages/BoardList";

function App() {
    return (
        <div>
            <Header />
            {/*<Routers />*/}
            <Routes>
                <Route exact={true} path="/" element={<Home />} />
                <Route exact={true} path="/board" element={<BoardList />} />
            </Routes>
        </div>
    );
}

export default App;