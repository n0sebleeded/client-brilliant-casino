import '../src/styles/App.css';
import React from "react";
import './styles/App.css';
import Header from "./components/pages/base/Header";
import MainPage from "./components/pages/base/MainPage";
import {Route, Routes, useLocation} from "react-router-dom";
import AboutBlock from "./components/pages/base/AboutBlock";
import LoginPage from "./components/pages/reg-log/LoginPage";
import SidePlayBar from "./components/games/SidePlayBar";
import Game from "./components/games/Game";
import NotFound from "./components/pages/NotFound";
import RegPage from "./components/pages/reg-log/reg-comp/RegPage";
import {AnimatePresence} from "framer-motion";

function App() {

    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Header />} >
                    <Route index element={<MainPage />} />
                    <Route path="about" element={<AboutBlock />} />
                    <Route path="log" element={<LoginPage />} />
                </Route>
                <Route path="/reg" element={<RegPage />} />
                <Route path="/play" element={<SidePlayBar />}>
                    <Route index element={<Game />} />
                </Route>
                <Route path="/*" element={<NotFound />}/>
            </Routes>
        </AnimatePresence>
    );
}

export default App;
