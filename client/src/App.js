import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { callApi } from './api';
import './App.css'

import {
 Home,
 AccountForm,
 routines,

} from './Components';


const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [routines, setRoutines] = useState([]);
  const navigate = useNavigate();
  console.log(routines);

  const handleRoutines = async () => {
   const {data:{routines}} = await callApi({url:'/routines',token})
   if(routines){
     setRoutines(routines)
   }
  }

  useEffect(() => {

    if(localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  },[])

  useEffect(() => {
    try {
      handleRoutines();  
    } catch (error) {
      console.error(error);
    }
  }, [token]);
  return <>
   {token && <h2>Hello, {user.username}</h2>}
    <Link to="/"></Link> 
    {token &&<Link to="/home">Home</Link>} 
    {!token &&<Link to="/account/login">Login</Link>} 
    {token && <button onClick={() => {
      setToken('');
      localStorage.removeItem('token');
      navigate('/routines');
    }}>Log Out</button>}
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/account/:method" element={ <AccountForm user={user} setUser={setUser} setToken={setToken} /> } />

    </Routes>
  </>
}

export default App;