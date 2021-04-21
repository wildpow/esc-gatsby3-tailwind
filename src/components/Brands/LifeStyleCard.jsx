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
  <Link to={url}>
    <GatsbyImage
      image={getImage(bgImg)}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
      alt={bgImg.alt}
    />
    <img src={logo.url} className="brand" alt={logo.alt} />
    <div className="overlay">
      <h4>{children}</h4>
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
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  children: PropTypes.node,
  url: PropTypes.string,
};
LifeStyleCard.defaultProps = {
  height: null,
  mobileHeight: null,
  children: null,
  url: "/brands",
};

export default LifeStyleCard;
