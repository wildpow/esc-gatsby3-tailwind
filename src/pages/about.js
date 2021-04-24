import React from "react";
import PropTypes from "prop-types";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";

import Card from "../components/About/AboutCard";
import Reviews from "../components/About/AboutReviews";
import Hero from "../components/About/AboutHero";
import ThreeImage from "../components/About/AboutThreeImg";
import Brands from "../components/About/AboutBrands";
import TabBox from "../components/Landing/TabBox";

const About = ({ data }) => {
  const { datoCmsAboutPage } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsAboutPage.seoLink.seoMetaTags} />
      <section AboutRoot>
        <Hero
          heroAlt={datoCmsAboutPage.hero.alt}
          heroText={datoCmsAboutPage.heroText}
          heroImg={datoCmsAboutPage.hero}
        />
        <ThreeImage
          threeImage={datoCmsAboutPage.threeImage}
          threeImageText={datoCmsAboutPage.threeImageText}
        />

        <div Flow>
          <Card
            text={datoCmsAboutPage.articleSection[0].text}
            image={datoCmsAboutPage.articleSection[0].image}
            alt={datoCmsAboutPage.articleSection[0].image.alt}
          />
        </div>
        <div Flow>
          <Reviews
            maxIndex={datoCmsAboutPage.reviews.length - 1}
            content={datoCmsAboutPage.reviews}
          />
        </div>
        <div Flow>
          <Card
            rotate
            text={datoCmsAboutPage.articleSection[1].text}
            image={datoCmsAboutPage.articleSection[1].image}
            alt={datoCmsAboutPage.articleSection[1].image.alt}
          />
        </div>
        <div Flow>
          <Brands
            brandImages={datoCmsAboutPage.brands}
            brandText={datoCmsAboutPage.brandText}
          />
        </div>
        {datoCmsAboutPage.optionalTabComponent && (
          <div CleanStoreFlow>
            <TabBox
              about
              tabs={datoCmsAboutPage.optionalTabComponent.box}
              hero={datoCmsAboutPage.optionalTabComponent.topImage}
              heroText={datoCmsAboutPage.optionalTabComponent.topText}
              topButtonName={
                datoCmsAboutPage.optionalTabComponent.topButtonName
              }
              topButtonUrl={datoCmsAboutPage.optionalTabComponent.topButtonUrl}
            />
          </div>
        )}
        <div Flow>
          <div PopWrapper>
            <GatsbyImage
              image={getImage(datoCmsAboutPage.pop)}
              className="popImg"
              alt={datoCmsAboutPage.pop.alt}
            />
            <div className="paragraph">
              <p>
                We are located at 10121 Evergreen Way #30, Everett WA 98204.
                <br />
                We are on Everett Mall Way next to Outback Steakhouse and across
                the street from Enterprise car rentals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
About.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const about = graphql`
  query about {
    datoCmsAboutPage {
      seoLink {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      articleSection {
        text
        image {
          alt
          gatsbyImageData(layout: CONSTRAINED, width: 400)
        }
      }
      optionalTabComponent {
        name
        topText
        topImage {
          gatsbyImageData(layout: CONSTRAINED, width: 458)
          alt
          height
          url
          width
          title
        }
        box {
          title
          description
          picture {
            gatsbyImageData(layout: CONSTRAINED, width: 528)
            alt
            title
            url
          }
        }
        topButtonUrl
        topButtonName
      }
      heroText
      hero {
        alt
        gatsbyImageData(layout: FULL_WIDTH, width: 1530)
      }
      threeImageText
      threeImage {
        alt
        filename
        gatsbyImageData(layout: CONSTRAINED, width: 420)
      }
      brandText
      brands {
        alt
        gatsbyImageData(layout: CONSTRAINED, width: 425)
      }
      reviews {
        comment
        nameOfReviewer
      }
      seoLink {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      pop {
        alt
        gatsbyImageData(layout: CONSTRAINED, width: 420)
      }
    }
  }
`;
export default About;
