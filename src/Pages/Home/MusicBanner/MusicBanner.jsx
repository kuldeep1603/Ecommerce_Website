import React from 'react'

// img 
import { MusicBannerimg } from '../Home'

// router 
import { Link } from 'react-router-dom';

// Import custom styles
import '../Home.css';
const MusicBanner = () => {
    return (
        <>
            <section className='section music-banner'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link>
                                <img src={MusicBannerimg} title='music' loading='lazy' className='img-fluid' alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MusicBanner
