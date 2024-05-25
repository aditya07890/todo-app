import React, { useState } from "react";
import { signUp, logIn, logOut } from "../authService";

const AuthComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await signUp(email, password);
      setMessage(`User signed up: ${user.email}`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      const user = await logIn(email, password);
      setMessage(`User logged in: ${user.email}`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      setMessage("User logged out");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>

      <h2>Log In</h2>
      <form onSubmit={handleLogIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Log In</button>
      </form>

      <button onClick={handleLogOut}>Log Out</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default AuthComponent;
