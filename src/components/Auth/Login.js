import React, { useState } from 'react';
import './Login.css'; // Import the CSS for styling

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Logging in with:', { email, password });
        }
    };

    return (
        <div className="login-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-brand">
                    FireSight
                </div>
                <button className="home-btn">
                    Home
                </button>
            </nav>

            {/* Login Form */}
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className={errors.email ? 'error-input' : ''}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className={errors.password ? 'error-input' : ''}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
