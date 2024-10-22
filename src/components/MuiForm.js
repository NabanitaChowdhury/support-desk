import React from 'react'
import '../App.css'
import { TextField, Button } from '@mui/material'


export const MuiForm = ({ fileChange, onSubmit }) => {

    const handleChange = (e) => {
        console.log(e.target.files)
        fileChange(e.target.files)
    }

    return (
        <div className='support-form'>
            <TextField id="filled-basic" label="Name" variant="filled" />
            <TextField id="filled-basic" label="Email" variant="filled" />
            <TextField id="filled-basic" label="Message" variant="filled" multiline
                rows={4} />
            <TextField id="filled-basic" label="Number" variant="filled" />
            <Button variant="outlined">
                <input type="file" onChange={handleChange} />
            </Button>
            <Button variant="contained" onClick={onSubmit}>Submit</Button>
        </div>
    )
}
