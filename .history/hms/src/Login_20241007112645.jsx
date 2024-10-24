import React, { useState } from "react";
import './login.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    axios.post('http://localhost:3001/login', {email,password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        navigate('/home')
      } else{
        alert("Incorrect Password!!!")
      }
    })
    .catch(err => console.log(err))

  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
      

        <div className="form-group">
          <button type="submit" className="login-btn">Login</button>
        </div>
      </form>  
        
        <div className="form-group">
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>
      
        <div className="form-group">
          <p className="login-text">
            Create Account 
          </p>

          <Link to="/sign" className="login-link">Sign Up</Link>
        </div>

    </div>
  );
};

export default Login;
