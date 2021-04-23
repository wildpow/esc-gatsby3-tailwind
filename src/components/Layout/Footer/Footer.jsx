import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import Yelp from "../../../svg/yelp-brands.svg";
import Insta from "../../../svg/instagram-brands.svg";
import Twitter from "../../../svg/twitter-brands.svg";
import FaceBook from "../../../svg/facebook-f-brands.svg";
import useFooterIcons from "./footerIcons.query";
import useReaders from "./readersChoice.query";
// import Bird from "./Bird";
import "./footer.css";

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
    <footer className="flex flex-col justify-between px-5 pt-20 font-sans bg-lightBlue-900 text-blueGray-100 footer__root">
      <div className="flex flex-wrap w-full mx-auto my-0 footer__topWrapper justify-evenly">
        <section className="subpixel-antialiased ">
          <div>
            <h3>Stay Connected</h3>
            <div className="flex transition duration-200 ease-in-out footer__social-icons ">
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
              <div className="pr-6 ">
                <h6 className="pb-2 text-base font-normal text-blueGray-50">
                  Mon-Sat:
                </h6>
                <h6 className="pb-2 text-base font-normal text-blueGray-50">
                  Sunday:
                </h6>
              </div>
              <div className="flex flex-col ">
                <h6 className="pb-2 text-base font-normal text-blueGray-50">
                  10am - 7pm
                </h6>
                <h6 className="pb-2 text-base font-normal text-blueGray-50">
                  {" "}
                  10am - 6pm
                </h6>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3>Navigate</h3>
          <div className="flex justify-between footer__navlinks">
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
      <div className="flex flex-wrap w-full mx-auto my-0 footer__topWrapper justify-evenly">
        <section>
          <div>
            <h3>Our Partners</h3>
            <div className="flex flex-wrap justify-between">
              <OutboundLink
                href="https://www.milb.com/everett"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__localSupportLink"
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
                className="footer__localSupportLink"
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
        <section className="flex flex-col justify-center px-0 py-4 mx-auto my-0 text-sm font-light border-t-2 border-solid border-blueGray-50 footer__middleWrapper border-opacity-10">
          <aside className="flex flex-col">
            <h4 className="pb-2 m-0 text-base font-normal text-center text-blueGray-400">
              E.S.C. Mattress Center
            </h4>
            <span className="text-center">
              10121 Evergreen Way, #30, Everett, WA 98204
            </span>
          </aside>
          <div className="flex justify-center pt-2 text-base footer__contact">
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
        <section className="flex flex-col justify-center px-0 py-4 mx-auto my-0 border-t-2 border-solid footer__bottomWrapper border-blueGray-50 border-opacity-10">
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
