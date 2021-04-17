import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const Card = ({ text, image, rotate, alt }) => (
  <section className="ArticleWrapper rotate={rotate}">
    <article>
      <div className="para-wrapper">
        <p>{text}</p>
      </div>
      <div className="image-wrapper">
        <GatsbyImage
          style={{ width: "100%", height: "100%" }}
          image={getImage(image)}
          alt={alt}
        />
      </div>
    </article>
  </section>
);
Card.defaultProps = {
  text: "YOU DID NOT SEND ANY TEXT DOWN SO THIS IS THE DEFAULT",
  alt: "E.S.C. Mattress Center 'sleep like the experts do'",
  rotate: false,
};
Card.propTypes = {
  text: PropTypes.string,
  image: PropTypes.instanceOf(Object).isRequired,
  rotate: PropTypes.bool,
  alt: PropTypes.string,
};

export default Card;
