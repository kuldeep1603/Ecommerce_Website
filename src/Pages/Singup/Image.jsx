import React from 'react'

// img 
export const login_img = "./img/Side Image.png";

const Image = ({ data }) => {
    return (
        <>
            <img src={login_img} alt={data} title={data} loading='lazy' className='img-fluid' />
        </>
    )
}

export default Image
