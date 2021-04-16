import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";

const Financing = ({ data }) => (
  <Layout>
    {" "}
    <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
    Financing
  </Layout>
);

Financing.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const financingSEO = graphql`
  query financingSEO {
    datoCmsSeo(name: { eq: "financing" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Financing;
