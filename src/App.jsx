import { useState } from 'react'
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div>
        <p>
          G-frontend
        </p>
      </div>
    </RecoilRoot>
  );
}
export default App
