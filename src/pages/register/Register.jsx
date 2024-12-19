import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" className="loginInput" placeholder="Username" />
            <input type="text" className="loginInput" placeholder="Email" />
            <input type="text" className="loginInput" placeholder="Password" />
            <input
              type="text"
              className="loginInput"
              placeholder="Password Again"
            />
            <button className="loginButton">Sign Up</button>
            <Link to="/login" className="loginRegisterButton">
              Log into Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
