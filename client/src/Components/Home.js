import React from "react";
import { Link } from "react-router-dom";

const Home = (token) => {

  return <>
    {token && <h1 className="Welcome-title">Welcome to Fitness Trac.kr!</h1>}
    {token &&<Link to="/myroutines" className="my-routines-link">My Routines</Link>}
  </>
}

export default Home;