import React from 'react'

// style 
import "./Footer.css";

// icons 
import { IoSendOutline } from "react-icons/io5";

// img 
const App = "./img/app.png";

const Footer = () => {
    return (
        <>
            <footer className='section pb-2 bg-black text-white'>
                <div className="container">
                    <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-1 row-cols-1">
                        <div className="col mb-lg-0 mb-3">
                            <ul className='p-0 m-0'>
                                <li className='mb-3'>
                                    <h4 className='fw-700 m-0 fs-22 text-capitalize'>Exclusive</h4>
                                </li>
                                <li className='mb-3'>
                                    <p className='tertiary-color m-0  fs-17'>Subscribe</p>
                                </li>
                                <li className='mb-3'>
                                    <div class="input-group ">
                                        <label htmlFor="" form='email' className='form-label fs-14 tertiary-color text-ellipsis'>Get 10% off your first order</label>
                                        <input type="text" class="form-control py-2  text-white fs-12 bg-black" id="email" placeholder="Enter your email" />
                                        <button class="btn" type="button" id="button-addon2"><IoSendOutline /></button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col mb-lg-0 mb-3">
                            <ul className='p-0 m-0'>
                                <li className='mb-3'>
                                    <h5 className='fw-500 m-0 fs-20 tertiary-color text-capitalize'>Support</h5>
                                </li>
                                <li className='mb-3'>
                                    <p className='fs-14 m-0 fw-400 text-ellipsis'>03 Dombivali, Mumbai, <br /> 421201, INDIA.</p>
                                </li>
                                <li className='mb-3'>
                                    <p className='fs-14 m-0 fw-400 text-ellipsis'>kuldeepmourya197@gmail.com</p>
                                </li>
                                <li className='mb-3'>
                                    <p className='fs-14 m-0 fw-400 text-ellipsis'>+91 9004991391</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col mb-lg-0 mb-3">
                            <ul className='p-0 m-0'>
                                <li className='mb-3'>
                                    <h5 className='fw-500 m-0 fs-20 tertiary-color text-capitalize'>Account</h5>
                                </li>
                                <li className='mb-3'>
                                    <span className='fs-14 fw-400 text-ellipsis'>My Account</span>
                                </li>
                                <li className='mb-3'>
                                    <span className='fs-14 fw-400 text-ellipsis'>Login / Register</span>
                                </li>
                                <li className='mb-3'>
                                    <span className='fs-14 fw-400 text-ellipsis'>Cart</span>
                                </li>
                                <li className='mb-3'>
                                    <span className='fs-14 fw-400 text-ellipsis'>Wishlist</span>
                                </li>
                                <li className='mb-3'>
                                    <span className='fs-14 fw-400 text-ellipsis'>Shop</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col mb-lg-0 mb-3">
                            <ul className='p-0 m-0'>
                                <li className='mb-3'>
                                    <h5 className='fw-500 m-0 fs-20 tertiary-color text-capitalize'>Quick Link</h5>
                                </li>
                                <li className='mb-3'>
                                    <span className='fs-14 fw-400 text-ellipsis'>Privacy Policy</span>
                                </li>
                                <li className='mb-3'>
                                    <span className='fs-14 fw-400 text-ellipsis'>Terms Of Use</span>
                                </li>
                                <li className='mb-3'>
                                    <span className='fs-14 fw-400 text-ellipsis'>FAQ</span>
                                </li>
                                <li className='mb-3'>
                                    <span className='fs-14 fw-400 text-ellipsis'>Contact</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col mb-lg-0 mb-3">
                            <ul className='p-0 m-0'>
                                <li className='mb-3'>
                                    <h5 className='fw-500 m-0 fs-20 tertiary-color text-capitalize'>Download App</h5>
                                </li>
                                <li className='mb-3'>
                                    <p className='fs-14 m-0 fw-400 text-ellipsis'>Save $3 with App New User Only</p>
                                </li>
                                <li>    
                                    <img src={App} alt="Download-App" title='Download-App' loading='lazy' className='img-fluid w-50' />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className='fw-400 fs-14 tertiary-color'>@ Copyright Kuldeep 2022. All right reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
