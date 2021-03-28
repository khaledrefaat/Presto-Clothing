import React, { Component } from 'react';
import FormInput from './componenets-jsx/FormInput';
import CustomButton from './componenets-jsx/CustomButton';
import './SignUp.scss';

class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  onFormChange = () => {};

  render() {
    return (
      <div className="sign-up">
        <h2>i dont have an account</h2>
        <span>Sign un with your email and password</span>
        <form className="sign-up__form">
          <FormInput
            onFormChange={this.onFormChange}
            name="username"
            type="text"
            placeholder="username"
            required
            value={this.state.username}
          />
          <FormInput
            onFormChange={this.onFormChange}
            name="email"
            type="email"
            placeholder="email"
            required
            value={this.state.email}
          />
          <FormInput
            onFormChange={this.onFormChange}
            name="password"
            type="password"
            placeholder="password"
            required
            value={this.state.password}
          />
          <FormInput
            onFormChange={this.onFormChange}
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            required
            value={this.state.confirmPassword}
          />
          <CustomButton custom type="submit">
            sign up
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
