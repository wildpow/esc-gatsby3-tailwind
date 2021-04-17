import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ThreeImage = ({ threeImageText, threeImage }) => (
  <div className="ThreeImageRoot">
    <p>{threeImageText}</p>
    <div className="threeImageContainer" style={{ maxWidth: "1320px" }}>
      {threeImage.map((img, index) => (
        <div className={`image ${index === 1 && "n"}`} key={img.filename}>
          <GatsbyImage image={getImage(img)} alt={img.alt} />
        </div>
      ))}
    </div>
  </div>
);
ThreeImage.propTypes = {
  threeImageText: PropTypes.string.isRequired,
  threeImage: PropTypes.instanceOf(Array).isRequired,
};
export default ThreeImage;
