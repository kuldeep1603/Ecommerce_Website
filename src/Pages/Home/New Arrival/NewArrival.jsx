import React from 'react'

// router 
import { Link } from 'react-router-dom';

// img 
const Playstation = "./img/play-station.png";
const womenscollection = "./img/womens-collection.png";
const Speakers = "./img/Speakers.png";
const Perfume = "./img/perfume.png";

const NewArrival = () => {
    return (
        <>
            <section className='section NewArrival'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <ul className='p-0 m-0 d-flex gap-2 align-items-center flex-wrap mb-3'>
                                <li>
                                    <span className='border-pattern'></span>
                                </li>
                                <li>
                                    <p className='m-0 fw-600 fs-16 primary-color'>Featured</p>
                                </li>
                            </ul>
                            <ul className='p-0 m-0 d-flex justify-content-between align-items-center'>
                                <li>
                                    <h3 className='fw-bold fs-22 text-capitalize'>New Arrival</h3>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <Link>
                                        <img src={Playstation} loading='lazy' title="Play Station" alt="Play Station" className='img-fluid' />
                                    </Link>
                                </div>
                                <div className="col-6">
                                    <div className="row">
                                        <div className="col-12 mb-sm-4 mb-3">
                                            <Link>
                                                <img src={womenscollection} title='womenscollection' alt="womenscollection" loading='lazy' className='img-fluid' />
                                            </Link>
                                        </div>
                                        <div className="col-12 ">
                                            <div className="row">
                                                <div className="col-6">
                                                    <Link>
                                                        <img src={Speakers} title='Speakers' alt="Speakers" loading='lazy' className='img-fluid' />
                                                    </Link>
                                                </div>
                                                <div className="col-6">
                                                    <Link>
                                                        <img src={Perfume} title='Perfume' alt="Perfume" loading='lazy' className='img-fluid' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewArrival
