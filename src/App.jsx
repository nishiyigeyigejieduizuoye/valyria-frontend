import React, { useRef, useState } from 'react'
import axios from 'axios';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Index from "./pages/Index"
import Login from "./pages/Login"

function App() {
  return (

    <RecoilRoot>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </HashRouter>
    </RecoilRoot>
  );
}
export default App
