import React from "react";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import HomeHero from "../components/Home/HomeHero";

const IndexPage = ({ data }) => {
  const { seoMetaTags, heroUrl, heroImage } = data.datoCmsFrontPage;
  return (
    <Layout>
      <HelmetDatoCms seo={seoMetaTags} />
      <section>
        <HomeHero
          heroImg={heroImage}
          heroUrl={heroUrl}
          img1={data.img1}
          img2={data.img2}
          img3={data.img3}
        />
      </section>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const carouselQuery = graphql`
  query frontPage {
    datoCmsFrontPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heroUrl
      heroImage {
        alt
        gatsbyImageData(layout: CONSTRAINED, width: 1536, height: 700)
      }
    }
    img1: file(relativePath: { eq: "img2.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [JPG, WEBP, AVIF]
          layout: CONSTRAINED
          width: 1000
          height: 500
        )
      }
    }
    img2: file(relativePath: { eq: "img3.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [JPG, WEBP, AVIF]
          layout: CONSTRAINED
          width: 1000
          height: 500
        )
      }
    }
    img3: file(relativePath: { eq: "img4.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [JPG, WEBP, AVIF]
          layout: CONSTRAINED
          width: 1000
          height: 500
        )
      }
    }
  }
`;

export default IndexPage;
