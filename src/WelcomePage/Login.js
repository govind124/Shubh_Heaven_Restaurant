import React from 'react'
import {Link} from 'react-router-dom';
import "./welcome.css"


const Login = () => {


  return (
    <>
    <div className='box'>
        <h1 className='login_logo'>Login</h1>
        <form action="" className='login_data'>
           
             <label htmlFor="user">Name:</label>
            <input className='input_login-1' type="text" placeholder='name' id='user' required style={{height:"20px" ,width:"200px"}} /><br /><br />
           <label htmlFor="password">Password:</label>
            <input className='input_login' type="password"  name="" id="password" placeholder='password' required style={{height:"20px" ,width:"200px"}} />
            <Link to="/MenuPage"><button  className='login_Submit'>Login</button></Link>
        </form>
        <Link to="/Signup" className='create_acc'>Create New Account</Link>
    </div>

    </>
  )
}

export default Login
