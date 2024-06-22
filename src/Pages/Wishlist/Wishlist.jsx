import React from 'react'

// style 
import "./Wishlist.css";
// reudx 
import { useSelector } from 'react-redux';
import { RemoveFromWishlist } from '../../Apis/Slice/Wishlistslice';
import { useDispatch } from 'react-redux';
import { SetCartItems } from "../../Apis/Slice/CartSlice";

// router 
import { Link } from 'react-router-dom';

// icons 
import { MdOutlineDelete } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";

// component
import { getDiscountedPrice } from "../../Components/ProductCards/ProductCards"
import BreadCums from '../../Components/BreadCums/BreadCums';
import Buttons from '../../Components/common_components/Buttons';

// toast 
import { toast } from 'react-toastify';

const Wishlist = () => {
    const dispatch = useDispatch();

    // redux get data 
    const Data = useSelector((state) => state.Wishlist.wishlistItems);

    // Breadcumsdata
    const Breadcumsdata = [
        { title: "Home", link: "/" },
        { title: "Wishlist", active: "active" },
    ]

    // HandleCart
    const HandleCart = (data) => {
        const existingProduct = Data.find((item) => item.id == data.id);
        console.log(existingProduct);

        if (existingProduct) {
            const UpdatedCart = Data.map((item) =>
                item.id == data.id ? { ...item, Quantity: item.Quantity + 1 } : item
            );
            dispatch(SetCartItems(UpdatedCart));
        } else {
            const UpdatedCart = [...Data, { ...data, Quantity: 1 }];
            dispatch(SetCartItems(UpdatedCart));
        }
        toast.success("Product Added to Cart ...!");
    };

    // HandleRemove
    const HandleRemove = (id) => {
        dispatch(RemoveFromWishlist(id));
    }

    return (
        <>
            <section className='section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <BreadCums data={Breadcumsdata} />
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {
                                    Data.length == 0 ? (
                                        <>
                                            <div className="col-12">
                                                <p>No items Added to Wishlist ...!</p>
                                                <Buttons btntext="Home" className="py-2 px-2" to="/" />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {
                                                Data.map((item, index) => {
                                                    const { id, title, price, discountPercentage, rating, images, stock } = item;
                                                    return (
                                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={id}>
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
                                                                        <a onClick={() => HandleRemove(id)} className='px-2 py-2 text-black rounded-circle bg-white d-flex justify-content-center align-items-center fs-16'><MdOutlineDelete /></a>
                                                                        <Link to={`/Product/${id}`} className='px-2 py-2 text-black rounded-circle bg-white d-flex justify-content-center align-items-center fs-16'><FiEye /></Link>
                                                                    </div>
                                                                    <div className="add-to-cart">
                                                                        <button onClick={() => HandleCart(item)} type='button' className='bg-black text-white text-center fs-16 fw-semibold btn rounded-1 d-block w-100 text-capitalize'>Add to cart</button>
                                                                    </div>
                                                                </div>
                                                                <p className='fw-500 text-ellipsis  fs-16 mt-3 m-0'>{title}</p>
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
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Wishlist
