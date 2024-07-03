import React, { useState } from 'react';
import axios from 'axios';
import accountIcon from '../assets/Account.png';
import emailIcon from '../assets/email.png';
import lockIcon from '../assets/lock.png';
import eyeIcon from '../assets/EyeFill.png';
import { config } from "../App";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  
import '../index.css';

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleEye = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateInput(formData)) {
      setLoading(true);
      try {
        const response = await axios.post(`${config.endpoint}users/register`, {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        });

        toast.success("Registration successful!");  // Show success message with Bootstrap toast
        navigate("/login");
      } catch (error) {
        console.error("Error registering user:", error);
        toast.error("Failed to register. Please try again.");  // Show error message with Bootstrap toast
      } finally {
        setLoading(false);
      }
    }
  };

  const validateInput = (data) => {
    const { fullName, email, password, confirmPassword } = data;

    if (!fullName.trim()) {
      toast.error("Full Name is a required field");
      return false;
    }

    if (fullName.length < 6) {
      toast.error("Full Name must be at least 6 characters");
      return false;
    }

    if (!email) {
      toast.error("Email is a required field");
      return false;
    }

    if (!password) {
      toast.error("Password is a required field");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  return (
    <div className="body-trangel">
      <div className="signup-container">
        <h2>Signup</h2>
        <div className="triangle-container">
          <div className="triangle"></div>
          <form onSubmit={handleSubmit} className="form-on-triangle">
            <div className="form-group">
              <div className="input-with-icon">
                <img src={accountIcon} alt="Account Icon" className="input-icon" />
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-with-icon">
                <img src={emailIcon} alt="Email Icon" className="input-icon" />
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-with-icon">
                <img src={lockIcon} alt="Lock Icon" className="input-icon log_icon" />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Create a Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input-with-icon">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <img
                  src={eyeIcon}
                  onClick={handleEye}
                  alt="Eye Icon"
                  className="input-icon-eye"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? 'Signing up...' : 'Signup'}
            </button>
            <div className="login-link">
              Already have an account? <a href="/login">Login</a>
            </div>
          </form>
        </div>
      </div>
      {/* Additional styling elements */}
      <div className="comman_css triangle1"></div>
      <div className="comman_css triangle2"></div>
      <div className="comman_css triangle3"></div>
      <div className="comman_css triangle4"></div>
      <div className="comman_css triangle5"></div>
      <div className="comman_css triangle6"></div>
      <div className="comman_css triangle7"></div>
      <div className="comman_css triangle8"></div>
      <div className="comman_css triangle9"></div>

      <ToastContainer /> {/* Render ToastContainer for Bootstrap toasts */}
    </div>
  );
}

export default Signup;
