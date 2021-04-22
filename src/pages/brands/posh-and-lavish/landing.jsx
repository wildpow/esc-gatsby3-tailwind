import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Landing from "../../../components/Landing";
import BreadCrumbs from "../../../components/BreadCrumbs";

const PoshAndLavishLanding = ({ data }) => (
  <Layout bgColor="bg-white">
    <BreadCrumbs next="Brands" here="Landing" next2="posh-and-lavish" Brands />
    <Landing
      data={data.datoCmsLanding}
      buttonName="Posh + Lavish"
      buttonURL="/brands/posh-and-lavish"
    />
    <BreadCrumbs next="Brands" here="Landing" next2="posh-and-lavish" Brands />
  </Layout>
);

PoshAndLavishLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const PoshAndLavishLandingPage = graphql`
  query PoshAndLavishLandingPage {
    datoCmsLanding(title: { eq: "Posh_And_Lavish" }) {
      ...landing
    }
  }
`;

export default PoshAndLavishLanding;
