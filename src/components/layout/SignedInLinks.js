import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul id='nav-mobile' className='right hide-on-med-and-down'>
      <li>
        <NavLink to='/project/create'>New Project</NavLink>
      </li>
      <li>
        <NavLink to='/'>Log Out</NavLink>
      </li>
      <li>
        <NavLink to='/' className='btn btn-floating blue lighten-1'>
          UC
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
