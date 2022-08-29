import React,{useContext, useEffect, useState} from 'react';
import{Link, useNavigate} from 'react-router-dom';

function Login() {
    const navigate =useNavigate();
    const {success, loading, user}=useContext();
    const[username, setUsename] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    useEffect(()=>{
        if (success){
            navigate("/")
        }
    }, [success])

  return (
    <form className='form'>
        <div>
        
        <div className='form group'>
            <label htmlFor="email">email</label>
            <input type="email" className='form-control' placeholder='Enter email'value={email}/>
        </div>

        <div className='form group'>
            <label htmlFor="password">Password</label>
            <input type="password" className='form-control' placeholder='*************'value={password}/>
        </div>
        <button type="submit">Submit</button>
        <div className='row'>I already have an account
        <Link to="/register">Register</Link>
        </div>
        </div>

    </form>

  )
}

export default Login