import { FunctionComponent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export const Login: FunctionComponent = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function SignIn(e: React.FormEvent) {
    e.preventDefault();

    const savedProfile = localStorage.getItem("userList");
    if (savedProfile) {
      const userProfile = JSON.parse(savedProfile);
      const user = userProfile.find(
        (profile: { email: string; password: string }) =>
          profile.email === email && profile.password === password
      );
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        console.log("email i password postoje, uspjesno ste se logirali");
        navigate("/Welcome");
      } else {
        alert("email ili password nisu isti");
      }
    }
  }

  useEffect(() => {}, [email]);

  return (
    <div className="login-page">
      <div className="login-form-container">
        <h1>Login</h1>
        <form onSubmit={SignIn} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            placeholder="Enter your password"
          />
          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};