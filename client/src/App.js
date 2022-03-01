import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router";
import "./App.css";

import { Home, AccountForm, Routines, Activities } from "./Components";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  return (
    <>
      {token && <h2>Hello, {user.username}</h2>}
      <Link to="/"></Link>
      {token && <Link to="/home">Home</Link>}
      {!token && <Link to="/account/login">Login</Link>}
      <Link to="/routines">Routines</Link>
      <Link to="/activities">Activities</Link>
      {token && (
        <button
          onClick={() => {
            setToken("");
            localStorage.removeItem("token");
            navigate("/routines");
          }}
        >
          Log Out
        </button>
      )}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/account/:method"
          element={
            <AccountForm user={user} setUser={setUser} setToken={setToken} />
          }
        />
        <Route path="/routines" element={<Routines />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  );
};

export default App;