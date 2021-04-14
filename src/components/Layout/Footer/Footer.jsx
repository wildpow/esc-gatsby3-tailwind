import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
// import tw, { styled, theme } from "twin.macro";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Yelp from "../../../svg/yelp-brands.svg";
import Insta from "../../../svg/instagram-brands.svg";
import Twitter from "../../../svg/twitter-brands.svg";
import FaceBook from "../../../svg/facebook-f-brands.svg";
import useFooterIcons from "./footerIcons.query";
import useReaders from "./readersChoice.query";
// import Bird from "./Bird";
import "./footer.css";
// const FooterRoot = styled(`footer`)`
//   font-family: ${theme`fontFamily.sans`};
//   @media print {
//     display: none;
//   }
//   a,
//   svg {
//     color: ${theme`colors.blueGray[100]`};
//     transition: all 0.2s ease-in;
//     &:focus {
//       box-shadow: 0 0 0 1px ${theme`colors.blue.300`} inset;
//       outline: 0;
//       transition: box-shadow 0.15s ease-in-out;
//     }
//   }
//   h3,
//   h4 {
//     color: ${theme`colors.blueGray[400]`};
//     ${tw`text-lg`};
//   }
//   color: ${theme`colors.blueGray[100]`};

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   padding-right: ${theme`spacing.5`};
//   padding-left: ${theme`spacing.5`};
//   padding-top: ${theme`spacing.4`};
//   background-color: ${theme`colors.lightBlue[900]`};
//   margin: 0 auto;
//   .topWrapper {
//     max-width: 1440px;
//     margin: 0 auto;
//     width: 100%;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     section {
//       width: 310px;
//       padding-bottom: ${theme`spacing.4`};
//       h3 {
//         font-weight: 500;
//         padding-bottom: ${theme`spacing.2`};
//         text-transform: uppercase;
//       }
//     }
//   }

//   .middleWrapper {
//     margin: 0 auto;
//     /* margin-top: 20px; */
//     max-width: 1224px;
//     border-top: 2px solid ${theme`colors.blueGray.100`}10;
//     display: flex;
//     justify-content: center;
//     padding: ${theme`spacing.4`} 0;
//     flex-direction: column;
//     font-weight: 300;
//     font-size: ${tw`text-sm`};
//     h4 {
//       font-size: ${tw`text-base`};
//       margin: 0;
//       text-align: center;
//       font-weight: 400;
//       color: ${theme`colors.blueGray.400`};
//       padding-bottom: ${theme`spacing.2`};
//     }
//     span {
//       text-align: center;
//     }
//     aside {
//       display: flex;
//       flex-direction: column;
//     }
//   }
//   .middleWrapper__contact {
//     padding-top: ${theme`spacing.2`};
//     display: flex;
//     justify-content: center;
//     font-size: ${tw`text-base`};
//     a {
//       padding: 0 10px;
//       text-decoration: underline;
//       color: ${theme`colors.red.200`};
//       &:hover {
//         color: ${theme`colors.lightBlue.100`};
//       }
//     }
//   }
//   transition: 0.75s;
//   will-change: transform;
//   @media (min-width: ${theme`screens.sm`}) {
//     transform: translate3d(0vw, 0, 0);
//     &.moved {
//       transform: translate3d(-400px, 0, 0);
//     }
//     .bottomWrapper {
//       flex-direction: row;
//     }
//   }
//   .firstUL {
//     padding-left: 0;
//   }
//   .navlinks {
//     display: flex;
//     justify-content: space-between;
//     ul {
//       list-style: none;
//       margin-top: 0;
//       li {
//         margin: 0;
//         padding-left: 1.3em;
//         position: relative;
//         padding-bottom: ${theme`spacing.2`};
//         &:after {
//           content: "";
//           height: 0.25em;
//           width: 0.25em;
//           background: ${theme`colors.blueGray[400]`};
//           display: block;
//           position: absolute;
//           transform: rotate(45deg);
//           top: 0.4em;
//           left: 0;
//         }
//         &:hover {
//           a {
//             border-bottom-color: ${theme`colors.blueGray[400]`};
//             color: white;
//           }
//           span {
//             color: ${theme`colors.blueGray[100]`};
//           }
//         }
//         a {
//           border-bottom: 1px solid transparent;
//           text-decoration: none;
//           font-weight: 300;
//         }
//         span {
//           transition: all 0.2s ease;
//           padding-left: ${theme`spacing.4`};
//           font-weight: 300;
//           color: ${theme`colors.blueGray[400]`};
//         }
//       }
//     }
//   }

