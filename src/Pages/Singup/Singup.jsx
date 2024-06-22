import React from 'react';
// style 
import "./Singup.css";
// router 
import { Link, useNavigate } from 'react-router-dom';
// redux 
import { useDispatch, useSelector } from 'react-redux';
import { SetFormData, ResetFormData } from "../../Apis/Slice/FormSlice";
// compoenets
import Image from './Image';
import Input from '../../Components/common_components/Input';
import Buttons from '../../Components/common_components/Buttons';
// toast 
import { toast } from 'react-toastify';

const Singup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formData = useSelector((state) => state.Form);

    // HandleForm
    const handleForm = (e) => {
        const { name, value } = e.target;
        dispatch(SetFormData({ name, value }));
    }

    // HandleSubmit
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === "" || formData.email === "" || formData.password === "") {
            toast.error("Please fill all the data ..!")
        } else {
            localStorage.setItem('formData', JSON.stringify(formData));
            dispatch(ResetFormData());
            toast.success("Signup Successfully ..!");
            setTimeout(() => {
                navigate("/login");
            }, 5000);
        }
    }

    return (
        <>
            <section className='section singup'>
                <div className="container p-md-0 p-2">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-6 left d-md-block d-none">
                            <Image data="singup" />
                        </div>
                        <div className="col-md-6 right">
                            <div className="row">
                                <div className="col-12 mb-5 mb-md-3 ">
                                    <h4 className='fw-600 fs-26 mb-3'>Create an account</h4>
                                    <span className='fs-18 fw-500'>Enter your details below</span>
                                </div>
                                <div className="col-12 mb-4">
                                    <Input placeholder="Name" type="text" value={formData.name} name="name" onchange={handleForm} />
                                </div>
                                <div className="col-12 mb-4">
                                    <Input placeholder="Email" type="email" value={formData.email} name="email" onchange={handleForm} />
                                </div>
                                <div className="col-12 mb-4">
                                    <Input placeholder="Password" type="password" value={formData.password} name="password" onchange={handleForm} />
                                </div>
                                <div className="col-12 mb-4">
                                    <Buttons btntext="Create Account" onClick={HandleSubmit} className="py-3 d-block fs-18 w-100" />
                                </div>
                                <div className="col-12">
                                    <p className='fw-400 tertiary-color m-0 text-center'>Already have an account? <Link to={"/login"} className='fw-500 text-black'>Login</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Singup;
