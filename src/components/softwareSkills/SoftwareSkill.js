import React, {useState, useContext} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import iconPath from "../../assets/images/cplus.svg";
import hoverIconPath from "../../assets/images/cplus_hover.svg";
import darkIconPath from "../../assets/images/cplus_dark.svg";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const {isDark} = useContext(StyleContext);

  const handleHover = index => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            const isHovered = hoveredIndex === i;
            const imagePath = isHovered
              ? hoverIconPath
              : isDark
              ? darkIconPath // Use the dark mode image path if isDark is true
              : iconPath;
            return (
              <li
                key={i}
                className={
                  isDark
                    ? "software-skill-inline-dark"
                    : "software-skill-inline"
                }
                name={skills.skillName}
                onMouseEnter={() => handleHover(i)}
                onMouseLeave={handleMouseLeave}
              >
                {skills.fontAwesomeClassname ? (
                  <i className={skills.fontAwesomeClassname}></i>
                ) : (
                  <img src={imagePath} alt={skills.skillName} />
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
