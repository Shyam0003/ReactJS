import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './Components/HomePage';
import Login from './Components/Login';
import Register from './Components/Register';
import ForgetPassword from './Components/ForgetPassword';

function App() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const visitStatus = localStorage.getItem('hasVisited');
    if (visitStatus) {
      setIsFirstVisit(false);
    }
  }, []);

  const handleSkip = () => {
    localStorage.setItem('hasVisited', 'true');
    setIsFirstVisit(false);
  };

  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          {isFirstVisit ? (
            <Route path="/" element={<Register onSkip={handleSkip} />} />
          ) : (
            <Route path="/" element={<Home />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/register" element={<Register onSkip={handleSkip} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
