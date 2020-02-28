import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = props => {
  const [signup, setSignup] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log("thesignup", signup);
    return (
      axiosWithAuth()
        .post("/api/auth/register", signup)
        .then(res => {
          console.log("props", props);
          localStorage.setItem("token", res.data.token);
          props.history.push("/login");
          return true;
        })
        .catch(err => console.log(err.response))
    );
  };

  return (
    <form className="register-form" onSubmit={onSubmit}>
      <label htmlFor="username">
        Username (must be 8 or more characters):{" "}
      </label>
      <input
        type="text"
        name="username"
        placeholder="JohnDoe123..."
        username={signup.username}
        onChange={handleChanges}
        required
      />
      <br />
      <label htmlFor="password">
        Password (must be 8 or more characters):{" "}
      </label>
      <input
        type="text"
        name="password"
        placeholder="12345678..."
        password={signup.password}
        onChange={handleChanges}
        required="Password must be 8 characters!"
      />
      <br />

      <button type="submit">Sign Up</button>
      <p>
        Aleady have an account? <br />
        <Link to="/login">Log in here</Link>{" "}
      </p>
    </form>
  );
};

export default Register;
