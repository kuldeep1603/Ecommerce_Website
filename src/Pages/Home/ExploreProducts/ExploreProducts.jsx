import React from 'react';

// swiper js 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';

// redux 
import { useSelector } from 'react-redux';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Import custom styles
import '../Home.css';
// compoenets 
import ProductCards from '../../../Components/ProductCards/ProductCards';
import CardSkeleton from '../../../Components/CardSkeleton/CardSkeleton';

const ExploreProducts = () => {

    // redux get data 
    const products = useSelector((state) => state.Data.Products);
    const Loading = useSelector((state) => state.Data.IsLoading);
    return (
        <>
            <section className='section explore-products position-relative'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <ul className='p-0 m-0 d-flex gap-2 align-items-center flex-wrap mb-3'>
                                <li>
                                    <span className='border-pattern'></span>
                                </li>
                                <li>
                                    <p className='m-0 fw-600 fs-16 primary-color'>Our Products</p>
                                </li>
                            </ul>
                            <ul className='p-0 m-0 d-flex justify-content-between align-items-center'>
                                <li>
                                    <h3 className='fw-bold fs-22 text-capitalize'>Explore Our Products</h3>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <Swiper
                                slidesPerView={4}
                                grid={{
                                    rows: 2,
                                }}
                                spaceBetween={30}
                                navigation={true}
                                breakpoints={{
                                    250: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    300: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    450: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    550: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    }, 
                                    800: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1000: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                                modules={[Grid, Navigation]}
                                className="mySwiper"
                            >
                                {
                                    Loading ? (
                                        <>
                                            {[...Array(20)].map((_, index) => (
                                                <SwiperSlide key={index}>
                                                    <CardSkeleton />
                                                </SwiperSlide>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {
                                                products.map((CurProduct, index) => {
                                                    return (
                                                        <SwiperSlide key={CurProduct.id}>
                                                            <ProductCards data={CurProduct} />
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                }

                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExploreProducts;
