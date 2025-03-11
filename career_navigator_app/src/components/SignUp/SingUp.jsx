import "./SignUp.css";
import googleLogo from "../../assets/google.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!email || !username || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard"); // Redirect after successful sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  // Google Sign-In
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard"); // Redirect after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-page">
      <nav className="navbar" onClick={() => navigate("/")}>
        <h1>SANKALP.AI</h1>
      </nav>
      <div className="signup-container">
        <h1>Sign Up</h1>
        <p>Enter your details.</p>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display errors */}
        <form className="signup-form" onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="separator">
            <span>or</span>
          </div>

          <button
            type="button"
            className="google-signup"
            onClick={handleGoogleSignIn}
          >
            <img src={googleLogo} alt="Google Logo" />
            Sign In with Google Account
          </button>

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="signin-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")}>Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
