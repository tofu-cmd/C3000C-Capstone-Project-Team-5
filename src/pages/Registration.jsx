import { useState } from "react";

// A pretend sign-up screen. Nothing is saved because this is only a demo.
function Register({ onRegister, onShowLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    onRegister();
  }

  return (
    <div className="login-page">
      <form className="panel form login-box" onSubmit={handleSubmit}>
        <div className="brand">
          <img src="/brand-mark.svg" alt="" width="36" height="36" />
          <span>Bloom</span>
        </div>
        <h2>Create an account</h2>
        <label>
          Email
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} required />
        </label>
        <label>
          Confirm Password
          <input type="password" value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} required />
        </label>
        {error && <p className="note">{error}</p>}
        <button className="button" type="submit">Register</button>
        <p className="note">
          Already have an account?{" "}
          <button type="button" className="link-button" onClick={onShowLogin}>
            Log in
          </button>
        </p>
      </form>
    </div>
  );
}

export default Register;
