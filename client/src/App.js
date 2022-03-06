import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { callApi } from "./api";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./App.css";

import {
  Home,
  AccountForm,
  Routines,
  Activities,
  MyRoutines,
  EditRoutine,
} from "./Components";

const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  const handleUser = async () => {
    const userObject = await callApi({
      url: `/users/me`,
      method: "GET",
      token,
    });
    setUser(userObject);
  };

  const handleLogOut = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    if (token) {
      handleUser();
    }
  }, [token]);

  return (
    <>
      <Navbar className="navbar" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Fitness Trac.kr</Navbar.Brand>
          <Nav className="nav-items">
            {token && <Nav.Link href="/">Home</Nav.Link>}
            <Nav.Link href="/routines">Routines</Nav.Link>
            <Nav.Link href="/activities">Activities</Nav.Link>
            {token && <Nav.Link href="/myroutines">My Routines</Nav.Link>}
            {!token && <Nav.Link href="/account/login">Login</Nav.Link>}
            {token && (
              <NavDropdown
                title={`Hi ${user.username}`}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item id="sign-out" onClick={handleLogOut}>
                  SIGN OUT
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/account/:method"
          element={
            <AccountForm user={user} setUser={setUser} setToken={setToken} />
          }
        />
        <Route
          path="/routines"
          element={
            <Routines
              routines={routines}
              setRoutines={setRoutines}
              token={token}
            />
          }
        />
        <Route
          path="/activities"
          element={
            <Activities
              token={token}
              activities={activities}
              setActivities={setActivities}
            />
          }
        />
        <Route
          path="/myroutines"
          element={
            <>
              <MyRoutines
                token={token}
                routines={routines}
                setRoutines={setRoutines}
                user={user}
              />
            </>
          }
        />
        <Route
          path="/routines/:ROUTINE_ID/edit"
          element={
            <EditRoutine
              token={token}
              routines={routines}
              setRoutines={setRoutines}
              activities={activities}
              setActivities={setActivities}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
