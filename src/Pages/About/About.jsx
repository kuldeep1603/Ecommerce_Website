import React from 'react'
// icons 
import { CiDeliveryTruck } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { Icon } from '@iconify/react';

// style 
import "./About.css";

// Components
import BreadCums from '../../Components/BreadCums/BreadCums';
const About = () => {
    const image = "./img/about.png";
    
    // Breadcumsdata
    const Breadcumsdata = [
        { title: "Home", link: "/" },
        { title: `About`, active: "active" },
    ]
    return (
        <>
            <section className='section'>
                <div className="container ">
                    <div className="row">
                        <div className="col-12">
                            <BreadCums data={Breadcumsdata} />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <h3 className='fs-30 mb-3 fw-600 tertiary-font'>Our Story</h3>
                            <p className='fs-16 fw-400 tertiary-font'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                            <p className='fs-16 fw-400 tertiary-font'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                        </div>
                        <div className="col-md-6">
                            <img src={image} alt="About Us" title='About Us' loading='lazy' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='section '>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className='d-flex gap-5 flex-wrap justify-content-center align-items-center'>
                                <li className='d-flex flex-column align-items-center justify-content-center text-center'>
                                    <CiDeliveryTruck size={50} className='px-2 py-1 rounded-circle bg-tertiary-1 mb-2' />
                                    <p className='fw-600 mb-1 m-0 fs-16 text-uppercase'>FREE AND FAST DELIVERY</p>
                                    <span className='fs-14 fw-400 '>Free delivery for all orders over $140</span>
                                </li>
                                <li className='d-flex flex-column align-items-center justify-content-center text-center'>
                                    <CiHeadphones size={50} className='px-2 py-1 rounded-circle bg-tertiary-1 mb-2' />
                                    <p className='fw-600 mb-1 m-0 fs-16 text-uppercase'>24/7 CUSTOMER SERVICE</p>
                                    <span className='fs-14 fw-400 '>Friendly 24/7 customer support</span>
                                </li>
                                <li className='d-flex flex-column align-items-center justify-content-center text-center'>
                                    <Icon icon="gala:secure" className='px-2 py-1 fs-1 rounded-circle bg-tertiary-1 mb-2' />
                                    {/* <RiSecurePaymentLine size={50}  /> */}
                                    <p className='fw-600 mb-1 m-0 fs-16 text-uppercase'>MONEY BACK GUARANTEE</p>
                                    <span className='fs-14 fw-400 '>We reurn money within 30 days</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
