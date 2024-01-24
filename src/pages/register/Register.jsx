import React from 'react'
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext"

const Register = () => {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log("email :>> ", email);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // console.log("password :>> ", password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("email, password :>> ", email, password);
    register(email, password);
  };

  return (
    <>
    <h1>Register</h1>
    <form onSubmit={handleRegister}>
      <input type='text' id='email' onChange={handleEmailChange}/>
      <label htmlFor='email'>Email</label>
      <input type='password' id='password' onChange={handlePasswordChange}/>
      <label htmlFor='password'>Password</label>
      <button type='submit'>Register</button>
    </form>
    </>
    
  )
}

export default Register