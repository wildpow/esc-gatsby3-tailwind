import React, { useState } from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostThumbnail from "../components/Blog/BlogThumbnail";

const Blog = ({ data }) => {
  const [hover, setHover] = useState({});
  const [numPosts, setNumPosts] = useState(6);
  const posts = data.allDatoCmsNewBlog.nodes.slice(0, numPosts);
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <section>
        <header>
          Thank you for checking out our sleep blog. Below are some mattress and
          sleep-related posts to help you research your better night’s sleep;
          all brought to you from our team of local sleep experts with over
          twenty years of mattress industry experience.
        </header>
        <div>
          {posts.map((post, index) => (
            <PostThumbnail
              onMouseEnter={() => setHover({ ...hover, [index]: true })}
              onMouseLeave={() => setHover({ ...hover, [index]: false })}
              isHovering={hover[index]}
              key={post.id}
              post={post}
            />
          ))}
        </div>
        {numPosts < data.allDatoCmsNewBlog.nodes.length && (
          <button type="button" onClick={() => setNumPosts(numPosts + 4)}>
            Show More Posts
          </button>
        )}
      </section>
    </Layout>
  );
};

export default Blog;

Blog.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const blogList = graphql`
  query blogList {
    datoCmsSeo(name: { eq: "blog" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsNewBlog(sort: { fields: date, order: DESC }) {
      nodes {
        id
        slug
        title
        date
        excerpt
        content

        excerptImage {
          alt
          url
        }
      }
    }
  }
`;
