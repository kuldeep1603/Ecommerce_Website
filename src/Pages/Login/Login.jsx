import React from 'react';
// style 
import "./Login.css";

// router 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// redux 
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOGIN } from "../../Apis/Slice/LoginSlice";

// componenets 
import Input from '../../Components/common_components/Input';
import Buttons from '../../Components/common_components/Buttons';
import Image from '../Singup/Image';

// toast 
import { toast } from 'react-toastify';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const LoginData = useSelector((state) => state.Login);
    const SingUpData = JSON.parse(localStorage.getItem("formData")); 

    // handleForm
    const handleForm = (e) => {
        const { name, value } = e.target;
        dispatch(SET_LOGIN({ name, value }));
    };

    // HandleLogin
    const handleLogin = (e) => {
        e.preventDefault();
        if (SingUpData && LoginData.email === SingUpData.email && LoginData.password === SingUpData.password && LoginData.email !== "" && LoginData.password !== "") {
            toast.success("Login Successful!");
            localStorage.setItem('UserLogin', JSON.stringify(true));
            setTimeout(() => {
                navigate("/");
            }, 5000);
        } else {
            toast.error("Invalid Email or Password.");
        }
    };

    return (
        <>
            <section className='section singup'>
                <div className="container p-md-0 p-2">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-6 left d-md-block d-none">
                            <Image data="Login" />
                        </div>
                        <div className="col-md-6 right">
                            <div className="row">
                                <div className="col-12 mb-5 mb-md-3">
                                    <h4 className='fw-600 fs-26 mb-3'>Log in to Exclusive</h4>
                                    <span className='fs-18 fw-500'>Enter your details below</span>
                                </div>
                                <div className="col-12 mb-4">
                                    <Input placeholder="Email" name="email" value={LoginData.email} type="email" onchange={handleForm} />
                                </div>
                                <div className="col-12 mb-4">
                                    <Input placeholder="Password" type="password" name="password" value={LoginData.password} onchange={handleForm} />
                                </div>
                                <div className="col-12 mb-4">
                                    <Buttons onClick={handleLogin} btntext="Login In" className="py-3 fs-18 d-block w-100" />
                                </div>
                                <div className="col-12">
                                    <p className='fw-400 tertiary-color m-0 text-center'>Don't have an account? <Link to={"/signup"} className='fw-500 text-black'>SignUp</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
