import React from 'react'

const Input1 = ({ type, value, name, onchange, id, label, placeholder }) => {
    return (
        <>
            <label htmlFor={id} className='form-label'>{label}</label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={onchange}
                required
                placeholder={placeholder}
                id={id}
                className='form-control bg-secondary-1 rounded-1 px-3 border-0 py-3'
            />
        </>
    )
}

export default Input1
