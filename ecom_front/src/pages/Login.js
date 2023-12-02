import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import { useAuth } from './Usercontext';

const Login = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();
    const [userauth, setuserauth] = useAuth()

    const user_login=async(e)=>{
        e.preventDefault();
        const response = await axios.post('http://localhost:8000/login', {email, password})
        if(response.status === 200){
          console.log(response)
          setuserauth({...userauth, user:response.data.existuser, token:response.data.token})
          localStorage.setItem("auth", JSON.stringify(response.data))
          navigate("/dashboard")
        } else{
            alert("login failed");
        }
    }
  return (
    <div className='log'>
      <form onSubmit={user_login}>
        <h1>Login</h1>
        <input type='email' value={email} placeholder='enter the email' onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' value={password} placeholder='enter the password' onChange={(e)=>setPassword(e.target.value)} />
        <button>SignIn</button>
      </form>
    </div>
  )
}

export default Login
