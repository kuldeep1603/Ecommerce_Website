import React, { useState } from 'react'
import "./ProductCards.css";
import { Link } from 'react-router-dom';
// icons 
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

// redux 
import { SetwishlistItems } from '../../Apis/Slice/Wishlistslice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { SetCartItems } from '../../Apis/Slice/CartSlice';


export const getDiscountedPrice = (price, discountPercentage) => {
    const discountAmount = (price * discountPercentage) / 100;
    const total = price - discountAmount;
    return total.toFixed(2); // Round to 2 decimal places
};
export const getStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<IoStar key={`full-${i}`} className='star-color' />);
    }
    for (let i = 0; i < halfStars; i++) {
        stars.push(<IoStarHalf key={`half-${i}`} className='star-color' />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<IoStarOutline key={`empty-${i}`} className='star-color' />);
    }

    return stars;
};

const ProductCards = ({ data }) => {
    const dispatch = useDispatch();

    // usestate for icons 
    const [WishlistIcons, SetwishlistIcons] = useState(<FaRegHeart />);

    // redux get data 
    const CartItems = useSelector((state) => state.Cart.CartItems);
    const Wishlist = useSelector((state) => state.Wishlist.wishlistItems);

    // HandleWishlist
    const HandleWishlist = (data) => {
        const existingProduct = Wishlist.find((item) => item.id == data.id);
        if (existingProduct) {
            toast.error("Product already in wishlist");
        } else {
            dispatch(SetwishlistItems(data));
            SetwishlistIcons(<FaHeart className='primary-color' />);
            toast.success(`${data.title.length > 10 ? data.title.slice(0, 12) + "..." : data.title}  Added to wishlist`);
        }
    }
    // HandleCart
    const HandleCart = (data) => {
        const existingProduct = CartItems.find((item) => item.id == data.id);
        console.log(existingProduct);

        if (existingProduct) {
            const UpdatedCart = CartItems.map((item) =>
                item.id == data.id ? { ...item, Quantity: item.Quantity + 1 } : item
            );
            dispatch(SetCartItems(UpdatedCart));
        } else {
            const UpdatedCart = [...CartItems, { ...data, Quantity: 1 }];
            dispatch(SetCartItems(UpdatedCart));
        }
        toast.success("Product Added to Cart ...!");
    };

    // destructring data 
    const { id, title, price, discountPercentage, rating, images, thumbnail, stock } = data;
    return (
        <>
            <div className="product-list position-relative" key={id}>
                <div className="card  bg-secondary-1 border-0">
                    <Link to={`/Product/${id}`}>
                        <div className="card-body">
                            <img src={images[0]} alt={title} title={title} loading='lazy' className='img-fluid rounded-2' />
                            <div className="discount">
                                <span className='px-2 py-1 rounded-1 text-white bg-primary-1 fs-12'>- {discountPercentage}%</span>
                            </div>
                        </div>
                    </Link>
                    <div className="wishlist d-flex flex-column gap-2 align-items-center">
                        <a onClick={() => HandleWishlist(data)} className='px-2 py-2 text-black rounded-circle bg-white d-flex justify-content-center align-items-center fs-16'>{WishlistIcons}</a>
                        <Link to={`/Product/${id}`} className='px-2 py-2 text-black rounded-circle bg-white d-flex justify-content-center align-items-center fs-16'><FiEye /></Link>
                    </div>
                    <div className="add-to-cart">
                        <button type='button' onClick={() => HandleCart(data)} className='bg-black text-white text-center fs-16 fw-semibold btn rounded-1 d-block w-100 text-capitalize'>Add to cart</button>
                    </div>
                </div>
                <p className='fw-500 text-ellipsis fs-16 mt-3 m-0'>{title}</p>
                <ul className='m-0 mt-1 p-0 d-flex gap-3 align-items-center flex-wrap'>
                    <li className='d-flex primary-color tertiary-font align-items-center flex-wrap'>
                        <FaIndianRupeeSign size={14} />
                        <span className=' fw-semibold'>{getDiscountedPrice(price, discountPercentage)}</span>
                    </li>
                    <li className='d-flex  align-items-center flex-wrap'>
                        <FaIndianRupeeSign size={15} className='tertiary-color tertiary-font fw-semibold' />
                        <del className='tertiary-color fs-17 tertiary-font fw-semibold'>{price}</del>
                    </li>
                </ul>
                <ul className='d-flex gap-2 align-items-center flex-wrap m-0 p-0 mt-1'>
                    <li>
                        {getStarRating(rating)}
                    </li>
                    <li>
                        <p className='fw-400 tertiary-font fs-15 m-0'>({stock})</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProductCards
