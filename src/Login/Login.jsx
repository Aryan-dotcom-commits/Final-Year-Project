import React, { useState } from 'react';
import '../Login/Login.css';
import RightSide from '../Sidebar/RightSidebar';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const nav = useNavigate();

    const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
        setFormData({ ...formData, [name]: checked });
        } else {
        setFormData({ ...formData, [name]: value });
        }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
        <RightSide />
        <div className="login-form">
      <h2>Log in to your Account</h2>
      <p>Welcome back! Select method to log in:</p>
      
      <div className="social-buttons">
        <button className="google-btn">Google</button>
        <button className="facebook-btn">Facebook</button>
      </div>

      <div className="divider">
        <span>or continue with email</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="remember-me">
          <label>
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember me
          </label>
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
        </div>

        <button type="submit" className="login-btn">Log in</button>
      </form>

      <p className="create-account">
        Don't have an account? <a href="/create-account">Create an account</a>
      </p>
    </div>
    </>
    
  );
};

export default LoginForm;
