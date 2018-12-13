import React, { Component } from 'react';


class SigninForm extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    good: false
  }

  updateUserInformation = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  checkInputs = () => {
    // {this.state.username < 5 ? alert('wrong') : console.log('fine')}
    // {this.state.email < 5 ? alert('wrong') : console.log('fine')}
    // {this.state.password < 5 ? alert('wrong') : console.log('fine')}
    // {this.state.passwordConfirmation < 5 ? alert('wrong') : console.log('fine')}
  }

  saveInfo = () => {
    console.log('post ');
  }

  render() {
    console.log(this.state);
    return (
      <div className="SigninForm">
        <h1 onClick={this.checkInputs}>Login Page</h1>
        <form>
          <input value={this.state.username} placeholder='username' onChange={this.updateUserInformation} name="username"></input> <br />
          <input value={this.state.email}  placeholder='email'onChange={this.updateUserInformation} name="email"></input> <br />
          <input value={this.state.password} placeholder='password' onChange={this.updateUserInformation} name ="password"></input> <br />
          <input value={this.state.passwordConfirmation} placeholder='password confirmation' onChange={this.updateUserInformation} name= "passwordConfirmation"></input> <br />
        </form>

      </div>
    );
  }
}

export default SigninForm;
