import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from './componenets-jsx/FormInput';
import CustomButton from './componenets-jsx/CustomButton';

import { signInWithGoogle, auth } from '../firebase/firebase';

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handelSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log(err.message);
    }
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
          <div className="btn-container">
            <CustomButton type="submit">sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle}>
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
