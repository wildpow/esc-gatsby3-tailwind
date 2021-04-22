import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import ContactInfo from "../components/Contact-Us/ContactInfo";
import Layout from "../components/Layout";
import ContactUsForm from "../components/Contact-Us/ContactUsForm";
import HeroCard from "../components/HeroCard";

const ContactUs = ({ data }) => {
  const { panda, seo } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <HeroCard
        image={panda.childImageSharp.gatsbyImageData}
        alt="E.S.C. Mattress Centers panda mascot laying on a bed"
      >
        <h2 className="text-2xl heading-underline sm:text-3xl lg:text-5xl">
          Contact Us
        </h2>
        <p className="pb-2 my-6 text-base sm:text-xl sm:pb-4 lg:text-2xl lg:pb-6 ">
          Thank you for visiting ESC Mattress Center, Snohomish County&apos;s
          favorite mattress store. We strive to be the best mattress store we
          can be and are always here to help. Feel free to contact us in person
          at the store during normal business hours, by phone, or through the
          form below. Sleep well!
        </p>
        <ContactInfo />
        <h3 className="mb-6 text-2xl heading-underline xl:text-3xl">
          How can We help?
        </h3>
        <ContactUsForm />
      </HeroCard>
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
          width: 1536
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
