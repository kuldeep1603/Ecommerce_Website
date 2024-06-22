import React, { useEffect, useState } from 'react';
// style 
import "./SingleProduct.css";

// redux 
import { useDispatch, useSelector } from 'react-redux';
import { FetchSingleProduct } from '../../Apis/Slice/SingleData';
import { SetCartItems } from '../../Apis/Slice/CartSlice';
import { SetwishlistItems } from '../../Apis/Slice/Wishlistslice';


// router 
import { useParams, Link } from 'react-router-dom';

// components 
import BreadCums from '../../Components/BreadCums/BreadCums';
import Buttons from '../../Components/common_components/Buttons';

// icons 
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";


import { getStarRating, getDiscountedPrice } from '../../Components/ProductCards/ProductCards';

// toast
import { toast } from 'react-toastify';


// utilis

const SingleProduct = () => {
    // get id 
    const { id } = useParams();
    const dispatch = useDispatch();
    // usestate for img 
    const [SelectedImg, SetselectedImg] = useState('');

    // redux get data 
    const ProductData = useSelector((state) => state.SingleData.product);
    const Wishlist = useSelector((state) => state.Wishlist.wishlistItems);
    const CartItems = useSelector((state) => state.Cart.CartItems);

    // usestate for icons wishlist 
    const [WishlistIcons, SetwishlistIcons] = useState(<FaRegHeart className='fs-20 text-black' />);


    // fetch 
    useEffect(() => {
        if (id) {
            dispatch(FetchSingleProduct(`https://dummyjson.com/products/${id}`));
        }
    }, [id, dispatch]);

    // if image is 0 show first img 
    useEffect(() => {
        if (ProductData?.images?.length > 0) {
            SetselectedImg(ProductData.images[0]);
        }
    }, [ProductData]);

    // loading
    if (!ProductData) {
        return <div>Loading...</div>;
    }

    // Breadcumsdata
    const Breadcumsdata = [
        { title: "Home", link: "/" },
        { title: `${ProductData.title}`, active: "active" },
    ];

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

    // HandleIncrement
    const HandleIncrement = (id) => {
        console.log(id);
        dispatch(SetCartItems(CartItems.map((item) => {
            if (item.id === id) {
                return { ...item, Quantity: item.Quantity + 1 }
            } else {
                return item
            }
        })))
    }

    // HandleDecrement
    const HandleDecrement = (id) => {
        dispatch(SetCartItems(CartItems.map((item) => {
            if (item.id === id) {
                return { ...item, Quantity: item.Quantity - 1 }
            } else {
                return item
            }
        })))
    }

    const Quantity = CartItems.find(item => item.id === ProductData.id)?.Quantity || 0;

    return (
        <>
            <section className='section single_product'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <BreadCums data={Breadcumsdata} />
                        </div>
                        <div className="col-lg-6 mb-lg-0 mb-4 imgs">
                            <div className="row">
                                <div className="col-lg-3 col-sm-4 col-3">
                                    <ul className='p-0 m-0'>
                                        {ProductData.images.map((img, index) => (
                                            <li key={index} className='mb-3' onClick={() => SetselectedImg(img)}>
                                                <div className="card card-body bg-secondary-1 rounded-1 border-0">
                                                    <img src={img} alt={ProductData.title} title={ProductData.title} className='img-fluid' loading='lazy' />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-lg-9 col-md-8 col-sm-8 col-9">
                                    <div className="card main-image card-body bg-secondary-1 rounded-1 border-0">
                                        <img src={SelectedImg} alt={ProductData.title} title={ProductData.title} className='img-fluid' loading='lazy' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className='fw-500 fs-26 text-capitalize mb-2'>{ProductData.title}</h3>
                            <ul className='d-flex gap-2 align-items-center flex-wrap p-0 m-0'>
                                <li>
                                    {getStarRating(ProductData.rating)}
                                </li>
                                <li>
                                    <p className='fw-400 fs-15 m-0 '>{ProductData.reviews.length} reviews |</p>
                                </li>
                                <li>
                                    <p className='green-color fs-15 m-0  fw-500'>{ProductData.availabilityStatus}</p>
                                </li>
                            </ul>
                            <p className='fs-24 m-0 fw-500 mt-3 tertiary-font'><FaIndianRupeeSign size={24} /> {getDiscountedPrice(ProductData.price, ProductData.discountPercentage)}</p>
                            <span className='d-block mt-3'>{ProductData.description}</span>
                            <div className="row mt-4">
                                <div className="col-sm-5 col-6">
                                    <ul className='d-flex  align-items-center m-0 p-0'>
                                        <li>
                                            <button onClick={() => HandleDecrement(ProductData.id)} disabled={Quantity == 0} className='px-4 rounded-end-0 rounded-1 py-3 border border-dark text-center text-black bg-white'>-</button>
                                        </li>
                                        <li>
                                            <p className='m-0 text-center px-4 py-3 fw-500 fs-16 border border-dark rounded-0'>{Quantity}</p>
                                        </li>
                                        <li>
                                            <button onClick={() => HandleIncrement(ProductData.id)} className='px-4 rounded-start-0 rounded-1 border-0 py-3 bg-primary-1 text-center text-white'>+</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-5 col-6">
                                    <Buttons onClick={() => HandleCart(ProductData)} btntext="Add to Cart" className="d-block w-100 py-3" />
                                </div>
                                <div className="col-2 d-sm-block d-none">
                                    <Link onClick={() => HandleWishlist(ProductData)} className='px-1 m-0 text-center d-flex justify-content-center align-items-center py-3 bg-white rounded-1 border border-dark'>
                                        {/* <CiHeart size={25} className='text-black' /> */}
                                        {WishlistIcons}
                                    </Link>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <div className="card card-body rounded-1">
                                        <ul className='d-flex gap-3 m-0 p-0 '>
                                            <li>
                                                <TbTruckDelivery size={35} />
                                            </li>
                                            <li>
                                                <h4 className='fs-17 fw-600 tertiary-font'>Free Delivery</h4>
                                                <p className='tertiary-font fw-400  fs-15 m-0'>Enter your postal code for Delivery Availability</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card card-body rounded-1">
                                        <ul className='d-flex gap-3 m-0 p-0 '>
                                            <li>
                                                <GiReturnArrow size={32} />
                                            </li>
                                            <li>
                                                <h4 className='fs-17 fw-600 tertiary-font'>Return Delivery</h4>
                                                <p className='tertiary-font fw-400  fs-15 m-0'>{ProductData.returnPolicy}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SingleProduct;
