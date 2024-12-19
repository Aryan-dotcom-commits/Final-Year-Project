import "../Register/Register.css";
import { useState } from "react";

export function RegisterForm() {
  return (
    <form className="form-container-main"> 
      <div className="header-section">
        <h2> Regsiter Account </h2>
      </div>

      <div className="form-container">
        <label> First Name: <input type="text"/></label>
      </div>

      <div className="form-container">
        <label> Last Name: <input type="text"/></label>
      </div>

      <div className="form-container">
        <label> Age: <input type="date"/></label>
      </div>

      <div className="form-container">
        <label> Blood Group <input type="text"/></label>
      </div>

      <button> Register </button>
    </form>
  );
}