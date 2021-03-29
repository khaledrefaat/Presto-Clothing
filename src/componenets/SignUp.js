import React, { Component } from 'react';
import FormInput from './componenets-jsx/FormInput';
import CustomButton from './componenets-jsx/CustomButton';
import { auth, createUserProfileDocument } from '../firebase/firebase';
import './SignUp.scss';

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  onFormChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onFormSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passowrds don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>i dont have an account</h2>
        <span>Sign un with your email and password</span>
        <form onSubmit={this.onFormSubmit} className="sign-up__form">
          <FormInput
            onFormChange={this.onFormChange}
            name="displayName"
            type="text"
            placeholder="displayName"
            required
            value={displayName}
          />
          <FormInput
            onFormChange={this.onFormChange}
            name="email"
            type="email"
            placeholder="email"
            required
            value={email}
          />
          <FormInput
            onFormChange={this.onFormChange}
            name="password"
            type="password"
            placeholder="password"
            required
            value={password}
          />
          <FormInput
            onFormChange={this.onFormChange}
            name="confirmPassword"
            type="password"
            placeholder="confirm password"
            required
            value={confirmPassword}
          />
          <CustomButton type="submit">sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
