import React from 'react'

// style 
import "./Error.jsx";

// Components
import Buttons from '../../Components/common_components/Buttons.jsx';

const Error = () => {
    return (
        <>
            <section className='section  '>
                <div className="conatiner">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className='fw-600 fs-50 text-capitalize tertiary-font mb-3 text-center'>404 Not Found</h2>
                            <p className='text-center fs-16 tertiary-font mb-4'>Your visited page not found. You may go home page.</p>
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-2 col-md-3 col-sm-4 col-8">
                                    <Buttons btntext="Home Page" to={"/"} className="py-3 d-block w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error
