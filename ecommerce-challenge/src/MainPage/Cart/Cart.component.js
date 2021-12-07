import React from 'react';
import './Cart.style.scss'

const Cart = () => {
    return (
        <div className="cart-page shadow-2xl">
            <div className="cart-content">
                <div className="cart-title">Cart</div>
                <div className="cart-line"></div>
                <div className="cart-description">
                    <div className="cart-empty">
                        <div className="empty-message">Your cart is empty</div>
                    </div>
                    <div className="cart-full">
                        <div className="full-description">
                            <div className="item-image">
                                <img src="images/image-product-1.jpg"/>
                            </div>
                            <div className="flex">
                                <div className="description-element">
                                    <div className="item-title">Fall Limited Edition Sneakers</div>
                                    <div className="flex">
                                        <div className="item-price">
                                            <div className="price-element">$125.00</div>
                                            <div className="price-element">x</div>
                                            <div className="price-element">3</div>
                                            <div className="price-result text-black">$375.00</div>
                                        </div>
                                        <div className="delete-item">
                                            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
                                                <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlinkHref="#a"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="text-center text-white font-bold py-2 px-14 mb-5 rounded" style={{backgroundColor:'hsl(26, 100%, 55%)'}}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart