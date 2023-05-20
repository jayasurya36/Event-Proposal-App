import React from 'react'
import { useState } from 'react';
function Reset() {
  const [resetAnswer, setResetAnswer] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetAnswerChange = (e) => {
    setResetAnswer(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., make an API call
  };

  return (
    <div className='reset'>
      <h2>Reset Answer</h2>
      <form onSubmit={handleSubmit} className='form1'>
        <div>
          <label htmlFor="resetAnswer">Reset Answer</label>
          <input
            type="text"
            id="resetAnswer"
            value={resetAnswer}
            onChange={handleResetAnswerChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reset