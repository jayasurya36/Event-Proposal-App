import React, { useState } from 'react';
import { useAppContext } from '../../contexts/ContextProvider';
import { register } from '../../utils/utils.api';


function Register({ setLog }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetAnswer, setResetAnswer] = useState('');
  const { userType, changeUserType } = useAppContext()
  const [load , setload] = useState(true);
  const [passwordCheck , setPasswordCheck] =useState(true)
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
    if(password !== e.target.value){
      setPasswordCheck(() => false);
    }
    else{
      setPasswordCheck(() => true)
    }
  };

  const handleresetAnswer = (e) => {
    setResetAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setload(false)
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
        <input type="text" value={name} onChange={handleNameChange} placeholder='Name' required/>
        <input type="email" value={email} onChange={handleEmailChange} placeholder='Email' required/>
        <input
          type="text"
          value={contact}
          onChange={handleContactNumberChange}
          placeholder='Contact Number'
          required
          max="10"
          min="10"
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder='Password'
          required
          min="8"
        />
        {passwordCheck ? "" : <span className='error'>Password Miss Match</span>}
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder='Confirm Password'
          required
          min="8"
        />
        <input
          type='text'
          value={resetAnswer}
          onChange={handleresetAnswer}
          placeholder='Whats your favorite place'
          required
        />
        <div className='registerBlock'>
          <button type="submit"
          >{load ? "Register" :  <span className='loader'></span>}</button>
        </div>
        <button className='siginButton'
          onClick={() => setLog(isLog => !isLog)}
        >Sign In</button>
      </form>
    </div>
  )
}

export default Register