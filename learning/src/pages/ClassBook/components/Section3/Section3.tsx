import "./Section3.scss";
import left from "./left.svg";
import right from "./right.svg";

export const Section3 = () => {
  return (
    <section className="section3">
      <div className="container">
        <div className="left">
          <img src={left} />
        </div>
        <div className="one">1</div>
        <div className="one">2</div>
        <div className="one">3</div>
        <div className="dots">...</div>
        <div className="one">27</div>
        <div className="one">28</div>
        <div className="one">29</div>
        <div className="right">
          <img src={right} />
        </div>
      </div>
    </section>
  );
};
