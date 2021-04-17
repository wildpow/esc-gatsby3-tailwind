import React from "react";
import { Link } from "gatsby";
import image from "../images/ezgif.com-optimize.gif";
import Layout from "../components/Layout";
import BreadCrumbs from "../components/BreadCrumbs";

const NotFoundPage = () => {
  let uri = [];
  if (typeof window !== "undefined") {
    uri = window.location.href.split("/");
  } else {
    uri = [""];
  }
  return (
    <Layout>
      <BreadCrumbs here={uri[uri.length - 1]} />
      <section>
        <header>
          <h2>
            Our panda couldn&apos;t find the product you&apos;re looking for...
          </h2>
        </header>

        <Link to="/">
          <img src={image} alt="E S C Mattress Center Sleeping Panda " />
        </Link>
      </section>

      <BreadCrumbs here={uri[uri.length - 1]} />
    </Layout>
  );
};

export default NotFoundPage;
