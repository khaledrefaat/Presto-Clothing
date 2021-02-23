import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from './componenets-jsx/FormInput';
import CustomButton from './componenets-jsx/CustomButton';

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handelSubmit = e => {
    e.preventDefault();
    this.setState({ email: '', password: '' });
  };

  onFormChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>i already have an account</h2>
        <span>Sign in with your account</span>

        <form className="sign-in__form" onSubmit={e => this.handelSubmit(e)}>
          <FormInput
            onFormChange={this.onFormChange}
            name="email"
            type="email"
            placeholder="email"
            required
            value={this.state.email}
          />
          <FormInput
            value={this.state.password}
            onFormChange={this.onFormChange}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </form>
        <div className="btn-container">
          <CustomButton className="mr-md" custom type="submit">
            sign in
          </CustomButton>
          <CustomButton>sign in with google</CustomButton>
        </div>
      </div>
    );
  }
}

export default SignIn;
