import "./Section3.scss";
import girlbook from "./girlbook.svg";

export const Section3 = () => {
  return (
    <section className="section3">
      <div className="container">
        <div className="left">
          <div className="content">
            <h2>
              Increase your
              <br />
              vocabulary
            </h2>
            <h4>
              Traditional and new effective approaches to
              <br />
              word study
            </h4>
            <a className="button" href="#">
              Textbook
            </a>
          </div>
        </div>
        <div className="right">
          <img src={girlbook} />
        </div>
      </div>
    </section>
  );
};
