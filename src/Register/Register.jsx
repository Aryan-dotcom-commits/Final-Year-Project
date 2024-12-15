import "../Register/Register.css";
import { useState } from "react";

export function RegisterForm() {
  return (
    <form className="form-container-main"> 
      <div className="header-section">
        <h2> Regsiter Account </h2>
      </div>

      <div className="form-container">
        <div className="form-container-data">
          <label> First Name: <input type="text"/></label>
          <label> Last Name: <input type="text"/></label> 
        </div>

        <div className="form-container-data">
          <label> Email: <input type="email"/></label>
          <label> Age: <input type="age"/></label>
        </div>

        <div className="form-container-data">
          <label> Blood Group: <input type="text"/></label>
        </div>
        
      </div>
    </form>
  );
}