import React from "react";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BreadCrumbs from "../components/BreadCrumbs";
import SuggestionBar from "../components/Blog/SuggestionBar";
import HeroCard from "../components/HeroCard";

const NewPost = ({ data, pageContext }) => {
  const { datoCmsNewBlog } = data;
  const { next, prev } = pageContext;
  let dateModified = null;
  datoCmsNewBlog.seoMetaTags.tags.forEach(element => {
    if (element.hasOwnProperty("attributes")) {
      if (element.attributes.hasOwnProperty("property")) {
        if (element.attributes.property === "article:modified_time") {
          dateModified = element.attributes.content;
        }
      }
    }
  });
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsNewBlog.seoMetaTags}>
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
      "@type": "BlogPosting",
      "url": "https://www.escmattresscenter.com/blog/${datoCmsNewBlog.slug}",
      "headline": "${datoCmsNewBlog.title}",
      "inLanguage": "en-US",
		"isFamilyFriendly": "true",
      "image": "${datoCmsNewBlog.coverImage.url}",
      "datePublished": "${datoCmsNewBlog.date}",
      "dateModified": "${dateModified || datoCmsNewBlog.date}",
      "description": "${datoCmsNewBlog.excerpt.replace(/['"]+/g, " ")}",
      "articleBody": "${datoCmsNewBlog.content.replace(/['"]+/g, " ")}"
        }
        `}
        </script>
      </HelmetDatoCms>
      <BreadCrumbs next="Blog" here={datoCmsNewBlog.title} />
      <HeroCard
        alt={datoCmsNewBlog.coverImage.alt}
        image={datoCmsNewBlog.coverImage.gatsbyImageData}
      >
        <article
          className="mx-auto prose sm:prose-lg md:prose-xl lg:prose-2xl"
          dangerouslySetInnerHTML={{
            __html: datoCmsNewBlog.contentNode.childMarkdownRemark.html,
          }}
        />
        <SuggestionBar prev={prev} next={next} />
      </HeroCard>
    </Layout>
  );
};

NewPost.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  pageContext: PropTypes.instanceOf(Object).isRequired,
};

export default NewPost;

export const newPostQuery = graphql`
  query newSinglePost($slug: String!) {
    datoCmsNewBlog(slug: { eq: $slug }) {
      id
      slug
      title
      date
      content
      excerpt
      coverImage {
        url
        alt
        gatsbyImageData(layout: CONSTRAINED, width: 1536)
      }
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
