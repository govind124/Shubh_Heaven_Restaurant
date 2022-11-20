import React from 'react'
import { Link } from 'react-router-dom'
import "./welcome.css"

const SignUp = () => {
  return (
    <>
    <div className='box'>
    <h1 className='login_logo'>SignUp</h1>
    <form action="" className='sign_data'>
    <label htmlFor="user">Name:</label>
            <input className='input_sign_1' type="text" placeholder='name' name='name' id='user' required style={{height:"20px" ,width:"200px"}} /><br /><br />
           <label htmlFor="password">Password:</label>
            <input className='input_sign_2' type="password"  name="password" id="password" placeholder='password' required style={{height:"20px" ,width:"200px"}} /> <br /><br />
            <label htmlFor="password">Confirm Password:</label>
            <input className='input_sign_3' type="password"  name="cnpassword" id="password" placeholder='Confirm Password' required style={{height:"20px" ,width:"200px"}} min={6}/>
            <Link to="/MenuPage"><button type='submit' className='login_Submit'>Login</button></Link>
    </form>

    </div>
    
    </>
  )
}

export default SignUp;