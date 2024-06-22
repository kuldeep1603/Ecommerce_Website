import React from 'react'

// icons 
import { Icon } from '@iconify/react';

// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

// router 
import { Link } from 'react-router-dom';

// redux 
import { SetCategoryValue } from '../../../Apis/Slice/Data';
import { useDispatch } from 'react-redux';

// Categories
export const Categories = [
    { title: "laptops", icons: <Icon className='light-black' fontSize={"32px"} icon="icon-park-outline:computer" /> },
    { title: "tablets", icons: <Icon className='light-black' fontSize={"32px"} icon="nimbus:mobile" /> },
    { title: "vehicle", icons: <Icon className='light-black' fontSize={"32px"} icon="ph:car" /> },
    { title: "mens-watches", icons: <Icon className='light-black' fontSize={"32px"} icon="icon-park-outline:digital-watches" /> },
    { title: "sunglasses", icons: <Icon className='light-black' fontSize={"32px"} icon="fluent-emoji-high-contrast:sunglasses" /> },
    { title: "mens-shirts", icons: <Icon className='light-black' fontSize={"32px"} icon="hugeicons:clothes" /> },
    { title: "sports-accessories", icons: <Icon className='light-black' fontSize={"32px"} icon="material-symbols:sports-tennis-outline" /> },
    { title: "womens-dresses", icons: <Icon className='light-black' fontSize={"32px"} icon="ph:dress-bold" /> },
]

const Category = () => {
    const dispatch = useDispatch();

    // HandleCategory data 
    const HandleCategory = (data) => {
        dispatch(SetCategoryValue(data));
        // Navigate(`/Category/${data}`);
    }
    return (
        <>
            <section className='section Category position-relative'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <ul className='p-0 m-0 d-flex gap-2 align-items-center flex-wrap mb-3'>
                                <li>
                                    <span className='border-pattern'></span>
                                </li>
                                <li>
                                    <p className='m-0 fw-600 fs-16 primary-color'>Categories</p>
                                </li>
                            </ul>
                            <ul className='p-0 m-0 d-flex justify-content-between align-items-center'>
                                <li>
                                    <h3 className='fw-bold fs-22 text-capitalize'>Browse By Category</h3>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <Swiper
                                slidesPerView={6}
                                spaceBetween={20}
                                navigation={true}
                                loop={true}
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
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    550: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    }, 
                                    800: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1000: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                    1200: {
                                        slidesPerView: 6,
                                        spaceBetween: 20,
                                    },
                                }}
                                modules={[Navigation]}
                                className="mySwiper">
                                {
                                    Categories.map((CurCategory, index) => {
                                        const { title, icons } = CurCategory;
                                        return (
                                            <SwiperSlide key={index}>
                                                <Link to={`/products/${title}`} onClick={() => HandleCategory(title)}>
                                                    <div className="card h-100 py-4 card-body d-flex flex-column align-items-center justify-content-center">
                                                        {icons}
                                                        <p className='fw-400 mb-0 text-black mt-2 fs-16 text-ellipsis text-center text-capitalize'>{title}</p>
                                                    </div>
                                                </Link>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