//   .social-icons {
//     display: flex;
//     a {
//       padding-right: ${theme`spacing.8`};
//       svg {
//         width: 35px;
//         height: 35px;
//       }
//       &:hover {
//         transform: scale(1.2);
//       }
//     }
//   }
//   .bottomWrapper {
//     flex-direction: column;
//     border-top: 2px solid ${theme`colors.blueGray.100`}10;
//     display: flex;
//     justify-content: center;
//     padding: ${theme`spacing.4`} 0;
//     max-width: 1224px;
//     margin: 0 auto;
//     aside {
//       display: flex;
//       justify-content: center;
//       a {
//         text-decoration: underline;
//         padding: 0 10px;
//         color: ${theme`colors.red.200`};
//         &:hover {
//           color: ${theme`colors.lightBlue.100`};
//         }
//       }
//     }
//     small {
//       text-align: center;
//       padding-top: 10px;
//       font-weight: 300;
//       color: ${theme`colors.blueGray.400`};
//       ${tw`text-xs`};
//     }
//   }
//   .hours {
//     h3 {
//       padding-top: ${theme`spacing.4`};
//     }
//     justify-self: flex-end;
//     h6 {
//       /* color: ${theme`colors.gray.100`}; */
//       font-weight: 300;
//       display: flex;
//       margin: 0;
//       font-size: ${tw`text-base`};
//     }
//   }
//   .hours__inner {
//     display: flex;
//   }
//   .hours__days {
//     padding-right: ${theme`spacing.6`};
//     h6 {
//       margin: 0;
//       padding-bottom: ${theme`spacing.2`};
//       font-size: ${tw`text-base`};
//     }
//   }
//   .hours__time {
//     h6 {
//       /* margin: 0; */
//       padding-bottom: ${theme`spacing.2`};
//       font-size: ${tw`text-base`};
//     }
//     display: flex;
//     flex-direction: column;
//   }
//   .iconWrapper {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//   }

//   .sticker {
//     width: 100px;
//   }
//   .clothesForKids {
//     @media (max-width: 350px) {
//       padding-left: 5px;
//       width: 139px;
//     }
//   }
//   .link {
//     &:hover {
//       transform: scale3d(1.05, 1.05, 1);
//     }
//   }
// `;

