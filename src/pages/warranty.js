import React from "react";
import PropTypes from "prop-types";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import "../styles/warranty-policy.css";

const Warranty = ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
    <article className="warrantyRoot">
      <header>
        <h2 className="warrantyHeading">Mattress Warranty Information</h2>
      </header>
      <p className="warrantyPara">
        Warranty requirements are determined by the manufacturer and details
        will be set forth in the warranty card attached to your new mattress
        set. All warranty claims will be handled through the manufacturer.
        Please read the warranty card for requirements and instructions.
      </p>
      <p className="warrantyPara">
        The four things to be aware of that will void a mattress warranty are:
        improper support from the frame, improper support from the foundation,
        stains and soils, or removing the law label. Remember, body impressions
        up to 1-1/2” are a considered a normal occurrence with any new mattress
        and is not an indication of structural failure. The comfort layer of the
        mattress is simply contouring to your natural curves, to give you the
        proper support and comfort that your body needs.
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
    </article>
  </Layout>
);

Warranty.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const warrantySEO = graphql`
  query warrantySEO {
    datoCmsSeo(name: { eq: "warranty" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Warranty;
