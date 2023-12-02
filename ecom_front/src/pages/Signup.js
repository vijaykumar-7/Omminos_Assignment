import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const Signup = () => {
    const [name,setName] = useState();
    const [password,setPassword] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const navigate = useNavigate();

    const user_register= async(e)=>{
        e.preventDefault();
        const response = await axios.post('http://localhost:8000/register', {name, email, password, phone})
        if(response.status === 200){
          navigate("/login")
        } else{
            alert("registration failed");
        }
    }
  return (
    <div className='sign'>
      <form onSubmit={user_register}>
        <h1>Registeration</h1>
        <input type='text' value={name} placeholder='enter the name' onChange={(e)=>setName(e.target.value)} />
        <input type='password' value={password} placeholder='enter the password' onChange={(e)=>setPassword(e.target.value)} />
        <input type='email' value={email} placeholder='enter the email' onChange={(e)=>setEmail(e.target.value)} />
        <input type='number' value={phone} placeholder='enter the phone_no' onChange={(e)=>setPhone(e.target.value)} />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Signup
