import { useState } from 'react'
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { CssBaseline } from "@mui/material";
import SiteAppBar from './component/AppBar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Battle from './pages/Battle'
import Contest from './pages/Contest'
import Login from './pages/Login'
import { Container } from '@mui/system';

function App() {
  return (
    <RecoilRoot>
      <>
        <CssBaseline />
        <HashRouter>
          <SiteAppBar />
          <Container className="main-container" disableGutters>
            <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/Battle' element = {<Battle/>} />
            <Route path='/Contest' element = {<Contest/>} />
            <Route path='/Login' element = {<Login/>} />
            </Routes>
          </Container>
        </HashRouter>
      </>
    </RecoilRoot>
  );
}
export default App