import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { signUp } from "../../store/actions/authAction";
class SignUp extends Component {
  state = {
    email: "",
    phone: "",
    password: "",
    lastname: "",
    firstname: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 '>
            <form className='white' onSubmit={this.handleSubmit}>
              <h5 className='grey-text text-darken-3'>Sign In</h5>
              <div className='row'>
                <div className='input-field col s12 m6'>
                  <input
                    id='lastname'
                    type='text'
                    className='validate'
                    value={this.state.lastname}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='lastname'>Last Name</label>
                </div>

                <div className='input-field col s12 m6'>
                  <input
                    id='firstname'
                    type='text'
                    className='validate'
                    value={this.state.firstname}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='firstname'>First Name</label>
                </div>
              </div>

              <div className='row'>
                <div className='input-field col s12 m6'>
                  <input
                    id='email'
                    type='email'
                    className='validate'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='email'>Email</label>
                </div>
                <div className='input-field col s12 m6'>
                  <input
                    id='phone'
                    type='tel'
                    className='validate'
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  />
                  <label htmlFor='phone'>Phone</label>
                </div>
              </div>
              <div className='row'>
                <div className='input-field col m6 s12'>
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
                SignUp
                <i className='material-icons right'>how_to_reg</i>
              </button>
              <div className='red-text center'>
                {authError ? authError : ""}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (newUser) => {
      dispatch(signUp(newUser));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
