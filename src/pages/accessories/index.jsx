import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import Landing from "../../components/Landing";
import BreadCrumbs from "../../components/BreadCrumbs";

const AccessoryLanding = ({ data }) => (
  <Layout>
    <BreadCrumbs here="Accessories" hidenLarge />
    <Landing
      acc
      data={data.datoCmsLanding}
      buttonName="Accessories"
      buttonURL="/accessories/list"
    />
    <BreadCrumbs here="Accessories" hidenLarge Bottom Brands />
  </Layout>
);

AccessoryLanding.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const AccessoryLandingPage = graphql`
  query AccessoryLandingPage {
    datoCmsLanding(title: { eq: "Accessory Landing" }) {
      ...landing
    }
  }
`;

export default AccessoryLanding;
