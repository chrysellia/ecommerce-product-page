import React from 'react';
import './ProductDetail.style.scss'

const ProductDetail = () => {
    return (
        <div className="detail-page">
            <div className="detail-content">

                {/* Image Bloc */}
                <div className="detail-image">
                    <div className="image-first">
                        <img src="images/image-product-1.jpg" alt="Sneakers One"/>
                    </div>
                    
                    <div className="list-image">
                        <div className="image-item">
                            <img src="images/image-product-1.jpg" alt="Sneakers One"/>
                        </div>
                        <div className="image-item">
                            <img src="images/image-product-2.jpg" alt="Sneakers Two"/>
                        </div>
                        <div className="image-item">
                            <img src="images/image-product-3.jpg" alt="Sneakers Three"/>
                        </div>
                        <div className="image-item">
                            <img src="images/image-product-4.jpg" alt="Sneakers Four"/>
                        </div>
                    </div>
                </div>

                {/* Description Bloc */}
                <div className="detail-description">
                    <div className="product-title uppercase">Sneaker Company</div>
                    <div className="product-name">Fall Limited Edition Sneakers</div>
                    <div className="product-content">
                        <p>
                            These low profile sneakers are your perfect casual wear companion.
                            Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                        </p>
                    </div>

                    {/* Product Price */}
                    <div className="product-price">
                        <div className="price-description">
                            <div className="price-amount">$125.00</div>
                            <div className="price-increase">50%</div>
                        </div>
                        <div className="price-total">$250.00</div>
                    </div>
                    
                    {/* Product Quantity */}
                    <div className="product-quantity">
                        <div className="input-quantity">
                            <button className="button-decrease">
                                <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
                                    <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#a"/>
                                </svg>
                            </button>

                            <div className="quantity-value">
                                <input type="text" className="h-full w-1/4"/>
                            </div>

                            <button className="button-increase">
                                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
                                    <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#b"/>
                                </svg>
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="add-button">
                            <button className="flex items-center text-white font-bold py-2 px-4 rounded" style={{backgroundColor:'hsl(26, 100%, 55%)'}}>
                            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>
                            </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
