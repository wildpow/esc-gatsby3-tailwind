import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

const Blog = ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
    Blog
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const blogList = graphql`
  query blogList {
    datoCmsSeo(name: { eq: "blog" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Blog;
