import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({ onSkip }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.email === email);

    if (userExists) {
      setMessage('User already exists');
    } else {
      users.push({ name, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      setMessage('Registration successful!');
      localStorage.setItem('hasVisited', 'true');
      navigate('/');  // Redirect to home page
    }
  };

  const handleSkip = () => {
    onSkip();
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
        {message && <p>{message}</p>}
      </form>
      <button onClick={handleSkip}>Skip Registration</button>
    </div>
  );
}

export default Register;
