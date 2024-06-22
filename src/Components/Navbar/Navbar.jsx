import React from 'react';
// style 
import "./Navbar.css";

// router 
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Badge from '@mui/material/Badge';

// icons 
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";


// redux 
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { SET_SEARCH_QUERY } from "../../Apis/Slice/SearchSlice";

const Navbar = () => {
    // router 
    const navigate = useNavigate();

    // redux 
    const dispatch = useDispatch();

    // redux get data 
    const Data = useSelector((state) => state.Wishlist.wishlistItems);
    const Cart = useSelector((state) => state.Cart.CartItems);
    const UserLogin = JSON.parse(localStorage.getItem("UserLogin"));
    const UserData = JSON.parse(localStorage.getItem("formData"));
    const Search_Value = useSelector((state) => state.Search.searchQuery);

    // logout 
    const HandelLogout = () => {
        localStorage.removeItem("UserLogin");
        toast.error("Logout Succesfully ...!");
        setTimeout(() => {
            navigate("/login");
        }, 2000);
    }

    // HandleSearch
    const HandleSearch = (data) => {
        dispatch(SET_SEARCH_QUERY(data));
        navigate(`/query/${data}`);
    }
    return (
        <>
            <section className='section py-2  bg-black text-white'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="offset-lg-2 col-lg-8 col-md-10">
                            <p className='fs-14 m-0'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% ! <a href="#" className='text-white text-decoration-underline fs-14'>ShopNow</a></p>
                        </div>
                        <div className="col-lg-2 col-sm-2 d-md-block d-none">
                            <Form.Select className='py-1 bg-black text-white border-0 fs-14'>
                                <option value="3">SansKrit</option>
                                <option>Hindi</option>
                                <option value="1">Marathi</option>
                                <option value="2">English</option>
                            </Form.Select>
                        </div>
                    </div>
                </div>
            </section>

            <header>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <Link to={`/`} className="navbar-brand fw-700 ls-2 fs-20">Exclusive</Link>
                        <div className="d-lg-none d-block">
                            <form className="d-flex gap-3 align-items-center" role="search">
                                <div className="d-sm-block d-none">
                                    <div className="input-group">
                                        <input type="text" value={Search_Value} onChange={(e) => HandleSearch(e.target.value)} className="form-control bg-secondary-1 border-0 py-1 rounded-1 border-end-0" placeholder="What are you looking for?" />
                                        <button className="btn bg-secondary-1" type="button" id="button-addon2"><IoSearchOutline /></button>
                                    </div>
                                </div>
                                <Link to={`/Wishlist`} className='fs-22 text-black'>
                                    <Badge badgeContent={Data.length === 0 ? "0" : Data.length} color="primary" >
                                        <CiHeart className='fs-22' />
                                    </Badge>
                                </Link>
                                <Link to={`/Cart`} className='fs-22 text-black'>
                                    <Badge badgeContent={Cart.length === 0 ? "0" : Cart.length} color="primary" >
                                        <IoCartOutline className='fs-22' />
                                    </Badge>
                                </Link>
                                <div class="dropdown account">
                                    <button class="dropdown-toggle border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {
                                            UserLogin ? <p className='m-0 py-08  rounded-circle bg-primary-1 text-white'>{`${UserData.name.slice(0, 1)}`}</p> : <FaUserCircle size={22} />
                                        }
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li className='mb-1'>
                                            <a class="dropdown-item" href="#">Manage My Account</a>
                                        </li>
                                        <li className='mb-1'>
                                            <a class="dropdown-item" href="#">My Order</a>
                                        </li>
                                        <li className='mb-1'>
                                            {UserLogin ? <a onClick={HandelLogout} class="dropdown-item" href="#">Logout</a> : <Link to={"/login"} class="dropdown-item" >Login</Link>}
                                        </li>
                                    </ul>
                                </div>
                                {/* <Link className='fs-22 primary-color'><FaUserCircle /></Link> */}
                            </form>
                        </div>
                        <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to={`/`} className="nav-link ">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`/Contact`} className="nav-link">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`/About`} className="nav-link">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={`/signup`} className="nav-link">Sign Up</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex gap-3 align-items-center" role="search">
                                <div className="input-group ">
                                    <input type="text" value={Search_Value} onChange={(e) => HandleSearch(e.target.value)} className="form-control bg-secondary-1 border-0 py-1 rounded-1 border-end-0" placeholder="What are you looking for?" />
                                    <button className="btn bg-secondary-1" type="button" id="button-addon2"><IoSearchOutline /></button>
                                </div>
                                <Link to={`/Wishlist`} className='fs-22 text-black'>
                                    <Badge badgeContent={Data.length === 0 ? "0" : Data.length} color="primary" >
                                        <CiHeart className='fs-22' />
                                    </Badge>
                                </Link>
                                <Link to={`/Cart`} className='fs-22 text-black'>
                                    <Badge badgeContent={Cart.length === 0 ? "0" : Cart.length} color="primary" >
                                        <IoCartOutline className='fs-22' />
                                    </Badge>
                                </Link>
                                <div class="dropdown account">
                                    <button class="dropdown-toggle border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {
                                            UserLogin ? <p className='m-0 py-08  rounded-circle bg-primary-1 text-white'>{`${UserData.name.slice(0, 1)}`}</p> : <FaUserCircle size={22} />
                                        }
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li className='mb-1'>
                                            <a class="dropdown-item" href="#">Manage My Account</a>
                                        </li>
                                        <li className='mb-1'>
                                            <a class="dropdown-item" href="#">My Order</a>
                                        </li>
                                        <li className='mb-1'>
                                            {UserLogin ? <a onClick={HandelLogout} class="dropdown-item" href="#">Logout</a> : <Link to={"/login"} class="dropdown-item" >Login</Link>}
                                        </li>
                                    </ul>
                                </div>
                                {/* <Link className='fs-22 primary-color'><FaUserCircle /></Link> */}
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
