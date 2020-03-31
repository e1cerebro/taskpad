import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m8 offset-m2'>
            <form className='white' onSubmit={this.handleSubmit}>
              <h5 className='grey-text text-darken-3'>Sign In</h5>
              <div class='row'>
                <div class='input-field col s12'>
                  <input
                    id='email'
                    type='email'
                    class='validate'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='email'>Email</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <input
                    id='password'
                    type='password'
                    class='validate'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='password'>Password</label>
                </div>
              </div>
              <button class='btn waves-light red' type='submit' name='action'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
