import React, { useEffect } from 'react';

// redux 
import { useDispatch, useSelector } from 'react-redux';
import { SetDisountedData } from '../../../Apis/Slice/FilterData';

// swiper js 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// Components
import ProductCards from '../../../Components/ProductCards/ProductCards';
import CardSkeleton from '../../../Components/CardSkeleton/CardSkeleton';

// swiper js 
const DiscountedProducts = () => {
    const dispatch = useDispatch();

    // redux get data 
    const products = useSelector((state) => state.Data.Products);
    const Loading = useSelector((state) => state.Data.IsLoading);
    const filteredProducts = useSelector((state) => state.FilterData.DiscountedProducts);

    // console.log(filteredProducts);

    // get product which has discountPercentage > 10 
    useEffect(() => {
        if (products.length > 0) {
            const filtered = products.filter((product) => product.discountPercentage > 10);
            dispatch(SetDisountedData(filtered));
        }
    }, [products, dispatch]);

    return (
        <>
            <section className='section  discountedproducts position-relative'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <ul className='p-0 m-0 d-flex gap-2 align-items-center flex-wrap mb-3'>
                                <li>
                                    <span className='border-pattern'></span>
                                </li>
                                <li>
                                    <p className='m-0 fw-600 fs-16 primary-color'>Todays</p>
                                </li>
                            </ul>
                            <ul className='p-0 m-0 d-flex justify-content-between align-items-center'>
                                <li>
                                    <h3 className='fw-bold fs-22 text-capitalize'>Flash Sales</h3>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                navigation={true}
                                loop={true}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: true,
                                }}
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
                                modules={[Navigation]}
                                className="mySwiper">
                                {
                                    Loading ? (
                                        <>
                                            {[...Array(10)].map((_, index) => (
                                                <SwiperSlide key={index}>
                                                    <CardSkeleton />
                                                </SwiperSlide>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {
                                                filteredProducts.map((CurProduct, index) => {
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

export default DiscountedProducts;
