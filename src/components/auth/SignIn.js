import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { signIn } from "../../store/actions/authAction";
import { Redirect, Link } from "react-router-dom";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to='/' />;

    const authError = this.props.authError;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12 m8 offset-m2'>
            <form className='white' onSubmit={this.handleSubmit}>
              <h5 className='grey-text text-darken-3'>Sign In</h5>
              <div className='row'>
                <div className='input-field col s12 '>
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
                LOGIN <i className='material-icons right'>account_circle</i>
              </button>
              <div className='red-text center'>
                {authError ? authError : ""}
              </div>
              <Link to='/reset-password'>Forgot password?</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (credentials) => {
      dispatch(signIn(credentials));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
