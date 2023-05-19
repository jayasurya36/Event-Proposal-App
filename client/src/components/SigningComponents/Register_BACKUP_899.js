import React, { useState } from 'react';
import { useAppContext } from '../../contexts/ContextProvider';
import { register } from '../../utils/utils.api';


function Register({ setLog }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
<<<<<<< HEAD
  const [resetAnswer, setResetAnswer] = useState('');

=======
  const [resetAnswer, setresetAnswer] = useState('');
  const { userType, changeUserType } = useAppContext()
>>>>>>> 26aa81f1e3ebf9d15c0d63dec850de3153a2d3bb
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
<<<<<<< HEAD
    setResetAnswer(e.target.value);
=======
    setresetAnswer(e.target.value);
>>>>>>> 26aa81f1e3ebf9d15c0d63dec850de3153a2d3bb
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      contact,
      resetAnswer
    }
    console.log(newUser);
    register(newUser , userType === "Vendor" ? "vendor" : "user" ).then((res) =>{
      console.log(res);
    })
  };


  

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
      <form onSubmit={handleSubmit} method='post' action='#' className='content'>
        <input type="text" value={name} onChange={handleNameChange} placeholder='Name' />
        <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' />
        <input
          type="text"
          value={contact}
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
          <button type="submit"
          >Register</button>
        </div>
        <button className='siginButton'
          onClick={() => setLog(isLog => !isLog)}
        >Sign In</button>
      </form>
    </div>
  )
}

export default Register