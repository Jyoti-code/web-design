import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './File.css';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsSigningIn(true);
    // Simulating sign-in process with a delay of 2 seconds
    setTimeout(() => {
      console.log('Username:', username);
      console.log('Password:', password);
      setIsSigningIn(false);
    }, 2000);
  };

  return (
    <div className="signin-page">
      <Card title="Sign In" className={`signin-card ${isSigningIn ? 'signing-in' : ''}`}>
        <form onSubmit={handleSignIn}>
          <div className="p-fluid">
            <div className="p-field">
              <label htmlFor="username">Username</label>
              <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="p-field">
              <label htmlFor="password">Password</label>
              <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <Button label={isSigningIn ? 'Signing In...' : 'Sign In'} type="submit" className={isSigningIn ? 'p-disabled' : ''} disabled={isSigningIn} style={{marginTop:'10px'}} />
        </form>
      </Card>
    </div>
  );
};

export default SignInPage;
