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
      className="flex flex-col z-10 shadow-lg bg-blueGray-100"
      role="banner"
    >
      {menuStatus === "open" || cartStatus === "open" ? (
        <div className="MenuOverLay" />
      ) : null}
      <div
        className="flex flex-col-reverse mx-auto w-full md:flex-row md:justify-between"
        style={{ maxWidth: "1440px" }}
      >
        <div className="flex items-center pl-1" style={{ height: "60px" }}>
          <Link className="brand__anchor" to="/" title="Back to home page">
            <GatsbyImage
              image={pandaLogo.gatsbyImageData}
              formats={["auto", "webp", "avif"]}
              alt={pandaLogo.alt}
            />
          </Link>
          <Link
            title="Back to home page"
            to="/"
            style={{ textDecoration: "none" }}
          >
            <h1 className="self-center font-black text-2xl pl-1 text-red-900 phablet:text-4xl lg:text-5xl lg:pl-4">
              <span className="italic text-lightBlue-900 font-black">
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
        <div className="printOnlyContactInfo">
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
