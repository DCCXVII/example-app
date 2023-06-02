import React, { useState } from "react";
import { EyeClosedIcon, EyeIcon } from "@primer/octicons-react";
import google from "../../assets/google.png";
import { login, userData } from "../api/api";
import "./SignIn.css";
import { useNavigate, Link } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setIsError(false);

    try {
      await login(email, password);

      if (userData.role == "instructor") {
        navigate("/instructor");
      } else if (userData.role == "client") {
        navigate("/user");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    }

    setIsLoading(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="blank-div"></div>
      <div className="signin-container">
        <h2 id="signin-title">Sign in</h2>
        <br />
        <form onSubmit={handleLogin}>
          <label>
            E-mail
            <br />
            <input
              type="email"
              name="email"
              className="signin-input"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          <br />
          <label>
            Password
            <br />
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="signin-input"
                value={password}
                onChange={handlePasswordChange}
              />
              {showPassword ? (
                <EyeIcon
                  className="show-hide-icon"
                  size={17}
                  onClick={handleTogglePassword}
                />
              ) : (
                <EyeClosedIcon
                  className="show-hide-icon"
                  size={17}
                  onClick={handleTogglePassword}
                />
              )}
            </div>
          </label>
          <br />

          <button
            type="submit"
            className="button-signin"
            id="signin-button"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>

          {isError && <div className="error-message">Login failed</div>}
        </form>
        <br />
        <div className="forget-signup-links">
          <div id="forget-password-link">
            <Link to="/reset-password" id="signup-link">
              Mot de passe oublié
            </Link>
          </div>
          <br />
          <p>
            Nouveau sur Alo Moves ?{" "}
            <Link to="/signup" id="signup-link">
              S'inscrire
            </Link>
          </p>
        </div>
        <hr className="hr-text" data-content="Ou" />
        <button type="submit" className="button-signin google">
          <img className="google-icon" src={google} alt="Google" />
          S'inscrire avec compte google
        </button>
      </div>
    </>
  );
};

export default SignIn;
