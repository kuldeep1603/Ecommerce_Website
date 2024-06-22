import React from 'react'
// router 
import { Link } from 'react-router-dom'

const Buttons = ({ btntext, className, to, onClick, type }) => {
    return (
        <>
            <Link
                type={type}
                to={to}
                onClick={onClick}
                className={`bg-primary-1 text-white text-center px-4  rounded-1  fw-600 ${className}`}>{btntext}
            </Link>
        </>
    )
}

export default Buttons
