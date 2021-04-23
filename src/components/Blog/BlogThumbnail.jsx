import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

const PostThumbnail = ({ post, isHovering, onMouseEnter, onMouseLeave }) => (
  <Link
    to={`/blog/${post.slug}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onTouchStart={onMouseEnter}
    onTouchEnd={onMouseLeave}
  >
    <img
      src={post.excerptImage.url}
      alt={
        post.excerptImage.alt === null
          ? `The blog post called ${post.title}`
          : post.excerptImage.alt
      }
      isHovering={isHovering}
    />
    <h3>{post.title}</h3>
    <span />
    <p isHovering={isHovering}>{post.excerpt}</p>
  </Link>
);

PostThumbnail.defaultProps = {
  isHovering: false,
};
PostThumbnail.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isHovering: PropTypes.bool,
  post: PropTypes.instanceOf(Object).isRequired,
};
export default PostThumbnail;
