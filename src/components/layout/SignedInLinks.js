import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";
const SignedInLinks = (props) => {
  const { userProfile } = props;

  return (
    <Fragment>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li>
          <a alt='signout' onClick={() => props.signOut()}>
            Log Out
          </a>
        </li>
        <li>
          <NavLink to='/profile' className='btn btn-floating blue lighten-1'>
            {userProfile.initials}
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    userProfile: state.firebase.profile,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
