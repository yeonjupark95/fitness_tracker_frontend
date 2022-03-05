import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({token}) => {
  
  return <>
    {!token && <h1>Welcome to Fitness Trackr!</h1>}
    { <Link to="/profile">View Profile</Link>}
  </>
}


export default Home;