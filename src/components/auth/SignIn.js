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
          <div className='col s12 '>
            <form className='white' onSubmit={this.handleSubmit}>
              <h5 className='grey-text text-darken-3'>Sign In</h5>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    id='email'
                    type='email'
                    className='validate'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='email'>Email</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col s12'>
                  <input
                    id='password'
                    type='password'
                    className='validate'
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='password'>Password</label>
                </div>
              </div>
              <button
                className='btn waves-light red'
                type='submit'
                name='action'>
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
