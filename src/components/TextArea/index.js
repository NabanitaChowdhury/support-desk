import React from 'react'
import './TextArea.css'

const TextArea = ({rows = 2, value, onChange, label, placeholder, name="text", className=""}) => {
    const handleChange = (e) => {
        const value = e.target.value;
        onChange(value, name);
    }
    return (
        <div className='text-area'>
            <label className='input-label'>{label}</label>
            <textarea rows={rows} value={value} onChange={handleChange} placeholder={placeholder} className='textarea-field' />

        </div>
    )
}

export default TextArea