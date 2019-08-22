//component to sign up or login
import React, { Component } from "react";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userName: "",
      password: "",
      profileImageUrl: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setFormDataToState(evt) {
    this.setState = {
      [evt.target.name]: evt.target.value
    }
  }

  authUser() {
    const authType = this.props.signUp ? "signUp" : "signIn";
    this.props.onAuth(authType, this.state).then(() => { 
        console.log("Login Successful!.")
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.authUser();
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    const { email, userName, password, profileImageUrl } = this.state;
    const { heading, buttonText, signUp } = this.props;

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={ this.handleSubmit }>
              <h1>{ heading }</h1>
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                id="email"
                name="email"
                onChange={ this.handleChange }
                value={ email }
                type="text" 
              />
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                name="password"
                onChange={ this.handleChange }
                type="password" 
              />
              {
                (signUp) 
                  ? (<div>
                      <label htmlFor="userName">Username</label>
                      <input
                        className="form-control"
                        id="userName"
                        name="userName"
                        onChange={ this.handleChange }
                        value={ userName }
                        type="text" 
                      />
                      <label htmlFor="image-url">Profile image url</label>
                      <input
                        className="form-control"
                        id="image-url"
                        name="profileImageUrl"
                        onChange={ this.handleChange }
                        value={ profileImageUrl }
                        type="text" 
                      />
                    </div>)
                  : ""
              }
              <button type="submit" className="btn btn-primary btn-block btn-lg">
                { buttonText }
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}