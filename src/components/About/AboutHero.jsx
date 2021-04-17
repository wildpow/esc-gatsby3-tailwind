import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Hero = ({ heroImg, heroAlt, heroText }) => (
  <div className="HeroRoot">
    <GatsbyImage image={getImage(heroImg)} className="hero_img" alt={heroAlt} />
    <div className="content-wrapper">
      <blockquote>
        {heroText}
        <div className="cite">
          <span>- William Wellauer Co-owner</span>
          <span>&nbsp;&nbsp;E.S.C. Mattress Center</span>
        </div>
      </blockquote>
    </div>
  </div>
);

Hero.propTypes = {
  heroAlt: PropTypes.string.isRequired,
  heroText: PropTypes.string.isRequired,
  heroImg: PropTypes.instanceOf(Object).isRequired,
};
export default Hero;
