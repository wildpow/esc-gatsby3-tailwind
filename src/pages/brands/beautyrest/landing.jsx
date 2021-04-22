import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Landing from "../../../components/Landing";
import BreadCrumbs from "../../../components/BreadCrumbs";

const BRLanding = ({ data }) => (
  <Layout bgColor="bg-white">
    <BreadCrumbs next="Brands" here="Landing" next2="Beautyrest" Brands />
    <Landing
      data={data.datoCmsLanding}
      buttonName="Beautyrest"
      buttonURL="/brands/beautyrest"
    />
    <BreadCrumbs next="Brands" here="Landing" next2="Beautyrest" Brands />
  </Layout>
);

BRLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const BRLandingPage = graphql`
  query BRLandingPage {
    datoCmsLanding(title: { eq: "beautyrest" }) {
      ...landing
    }
  }
`;

export default BRLanding;
