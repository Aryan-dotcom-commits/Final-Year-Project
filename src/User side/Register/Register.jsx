import "../Register/Register.css";
import { useState } from "react";

export function RegisterForm() {
  return (
    <div className="center">
      <h1>Register</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required />
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="email" required />
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input type="password" required />
          <span></span>
          <label>Confirm Password</label>
        </div>
        <input type="submit" value="Sign Up" />
        <div className="signup_link">
          Already a member? <a href="#">Login</a>
        </div>
      </form>
    </div>
  );
}