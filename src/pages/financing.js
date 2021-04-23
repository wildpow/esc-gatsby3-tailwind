import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import Synchrony from "../images/synchrony_Card_Image.jpg";
import Acima from "../images/acima_Logo.png";
import HeroCard from "../components/HeroCard";

const Financing = ({ data }) => {
  const { panda, seo } = data;

  return (
    <Layout>
      <HelmetDatoCms seo={seo.seoMetaTags} />
      <HeroCard
        alt="E.S.C. Mattress Centers panda mascot laying on a bed"
        image={panda.childImageSharp.gatsbyImageData}
      >
        <h2 className="text-2xl heading-underline sm:text-3xl lg:text-5xl">
          Our Financing
        </h2>
        <div>
          <h3>Synchrony Financing</h3>
          <div>
            <img
              src={Synchrony}
              alt="Synchrony Financial logo for E S C mattress center 0% interest financing options"
            />
            <p>
              We partner with Synchrony Financial to offer 0% interest*
              financing options on approved credit. The Synchrony Home card
              offers convenient monthly payments, 24/7 access to online account
              management, and is accepted at many retailers nationwide.
            </p>
          </div>
          <div>
            <small>
              *Subject to credit approval. Minimum monthly payments required.
              See store for details.
            </small>
            <form
              target="_blank"
              name="eTailAppForm"
              method="post"
              action="https://etail.mysynchrony.com/eapply/eapply.action"
            >
              <input type="hidden" name="mid" value="5348120820045144" />
              <input type="hidden" name="pcgc" value="BY00" />
              <button as="input" type="submit" value="APPLY NOW" />
            </form>
          </div>
        </div>
        <div>
          <h3>Acima No-Credit Needed</h3>
          <div>
            <img
              src={Acima}
              alt="Acima Financing logo for low or no credit financing options"
            />
            <p>
              Even if you have low or no credit we partner with Acima No Credit
              Needed to extend Lease to Own options and help you purchase the
              bed of your dreams. With the option to pay off your account in
              90-day, or take time to repay your account over 12 months with
              payments scheduled to align with your payday.
            </p>
          </div>
          <div>
            <a
              href="https://www.img-media.net/customer/leases/new?merchant_id=910493"
              target="_blank"
              rel="noopener noreferrer"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </HeroCard>
    </Layout>
  );
};

Financing.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const financingSEO = graphql`
  query financingSEO {
    seo: datoCmsSeo(name: { eq: "financing" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    panda: file(relativePath: { eq: "ContactUsHeader.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [JPG, WEBP, AVIF]
          layout: CONSTRAINED
          width: 1536
        )
      }
    }
  }
`;

export default Financing;
