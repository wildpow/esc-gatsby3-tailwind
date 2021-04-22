import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import TabBox from "./TabBox";
import { P } from "./Landing.styled";
import HeaderButtons from "./HeaderButtons";

const Landing = ({ data, buttonName, buttonURL }) => {
  const { headingImg, heroImg, description, tabBox, seoLink } = data;
  return (
    <section className="bg-white pt-7 flex justify-center w-full flex-col items-center">
      <HelmetDatoCms seo={seoLink.seoMetaTags} />
      <header
        className=" mb-7"
        // style={{ maxWidth: "662px", maxHeight: "116px" }}
      >
        <GatsbyImage image={getImage(headingImg)} alt={headingImg.alt} />
      </header>
      <div className=" mb-7">
        <GatsbyImage image={getImage(heroImg)} alt={heroImg.alt} />
      </div>
      <div
      // className="mx-auto"
      // style={{ marginTop: "3em", paddingRight: "15px", paddingLeft: "15px" }}
      >
        <p className="max-w-screen-sm text-center mb-7">{description}</p>
        <HeaderButtons buttonName={buttonName} buttonURL={buttonURL} />
        {tabBox.map(item => (
          <div key={item.id}>
            <hr />
            <TabBox
              tabs={item.box}
              hero={item.topImage}
              heroText={item.topText}
              topButtonName={item.topButtonName}
              topButtonUrl={item.topButtonUrl}
            />
          </div>
        ))}
        <div style={{ paddingBottom: "20px" }}>
          <hr style={{ marginBottom: 0, marginTop: 0 }} />
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  buttonName: PropTypes.string,
  buttonURL: PropTypes.string,
};

Landing.defaultProps = {
  buttonName: undefined,
  buttonURL: undefined,
};

export default Landing;
