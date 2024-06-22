import React from 'react'

// icons 
import { FaIndianRupeeSign } from "react-icons/fa6";

// redux 
import { useDispatch, useSelector } from 'react-redux';
import { SET_UPDATE_FORM, RESET_FORM } from '../../Apis/Slice/CheckoutForm';

// router 
import { useNavigate } from 'react-router-dom';

// Components
import Buttons from '../../Components/common_components/Buttons';
import BreadCums from '../../Components/BreadCums/BreadCums';
import Input1 from '../../Components/common_components/Input1';

// style
import "./Checkout.css";

// utilis
import { getDiscountedPrice } from "../../Components/ProductCards/ProductCards";
import { calculateTotalPrice } from "../../utilis/Cart_utilis";

// toast
import { toast } from 'react-toastify';

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // redux get data 
    const Data = useSelector((state) => state.Checkout);
    // const CartData = useSelector((state) => state.Cart.CartItems);
    const Cart = useSelector((state) => state.Cart.CartItems);

    // handle form 
    const onchange = (e) => {
        const { name, value } = e.target;
        dispatch(SET_UPDATE_FORM({ name, value }));
    }
    
    // handle submit 
    const Handlesubmit = (e) => {
        e.preventDefault();
        if (Data.FirstName === "" || Data.StreetAddress === "" || Data.Apartment === "" || Data.City === "" || Data.Number === "" || Data.Email === "") {
            toast.error("Please fill all the data ..!");
        } else {
            localStorage.setItem("Checkout", JSON.stringify(Data));
            toast.success("Sucessfully order placed ...!");
            setTimeout(() => {
                dispatch(RESET_FORM());
                navigate("/");
            }, 5000);
        }

    }

    // Breadcumsdata
    const Breadcumsdata = [
        { title: "Home", link: "/" },
        { title: "Cart", link: "/Cart" },
        { title: "Checkout", active: "active" },
    ]

    return (
        <>
            <section className='section checkout'>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 mb-3">
                            <BreadCums data={Breadcumsdata} />
                        </div>
                        <div className="col-12">
                            <h4 className='fw-500 fs-22 '>Billing Details</h4>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-6 col-md-12 mb-lg-0 mb-4">
                            <div className="row">

                                <div className="col-12 mb-4">
                                    <Input1 type="text" label="First Name *" value={Data.FirstName} name="FirstName" onchange={onchange} id="FirstName" />
                                </div>
                                <div className="col-12 mb-4">
                                    <Input1 type="text" label="Company Name" value={Data.CompanyName} name="CompanyName" onchange={onchange} id="CompanyName" />
                                </div>
                                <div className="col-12 mb-4">
                                    <Input1 type="text" label="Street Address*" value={Data.StreetAddress} name="StreetAddress" onchange={onchange} id="StreetAddress" />
                                </div>
                                <div className="col-12 mb-4">
                                    <Input1 type="text" label="Apartment, floor, etc. (optional)" value={Data.Apartment} name="Apartment" onchange={onchange} id="Apartment" />
                                </div>
                                <div className="col-12 mb-4">
                                    <Input1 type="text" label="Town/City*" value={Data.City} name="City" onchange={onchange} id="City" />
                                </div>
                                <div className="col-12 mb-4">
                                    <Input1 type="number" label="Phone Number*" value={Data.Number} name="Number" onchange={onchange} id="Number" />
                                </div>
                                <div className="col-12 mb-4">
                                    <Input1 type="email" label="Email Address*" value={Data.Email} name="Email" onchange={onchange} id="Email" />
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" checked value="" id="save" />
                                        <label className="form-check-label fw-500" for="save">
                                            Save this information for faster check-out next time
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-lg-1 col-lg-4 col-md-12">
                            <div className="row">
                                {
                                    Cart.map((CurItems, index) => {
                                        const { id, images, title, price, discountPercentage, Quantity } = CurItems;
                                        return (
                                            <div className="col-12 mb-3" key={id}>
                                                <ul className='m-0 p-0 d-flex justify-content-between align-items-center'>
                                                    <li className='d-flex gap-2 align-items-center'>
                                                        <div className="card card-body bg-secondary-1 text-center rounded-1 border-0">
                                                            <img src={images[0]} alt={title} title={title} loading='lazy' className='img-fluid' style={{ width: "70px" }} />
                                                        </div>
                                                        <p className='fw-500 fs-16 text-ellipsis m-0 p-0'>{title.length > 15 ? title.slice(0, 14) + "..." : title}</p>
                                                    </li>
                                                    <li>
                                                        <p className='fw-600 fs-16 m-0 p-0 tertiary-font d-flex gap-1 align-items-center'><FaIndianRupeeSign />{((getDiscountedPrice(price, discountPercentage)) * Quantity).toFixed(0)}</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="row mt-4">
                                <div className="col-12">
                                    <ul className='m-0 p-0'>
                                        <li className='d-flex mb-3  justify-content-between align-items-center'>
                                            <p className='m-0 fw-500 fs-16 '>Subtotal:</p>
                                            <span className='fw-600 fs-16 tertiary-font'>₹ {calculateTotalPrice(Cart).toFixed(0)}</span>
                                        </li>
                                        <li className='mb-3'>
                                            <hr />
                                        </li>
                                        <li className='d-flex mb-3  justify-content-between align-items-center'>
                                            <p className='m-0 fw-500 fs-16 '>Shipping:</p>
                                            <span className='fw-600 fs-16 tertiary-font'>Free</span>
                                        </li>
                                        <li className='mb-3'>
                                            <hr />
                                        </li>
                                        <li className='d-flex mb-3  justify-content-between align-items-center'>
                                            <p className='m-0 fw-500 fs-16 '>Total:</p>
                                            <span className='fw-600 fs-16'>₹ {calculateTotalPrice(Cart).toFixed(0)}</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 mt-3">
                                    <Buttons  onClick={Handlesubmit} btntext="Place Order" className="py-3 d-block w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout
