import React, { useState } from "react";

const ChangePassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m8 offset-m2'>
          <form className='white' onSubmit={handleSubmit}>
            <h5 className='grey-text text-darken-3'>Reset Password</h5>
            <div className='row'>
              <div className='input-field col s12 '>
                <input
                  id='email'
                  type='email'
                  className='validate'
                  value={email}
                  onChange={handleInputChange}
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
                  value={password}
                  onChange={handleInputChange}
                />
                <label htmlFor='password'>Password</label>
              </div>
            </div>
            <button className='btn waves-light red' type='submit' name='action'>
              CONFIRM PASSWORD RESEt{" "}
              <i className='material-icons right'>account_circle</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
