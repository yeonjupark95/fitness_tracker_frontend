import React, { useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { callApi } from '../api';

const AccountForm = ({ setToken, setUser}) => {
  const params = useParams();
  let {method} = params;
  const accountTitle = method === 'login' ? 'Log in' : 'Register';
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataObj = await callApi({
      url: `/users/${method}`,
      method: 'POST',
      body: {username, password}
    });
    const token = dataObj && dataObj.data && dataObj.data.token;
    
    if(token) {
      const dataObj = await callApi({
        url: `/users/me`,
        method: 'GET',
        token
      });
      console.log('dataObj: ', dataObj);
      const users = dataObj && dataObj.data && dataObj.data;
      if(users) {
        setUsername('');
        setPassword('');
        setToken(token);
        setUser(users);
        navigate('/routines');
        localStorage.setItem('token', token);
      }
    }
  }

  return <>
    
      <div>
        <h1>
          {accountTitle}
        </h1>
        <form onSubmit={handleSubmit}>
          <input required label="Username"value={username} onChange={(event) => { setUsername(event.target.value) }}/>
          <input required label="Password" type="password" variant="outlined" value={password} onChange={(event) => { setPassword(event.target.value) }}/>
          <button type="submit">
            {accountTitle}
          </button>
          <div>
            {
              method === 'login' 
                ? <Link to={`/account/register`}>Don't have an account? Sign Up</Link>
                : <Link to={`/account/login`}>Already have an account? Log In</Link>
            }
          </div>
        </form>
      </div>
  </>
}


export default AccountForm;