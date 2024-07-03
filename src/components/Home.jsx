import React from "react";
import "./Home.css"; // Import custom CSS for Home component

const Home = () => {
    const isLoggedIn = localStorage.getItem("token");
    const fullName = localStorage.getItem("fullName");

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    const handleLogin = () => {
        window.location.href = "/login";
    };

    const handleRegister = () => {
        window.location.href = "/";
    };

    return (
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-12 text-center thanks">
                    <h1 className="thanks-heading">THANKS</h1>
                </div>
                <div className="mt-4">
                    {!isLoggedIn ? (
                        <>
                            <button
                                className="btn btn-outline-primary me-2"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleRegister}
                            >
                                Register
                            </button>
                        </>
                    ) : (
                        <button
                            className="btn btn-outline-primary"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Home;
