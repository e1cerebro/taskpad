import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
const NavBar = () => {
  return (
    <nav>
      <div className='nav-wrapper  darken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo'>
            TASKPAD
          </Link>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);

  return {
    propName: state
  };
};

export default connect(mapStateToProps, null)(NavBar);
