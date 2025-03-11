import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import googleLogo from "../../assets/google.png";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle Email/Password Sign-In
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password!");
    }
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signin-page">
      <nav className="navbar" onClick={() => navigate("/")}>
        <h1>SANKALP.AI</h1>
      </nav>

      <div className="signin-container">
        <h1>Sign In</h1>
        <p>Enter your details.</p>
        {error && <p className="error-message">{error}</p>}{" "}
        <form className="signin-form" onSubmit={handleSignIn}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="separator">
            <span>or</span>
          </div>

          {/* Google Sign-In Button */}
          <button
            type="button"
            className="google-signin"
            onClick={handleGoogleSignIn}
          >
            <img src={googleLogo} alt="Google Logo" />
            Sign In with Google Account
          </button>

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        <p className="signup-text">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
