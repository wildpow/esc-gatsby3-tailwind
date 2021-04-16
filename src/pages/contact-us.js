import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import ContactInfo from "../components/Contact-Us/ContactInfo";
import Layout from "../components/Layout";
import ContactUsForm from "../components/Contact-Us/ContactUsForm";

const ContactUs = ({ data }) => {
  const { panda, seo } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <section className="pb-20">
        <GatsbyImage image={panda.childImageSharp.gatsbyImageData} />
        <div className="xl:mx-auto sm:mx-5 relative z-10 max-w-6xl p-3 mx-auto -mt-5 bg-white rounded-lg rounded-b-none shadow-lg xl:-mt-24 lg:-mt-20 md:p-10 phablet:-mt-12  sm:p-10">
          <h2 className="text-2xl heading-underline sm:text-3xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="pb-2 text-base sm:text-xl sm:pb-4 lg:text-2xl lg:pb-6 my-6 ">
            Thank you for visiting ESC Mattress Center, Snohomish County&apos;s
            favorite mattress store. We strive to be the best mattress store we
            can be and are always here to help. Feel free to contact us in
            person at the store during normal business hours, by phone, or
            through the form below. Sleep well!
          </p>
          <ContactInfo />
          <h3 className="heading-underline text-2xl xl:text-3xl mb-6">
            How can We help?
          </h3>
          <ContactUsForm />
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
