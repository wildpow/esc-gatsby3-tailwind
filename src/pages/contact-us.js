import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import Layout from "../components/Layout";

const ContactUs = ({ data }) => {
  const { panda, seo } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <section>
        <GatsbyImage image={panda.childImageSharp.gatsbyImageData} />
        <div className="xl:mx-auto sm:mx-5 relative z-10 max-w-6xl p-3 mx-auto -mt-5 bg-white rounded-lg rounded-b-none shadow-lg xl:-mt-24 lg:-mt-20 md:p-10 phablet:-mt-12 text-blueGray-800 sm:p-10">
          <h2 className="font-sans text-2xl font-bold border-b-4 border-red-800 sm:text-3xl text-blueGray-700 lg:text-5xl">
            Contact Us
          </h2>
          <p className="pb-2 font-serif text-base sm:text-xl sm:pb-4 lg:text-2xl lg:pb-6">
            Thank you for visiting ESC Mattress Center, Snohomish County&apos;s
            favorite mattress store. We strive to be the best mattress store we
            can be and are always here to help. Feel free to contact us in
            person at the store during normal business hours, by phone, or
            through the form below. Sleep well!
          </p>
        </div>
      </section>
      contact us
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

ContactUs.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default ContactUs;
