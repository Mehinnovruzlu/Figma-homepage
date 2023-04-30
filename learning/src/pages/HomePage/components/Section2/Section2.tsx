import "./Section2.scss";
import sittinggirl from "./sittinggirl.svg";
import pink from "./pink.png";
import blue from "./blue.svg";

export const Section2 = () => {
  return (
    <section className="section2">
      <div className="container">
        <div className="left">
          <div className="image">
            <img src={sittinggirl} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="content">
            <h2>
              Learn a language
              <br />
              in a playful way
            </h2>
            <h4>
              Make learning words more fun with mini-
              <br />
              games
            </h4>
          </div>
          <div className="end">
            <div className="pink">
              <img src={pink} />
            </div>
            <div className="blue">
              <img src={blue} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
