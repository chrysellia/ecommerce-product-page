import React from 'react';
import './ProductDetail.style.scss'
import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css'
import cartState from '../../recoil/atom/cartState';
import {
    useRecoilState,
} from 'recoil';

const photos = [
    {
        photo:"images/image-product-1.jpg"
    },
    {
        photo:"images/image-product-2.jpg"
    },
    {
        photo:"images/image-product-3.jpg"
    },
    {
        photo:"images/image-product-4.jpg"
    },
]



const ProductDetail = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);
    const [slide, setSlide] = React.useState(0);

    const refImage = React.useRef(null);

    const [cart, setCart] = useRecoilState(cartState);

    const addProduct = (value) => {
        setCart([...cart, value]);
    };

    const selectPhoto = async (index) => {
        await setIndex(index);
        setIsOpen(true);
    }

    const [quantity, setQuantity] = React.useState(1);

    const updateQuantity = (value) => {
        let newValue = quantity + value;

        if (newValue <= 1) newValue = 1;
        setQuantity(newValue);
    }

    const updateSlide = (value) => {
        let newValue = slide + value;

        if (newValue <= 0) newValue = 0;
        else if(newValue >= photos.length - 1) newValue = 0

        setSlide(newValue);
    }

    return (
        <div className="detail-page">
            <div className="detail-content">

                {/* Image Bloc */}
                <div className="detail-image">
                    <div className="image-first">
                        <img src={photos[slide].photo} alt="Sneakers One" ref={refImage}/>

                        <div className="show-image">
                            <div className="image-item" onClick={()=> selectPhoto(1)}>
                                <img src="images/image-product-2.jpg" alt="Sneakers Two"/>
                            </div>
                            <div className="image-item" onClick={()=> selectPhoto(2)}>
                                <img src="images/image-product-3.jpg" alt="Sneakers Three"/>
                            </div>
                            <div className="image-item" onClick={()=> selectPhoto(3)}>
                                <img src="images/image-product-4.jpg" alt="Sneakers Four"/>
                            </div>
                        </div>

                        <div className="arrow-design">
                            <div className="icon-previous" onClick={() => updateSlide(-1)}>
                                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                                </svg>
                            </div>
                            <div className="icon-next" onClick={() => updateSlide(1)}>
                                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    
                    <div className="list-image">
                        <div className="image-item" onClick={()=> selectPhoto(0)}>
                            <img src="images/image-product-1.jpg" alt="Sneakers One"/>
                        </div>

                        <ReactBnbGallery
                            show={isOpen}
                            photos={photos}
                            onClose={() => setIsOpen(false)}
                            activePhotoIndex={index}/>

                        <div className="image-item" onClick={()=> selectPhoto(1)}>
                            <img src="images/image-product-2.jpg" alt="Sneakers Two"/>
                        </div>
                        <div className="image-item" onClick={()=> selectPhoto(2)}>
                            <img src="images/image-product-3.jpg" alt="Sneakers Three"/>
                        </div>
                        <div className="image-item" onClick={()=> selectPhoto(3)}>
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
                            <button className="button-decrease" onClick={() => updateQuantity(-1)}>
                                <svg width="12" height="4" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
                                    <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#a"/>
                                </svg>
                            </button>

                            <div className="quantity-value">
                                <div className="quantity-input">{ quantity }</div>
                            </div>

                            <button className="button-increase" onClick={() => updateQuantity(1)}>
                                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
                                    <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/></defs><use fill="#FF7E1B" fill-rule="nonzero" xlinkHref="#b"/>
                                </svg>
                            </button>
                        </div>

                        {/* Add to Cart Button */}
                        <div
                            onClick={() => {
                                const product = {
                                    name: "Fall Limited Edition Sneakers",
                                    price: "125"
                                }

                                addProduct({
                                    ...product,
                                    quantity
                                })
                            }}
                            className="add-button">
                            <button 
                                className="flex items-center text-white font-bold whitespace-nowrap py-2 px-14 rounded" 
                                style={{backgroundColor:'hsl(26, 100%, 55%)'}}
                                >
                                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffff" fill-rule="nonzero"/>
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
