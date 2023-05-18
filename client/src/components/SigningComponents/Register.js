import React, { useState } from 'react';
import { useAppContext } from '../../contexts/ContextProvider';


function Register({setLog}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetAnswer, setresetAnswer] = useState('');

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

  const handleresetAnswer = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form inputs, perform any necessary checks
     // Validate form inputs
  if (password !== confirmPassword) {
    // Display an error message or handle password mismatch
    console.log("password mismatch")
    return;
  }
  
    // Create a user object with the form data
    const newUser = {
      name,
      email,
      contact,
      password,
      resetAnswer
      
    };
  
    try {
      // Make an API call to register the user based on the selected user type
      const userType = userType === 'User' ? 'user' : 'vendor';
      const response = await fetch(`http://localhost:5000/${userType}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      const data = await response.json();
  
      // Handle the response data
      // if (response.ok) {
      //   // User registration successful
      //   console.log('User registered successfully:', data);
        
      // } else {
      //   // User registration failed
      //   console.log('User registration failed:', data.error);
        
      // }
  console.log(data)

    } catch (error) {
      // Handle any errors during the API call
      console.error('Error during registration:', error);
      
    }
  };
  

  const {userType , changeUserType} = useAppContext()

  return (
    <div className='formHolder'>
      <div className='buttonHolder'>
      <div className='buttonHolder' >
        <button className={userType === 'Vendor' ? "currentUserType" : ""}
          onClick={() => changeUserType(userType => userType === "User" ? "Vendor" : "User")}
        >Vendor</button>
        <button className={userType === 'User' ? "currentUserType" : ""}
          onClick={() => changeUserType(userType => userType === "Vendor" ? "User" : "Vendor")}
        >User</button>
      </div>
      </div>
      <div className='topicHolder'>Register in your Account</div>
      <form onSubmit={handleSubmit} className='content'>
        <input type="text" value={name} onChange={handleNameChange} placeholder='Name' />
        <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' />
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
         <input
          type='text'
          value={resetAnswer}
          onChange={handleresetAnswer}
          placeholder='Whats your favorite place'
        />
        <div className='registerBlock'>
        <button type="submit">Register</button>
        </div>
          <button className='siginButton'
          onClick={() =>setLog(isLog => !isLog)}
          >Sign In</button>
      </form>
    </div>
  )
}

export default Register