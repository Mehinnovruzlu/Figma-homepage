import "./Section1.scss";
import book from "./book.svg";
import blueclassbook from "./blueclassbook.svg";
import pink from "./pink.svg";
import cap from "./cap.svg";

export const Section1 = () => {
  return (
    <section className="section1">
      <div className="container">
        <div className="top">
          <div className="left">
            <div className="textbook">
              <img src={cap} />
              <p>Textbook</p>
            </div>
            <div className="dictionary">
              <img src={book} />
              <p style={{ color: "gray" }}>Dictionary</p>
            </div>
          </div>
          <div className="right">
            <img className="pink" src={pink} />
            <img className="blue" src={blueclassbook} />
            <div className="setting">
              <div className="setting-select">
                <div>
                  <input type="checkbox" />
                  Show words in a list
                </div>
                <div>
                  <input type="checkbox" />
                  Display the 'Add' and 'Remove' buttons
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="first">
            <div className="A1">
              A1
              <p>Easy</p>
            </div>
            <div className="A2">
              A2
              <p>Easy</p>
            </div>
            <div className="B1">
              B1
              <p>Medium</p>
            </div>
          </div>
          <div className="second">
            <div className="B2">
              B2
              <p>Medium</p>
            </div>
            <div className="C1">
              C1
              <p>Hard</p>
            </div>
            <div className="C2">
              C2
              <p>Hard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
