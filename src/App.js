import { useState } from 'react';
import './App.css';
import TextField from './components/TextField';
import TextArea from './components/TextArea';
import Button from './components/Button';
import File from './components/File';
import { MuiForm } from './components/MuiForm';

function App() {
  const [value, setValue] = useState({
    name : "",
    email : "",
    message : "",
    phone : "",
    file : {
      fileName : "",
      data : ""
    }
  })
  // const onChange = (e, fieldName) => {
  //   setValue({
  //     ...value,
  //     [fieldName]: e
  //   });
  // }
  const fileChange = (e) => {
    console.log("fileChange", e[0].name);
    setValue({
      ...value,
      file : {
        fileName : e[0].name,
        data : e[0]
      }
    })
  }
  const onSubmit = () => {
    console.log("on Submit",value);
  }
  return (
    <div className="container"> 
    <div className="App">
      
    {/* <div className='support-form'>
      <TextField name='name' type='text' label="Name " value={value.name} placeholder="Enter your name" onChange={onChange} className='text-field'/>
      <TextField name='email' type='email' label="Email " value={value.email} placeholder="Enter your email" onChange={onChange} className='text-field'/>
      <TextArea name='message' rows={3} label="Message " value={value.message} placeholder="Enter your message" onChange={onChange}/>
      <TextField name='phone' type='text' label="Phone No. " value={value.phone} placeholder="Enter your phone number" onChange={onChange} className='text-field'/>
      <File fileChange={fileChange}/>
      <Button text="Submit" onClick={onSubmit}/>
      </div> */}
      <h2>Support Desk</h2>
     <MuiForm fileChange={fileChange}  onSubmit={onSubmit}/>
    </div>
    </div>
  );
}

export default App;
