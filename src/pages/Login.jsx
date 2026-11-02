import { useState } from "react";

// A pretend login screen. Any password works because this is only a demo.
function Login({ onLogin, onShowRegister }) {
  const [email, setEmail] = useState("maya.lewis@bloom.example");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onLogin();
  }

  return (
    <div className="login-page">
      <form className="panel form login-box" onSubmit={handleSubmit}>
        <div className="brand">
          <img src="/brand-mark.svg" alt="" width="36" height="36" />
          <span>Bloom</span>
        </div>
        <h2>Welcome back</h2>
        <p className="note">Demo login: any password will work.</p>
        <label>
          Email
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
        </label>
        <button className="button" type="submit">Log in</button>
        <p className="note">
          Don't have an account?{" "}
          <button type="button" className="link-button" onClick={onShowRegister}>
            Register
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
