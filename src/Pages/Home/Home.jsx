import React, { useEffect } from 'react'

// icons 
import { CiDeliveryTruck } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { Icon } from '@iconify/react';

// style 
import "./Home.css";

// redux 
import { FetchProduct } from '../../Apis/Slice/Data';
import { useDispatch } from 'react-redux';

// sections 
import DiscountedProducts from './DiscountedProduct/DiscountedProducts';
import SellingProducts from './SellingProducts/SellingProducts';
import ExploreProducts from './ExploreProducts/ExploreProducts';
import Category from './Category/Category';
import MusicBanner from './MusicBanner/MusicBanner';
import NewArrival from './New Arrival/NewArrival';
import Banner from './Banner/Banner';



export const MusicBannerimg = "./img/Music.png";
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const delayfunction = setTimeout(() => {
            dispatch(FetchProduct(`https://dummyjson.com/products`));
        }, 500);

        return () => clearTimeout(delayfunction);
    }, [dispatch]);
    return (
        <>
            <Banner />
            <DiscountedProducts />
            <Category />
            <SellingProducts />
            <MusicBanner />
            <ExploreProducts />
            <NewArrival />
            <section className='section'>
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

export default Home
