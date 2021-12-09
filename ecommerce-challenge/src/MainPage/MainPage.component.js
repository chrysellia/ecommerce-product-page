import React from 'react';
import Navbar from './Navbar/Navbar.component'
import ProductDetail from './ProductDetail/ProductDetail.component';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

const MainPage = () => {
    return (
        <div>
            <RecoilRoot>
                <Navbar/>
                <ProductDetail/>
            </RecoilRoot>
        </div>
    )
}

export default MainPage
