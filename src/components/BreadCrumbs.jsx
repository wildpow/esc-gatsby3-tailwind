import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
// import styled from "styled-components";
// import { DisplayNonePr1nt } from "../styles/_pr1nt/main";

function ifLavish(string) {
  if (string === "posh-and-lavish") {
    return string.split("-").join(" ");
  }
  return string;
}

// export const BreadWrapper = styled.div`
//   padding-top: 15px;
//   padding-bottom: 15px;
//   padding-left: 5px;
//   font-size: 0.9rem;
//   font-weight: 400;
//   color: ${(props) => props.theme.newColor2};
//   font-family: ${(props) => props.theme.MainFont1};
//   display: flex;

//   @media (min-width: 568px) {
//     font-size: 1rem;
//     padding-left: 7px;

//   }
//   @media (min-width: 768px) {
//     font-size: 1.1rem;
//   }
//   @media (min-width: 1022px) {
//     font-size: 1.2rem;
//     display: ${(props) => (props.hidenLarge ? "none" : "flex")};
//   }

//   @media (min-width: 1450px) {
//     margin-left: 0px;
//   }
//   ${DisplayNonePr1nt}
// `;
// const Span = styled.span`
//   padding-right: 5px;
//   padding-left: 5px;
//   @media (min-width: 768px) {
//     padding-right: 7px;
//     padding-left: 7px;
//   }
// `;
// const Crumbs = styled(Link)`
//   text-transform: capitalize;

//   color: ${(props) => props.theme.mainColor1};
//   &:hover {
//     color: ${(props) => props.theme.mainColor2};
//   }
// `;
// const Location = styled.div`
//   padding-bottom: 1px;
//   text-transform: capitalize;
//   @media (max-width: 610px) {
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
// `;

const BreadCrumbs = props => {
  const { next, only2Links, only3Links, next2, error, here, acc } = props;
  const accessoryBackURL = propStr => {
    if (propStr === "Pillow") return `/accessories/list?type=pillow`;
    if (propStr === "Sheets") return `/accessories/list?type=sheets`;
    if (propStr === "Protector") return `/accessories/list?type=protector`;
    if (propStr === "Foundation") return `/accessories/list?type=foundation`;
    return null;
  };
  const accessoryDisplay = propStr => {
    if (propStr === "Pillow") return `Pillows`;
    if (propStr === "Sheets") return propStr;
    if (propStr === "Protector") return `Protectors`;
    if (propStr === "Foundation") return "Foundation";
    return null;
  };
  // to="/accessories/list?type=pillow"
  // "/accessories/list?type=sheets"
  // /accessories/list?type=protector
  // next="Accessories"
  // next2={product.productType}
  //           here={product.title}

  // next2
  //   - plural display
  //   - query URL
  return (
    <div BreadWrapper className="flex">
      <Link to="/">Home</Link>
      <span>&gt;</span>
      {next && (
        <div>
          <Link to={`/${next.toLowerCase()}`}>{next}</Link>
          {!only2Links ? <span>&gt;</span> : ""}
        </div>
      )}
      {next2 && (
        <div>
          <Link
            to={
              acc
                ? accessoryBackURL(next2)
                : `/${next.toLowerCase()}/${next2.toLowerCase()}`
            }
          >
            {acc ? accessoryDisplay(next2) : ifLavish(next2)}
          </Link>
          {!only3Links ? <span>&gt;</span> : ""}
        </div>
      )}
      <div>
        {error ? (
          <Link
            to={`/${next.toLowerCase()}/${next2.toLowerCase()}/${here.toLowerCase()}`}
          >
            {here}
          </Link>
        ) : (
          ifLavish(here)
        )}
      </div>
    </div>
  );
};
BreadCrumbs.defaultProps = {
  next: "",
  next2: "",
  only2Links: "",
  only3Links: "",
  error: "",
  acc: false,
  accProductType: "",
};
BreadCrumbs.propTypes = {
  only2Links: PropTypes.string,
  only3Links: PropTypes.string,
  next: PropTypes.string,
  next2: PropTypes.string,
  error: PropTypes.string,
  here: PropTypes.string.isRequired,
  acc: PropTypes.bool,
  accProductType: PropTypes.string,
};
export default BreadCrumbs;
