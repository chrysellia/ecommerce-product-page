import './App.scss';
import React from 'react';
import MainPage from './MainPage/MainPage.component'
import {
  RecoilRoot,
} from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
        <MainPage/>
    </RecoilRoot>
  )
}

export default App;
