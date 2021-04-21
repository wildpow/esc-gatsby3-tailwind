import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import LifeStyleCard from "../components/Brands/LifeStyleCard";
import BreadCrumbs from "../components/BreadCrumbs";
import Header from "../components/ProductListing/Header";

const Brands = ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
    <BreadCrumbs here="Brands" hidenLarge />
    <section>
      <Header
        description={data.datoCmsHeader.tagLine}
        headerBG={data.datoCmsHeader.bgImg.url}
        button={{ label: "Shop all Mattresses", url: "/brands/list" }}
        title="Our Brands"
      />
      <div>
        {data.allDatoCmsBrand.nodes.map(brand => (
          <LifeStyleCard
            key={brand.id}
            mobileHeight="228px"
            height="228px"
            title={brand.displayName}
            bgImg={brand.lifeStyleImg}
            logo={brand.brandLogo}
            url={`/brands/${brand.urlName}`}
          >
            {brand.lifeStyleText}
          </LifeStyleCard>
        ))}
      </div>
    </section>
    <BreadCrumbs here="Brands" hidenLarge Bottom />
  </Layout>
);

export const brandsSEO = graphql`
  query brandsSEO {
    datoCmsSeo(name: { eq: "brands" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    datoCmsHeader(title: { eq: "AllMattressSort" }) {
      title
      tagLine
      bgImg {
        title
        alt
        url
      }
    }
    allDatoCmsBrand(sort: { fields: position }) {
      nodes {
        id
        displayName
        urlName
        lifeStyleText
        lifeStyleImg {
          alt
          title
          gatsbyImageData(layout: CONSTRAINED, width: 560)
        }
        brandLogo {
          alt
          title
          url
        }
      }
    }
  }
`;

Brands.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Brands;
