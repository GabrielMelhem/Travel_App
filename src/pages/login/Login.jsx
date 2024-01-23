import React from "react";
import { useContext, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  // const { login } = useContext(AuthContext);
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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("email, password :>> ", email, password);
    // login(email, password);
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}> 
        <input type="text" id="email" onChange={handleEmailChange} />
        <label htmlFor="email">Email</label>
        <input type="password" id="password" onChange={handlePasswordChange}/>
        <label htmlFor="pssword">Password</label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
