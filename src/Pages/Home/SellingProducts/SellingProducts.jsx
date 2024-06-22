import React from 'react'
import { useEffect } from 'react'

// redux 
import { SetSellingProducts } from '../../../Apis/Slice/FilterData'
import { useDispatch, useSelector } from 'react-redux'

// style 
import "../Home.css";

// compoenets 
import ProductCards from '../../../Components/ProductCards/ProductCards';
import CardSkeleton from '../../../Components/CardSkeleton/CardSkeleton';
import Buttons from '../../../Components/common_components/Buttons'


const SellingProducts = () => {
    const dispatch = useDispatch();

    // redux get data 
    const products = useSelector((state) => state.Data.Products);
    const SellingProducts = useSelector((state) => state.FilterData.SellingProducts);
    const Loading = useSelector((state) => state.Data.IsLoading);
    const SellingProductsfour = SellingProducts.slice(0, 4);

    // get data that whose rating is > 4 
    useEffect(() => {
        if (products.length > 0) {
            const filterdata = products.filter((product) => product.rating > 4);
            dispatch(SetSellingProducts(filterdata));
        }
    }, [dispatch, products]);
    return (
        <>
            <section className='section selling-products'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-4">
                            <ul className='p-0 m-0 d-flex gap-2 align-items-center flex-wrap mb-3'>
                                <li>
                                    <span className='border-pattern'></span>
                                </li>
                                <li>
                                    <p className='m-0 fw-600 fs-16 primary-color'>This Month</p>
                                </li>
                            </ul>
                            <ul className='p-0 m-0 d-flex justify-content-between align-items-center'>
                                <li>
                                    <h3 className='fw-bold fs-22 text-capitalize'>Best Selling Products</h3>
                                </li>
                                <li>
                                    <Buttons btntext="View All" className="py-2 d-sm-block d-none  fs-16" />
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                {
                                    Loading ? (
                                        <>
                                            {[...Array(4)].map((_, index) => (
                                                <CardSkeleton data="col-lg-3 col-md-4 col-sm-6 col-6 mb-4"/>
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {
                                                SellingProductsfour.map((CurProduct, index) => {
                                                    return (
                                                        <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-4' key={CurProduct.id}>
                                                            <ProductCards data={CurProduct} />
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

export default SellingProducts
