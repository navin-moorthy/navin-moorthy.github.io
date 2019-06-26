import React from "react";
import tw from "tailwind.macro";

const Footer = tw.footer`text-center text-xs md:text-sm`;

const BlogFooter = () => (
  <Footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </Footer>
);

export default BlogFooter;
