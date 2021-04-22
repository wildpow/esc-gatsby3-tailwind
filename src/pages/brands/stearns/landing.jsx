import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Landing from "../../../components/Landing";
import BreadCrumbs from "../../../components/BreadCrumbs";

const StearnsLanding = ({ data }) => (
  <Layout bgColor="bg-white">
    <BreadCrumbs next="Brands" here="Landing" next2="Stearns" Brands />
    <Landing
      data={data.datoCmsLanding}
      buttonName="Stearn & Foster"
      buttonURL="/brands/stearns"
    />
    <BreadCrumbs next="Brands" here="Landing" next2="Stearns" Brands />
  </Layout>
);

StearnsLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const StearnsLandingPage = graphql`
  query stearnsLandingPage {
    datoCmsLanding(title: { eq: "stearns" }) {
      ...landing
    }
  }
`;

export default StearnsLanding;
