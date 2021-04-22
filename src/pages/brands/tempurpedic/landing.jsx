import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Landing from "../../../components/Landing";
import BreadCrumbs from "../../../components/BreadCrumbs";

const TempurLanding = ({ data }) => (
  <Layout bgColor="bg-white">
    <BreadCrumbs next="Brands" here="Landing" next2="Tempurpedic" Brands />
    <Landing
      data={data.datoCmsLanding}
      buttonName="Tempur-PEDIC"
      buttonURL="/brands/tempurpedic"
    />
    <BreadCrumbs next="Brands" here="Landing" next2="Tempurpedic" Brands />
  </Layout>
);

TempurLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const TempurLandingPage = graphql`
  query tempurLandingPage {
    datoCmsLanding(title: { eq: "tempur" }) {
      ...landing
    }
  }
`;

export default TempurLanding;
