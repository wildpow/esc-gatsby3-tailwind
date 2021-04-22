// import { useState, useRef, useEffect, useContext } from "react";
// import styled from "styled-components";
import PropTypes from "prop-types";
import Headroom from "react-headroom";
// import FocusLock from "react-focus-lock";
// import { useOnClickOutside, useKeyboardEvent, useIntersect } from "../Hooks";
// import { useWindowSize } from "../../context/WindowSizeContext";
// import MenuOverLay from "../shared/MenuOverLay";
// import { StructuredDataMain, PageContent, GlobalStyle } from "./Extra";
import React from "react";
import { Footer, MobileMenu, Cart, Header } from "./LayoutComponents";
// import CartIndicator from "./Cart/CartIndicator";
// import StoreContext from "../../context/StoreContext";
import StoreProvider from "../../context/StoreCtx";
// const MainRoot = styled.div`
//   max-width: 1440px;
//   margin-left: auto;
//   margin-right: auto;
//   /* padding-right: ${({ cartStatus, menuStatus }) =>
//     cartStatus === "open" || menuStatus === "open" ? "15px" : "0px"}; */
// `;
import WindowSizeProvider from "../../context/WindowSizeCtx";
import "../../styles/layout.css";

function Layout({ children, bgColor }) {
  return (
    <StoreProvider>
      <WindowSizeProvider>
        <Headroom pinStart={-1}>
          <Header />
        </Headroom>
        <main className={` z-10 w-full shadow-2xl  ${bgColor}`}>
          <div className="mx-auto max-w-screen-2xl">{children}</div>
        </main>

        <Footer />
      </WindowSizeProvider>
    </StoreProvider>
  );
}
Layout.defaultProps = {
  bgColor: "bg-blueGray-50",
};
Layout.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Layout;
