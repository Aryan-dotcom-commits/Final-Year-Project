import "../Register/Register.css";
import { useState } from "react";

export function RegisterForm() {
  return (
    <section className="register-section">
      <div className="image">
        <h2> Welcome </h2>
      </div>

      <form className="register-form">
        <div className="label-division">
          <label> First Name: <input type="text"/></label>
          <label> First Name: <input type="text"/></label>
        </div>
        
        <div className="label-division">
          <label> First Name: <input type="text"/></label>
          <label> First Name: <input type="text"/></label>
        </div>
      </form>
    </section>
  );
}