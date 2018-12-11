import React, { Component } from 'react';


class SigninForm extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  updateUserInformation = (e) => {
    console.log(e.target);
    // this.setState({
    //   e.target.name:[e.target.value]
    // })
  }

  render() {
    return (
      <div className="SigninForm">
        <h1>Login Page</h1>

        <input value={this.state.username} onClick={this.updateUserInformation} name="username">User Name</input>
        <input value={this.state.email} onClick={this.updateUserInformation} name="email">Email</input>
        <input value={this.state.password} onClick={this.updateUserInformation} name ="password">Password</input>
        <input value={this.state.passwordConfirmation} onClick={this.updateUserInformation} name= "passwordConfirmation">Password Confirmation</input>

      </div>
    );
  }
}

export default SigninForm;
