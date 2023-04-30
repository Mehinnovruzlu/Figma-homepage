import "./Section1.scss";
import lightning from "./lightning.svg";
import games from "./games.svg";
import firstmobile from "./firstmobile.png";

export const Section1 = () => {
  return (
    <section className="section1">
      <div className="container">
        <div className="left">
          <div className="content">
            <p>E-COURSE PLATFORM</p>
            <h2>
              Learning and
              <br />
              teaching online,
              <br />
              made easy.
            </h2>
            <h4>
              Practice your English and learn new things
              <br />
              with the platform.
            </h4>
            <a className="button" href="#">
              About platform
            </a>
          </div>
          <div className="end">
            <div className="words">
              <img className="lightning" src={lightning} />
              <p>
                {" "}
                600<span style={{ color: "#2b788b" }}>+</span>
              </p>
            </div>
            <div className="games">
              <img className="game" src={games} />
              <p>
                2<span style={{ color: "#2b788b" }}>+</span>
              </p>
            </div>
          </div>
          <div className="h6">
            <h6>Popular words</h6>
            <h6>Mini-games</h6>
          </div>
        </div>
        <div className="right">
          <img src={firstmobile} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
