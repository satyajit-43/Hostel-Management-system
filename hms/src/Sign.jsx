import React, { useState } from "react";
import './sign.css'; // Import the CSS file for styling
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    axios.post('http://localhost:3001/register', {name,email,password})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err => console.log(err))

    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Password:", password);
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

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
          <button type="submit" className="signup-btn">Sign Up</button>
        </div>
      </form>
        
        <div className="form-group">
          <p className="login-text">
            Already have an account? 
          </p>

          <Link to="/login" className="login-link">Login</Link>
        </div>
      
    </div>
  );
};

export default SignUpForm;

