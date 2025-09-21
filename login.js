import React, { useState } from "react";

const Login = () => {
  // Dummy registered user (you can set the same as used in Register)
  const registeredUser = {
    email: "test@example.com",
    password: "12345",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === registeredUser.email && password === registeredUser.password) {
      setMessage("Login successful! Welcome back 🎉");
    } else {
      setMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <h1>Login User</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
