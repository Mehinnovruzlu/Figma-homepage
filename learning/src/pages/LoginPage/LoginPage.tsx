import "./LoginPage.scss";
import facebook from "./facebook.svg";
import google from "./google.svg";

export const LoginPage = () => {
  return (
    <body>
      <div className="container">
        <div className="login">Log In</div>
        <div className="signup">
          <p>Don't have an account?</p>
          <a href="#">Sign Up</a>
        </div>
        <div className="socialmedia">
          <div className="social">
            <img src={facebook} />
            <a href="#"> Log in with Facebook </a>
          </div>
          <div className="social">
            <img src={google} />
            <a href="#"> Log in with Google </a>
          </div>
        </div>
        <div className="line">
          <h3>OR</h3>
        </div>
        <form className="form" id="form">
          <div className="mail">
            <div className="input-box">
              <h6>Your email</h6>
              <input type="text" id="email" />
              <div className="error"></div>
            </div>
            <div className="input-box">
              <h6>Your password</h6>
              <input type="password" id="password" />
              <div className="error"></div>
            </div>
          </div>
          <div className="signup">
            <a href="#">Forget your password</a>
          </div>
          <div className="input-box-end">
            <input type="submit" value="Log In" id="button" />
          </div>
        </form>
      </div>
    </body>
  );
};
