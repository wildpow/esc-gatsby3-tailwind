// import { node, string } from "prop-types";
// import styled from "styled-components";
// import { breakpoints, colors, boxShadow } from "../../../utils/styles";
import React from "react";

// const PageContentRoot = styled.main`
//   position: relative;
//   z-index: 1;
//   box-shadow: ${boxShadow.xl};
//   background-color: ${({ url }) => (url ? "white" : colors.gray["100"])};
//   /* display: flex;
//   flex-direction: column; */
//   /* min-height: calc(100vh - 60px); */
//   will-change: transform;
//   opacity: 1;
//   padding-left: 0;
//   width: 100%;
//   transition: all 0.75s;

//   @media (min-width: ${breakpoints.sm}) {
//     transform: translate3d(0vw, 0, 0);
//     &.moved {
//       /* filter: blur(1px); */
//       transform: translate3d(-400px, 0, 0);
//     }
//   }
//   @media print {
//     box-shadow: none;
//   }
// `;

const PageContent = ({ children, moved }) => (
  // <PageContentRoot className={moved} url={testUrl(url)}>
  //   {children}
  // </PageContentRoot>
  <div>{children}</div>
);

{
  /* PageContent.defaultProps = {
  moved: "",
};

PageContent.propTypes = {
  moved: string,
  children: node.isRequired,
}; */
}

export default PageContent;
