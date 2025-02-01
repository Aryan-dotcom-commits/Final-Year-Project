import './ForgotPassword.css';

function ForgotPassword() {
    return(
        <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form>
        <label htmlFor="email">Enter your registered email</label>
        <input
          
        />
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
    );
}

export default ForgotPassword;