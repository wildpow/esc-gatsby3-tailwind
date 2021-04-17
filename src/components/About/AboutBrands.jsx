import PropTypes from "prop-types";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Carousel } from "react-responsive-carousel";
import { useWindowSize } from "../../context/WindowSizeContext";

const Brands = ({ brandImages, brandText }) => {
  const { width } = useWindowSize();
  return (
    <>
      {width < 1100 ? (
        <section className="carousel">
          <Carousel
            infiniteLoop
            autoPlay
            showThumbs={false}
            interval={2000}
            centerMode
            centerSlidePercentage={100}
            showStatus={false}
            showArrows={false}
            showIndicators={false}
          >
            {brandImages.map(img => (
              <div className="brand_img" key={img.alt}>
                <GatsbyImage
                  fluid={img.gatsbyImageData}
                  style={{ width: "400px" }}
                  alt={img.alt}
                />
              </div>
            ))}
          </Carousel>
          <p>{brandText}</p>
        </section>
      ) : (
        <section className="BrandsWrapper">
          <div className="brand__container">
            {brandImages.map(img => (
              <div className="brand_img" key={img.alt}>
                <GatsbyImage image={getImage(img)} alt={img.alt} />
              </div>
            ))}
          </div>
          <p>{brandText}</p>
        </section>
      )}
    </>
  );
};

Brands.propTypes = {
  brandText: PropTypes.string.isRequired,
  brandImages: PropTypes.instanceOf(Object).isRequired,
};
export default Brands;
