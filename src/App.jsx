import React, { useRef, useState } from 'react'
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Contest from "./pages/Contest"
import Rank from "./pages/Rank"
import Battle from "./pages/Battle"
function App() {
  return (

    <RecoilRoot>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Contest" element={<Contest />}></Route>
          <Route path="/Rank" element={<Rank />}></Route>
          <Route path="/Battle" element={<Battle />}></Route>
        </Routes>
      </HashRouter>
    </RecoilRoot>
  );
}
export default App
