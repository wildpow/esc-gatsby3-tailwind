import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import LifeStyleCard from "../components/Brands/LifeStyleCard";
import BreadCrumbs from "../components/BreadCrumbs";
import Header from "../components/ProductListing/Header";
import "../components/Brands/brands.css";

const Brands = ({ data }) => (
  <Layout>
    <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
    <BreadCrumbs here="Brands" hidenLarge />
    <section className="brands_root">
      <Header
        description={data.datoCmsHeader.tagLine}
        headerBG={data.datoCmsHeader.bgImg.url}
        button={{ label: "Shop all Mattresses", url: "/brands/list" }}
        title="Our Brands"
      />
      <div
        className="grid items-stretch content-start justify-center px-1 pt-2 mx-auto brands_grid justify-items-center"
        style={{
          maxWidth: "1536px",
          minWidth: "320px",
          scrollBehavior: "smooth",
        }}
      >
        {data.allDatoCmsBrand.nodes.map(brand => (
          <LifeStyleCard
            key={brand.id}
            // mobileHeight="228px"
            // height="228px"
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
