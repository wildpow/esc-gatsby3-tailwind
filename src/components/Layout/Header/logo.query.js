import { useStaticQuery, graphql } from "gatsby";

const useLogo = () => {
  const { datoCmsFrontPage } = useStaticQuery(
    graphql`
      query logoImage {
        datoCmsFrontPage {
          pandaLogo {
            alt
            url
          }
        }
      }
    `
  );
  return datoCmsFrontPage;
};

export default useLogo;
