import React, {useContext} from "react";
import "./Travel.scss";
import {travelSection} from "../../portfolio";
import {Fade} from "react-reveal";
import iconPath from "../../assets/images/flight.png";
import darkIconPath from "../../assets/images/flight_dark.png";
import StyleContext from "../../contexts/StyleContext";

export default function Travel() {
  const {isDark} = useContext(StyleContext);
  const imagePath = isDark? darkIconPath : iconPath;
  if (!travelSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="travel">
        <div className="travel-header">
          <h1 className="travel-header-text">{travelSection.title}</h1>
          <div className="container">
            <div className="main-content">
              <div className={isDark ? "darkmode travel-subtitle" : "subTitle travel-subtitle"}>
                <p>{travelSection.subtitle}</p>
              </div>
              <div className={isDark ? "darkmode travel-text" : "travel-text"}>
                <p>{travelSection.base}</p>
                <p>{travelSection.travelled}</p>
                <p>{travelSection.favourite}</p>
                <p>{travelSection.bucket}</p>
              </div>
            </div>
            <div className="flightmap">
              <img src={imagePath} alt={"flight map"} />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
