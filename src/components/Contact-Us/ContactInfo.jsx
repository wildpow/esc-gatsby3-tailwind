import React from "react";
import { Link } from "gatsby";

const ContactInfo = () => (
  <div className="rounded border-blueGray-400 border relative p-1 pt-8 mb-6">
    <h4 className="xl:text-xl absolute left-10 bg-lightBlue-900 py-1 px-5 text-blueGray-50 border border-blueGray-800 z-10 -top-3">
      Contact Info
    </h4>
    <address className="flex flex-wrap justify-around font not-italic pb-4">
      <div className="py-2 px-4 w-5/6 phablet:w-60">
        <h5 className="heading-underline text-lg mb-1 xl:text-xl">Address</h5>
        <p className="text-base">
          <a
            href="https://goo.gl/maps/nqXkkkAGRdu"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Google maps link to our store"
            className="text-lightBlue-600"
          >
            10121 Evergreen Way,
            <br />
            #30 Everett, WA 98204
          </a>
        </p>
      </div>
      <div className="py-2 px-4 w-5/6 phablet:w-60">
        <h5 className="heading-underline text-lg mb-1 xl:text-xl">Hours</h5>
        <p className="text-base">
          Mon-Sat: 10am - 7pm
          <br />
          Sunday: 10am - 6pm
        </p>
      </div>
      <div className="py-2 px-4 w-5/6 phablet:w-60">
        <h5 className="heading-underline text-lg mb-1 xl:text-xl">Phone</h5>
        <p className="text-base">
          <a
            href="tel:1-425-512-0017"
            aria-label="Store phone number"
            className="text-lightBlue-600"
          >
            (425) 512-0017
          </a>
        </p>
      </div>
      <div className="py-2 px-4 w-5/6 phablet:w-60">
        <h5 className="heading-underline text-lg mb-1 xl:text-xl">Links</h5>
        <p className="text-base">
          <Link to="/policies" className="text-lightBlue-600 ">
            Terms/Policies
          </Link>
          <br />
          <Link to="/warranty" className="text-lightBlue-600 ">
            {" "}
            Warranty Info
          </Link>
        </p>
      </div>
    </address>
  </div>
);

export default ContactInfo;
