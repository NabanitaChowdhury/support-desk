import React from 'react'

const File = ({fileChange, label}) => {

  const handleChange = (e) => {
    fileChange(e.target.files)
  }
  return (
    <div>
        <label>{label}</label>
        <input type='file'onChange={handleChange} />
    </div>
  )
}

export default File