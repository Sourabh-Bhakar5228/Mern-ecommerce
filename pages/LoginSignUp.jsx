import React, { useState } from "react";
import "./Css/LoginSignup.css"


const LoginSignUp = () => {

  const [state, setState] = useState("Login")
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("login", formData)
    let responsedata;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responsedata = data)
    if (responsedata.success) {
      localStorage.setItem("auth-token", responsedata.token)
      window.location.replace("/")
    }
    else {
      alert(responsedata.errors)
    }
  }
  const signUp = async () => {
    console.log("sign up", formData)
    let responsedata;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responsedata = data)
    if (responsedata.success) {
      localStorage.setItem("auth-token", responsedata.token)
      window.location.replace("/")
    }
    else {
      alert(responsedata.errors)
    }
  }

  return (
    <div className="loginSignup">
      <div className="l-container">
        <h1>
          {state}
        </h1>
        <div className="loginSignUp-field">
          {state === "Sign Up" ? <input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" /> : <></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder=" Your Email Adderss" />
          <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder=" Your Password" />
        </div>
        <button onClick={() => { state === "Login" ? login() : signUp() }}>Continue</button>
        {state === "Sign Up" ? <p className="Login-con">
          Already have an account? <span onClick={() => { setState("Login") }} >Login Here</span>
        </p> : <p className="Login-con">
          Create an account? <span onClick={() => { setState("Sign Up") }} >Click here</span>
        </p>}


        <div className="login-agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing , i agree to the terms  of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
};

export default LoginSignUp;
