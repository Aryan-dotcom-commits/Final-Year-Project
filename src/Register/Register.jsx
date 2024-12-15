
import React, { useState } from 'react';
import '../Register/Register.css';
import Sidebar from '../Sidebar/Sidebar';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'United States',
    state: 'Delaware',
    phoneNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <>
    <Sidebar />
      <div className="form-container">
      <h2>Let's get started</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="country">Country of residence</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option>United States</option>
            {/* Add other countries as needed */}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">GET STARTED</button>
      </form>
    </div>
    </>
    
  );
};

export default Form;
