import React from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';
const signup = () => {
  return (
    <div className='addUser'>
      <h3>Sign up</h3>
      <form className='addUserForm'>
        <div className='inputGroup'>
             <label htmlFor='name'>Name:</label>
             <input type='text' id="name" placeholder='Enter your name'
             autoComplete='off'/>
        </div>
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
        <div className='buttonn'><button type="submit" class="btn btn-success">Sign up</button></div>
        
      </form>
      <div className="login">
        <p>Already have an account ? </p>
        <Link to="/login" type="submit" class="btn btn-primary">Login</Link>
      </div>
    </div> 
  )
}

export default signup
