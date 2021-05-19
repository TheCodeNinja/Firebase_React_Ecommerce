import React, { Component } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './login.styles.scss';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  // If you provided a `value` prop to a form field without `onChange` handler,
  // the form field will render a read-only field.
  handleChange = event => {
    // the form field must have `value` and `name` attributes
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  render() {
    return (
      <div className="login">
        <h2 className="title">I already have an account</h2>
        <span>Login with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            handleChange={this.handleChange}
            label='email' 
            type="email"
            name="email"
            value={this.state.email}
            required
          />
          <FormInput 
            handleChange={this.handleChange}
            label='password'
            type="password" 
            name="password" 
            value={this.state.password}
            required 
          />      
          <CustomButton type='submit'>Login</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Login with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default Login;
