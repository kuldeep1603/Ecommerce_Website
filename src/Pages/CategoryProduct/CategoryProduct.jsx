import React, { useEffect } from 'react'

// style 
import "./CategoryProduct.css";

// redux 
import { FetchCategoryProducts } from '../../Apis/Slice/Data';
import { useDispatch, useSelector } from 'react-redux';

// Components
import ProductCards from '../../Components/ProductCards/ProductCards';
import BreadCums from '../../Components/BreadCums/BreadCums';
import CardSkeleton from '../../Components/CardSkeleton/CardSkeleton';



const CategoryProduct = () => {
    const dispatch = useDispatch();
    // redux data get
    const CategoryProduct = useSelector((state) => state.Data.CategoryProducts);
    const CategoryValue = useSelector((state) => state.Data.CategoryValue);
    const Loading = useSelector((state) => state.Data.IsLoading);

    // Breadcumsdata
    const Breadcumsdata = [
        { title: "Home", link: "/" },
        { title: `${CategoryValue}`, active: "active" },
    ]
    // console.log(CategoryProduct);

    useEffect(() => {
        const delayfunction = setTimeout(() => {
            dispatch(FetchCategoryProducts(`https://dummyjson.com/products/category/${CategoryValue}`));
        }, 500);

        return () => clearTimeout(delayfunction);
    }, [dispatch, CategoryValue]);

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
                                    Loading ? (
                                        <>
                                            {[...Array(10)].map((_, index) => (
                                                <CardSkeleton data="col-lg-3 col-md-4 col-sm-6 col-12 mb-4" key={index} />
                                            ))}
                                        </>
                                    ) : (
                                        <>
                                            {
                                                CategoryProduct.map((CurProduct, index) => {
                                                    return (
                                                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={CurProduct.id}>
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
            {/* {CategoryProduct} */}
        </>
    )
}

export default CategoryProduct
