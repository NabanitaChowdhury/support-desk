import React from 'react'
import './TextField.css'

const TextField = ({type = "text", value, onChange, label, placeholder, name="text", className=""}) => {
    const handleChange = (e) => {
        const value = e.target.value;
        onChange(value, name);
    }
    return (
        <div className='input-field-container'>
            <label className='input-label'>{label}</label>
            <input type={type} value={value} onChange={handleChange} placeholder={placeholder} className={`${className} input-field`} />

        </div>
    )
}

export default TextField