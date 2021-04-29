import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import "./homeHero.css";

export default function HomeHero({ heroImg, heroUrl, img1, img2, img3 }) {
  return (
    <div className="grid p-0 home__hero lg:py-5">
      <div
        style={{ gridArea: "hero" }}
        className="relative flex w-full h-auto shadow-lg"
      >
        <GatsbyImage image={heroImg.gatsbyImageData} alt="ble" />
      </div>

      <Link
        className="relative grid w-full h-auto shadow-lg home__hero__shop"
        style={{ gridArea: "shop1" }}
        to="/brands/list"
      >
        <div
          style={{ gridArea: "1/1" }}
          className="relative z-10 home__hero__titleCard--test-2"
        >
          <div className="p-4 text-2xl bg-red-900 text-blueGray-50 ">
            Shop Mattresses
          </div>
        </div>

        <StaticImage
          style={{ gridArea: "1/1" }}
          src="../../images/img2.jpeg"
          alt="ble"
          layout="constrained"
          formats={["AUTO", "JPG", "WEBP", "AVIF"]}
          width={1000}
          height={500}
          loading="eager"
        />
      </Link>

      <Link
        className="relative grid w-full h-auto shadow-lg home__hero__shop"
        style={{ gridArea: "shop2" }}
        to="/adjustable"
      >
        <div
          style={{ gridArea: "1/1" }}
          className="relative z-10 home__hero__titleCard--test"
        >
          {/* border-t-2 border-r-2 border-blueGray-50 */}
          <div className="p-4 text-2xl bg-red-800 text-blueGray-50 bg-opacity-80">
            Shop Adjustables
          </div>
        </div>

        <StaticImage
          style={{ gridArea: "1/1" }}
          src="../../images/img3.jpeg"
          alt="ble"
          layout="constrained"
          formats={["AUTO", "JPG", "WEBP", "AVIF"]}
          width={1000}
          height={500}
          loading="eager"
        />
      </Link>

      <Link
        className="relative grid w-full h-auto shadow-lg home__hero__shop"
        style={{ gridArea: "shop3" }}
        to="/accessories/list"
      >
        <div
          style={{ gridArea: "1/1" }}
          className="relative z-10 home__hero__titleCard"
        >
          <div className="p-4 text-2xl bg-red-800 border-t-2 border-r-2 text-blueGray-50 border-blueGray-50">
            Shop Accessories
          </div>
        </div>

        <StaticImage
          style={{ gridArea: "1/1" }}
          src="../../images/img4.jpeg"
          alt="ble"
          layout="constrained"
          formats={["AUTO", "JPG", "WEBP", "AVIF"]}
          width={1000}
          height={500}
          loading="eager"
        />
      </Link>
    </div>
  );
}
