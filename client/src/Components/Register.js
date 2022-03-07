import { useState } from "react";
import { register } from "../api";

const Register = ({ token, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newToken = await register(username, password);
    setToken(newToken);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button>submit</button>
    </form>
  );
};

export default Register;