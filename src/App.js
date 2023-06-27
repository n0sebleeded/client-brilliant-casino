import '../src/styles/App.css';
import React from "react";
import './styles/App.css';
import { Grid } from "grommet";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import AboutBlock from "./components/AboutBlock";

function App() {
  return (
      <Grid className="grid"
          rows={['10vh', '90vh']}
          columns={['1/2', '1/2']}
          areas={[
              { name: 'leftHeader', start: [0, 0], end: [0, 0] },
              { name: 'rightHeader', start: [1, 0], end: [1, 0] },
              { name: 'leftmain', start: [0, 1], end: [0, 1] },
              { name: 'main', start: [1, 1], end: [1, 1] },
          ]}>
          <Routes>
              <Route path="/" element={<Header />}>
                  <Route index element={<MainPage />}></Route>
                  <Route path="/about" element={<AboutBlock />}></Route>
              </Route>
          </Routes>
      </Grid>
  );
}

export default App;