const Footer = ({ moved }) => {
  const { images } = useFooterIcons();
  const { sticker } = useReaders();
  let bbb;
  let clothsForKids;
  let aquasox;
  images.map(img => {
    if (img.title === "bbb") bbb = img;
    if (img.title === "aquosox") aquasox = img;
    if (img.title === "clothes_for_kids") clothsForKids = img;
    return null;
  });
  return (
    <footer className="flex flex-col justify-between px-5 pt-4 font-sans bg-lightBlue-900 text-blueGray-100 footerRoot">
      <div className="flex flex-wrap w-full mx-auto my-0 topWrapper justify-evenly">
        <section>
          <div>
            <h3>Stay Connected</h3>
            <div className="transition duration-200 ease-in-out social-icons ">
              <OutboundLink
                href="https://www.facebook.com/ESCMattressCenter/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vist our FaceBook page"
              >
                <FaceBook />
              </OutboundLink>
              <OutboundLink
                href="https://www.yelp.com/biz/esc-mattress-center-everett-3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vist our Yelp page"
              >
                <Yelp />
              </OutboundLink>
              <OutboundLink
                href="https://www.instagram.com/centeresc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vist our Instagram page"
              >
                <Insta />
              </OutboundLink>
              <OutboundLink
                href="https://twitter.com/CenterEsc?ref_src=twsrc%5Etfw"
                data-size="large"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vist our Twitter page"
              >
                <Twitter />
              </OutboundLink>
            </div>
          </div>
          <div className="self-end pt-4">
            <h3>Hours</h3>
            <div className="flex">
              <div className="pr-6">
                <h6>Mon-Sat:</h6>
                <h6>Sunday:</h6>
              </div>
              <div className="flex flex-col ">
                <h6>10am - 7pm</h6>
                <h6> 10am - 6pm</h6>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3>Navigate</h3>
          <div className="navlinks">
            <ul className="pl-0 mt-0 list-none ">
              <li>
                <Link to="/brands">Mattresses</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/adjustable">Adjustable</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/accessories">Accessories</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/financing">Financing</Link>
                <span>&gt;</span>
              </li>
            </ul>
            <ul className="list-none ">
              <li>
                <Link to="/blog">Our Blog</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/about">About Us</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/current-sale">Current Sale</Link>
                <span>&gt;</span>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
                <span>&gt;</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="flex flex-wrap w-full mx-auto my-0 topWrapper justify-evenly">
        <section>
          <div>
            <h3>Our Partners</h3>
            <div className="flex flex-wrap justify-between">
              <OutboundLink
                href="https://www.milb.com/everett"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
                style={{ textDecoration: "none" }}
              >
                <GatsbyImage
                  image={aquasox.gatsbyImageData}
                  style={{
                    borderRadius: "5px",
                    width: "140px",
                  }}
                  alt={aquasox.alt}
                />
              </OutboundLink>
              <OutboundLink
                href="https://clothesforkids.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="clothesForKids link"
              >
                <GatsbyImage
                  image={clothsForKids.gatsbyImageData}
                  style={{
                    borderRadius: "5px",
                    width: "140px",
                  }}
                  alt={clothsForKids.alt}
                />
              </OutboundLink>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3>Reviews / Awards</h3>
            <div className="iconWrapper">
              {/* <Bird /> */}
              <Link
                to="/blog/esc-mattress-center-wins-best-mattress-store-in-snohomish-county"
                className="link"
              >
                <img
                  src={sticker.url}
                  alt={sticker.alt}
                  style={{ width: "100px" }}
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="flex flex-col justify-center px-0 py-4 mx-auto my-0 text-sm font-light border-t-2 border-solid border-blueGray-50 middleWrapper border-opacity-10">
          <aside className="flex flex-col">
            <h4 className="pb-2 m-0 text-base font-normal text-center text-blueGray-400">
              E.S.C. Mattress Center
            </h4>
            <span className="text-center">
              10121 Evergreen Way, #30, Everett, WA 98204
            </span>
          </aside>
          <div className="flex justify-center pt-2 text-base middleWrapper__contact">
            <OutboundLink
              href="https://goo.gl/maps/nqXkkkAGRdu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google maps link to our store"
            >
              Directions
            </OutboundLink>
            <OutboundLink
              href="tel:1-425-512-0017"
              aria-label="Store phone number"
            >
              (425) 512-0017
            </OutboundLink>
          </div>
        </section>
        <section className="flex flex-col justify-center px-0 py-4 mx-auto my-0 border-t-2 border-solid bottomWrapper border-blueGray-50 border-opacity-10">
          <aside className="flex justify-center">
            <Link to="/policies">Terms/Policies</Link>
            <Link to="/sitemap">Site Map</Link>
            <Link to="/warranty">Warranty Info</Link>
          </aside>
          <small className="pt-3 text-xs font-light text-center text-blueGray-400 ">
            &copy; 2020 E.S.C. Mattress Center
          </small>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
