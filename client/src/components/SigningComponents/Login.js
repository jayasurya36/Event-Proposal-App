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
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form inputs, perform any necessary checks
  
    // Create a user object with the form data
    const user = {
      email,
      password,
    };
  
    try {
      // Make an API call to authenticate the user based on the selected user type
      const userType = userType === 'User' ? 'user' : 'vendor';
      const response = await fetch(`http://localhost:5000/${userType}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      const data = await response.json();
  
      // Handle the response data
      if (response.ok) {
        // User authentication successful
        console.log('User authenticated:', data);
        
      } else {
        // User authentication failed
        console.log('User authentication failed:', data.error);
       
      }
  
  
    } catch (error) {
      // Handle any errors during the API call
      console.error('Error during authentication:', error);
      
    }
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