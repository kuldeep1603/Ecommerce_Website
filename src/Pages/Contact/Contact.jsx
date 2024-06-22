import React from 'react'

// style 
import "./Contact.css";

// Components
import Input1 from '../../Components/common_components/Input1';
import BreadCums from '../../Components/BreadCums/BreadCums';
import Buttons from '../../Components/common_components/Buttons';

// icons 
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
//  redux 
import { useSelector, useDispatch } from 'react-redux';
import { SET_UPDATE_CONTACT, RESET_CONTACT_DATA } from "../../Apis/Slice/Contact";

// toast
import { toast } from 'react-toastify';

const Contact = () => {
    const dispatch = useDispatch();
    // redux data get 
    const Data = useSelector((state) => state.Contact);

    // Breadcumsdata
    const Breadcumsdata = [
        { title: "Home", link: "/" },
        { title: `Contact`, active: "active" },
    ]

    // handleForm
    const handleForm = (e) => {
        const { name, value } = e.target;
        dispatch(SET_UPDATE_CONTACT({ name, value }));
    }
    // handleForm

    // Handlesubmit
    const Handlesubmit = (e) => {
        e.preventDefault();
        if (Data.fname === "" || Data.email === "" || Data.phone === "") {
            toast.error("Please fill all the field");
        } else {
            localStorage.setItem('Contact', JSON.stringify(Data));
            dispatch(RESET_CONTACT_DATA());
            toast.success("Message send Successfully ..! ");
        }
    }
    // Handlesubmit
    return (
        <>
            <section className='section'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <BreadCums data={Breadcumsdata} />
                        </div>
                        <div className="col-12">
                            <div className="row flex-lg-row flex-column-reverse">
                                <div className="col-lg-4 ">
                                    <div className="card card-body box-shadow-1 border-0 rounded-1">
                                        <ul className='d-flex gap-3 mb-4 align-items-center m-0 p-0 '>
                                            <li>
                                                <FaPhone size={30} className='p-2 rounded-circle bg-primary-1 text-center text-white' />
                                            </li>
                                            <li>
                                                <p className='fw-600 fs-18 m-0 p-0'>Call To Us</p>
                                            </li>
                                        </ul>
                                        <p className='fw-400 fs-16 mb-2 m-0'>We are available 24/7, 7 days a week.</p>
                                        <p className='fw-500 fs-16 mb-2 m-0'>Phone: +91xxxxxxx</p>
                                        <hr />
                                        <ul className='d-flex gap-3 mb-4 mt-4 align-items-center m-0 p-0 '>
                                            <li>
                                                <IoIosMail size={30} className='p-2 rounded-circle bg-primary-1 text-center text-white' />
                                            </li>
                                            <li>
                                                <p className='fw-600 fs-18 m-0 p-0'>Write To US</p>
                                            </li>
                                        </ul>
                                        <p className='fw-400 fs-16 mb-2 m-0'>Fill out our form and we will contact you within 24 hours.</p>
                                        <p className='fw-500 fs-16 mb-2 m-0'>Emails: johndoe@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-lg-8 mb-lg-0 mb-3">
                                    <form method='post' autoComplete='off'>
                                        <div className="row justify-content-end align-items-center">
                                            <div className="col-lg-4  mb-3">
                                                <Input1 type="text" value={Data.fname} name="fname" id="fname" onchange={handleForm} label="Your Name" />
                                            </div>
                                            <div className="col-lg-4  mb-3">
                                                <Input1 type="email" label="Your Email *" value={Data.email} onchange={handleForm} name="email" id="email" />
                                            </div>
                                            <div className="col-lg-4  mb-3">
                                                <Input1 type="number" label="Your Phone *" value={Data.phone} onchange={handleForm} name="phone" id="phone" />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="Message" className='form-label'>Message</label>
                                                <textarea name="message" rows="4" cols="2" value={Data.message} onChange={handleForm} className='form-control bg-secondary-1 border-0' id="Message"></textarea>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <Buttons onClick={Handlesubmit} type="submit" btntext="Send Massage" className="py-3 d-block w-100" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
