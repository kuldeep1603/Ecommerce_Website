import React from 'react'
// style 
import "./Cart.css";
// icons 
import { MdOutlineDelete } from "react-icons/md";
// Components
import BreadCums from '../../Components/BreadCums/BreadCums';
import Buttons from '../../Components/common_components/Buttons';

// redux 
import { useDispatch, useSelector } from 'react-redux';
import { SetCartItems, RemoveFromCartItems } from '../../Apis/Slice/CartSlice';

// utilis
import { getDiscountedPrice } from "../../Components/ProductCards/ProductCards";
import { calculateTotalPrice } from '../../utilis/Cart_utilis';

const Cart = () => {
    const Cart = useSelector((state) => state.Cart.CartItems);
    const dispatch = useDispatch();
    // HandleIncrement
    const HandleIncrement = (id) => {
        console.log(id);
        dispatch(SetCartItems(Cart.map((item) => {
            if (item.id === id) {
                return { ...item, Quantity: item.Quantity + 1 }
            } else {
                return item
            }
        })))
    }

    // HandleDecrement
    const HandleDecrement = (id) => {
        dispatch(SetCartItems(Cart.map((item) => {
            if (item.id === id) {
                return { ...item, Quantity: item.Quantity - 1 }
            } else {
                return item
            }
        })))
    }

    // HandleRemoveCart
    const HandleRemoveCart = (id) => {
        if (window.confirm('Are you sure want remove this product from the Cart ?')) {
            dispatch(RemoveFromCartItems(id));
        }
    }
    // HandleRemoveCart

    // Breadcumsdata
    const Breadcumsdata = [
        { title: "Home", link: "/" },
        { title: "Cart", active: "active" },
    ]
    // Breadcumsdata
    return (
        <>
            <section className='section cart'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <BreadCums data={Breadcumsdata} />
                        </div>
                    </div>
                    {
                        Cart.length === 0 ? (
                            <>
                                <div className=" col-12">
                                    <p>No items Added to Cart ...!</p>
                                    <Buttons btntext="Home" className="py-2 px-2" to="/" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="row justify-content-end mt-3">
                                    <div className="col-12 mb-3 table-responsive">
                                        <table class="table align-middle ">
                                            <thead>
                                                <tr>
                                                    <th className='fw-600 text-capitalize fs-16 tertiary-font product'>Product</th>
                                                    <th className='fw-600 text-capitalize fs-16 tertiary-font text-center'>Title</th>
                                                    <th className='fw-600 text-capitalize fs-16 tertiary-font text-center'>Price</th>
                                                    <th className='fw-600 text-capitalize fs-16 tertiary-font text-center'>Quantity</th>
                                                    <th className='fw-600 text-capitalize fs-16 tertiary-font text-center'>Subtotal</th>
                                                    <th className='fw-600 text-capitalize fs-16 tertiary-font text-center'>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Cart.map((CurCart, index) => {
                                                        const { id, title, images, price, Quantity, discountPercentage } = CurCart;
                                                        const disocuntprice = getDiscountedPrice(price, discountPercentage);
                                                        {/* console.log(disocuntprice); */ }
                                                        const Total = (Quantity * disocuntprice).toFixed(0);
                                                        console.log(Total);
                                                        return (
                                                            <tr key={id}>
                                                                <td className=''>
                                                                    <div className="card d-flex justify-content-center align-items-center p-2 card-body bg-secondary-1 rounded-1 border-0">
                                                                        <img src={images[0]} alt={title} title={title} loading='lazy' className='img-fluid' />
                                                                    </div>
                                                                </td>
                                                                <td className='text-center'>
                                                                    <p className='m-0 text-ellipsis fw-400 fs-16'>{title}</p>
                                                                </td>
                                                                <td className='text-center'>{disocuntprice}</td>
                                                                <td className='text-center'>
                                                                    <ul className='d-flex justify-content-center align-items-center m-0 p-0'>
                                                                        <li>
                                                                            <button onClick={() => HandleDecrement(id)} disabled={Quantity == 0} className='px-2 rounded-end-0 rounded-1 py-1 border border-dark text-center text-black bg-white'>-</button>
                                                                        </li>
                                                                        <li>
                                                                            <p className='m-0 text-center px-2 py-1 fw-500 fs-16 border border-dark rounded-0'>{Quantity}</p>
                                                                        </li>
                                                                        <li>
                                                                            <button onClick={() => HandleIncrement(id)} className='px-2 rounded-start-0 rounded-1 border-0 py-1 bg-primary-1 text-center text-white'>+</button>
                                                                        </li>
                                                                    </ul>
                                                                </td>
                                                                <td className='text-center'>
                                                                    <p className='m-0 p-0'>{Total}</p>
                                                                </td>
                                                                <td className='text-center'>
                                                                    <MdOutlineDelete onClick={() => HandleRemoveCart(id)} />
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-md-8 col-sm-8 col-12">
                                        <div className="card card-body rounded-1">
                                            <ul className='m-0 py-0 px-3 d-flex flex-column justify-content-center '>
                                                <li>
                                                    <h3 className='fw-500 fs-18 tertiary-font'>Cart Total</h3>
                                                </li>
                                                <li className='mb-3 border-bottom d-flex justify-content-between align-items-center'>
                                                    <span className='fw-400 fs-16'>Quantity</span>
                                                    <p className='fw-500 fs-16'>{Cart.length}</p>
                                                </li>
                                                <li className='mb-3 border-bottom d-flex justify-content-between align-items-center'>
                                                    <span className='fw-400 fs-16'>Shipping:</span>
                                                    <p className='fw-500 fs-16'>Free</p>
                                                </li>
                                                <li className='mb-3 border-bottom d-flex justify-content-between align-items-center'>
                                                    <span className='fw-400 fs-16'>Total:</span>
                                                    <p className='fw-500 fs-16'>{calculateTotalPrice(Cart).toFixed(0)}</p>
                                                </li>
                                                <li className=''>
                                                    <Buttons to={"/Checkout"} btntext="Procees to checkout" className="py-3 px-3 d-block" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Cart
