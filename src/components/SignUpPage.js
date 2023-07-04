import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './File.css';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSigningUp, setIsSigningUp] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSigningUp(true);
    // Simulating sign-up process with a delay of 2 seconds
    setTimeout(() => {
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      setIsSigningUp(false);
    }, 2000);
  };

  return (
    <div className="signup-page">
      <Card title="Sign Up" className={`signup-card ${isSigningUp ? 'signing-up' : ''}`}>
        <form onSubmit={handleSignUp}>
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="username">Username</label>
              <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="p-field">
              <label htmlFor="email">Email</label>
              <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="p-field">
              <label htmlFor="password">Password</label>
              <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="p-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <InputText id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          </div>
          <Button label={isSigningUp ? 'Signing Up...' : 'Sign Up'} type="submit" className={isSigningUp ? 'p-disabled' : ''} disabled={isSigningUp} style={{marginTop:'10px'}} />
        </form>
      </Card>
    </div>
  );
};

export default SignUpPage;
