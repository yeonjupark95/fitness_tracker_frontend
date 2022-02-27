import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Home = ({ token}) => {
  const [user, setUser] = useState({});
  
  return <>
 
    {!token && <h1>Welcome to Fitness Tracker!</h1>}
    {token && <h2>Hello, {user.username}</h2>}
    { <Link to="/profile">View Profile</Link>}
  </>
}


export default Home;