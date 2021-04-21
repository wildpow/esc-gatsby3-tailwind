import React from "react";
import { Link } from "gatsby";
import { string } from "prop-types";

const menuData = [
  { name: "Mattresses", url: "/brands" },
  { name: "Adjustable Bases", url: "/adjustable" },
  { name: "Accessories", url: "/accessories" },
  { name: "Financing", url: "/financing" },
  { name: "Our Blog", url: "/blog" },
  { name: "About Us", url: "/about" },
];

const Nav = ({ cartStatus }) => (
  <nav
    cartStatus={cartStatus}
    className="font-sans bg-lightBlue-800 z-0 shadow-md lg:inline-block hidden"
  >
    <ul style={{ maxWidth: "1440px" }} className="mx-auto flex">
      {menuData.map(item => (
        <li key={item.name} className="flex-1 w-full   ">
          <Link
            className="w-full py-2 block text-blueGray-50 hover:bg-red-800 text-center"
            to={item.url}
            partiallyActive
            activeStyle={{ background: "#0C4A6E" }}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Nav.defaultProps = {
  cartStatus: "closed",
};
Nav.propTypes = {
  cartStatus: string,
};
export default Nav;
