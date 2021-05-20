import React from 'react';

import Login from '../../components/login/login.component';
import SignUp from '../../components/signup/signup.component';
import './login-signup.styles.scss';

const LoginSignupPage = () => (
  <div className='login-signup'>
    <Login />
    <SignUp />
  </div>
);

export default LoginSignupPage; 