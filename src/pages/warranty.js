import React from "react";
import PropTypes from "prop-types";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import "../styles/warranty-policy.css";
import HeroCard from "../components/HeroCard";

const Warranty = ({ data }) => {
  const { panda, seo } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <HeroCard
        alt="E.S.C. Mattress Centers panda mascot laying on a bed"
        image={panda.childImageSharp.gatsbyImageData}
      >
        <h2 className="self-center text-2xl heading-underline sm:text-3xl lg:text-5xl border-lightBlue-700 text-blueGray-800 mb-7">
          Mattress Warranty Information
        </h2>

        <p className="pb-2 text-base font-normal sm:text-xl sm:pb-4 lg:text-2xl lg:pb-6 text-blueGray-600 ">
          Warranty requirements are determined by the manufacturer and details
          will be set forth in the warranty card attached to your new mattress
          set. All warranty claims will be handled through the manufacturer.
          Please read the warranty card for requirements and instructions.
        </p>
        <p className="pb-2 text-base font-normal sm:text-xl sm:pb-4 lg:text-2xl lg:pb-6 text-blueGray-600">
          The four things to be aware of that will void a mattress warranty are:
          improper support from the frame, improper support from the foundation,
          stains and soils, or removing the law label. Remember, body
          impressions up to 1-1/2” are a considered a normal occurrence with any
          new mattress and is not an indication of structural failure. The
          comfort layer of the mattress is simply contouring to your natural
          curves, to give you the proper support and comfort that your body
          needs.
        </p>
        <h3>
          To initiate a mattress warranty claim you may contact your mattress
          manufacturer via the phone number below.
        </h3>
        <div className="flex flex-col justify-center">
          <h4>Sealy Mattress Warranty Service</h4>
          <OutboundLink href="tel:1-800-697-3259">1-800-697-3259</OutboundLink>

          <h4>Stearns & Foster Mattress Warranty Service</h4>
          <OutboundLink href="tel:1-866-783-2767">1-866-783-2767</OutboundLink>

          <h4>Tempur-PEDIC Mattress Warranty Service</h4>
          <OutboundLink href="tel:1-800-821-6621">1-800-821-6621</OutboundLink>
        </div>
      </HeroCard>
    </Layout>
  );
};

Warranty.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const warrantySEO = graphql`
  query warrantySEO {
    panda: file(relativePath: { eq: "test.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [JPG, WEBP, AVIF]
          layout: CONSTRAINED
          width: 1536
          height: 415
        )
      }
    }
    seo: datoCmsSeo(name: { eq: "warranty" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Warranty;
