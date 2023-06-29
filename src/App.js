import '../src/styles/App.css';
import React from "react";
import './styles/App.css';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import AboutBlock from "./components/AboutBlock";
import GridStyled from "./components/GridStyled";
import LoginPage from "./components/LoginPage";

function App() {
  return (
      <GridStyled>
          <Routes>
              <Route path="/" element={<Header />} >
                  <Route index element={<MainPage />} />
                  <Route path="/about" element={<AboutBlock />} />
                  <Route path="/reg" />
                  <Route path="/log" element={<LoginPage />}/>
              </Route>
          </Routes>
      </GridStyled>
  );
}

export default App;
