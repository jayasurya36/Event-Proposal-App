import React, { useState } from 'react';
import { useAppContext } from '../../contexts/ContextProvider';


function Register({setLog}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetAnswer, setResetAnswer] = useState('');

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
    setResetAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., make an API call to create a new user
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