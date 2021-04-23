import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { string, bool, func } from "prop-types";
import Nav from "./Nav";
import NavIcons from "./NavIcons";
// import MenuOverLay from "../../shared/MenuOverLay";
import useLogo from "./logo.query";
import "./header.css";

const Header = ({
  cartStatus,
  menuStatus,
  pin,
  moved,
  cartToggle,
  searchFocus,
  setSearchFocus,
}) => {
  const { pandaLogo } = useLogo();
  return (
    <header
      cartStatus={cartStatus}
      menuStatus={menuStatus}
      // className={moved}
      className="z-10 flex flex-col shadow-lg bg-blueGray-100"
      role="banner"
    >
      {menuStatus === "open" || cartStatus === "open" ? (
        <div className="MenuOverLay" />
      ) : null}
      <div className="flex flex-col-reverse w-full mx-auto max-w-screen-2xl md:flex-row md:justify-between">
        <div className="flex items-center pl-1" style={{ height: "60px" }}>
          <Link className="header__brandLink" to="/" title="Back to home page">
            <img
              loading="eager"
              src={pandaLogo.url}
              alt={pandaLogo.alt}
              style={{ maxWidth: "180px", maxHeight: "110px", width: "100%" }}
            />
          </Link>
          <Link
            title="Back to home page"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <h1 className="self-center pl-1 text-2xl font-black text-red-900 phablet:text-4xl lg:text-5xl lg:pl-4">
              <span className="italic font-black text-lightBlue-900">
                E.S.C.
              </span>
              Mattress Center
            </h1>
          </Link>
        </div>
        <NavIcons
          pin={pin}
          cartToggle={cartToggle}
          menuStatus={menuStatus}
          cartStatus={cartStatus}
          searchFocus={searchFocus}
          setSearchFocus={setSearchFocus}
        />
        <div className="header__printOnlyContactInfo">
          <div>10121 Evergreen Way, #30, Everett, WA 98204</div>
          <div>(425) 512.0017</div>
        </div>
      </div>
      <Nav cartStatus={cartStatus} />
    </header>
  );
};
Header.defaultProps = {
  cartStatus: "closed",
  menuStatus: "closed",
  moved: "",
  pin: true,
};
Header.propTypes = {
  cartStatus: string,
  menuStatus: string,
  moved: string,
  pin: bool,
  cartToggle: func.isRequired,
};

export default Header;
