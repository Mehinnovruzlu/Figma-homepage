import "./Section4.scss";
import boingirl from "./boingirl.svg";

export const Section4 = () => {
  return (
    <section className="section4">
      <div className="container">
        <div className="left">
          <div className="image">
            <img src={boingirl} />
          </div>
        </div>
        <div className="right">
          <h2>
            Watch your
            <br />
            progress every
            <br />
            day
          </h2>
          <h4>
            Save statistics on your achievements, words
            <br />
            learned, and mistakes
          </h4>
          <a className="button" href="#">
            Statistics
          </a>
        </div>
      </div>
    </section>
  );
};
