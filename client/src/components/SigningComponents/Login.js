import React, { useState } from 'react';


function Login() {
  const [email, setEmail] = useState('');
  const[phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., make an API call to create a new user
  };

  return (
    <div>
      <div>register in your account</div>
      <form onSubmit={handleSubmit} className='content'>
      
          Phone / Email:
          <input type="email" value={email} onChange={handleEmailChange} />
      
      
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        
        
          Forgot Password?
          <a href="/forgot-password">Click here</a>
        
        <button type="submit">Sign In</button>
      </form>
    </div>
    
  )
}

export default Login;