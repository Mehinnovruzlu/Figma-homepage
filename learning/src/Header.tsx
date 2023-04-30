import "./Header.scss";
import logo from "./logo.svg";
import arrow from "./arrow.png";
import vector from "./vector.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="content">
        <div className="left">
          <div className="open">
            <div className="open-select">
              <ul>
                <li>
                  <a href="#" className="open-link">
                    Main
                  </a>
                </li>
                <li>
                  <a href="#" className="open-link">
                    Statistics
                  </a>
                </li>
                <li>
                  <a href="#" className="open-link">
                    Textbook
                  </a>
                </li>
                <li>
                  <a href="#" className="open-link">
                    Sprint
                  </a>
                </li>
                <li>
                  <a href="#" className="open-link">
                    Audio-call
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="top1">
            <p>GlobalTalk</p>
          </div>
          <nav className="top2">
            <Link to="/" style={{ color: "black" }} className="div-link">
              Home
            </Link>
            <Link to="/" className="div-link">
              Textbook
            </Link>
            <Link to="/" className="div-link">
              Statistics
            </Link>
            <Link to="/" className="div-link">
              Games
            </Link>
            <img src={vector} alt="" />
          </nav>
        </div>
        <div className="top3">
          <img className="logo" src={logo} />
          <button type="button">Sign Out</button>
          <img className="arrow" src={arrow} />
          <img className="vector" src={vector} />
        </div>
      </div>
    </header>
  );
};

export default Header;
