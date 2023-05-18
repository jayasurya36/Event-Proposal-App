import React, { useState } from 'react';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., make an API call to create a new user
  };
  return (
    <div>
      <div>Register Account</div>
      <form onSubmit={handleSubmit} className='content'>
        
         
          <input type="text" value={name} onChange={handleNameChange} placeholder='Name'/>
        
        
          <input type="email" value={email} onChange={handleEmailChange} placeholder='Email'/>
        
        
          <input
            type="text"
            value={contactNumber}
            onChange={handleContactNumberChange}
            placeholder='Contact Number'
          />
        
       
        
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
          />
        
        
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder='Confirm Password'
          />
        
        <button type="submit">Register</button>
      </form>
      </div>
    )
}

export default Register