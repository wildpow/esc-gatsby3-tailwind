import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./about.css";

const Hero = ({ heroImg, heroAlt, heroText }) => (
  <div className="relative grid hero__root ">
    <GatsbyImage
      image={getImage(heroImg)}
      alt={heroAlt}
      style={{
        gridArea: "1/1",
      }}
      formats={["auto", "webp", "avif"]}
    />
    <div
      style={{
        gridArea: "1/1",
      }}
      className="relative z-10 grid p-5 place-items-center xl:p-20"
    >
      <blockquote className="pr-4 font-serif text-base phablet:text-lg lg:text-4xl ">
        {heroText}
        <cite className="flex flex-col mt-3 font-sans ">
          <span className="text-sm ">- William Wellauer Co-owner</span>
          <span className="text-sm ">&nbsp;&nbsp;E.S.C. Mattress Center</span>
        </cite>
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
