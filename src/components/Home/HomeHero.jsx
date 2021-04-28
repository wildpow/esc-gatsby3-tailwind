import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import "./homeHero.css";

export default function HomeHero({ heroImg, heroUrl, img1, img2, img3 }) {
  return (
    <div className="home__hero">
      <div className="hero__hero__main">
        <GatsbyImage
          image={heroImg.gatsbyImageData}
          alt="ble"
          // transformOptions={{ fit: "cover" }}
        />
      </div>
      <div className="home__hero__shop" style={{ gridArea: "shop1" }}>
        <GatsbyImage
          image={img1.childImageSharp.gatsbyImageData}
          alt="ble"
          // transformOptions={{ fit: "contain" }}
        />
      </div>
      <div className="home__hero__shop" style={{ gridArea: "shop2" }}>
        <GatsbyImage
          image={img2.childImageSharp.gatsbyImageData}
          alt="ble"
          // transformOptions={{ fit: "contain" }}
        />
      </div>
      <div className="home__hero__shop" style={{ gridArea: "shop3" }}>
        <GatsbyImage
          image={img3.childImageSharp.gatsbyImageData}
          alt="ble"
          // transformOptions={{ fit: "contain" }}
        />
      </div>
    </div>
  );
}
