import '../src/styles/App.css';
import React from "react";
import './styles/App.css';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import AboutBlock from "./components/AboutBlock";
import LoginPage from "./components/LoginPage";
import SidePlayBar from "./components/SidePlayBar";
import Game from "./components/Game";
import NotFound from "./components/NotFound";
import RegPage from "./components/RegPage";

function App() {

  return (
          <Routes>
              <Route path="/" element={<Header />} >
                  <Route index element={<MainPage />} />
                  <Route path="about" element={<AboutBlock />} />
                  <Route path="log" element={<LoginPage />} />
              </Route>
              <Route path="/reg" element={<RegPage />}></Route>
              <Route path="/play" element={<SidePlayBar />}>
                  <Route index element={<Game />} />
              </Route>
              <Route path="/*" element={<NotFound/>}/>
          </Routes>
  );
}

export default App;
