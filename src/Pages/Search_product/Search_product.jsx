import React from 'react'
// redux 
import { useSelector } from 'react-redux'
// Components
import ProductCards from '../../Components/ProductCards/ProductCards';
import BreadCums from '../../Components/BreadCums/BreadCums';
import CardSkeleton from "../../Components/CardSkeleton/CardSkeleton";
import Buttons from "../../Components/common_components/Buttons";

const Search_product = () => {
    // redux get data 
    const Product = useSelector((state) => state.Data.Products);
    const Loading = useSelector((state) => state.Data.IsLoading);
    const Search_Value = useSelector((state) => state.Search.searchQuery);

    // serach fun
    const filterProducts = Product.filter((item) => {
        return item.title.toLowerCase().includes(Search_Value.toLowerCase());
    });
    // console.log(filterProducts);
    // Breadcumsdata
    const Breadcumsdata = [
        { title: "Home", link: "/" },
        { title: `${Search_Value}`, active: "active" },
    ]

    return (
        <>
            <section className='section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <BreadCums data={Breadcumsdata} />
                        </div>
                        <div className="col-12">
                            {
                                filterProducts.length == 0 ? (
                                    <>
                                        <div className="row">
                                            <div className="col-12">
                                                <p>No product found with {Search_Value} Search  ...!</p>
                                                <Buttons btntext="Home" className="py-2 px-2" to="/" />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
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
                                                            filterProducts.map((item, index) => {
                                                                return (
                                                                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4" key={item.id}>
                                                                        <ProductCards data={item} />
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            }

                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search_product
