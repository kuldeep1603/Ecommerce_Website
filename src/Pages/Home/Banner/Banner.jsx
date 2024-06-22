import React from 'react'
// Categories import 
import { Categories } from '../Category/Category'

// router 
import { Link, useNavigate } from 'react-router-dom';


// redux 
import { SetCategoryValue } from '../../../Apis/Slice/Data';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SEARCH_QUERY } from "../../../Apis/Slice/SearchSlice";

// icons 
import { IoSearchOutline } from "react-icons/io5";

// img
const banner_img = "./img/banner.png";

const Banner = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const Search_Value = useSelector((state) => state.Search.searchQuery);

    // HandleSearch
    const HandleSearch = (data) => {
        dispatch(SET_SEARCH_QUERY(data));
        navigate(`/query/${data}`);
    }
    // HandleCategory dispatch 
    const HandleCategory = (data) => {
        dispatch(SetCategoryValue(data));
        // Navigate(`/Category/${data}`);
    }
    return (
        <>
            <section className='section pb-0 home-banner'>
                <div className="container">
                    <div className="row d-sm-none d-block mb-3">
                        <div className="col-10">
                            <div className="input-group ">
                                <input type="text" value={Search_Value} onChange={(e) => HandleSearch(e.target.value)} className="form-control bg-secondary-1 border-0 py-1 rounded-1 border-end-0" placeholder="What are you looking for?" />
                                <button className="btn bg-secondary-1" type="button" id="button-addon2"><IoSearchOutline /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 d-lg-block d-none left">
                            <ul className='p-0 m-0 me-3'>
                                {
                                    Categories.map((CurCategory, index) => {
                                        const { title } = CurCategory
                                        return (
                                            <>
                                                <li key={index} className='mb-3'>
                                                    <Link to={`/products/${title}`} onClick={() => HandleCategory(title)} className="fw-500 text-capitalize fs-17 text-black">{title}</Link>
                                                </li>
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-lg-9 right">
                            <img src={banner_img} alt="Banner" title='banner_img' loading='lazy' className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
