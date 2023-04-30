import "./Footer.scss";
import cat from "./cat.svg";
import gt from "./gt.svg";
import yt from "./yt.svg";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footertop">
          <nav className="top1">
            <a href="#" className="div-link">
              Home
            </a>
            <a href="#" className="div-link">
              Textbook
            </a>
            <a href="#" className="div-link">
              Statistics
            </a>
            <a href="#" className="div-link">
              Sprint
            </a>
            <a href="#" className="div-link">
              Audio-call
            </a>
          </nav>
          <nav className="top2">
            <a href="#" className="div-link">
              Alex
            </a>
            <a href="#" className="div-link">
              Gabriel
            </a>
            <a href="#" className="div-link">
              Marcus
            </a>
          </nav>
        </div>
        <div className="footerbottom">
          <div className="logos">
            <img src={cat} alt="" />
            <img src={gt} alt="" />
            <img src={yt} alt="" />
          </div>
          <div className="top3">
            <p>©2021 GlobalTalk. Project for GlobalTalk.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
