import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Left from "../../images/left.png";
// import Mid from "../../images/mid.png";
// import Right from "../../images/pro1.webp";

import Pro1 from "../../images/pro1.webp";
import Pro2 from "../../images/pro2.webp";
import Pro3 from "../../images/pro3.webp";
import Pro4 from "../../images/pro4.webp";
import Pro5 from "../../images/pro5.webp";
import Pro6 from "../../images/pro6.webp";
import Pro7 from "../../images/pro7.webp";
import Pro8 from "../../images/pro8.webp";
import Pro9 from "../../images/pro9.webp";

const Soft = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    centerMode: true,
    variableWidth: true,
  };

  return (
    <div className="soft-skills-container" id="softSkills-section">
      <h2>Soft skills</h2>
      <div className="soft-skills-container-photos">
        <Slider {...settings}>
          <div className="skill-item">
            <img src={Pro1} alt="" />
          </div>
          <div className="skill-item">
            <img src={Pro2} alt="" />
          </div>{" "}
          <div className="skill-item">
            <img src={Pro3} alt="" />
          </div>{" "}
          <div className="skill-item">
            <img src={Pro4} alt="" />
          </div>{" "}
          <div className="skill-item">
            <img src={Pro5} alt="" />
          </div>{" "}
          <div className="skill-item">
            <img src={Pro6} alt="" />
          </div>{" "}
          <div className="skill-item">
            <img src={Pro7} alt="" />
          </div>{" "}
          <div className="skill-item">
            <img src={Pro8} alt="" />
          </div>{" "}
          <div className="skill-item">
            <img src={Pro9} alt="" />
          </div>
          {/* <div className="skill-item">
            <img src={Left} alt="" />
          </div>
          <div className="skill-item">
            <img src={Mid} alt="" />
          </div>
          <div className="skill-item">
            <img src={Right} alt="" />
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Soft;
