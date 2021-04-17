// import { useState, useRef, useEffect, useContext } from "react";
// import styled from "styled-components";
// import PropTypes from "prop-types";;
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
import StoreProvider from "../../context/StoreContext";
// const MainRoot = styled.div`
//   max-width: 1440px;
//   margin-left: auto;
//   margin-right: auto;
//   /* padding-right: ${({ cartStatus, menuStatus }) =>
//     cartStatus === "open" || menuStatus === "open" ? "15px" : "0px"}; */
// `;
import WindowSizeProvider from "../../context/WindowSizeContext";
import "../../styles/layout.css";

function Layout({ children, ...rest }) {
  return (
    <StoreProvider>
      <WindowSizeProvider>
        <div {...rest}>
          <Headroom>
            <Header />
          </Headroom>
          <main className="relative z-10 w-full shadow-2xl pageContentRoot bg-blueGray-50">
            <div className="mx-auto" style={{ maxWidth: "1440px" }}>
              {children}
            </div>
          </main>

          <Footer />
        </div>
      </WindowSizeProvider>
    </StoreProvider>
  );
}

export default Layout;
