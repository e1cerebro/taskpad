import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    lastname: "",
    firstname: ""
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
          <div className='col s12 m6 offset-m3'>
            <form className='white' onSubmit={this.handleSubmit}>
              <h5 className='grey-text text-darken-3'>Sign In</h5>
              <div class='row'>
                <div class='input-field col s12'>
                  <input
                    id='lastname'
                    type='text'
                    class='validate'
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='firstname'>Last Name</label>
                </div>
              </div>{" "}
              <div class='row'>
                <div class='input-field col s12'>
                  <input
                    id='firstname'
                    type='text'
                    class='validate'
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='firstname'>First Name</label>
                </div>
              </div>
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
                <i class='material-icons right'>send</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
