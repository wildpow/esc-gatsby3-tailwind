import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import BreadCrumbs from "../components/BreadCrumbs";
import Layout from "../components/Layout";

const Adjustables = ({ data }) => {
  const { allDatoCmsProduct } = data;
  const sortedBases = allDatoCmsProduct.nodes.sort(
    (a, b) =>
      Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
      Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
  );
  return (
    <Layout>
      <section>
        <BreadCrumbs here="Adjustable" hidenLarge />
        <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
        {sortedBases.map(base => (
          <Link to={`/adjustable/${base.slug}`} key={base.id}>
            <h3>{base.title}</h3>
            <div className="InfoWrapper">
              <div className="ImageWrapper">
                <div className="BannerWrapper">
                  {base.saleBanner.length > 3 && (
                    <div className="Banner">{base.saleBanner}</div>
                  )}
                  <div className="ImageContainer">
                    <GatsbyImage
                      image={getImage(base.threeImageBlock[0].coverImage)}
                      alt={base.threeImageBlock[0].coverImage.alt}
                    />
                  </div>
                </div>
              </div>
              <div className="FeaturePriceWrapper">
                <div className="AdjMarkdown">
                  <h3>Features</h3>
                  <ul>
                    {base.productFeatures.map(item => (
                      <li key={item.id}>{item.title}</li>
                    ))}
                  </ul>
                </div>
                <div className="PriceRangeLg">
                  {`$${Math.trunc(
                    base.shopifyInfo[0].priceRange.minVariantPrice.amount
                  )}
          - $${Math.trunc(
            base.shopifyInfo[0].priceRange.maxVariantPrice.amount
          )}`}
                </div>
              </div>
            </div>
            <div className="PriceRangeSm">
              {`$${Math.trunc(
                base.shopifyInfo[0].priceRange.minVariantPrice.amount
              )}
          - $${Math.trunc(
            base.shopifyInfo[0].priceRange.maxVariantPrice.amount
          )}`}
            </div>
          </Link>
        ))}
        <BreadCrumbs here="Adjustable" hidenLarge Bottom />
      </section>
    </Layout>
  );
};

export default Adjustables;
Adjustables.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const allAdjustables = graphql`
  query allAjustables {
    datoCmsSeo(name: { eq: "adjustable" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }

    allDatoCmsProduct(
      filter: { typeOfProduct: { title: { eq: "Adjustable" } } }
    ) {
      nodes {
        title
        saleBanner
        id
        slug
        productFeatures {
          title
          description
          id
        }
        shopifyInfo {
          priceRange {
            minVariantPrice {
              amount
            }
            maxVariantPrice {
              amount
            }
          }
        }
        threeImageBlock {
          coverImage {
            alt
            gatsbyImageData(layout: CONSTRAINED, width: 350)
          }
        }
      }
    }
  }
`;
