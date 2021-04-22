import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../../components/Layout";
import Landing from "../../../components/Landing";
import BreadCrumbs from "../../../components/BreadCrumbs";

const Nectar = ({ data }) => (
  <Layout bgColor="bg-white">
    <BreadCrumbs next="Brands" here="Nectar" Brands />
    <Landing
      data={data.datoCmsLanding}
      buttonName="Nectar"
      buttonURL="/brands/nectar"
    />
    <BreadCrumbs next="Brands" here="Nectar" Brands />
  </Layout>
);

Nectar.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

// Waitng on content!!!
export const NectarLandingPage = graphql`
  query nectarLandingPage {
    datoCmsLanding(title: { eq: "nectar" }) {
      ...landing
    }
  }
`;

export default Nectar;
