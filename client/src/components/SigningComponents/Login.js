import React, { useState } from 'react';
import { useAppContext } from '../../contexts/ContextProvider';


function Login({ setLog }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., make an API call to create a new user
  };
  const { userType, changeUserType } = useAppContext()

  return (
    <div className='formHolder'>
      <div className='buttonHolder' >
        <button className={userType === 'Vendor' ? "currentUserType" : ""}
          onClick={() => changeUserType(userType => userType === "User" ? "Vendor" : "User")}
        >Vendor</button>
        <button className={userType === 'User' ? "currentUserType" : ""}
          onClick={() => changeUserType(userType => userType === "Vendor" ? "User" : "Vendor")}
        >User</button>
      </div>
      <div className='topicHolder'>Sign In to your account</div>
      <form onSubmit={handleSubmit} className='content'>
        <input type="email" value={email} onChange={handleEmailChange}
          placeholder='Email'
        />
        <input
          type="password"
          value={password}
          placeholder='password'
          onChange={handlePassword}
        />
        <div className='forgotPassword'>
          <a href="#">forgot password?</a>
        </div>
        <div className='registerBlock'>
          <button type="submit">Sign In</button>
        </div>
        <button className='siginButton'
          onClick={() => setLog(isLog => !isLog)}
        >Create Account</button>
      </form>
    </div>

  )
}

export default Login;