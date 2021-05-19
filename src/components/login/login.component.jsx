import React, { Component } from 'react';

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
        <h2>I already have an account</h2>
        <span>Login with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input 
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input 
            type="password" 
            name="password" 
            value={this.state.password}
            onChange={this.handleChange}
            required 
          />
          <label>Password</label>        
          <input type='submit' value='Submit Form' />
        </form>
      </div>
    );
  }
}

export default Login;
