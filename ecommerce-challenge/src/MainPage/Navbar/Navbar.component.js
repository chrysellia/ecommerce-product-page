import React from 'react';
import './Navbar.style.scss';
import Cart from '../Cart/Cart.component';
import { Rotate as Hamburger } from 'hamburger-react'
import cartListState from '../../recoil/selector/cartListState';
import { useRecoilValue } from 'recoil';

const Navbar = () => {
    const [show, toggleShow] = React.useState(false);
    const [isOpen, setOpen] = React.useState(false)
    const superMenu = React.useRef(null);

    const carts = useRecoilValue(cartListState);

    return (
        <div className="navbar-page">
            <div className="navbar-content">

                {/* Menu Mobile */}
                <div className="menu-mobile">
                    <div className="navbar-hamburger">
                        <Hamburger
                            toggled={isOpen}
                            toggle={setOpen}
                            easing="ease-in" 
                            duration={0.4}/>
                    </div>

                    {/* Menu Hamburger opened */}
                    <div className={`navbar-supermenu ${isOpen ? 'visible' : ''}`}>
                        <div
                            ref={superMenu}
                            className="navbar-container">
                            
                            <div className="navbar-list">
                                <div>
                                    <div className="item-menu">Collections</div>
                                    <div className="item-menu">Men</div>
                                    <div className="item-menu">Women</div>
                                    <div className="item-menu">About</div>
                                    <div className="item-menu">Contact</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu Desktop */}
                <div className="navbar-logo uppercase">Sneakers</div>
                <div className="navbar-menu"> 
                    <div className="navbar-item">Collections</div>
                    <div className="navbar-item">Men</div>
                    <div className="navbar-item">Women</div>
                    <div className="navbar-item">About</div>
                    <div className="navbar-item">Contact</div>
                </div> 
                <div className="navbar-object">
                    <div className="navbar-cart" onClick={()=> toggleShow(true)}>
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>
                        </svg>
                        <div className="cart-number">{ carts.length }</div>
                    </div>
                    <div className="navbar-profile">
                        <img src="images/image-avatar.png"/>
                    </div>
                    <Cart
                        carts={carts}
                        toggleShow={toggleShow}
                        show={show}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
