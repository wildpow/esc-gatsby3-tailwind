import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import ContactInfo from "../components/Contact-Us/ContactInfo";
import TopBlogPosts from "../components/Contact-Us/TopBlogPosts";

const ThankYou = ({ data }) => {
  const { panda, seo } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <section className="pb-20">
        <GatsbyImage image={panda.childImageSharp.gatsbyImageData} />
        <div className="xl:mx-auto sm:mx-5 relative z-10 max-w-6xl p-3 mx-auto -mt-5 bg-white rounded-lg rounded-b-none shadow-lg xl:-mt-24 lg:-mt-20 md:p-10 phablet:-mt-12  sm:p-10">
          <h2 className="text-2xl heading-underline sm:text-3xl lg:text-5xl">
            Thank you for getting in touch!
          </h2>
          <p className="pb-2 text-base sm:text-xl sm:pb-4 lg:text-2xl lg:pb-6 my-6 ">
            We appreciate you contacting us at E.S.C Mattress Center. One of our
            colleagues will get back in touch with you soon! Have a great day!
          </p>
          <ContactInfo />
          <h3 className="message">Check out some of our blog posts.</h3>
          {/* top Blog not finished */}
          <TopBlogPosts />
        </div>
      </section>
    </Layout>
  );
};

export const contactUsQuery = graphql`
  query {
    panda: file(relativePath: { eq: "ContactUsHeader.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [JPG, WEBP, AVIF]
          layout: CONSTRAINED
          width: 1440
        )
      }
    }
    seo: datoCmsSeo(name: { eq: "contact us" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

ThankYou.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ThankYou;
