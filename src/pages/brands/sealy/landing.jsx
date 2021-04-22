import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Landing from "../../../components/Landing";
import BreadCrumbs from "../../../components/BreadCrumbs";

const SealyLanding = ({ data }) => (
  <Layout bgColor="bg-white">
    <BreadCrumbs next="Brands" here="Landing" next2="Sealy" Brands />
    <Landing
      data={data.datoCmsLanding}
      buttonName="Sealy"
      buttonURL="/brands/sealy"
    />
    <BreadCrumbs next="Brands" here="Landing" next2="Sealy" Brands />
  </Layout>
);

SealyLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const sealyLandingPage = graphql`
  query sealyLandingPage {
    datoCmsLanding(title: { eq: "sealy" }) {
      ...landing
    }
  }
`;

export default SealyLanding;
