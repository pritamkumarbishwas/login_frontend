import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes and Route instead of Switch
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import './index.css';

export const config = {
  endpoint: "https://login-assignment-4v4o.onrender.com/api/v1/"
};

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
