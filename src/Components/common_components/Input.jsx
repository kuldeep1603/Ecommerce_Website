import React from 'react';

const Input = ({ placeholder, type, value, name, onchange }) => {
    return (
        <input
            type={type}
            value={value}
            name={name}
            onChange={onchange}
            required
            placeholder={placeholder}
            className='form-control ps-0 pt-2 pb-2'
        />
    );
}

export default Input;
