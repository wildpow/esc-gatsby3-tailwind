import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const HeroCard = ({ image, alt, children }) => (
  <section className="pb-20">
    <GatsbyImage image={image} alt={alt} />
    <div className="relative z-10 flex flex-col max-w-6xl p-3 mx-auto -mt-5 bg-white rounded-lg rounded-b-none shadow-lg xl:mx-auto sm:mx-5 xl:-mt-24 lg:-mt-20 md:p-10 phablet:-mt-12 sm:p-10">
      {children}
    </div>
  </section>
);

export default HeroCard;
