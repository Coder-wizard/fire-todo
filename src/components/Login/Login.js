import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import GoogleProvider from "./GoogleProvider";

const Login = ({ handleCreateAccout }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/home");
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/home");
      }
    });
  });
  return (
    <div className="welcome">
      <h1>Todo List</h1>
      <div className="login__container">
        <input
          type="email"
          placeholder="Email"
          name="email"
          onBlur={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          onBlur={handlePasswordChange}
          name="password"
        />
        <button onClick={handleSignin}>Sign in</button>
        <GoogleProvider />
        <Link to="/register">Create an account</Link>
      </div>
    </div>
  );
};

export default Login;
