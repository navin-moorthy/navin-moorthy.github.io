import React from "react";
import { Link } from "gatsby";

const Blog = () => {
  return (
    <>
      <div style={{ color: `teal` }}>
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
      </div>
      <Link to="/">Home</Link>
    </>
  );
};

export default Blog;
