import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    setSubmitted(true);
  }

  return (
    <div className="page">
      <div className="login-card">
        <div className="icon">🔐</div>

        <h1>Login Form</h1>
        <p className="subtitle">
          Practical 15: Uncontrolled Form & Submission
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={usernameRef}
            placeholder="Enter your username"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
            placeholder="Enter your password"
            required
          />

          <button type="submit">Login</button>
        </form>

        {submitted && (
          <div className="result">
            <h2>Submitted Information</h2>
            <p>
              <strong>Username:</strong> {username}
            </p>
            <p>
              <strong>Password:</strong> {password}
            </p>
          </div>
        )}

        <p className="footer">BCA Semester 5 | React Practical 15</p>
      </div>
    </div>
  );
}

export default App;