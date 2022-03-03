import React, { useState, useEffect } from "react";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import {
  Home,
  AccountForm,
  Routines,
  Activities,
  MyRoutines,
} from "./Components";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [routines, setRoutines] = useState([]);

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
      <Link to="/myroutines">My Routines</Link>
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
        <Route
          path="/myroutines"
          element={[
            <MyRoutines
              token={token}
              routines={routines}
              setRoutines={setRoutines}
            />,
          ]}
        />
      </Routes>
    </>
  );
};

export default App;
