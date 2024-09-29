import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='addUser'>
      <h3>Sign in</h3>
      <form className='addUserForm'>
        <div className='inputGroup'>
             <label htmlFor='email'>Email:</label>
             <input type='email' id="Email" placeholder='Enter your Email'
             autoComplete='off'/>
        </div>
        <div className='inputGroup'>
             <label htmlFor='pw'>Password:</label>
             <input type='password' id="pw" placeholder='Enter your Password'
             autoComplete='off'/>
        </div>
        <div className='buttonn'><button type="submit" class="btn btn-primary">Login</button></div>
        
      </form>
      <div className="login">
        <p>Don't have Account? </p>
        <Link to="/" type="submit" class="btn btn-success">Sign up</Link>
      </div>
    </div> 
  )
}

export default Login;
