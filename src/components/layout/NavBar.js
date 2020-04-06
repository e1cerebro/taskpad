import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import Logo from "../../img/logo.png";
const NavBar = (props) => {
  const { auth } = props;

  return (
    <nav>
      <div className='nav-wrapper  darken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo'>
            <img src={Logo} alt='TaskPad' />
          </Link>
          {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, null)(NavBar);
