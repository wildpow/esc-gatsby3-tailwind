import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const LifeStyleCard = ({
  bgImg,
  title,
  height,
  mobileHeight,
  children,
  logo,
  url,
}) => (
  <Link to={url} className="relative overflow-hidden w-full">
    <GatsbyImage
      image={getImage(bgImg)}
      title={title}
      // height={height}
      // mobileHeight={mobileHeight}
      alt={bgImg.alt}
      className="absolute top-0 left-0 w-full brands_image"
    />
    <img
      src={logo.url}
      className="brands_logo absolute w-full block h-auto right-0 z-20 left-2/4"
      alt={logo.alt}
    />
    <div className="brands_overlay opacity-0 md:opacity-100 content-end items-center  text-lg  font-serif  absolute w-full h-full text-center bottom-0 text-white flex justify-center">
      <h4 className="text-white font-light px-1">{children}</h4>
    </div>
  </Link>
);

LifeStyleCard.propTypes = {
  logo: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  bgImg: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  // height: PropTypes.string,
  // mobileHeight: PropTypes.string,
  children: PropTypes.node,
  url: PropTypes.string,
};
LifeStyleCard.defaultProps = {
  // height: null,
  // mobileHeight: null,
  children: null,
  url: "/brands",
};

export default LifeStyleCard;
