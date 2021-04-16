import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";

const About = ({ data }) => {
  const { datoCmsAboutPage } = data;

  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsAboutPage.seoLink.seoMetaTags} />
      About
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const about = graphql`
  query about {
    datoCmsAboutPage {
      seoLink {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
    }
  }
`;
export default About;
