import React from "react";
import { bool, string, func } from "prop-types";
import { Link } from "gatsby";
import VisuallyHidden from "@reach/visually-hidden";
import { useStore } from "../../../context/StoreCtx";
import Phone from "../../../svg/phone-solid.svg";
import Email from "../../../svg/envelope-solid.svg";
import Map from "../../../svg/directions-solid.svg";
// import { iconEntry } from "../../../utils/keyframes";
// import { colors, dimensions, breakpoints } from "../../../utils/styles";
import Search from "../../Search";
import CartItemCounter from "../../Cart/CartItemCounter";
import "./navIcons.css";

const searchIndices = [{ name: `Products`, title: `Products` }];

// TODO Change name or combine and import from different file to avoid
// TODO duplication in Cart component.

// TODO Change name or combine and import from different file to avoid
// TODO duplication in Cart component.

const ShoppingCartIcon = ({ itemCount }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="shopping-cart"
    className="svg-inline--fa fa-shopping-cart fa-w-18"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    alt="Shopping Cart"
    style={{ height: "28px", width: "28px" }}
  >
    <path
      fill="currentColor"
      d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"
    />
    <title>{itemCount !== 0 ? "Shopping Cart" : "Cart is empty"}</title>
  </svg>
);
const NavIcons = ({
  pin,
  cartToggle,
  menuStatus,
  cartStatus,
  searchFocus,
  setSearchFocus,
}) => {
  const {
    store: { checkout, adding },
  } = useStore();
  const itemsInCart = checkout.lineItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div className="flex" adding={adding}>
      <Search
        pin={pin}
        indices={searchIndices}
        searchFocus={searchFocus}
        setSearchFocus={setSearchFocus}
      />
      <a
        href="tel:1-425-512-0017"
        pin={pin}
        aria-label="Store phone number"
        style={{ width: "60px", height: "60px" }}
        className="navIconsLink self-center align-middle flex justify-center items-center navIconsLink"
      >
        <span aria-hidden>
          <VisuallyHidden>Call store</VisuallyHidden>
          <Phone
            className="fa-phone"
            title="call store"
            style={{ height: "28px", width: "28px" }}
          />
        </span>
      </a>
      <a
        style={{ width: "60px", height: "60px" }}
        as={Link}
        to="/contact-us"
        pin={pin}
        aria-label="get in contact with us via email"
        className="contactUsLink navIconsLink self-center align-middle flex justify-center items-center"
      >
        <span aria-hidden>
          <VisuallyHidden>Contact Us</VisuallyHidden>
          <Email
            className="fa-phone"
            title="Contact Us"
            style={{ height: "28px", width: "28px" }}
          />
        </span>
      </a>
      <a
        style={{ width: "60px", height: "60px" }}
        href="https://goo.gl/maps/nqXkkkAGRdu"
        target="_blank"
        rel="noopener noreferrer"
        pin={pin}
        aria-label="Google maps link to our store"
        className="navIconsLink self-center align-middle flex justify-center items-center"
      >
        <span aria-hidden>
          <VisuallyHidden>directions to store</VisuallyHidden>
          <Map
            className="fa-phone"
            title="directions to store"
            style={{ height: "28px", width: "28px" }}
          />
        </span>
      </a>
      <button
        style={{ width: "60px", height: "60px" }}
        type="button"
        aria-label={`Shopping cart with ${itemsInCart} items`}
        onClick={cartToggle}
        pin={pin}
        menuStatus={menuStatus}
        cartStatus={cartStatus}
        disabled={itemsInCart === 0}
        itemsInCart={itemsInCart}
        className="navIconsLink self-center align-middle flex justify-center items-center"
      >
        <VisuallyHidden>shoping cart</VisuallyHidden>
        <span aria-hidden>
          <ShoppingCartIcon
            itemCount={itemsInCart}
            className="bg-red-700 text-blueGray-50"
            style={{ color: "rgb(185, 28, 28)" }}
          />
        </span>
        {itemsInCart > 0 && (
          <CartItemCounter count={itemsInCart} adding={adding} />
        )}
      </button>
    </div>
  );
};
NavIcons.defaultProps = {
  pin: true,
  menuStatus: "closed",
  cartStatus: "closed",
};
NavIcons.propTypes = {
  pin: bool,
  menuStatus: string,
  cartStatus: string,
  cartToggle: func.isRequired,
};

export default NavIcons;
