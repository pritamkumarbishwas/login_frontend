import React, { useState } from 'react';
import axios from 'axios';
import emailIcon from '../assets/email.png';
import eyeIcon from '../assets/EyeFill.png';
import { config } from "../App";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';

function Signin() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
                const response = await axios.post(`${config.endpoint}users/login`, {
                    email: formData.email,
                    password: formData.password,
                });

                persistLogin(
                    response.data.data.accessToken,
                    response.data.data.user.fullName,
                );

                toast.success("Login successful!");
                navigate("/home");
            } catch (error) {
                console.error("Error Login user:", error);
                toast.error("Failed to Login. Please try again.");
            } finally {
                setLoading(false);
            }
        }
    };

    const validateInput = (data) => {
        const { email, password } = data;

        if (!email) {
            toast.error("Email is a required field");
            return false;
        }

        if (!password) {
            toast.error("Password is a required field");
            return false;
        }


        return true;
    };

    const persistLogin = (token, fullName) => {
        localStorage.setItem("token", token);
        localStorage.setItem("fullName", fullName);
    };

    return (
        <div className="body-trangel">
            <div className="signup-container">
                <h2>Signin</h2>
                <div className="triangle-container">
                    <div className="triangle"></div>
                    <form onSubmit={handleSubmit} className="form-on-triangle">
                        <div className="form-group">
                            <div className="input-with-icon">
                                <img src={emailIcon} alt="Email Icon" className="input-icon" />
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter Email ID"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-with-icon">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={formData.password}
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
                            {loading ? 'Signing ...' : 'Signin'}
                        </button>
                        <div className="login-link">
                            Don't have an account? <a href="/">Signup</a>
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

            <ToastContainer />
        </div>
    );
}

export default Signin;
