import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, storeUserToFirestore } from '../../firebase/firebase.utils';

import './signup.styles.scss';

class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }        
  }

  handleSubmit = async event => {
    event.preventDefault();

    // get form input data from the state
    const { displayName, email, password, confirmPassword } = this.state;

    // if the passwords don't match
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      // create an user account
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      // store user to firestore
      await storeUserToFirestore(userCredential.user, { displayName });

      // clear our form
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    // store the form input data in the state
    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return ( 
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
       
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput 
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput 
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput 
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
