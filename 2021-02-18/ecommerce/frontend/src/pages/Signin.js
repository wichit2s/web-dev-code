import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/user.js';
import './Signin.css';

function Signin(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userSignin = useSelector(state => state.userSignin);
  const { loading, user, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      props.history.push('/');
    }
    return () => {};
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler} >
        <ul>
          <li><h2>Signin Form</h2></li> 
          <li>{loading && <div>Loading....</div>}</li> 
          <li>{error && <div className="error">{error}</div>}</li> 
          <li><input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} /></li>
          <li><input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} /></li>
          <li><button type="submit">Signin</button></li>
        </ul>
      </form>
    </div>
  );
}

export default Signin;
