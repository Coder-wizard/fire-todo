import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Register = () => {
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setRegisterInfo({ ...registerInfo, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setRegisterInfo({ ...registerInfo, password: e.target.value });
  };
  const handleConfirmPasswordChange = (e) => {
    setRegisterInfo({ ...registerInfo, confirmPassword: e.target.value });
  };
  const handleRegister = () => {
    if (registerInfo.password !== registerInfo.confirmPassword) {
      alert("Password does not same");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInfo.email,
      registerInfo.password
    )
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
    <div>
      <div className="login__container">
        <input
          type="email"
          placeholder="Email"
          value={registerInfo.email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handlePasswordChange}
          value={registerInfo.password}
        />
        <input
          type="password"
          placeholder="Confrim Password"
          onChange={handleConfirmPasswordChange}
          value={registerInfo.confirmPassword}
        />
        <button onClick={handleRegister}>Register</button>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
};

export default Register;
