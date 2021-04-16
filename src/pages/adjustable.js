import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

const Adjustables = ({ data }) => (
  <Layout>
    {" "}
    <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
    Adjustables
  </Layout>
);

Adjustables.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const allAdjustables = graphql`
  query allAjustables {
    datoCmsSeo(name: { eq: "adjustable" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
export default Adjustables;
