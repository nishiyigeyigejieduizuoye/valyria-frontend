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
import SiteAppBar from './components/AppBar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home'
import Battle from './pages/Battle'
import Contest from './pages/Contest'
import Login from './pages/Login'
import History from './pages/History'
import Rank from './pages/Rank'
import UserProfile from './pages/UserProfile';
// import UserScripts from './pages/UserScripts';
import { Container } from '@mui/system';
import GlobalMessage from './components/GlobalMeaage';
import DefaultState from './components/DefaultState';
import UserScripts from './pages/UserScripts';

function App() {
  return (
    <RecoilRoot>
      <>
        <DefaultState/>
        <CssBaseline />
        <GlobalMessage />
        <HashRouter>
          <SiteAppBar />
          <Container className="main-container" disableGutters>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/battle' element={<Battle />} />
              <Route path='/contest' element={<Contest />} />
              <Route path='/login' element={<Login />} />
              <Route path='/history' element={<History />} />
              <Route path='/rank' element={<Rank />} />
              <Route path='/profile' element={<UserProfile />} />
              <Route path='/scripts' element={<UserScripts />} />
            </Routes>
          </Container>
        </HashRouter>
      </>
    </RecoilRoot>
  );
}
export default App;