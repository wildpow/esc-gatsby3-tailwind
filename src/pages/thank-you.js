import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import ContactInfo from "../components/Contact-Us/ContactInfo";
import TopBlogPosts from "../components/Contact-Us/TopBlogPosts";
import HeroCard from "../components/HeroCard";

const ThankYou = ({ data }) => {
  const { panda, seo } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />

      <HeroCard
        image={panda.childImageSharp.gatsbyImageData}
        alt="E.S.C. Mattress Centers panda mascot laying on a bed"
      >
        <h2 className="text-2xl heading-underline sm:text-3xl lg:text-5xl">
          Thank you for getting in touch!
        </h2>
        <p className="pb-2 my-6 text-base sm:text-xl sm:pb-4 lg:text-2xl lg:pb-6 ">
          We appreciate you contacting us at E.S.C Mattress Center. One of our
          colleagues will get back in touch with you soon! Have a great day!
        </p>
        <ContactInfo />
        <h3 className="message">Check out some of our blog posts.</h3>
        {/* top Blog not finished */}
        <TopBlogPosts />
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

ThankYou.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default ThankYou;
